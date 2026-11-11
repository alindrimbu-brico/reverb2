import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { GITHUB_SHOWCASE_PATHS } from './lib/githubShowcases';
import {
  STUDIO_COOKIE_NAME,
  STUDIO_SECURITY_HEADERS,
  verifyStudioSessionToken,
} from './lib/studioAuth';

export const config = {
  matcher: [
    '/api/studio/:path*',
    '/api/studio',
    /*
     * Match all request paths except for the ones starting with:
     * - api (other API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Bariera #1 Edge pentru /api/studio (cu excepția endpointului de autentificare /api/studio/auth)
  if (url.pathname === '/api/studio' || url.pathname.startsWith('/api/studio/')) {
    if (url.pathname === '/api/studio/auth' || url.pathname.startsWith('/api/studio/auth/')) {
      const authRes = NextResponse.next();
      Object.entries(STUDIO_SECURITY_HEADERS).forEach(([k, v]) => authRes.headers.set(k, v));
      return authRes;
    }

    const sessionCookie = request.cookies.get(STUDIO_COOKIE_NAME)?.value;
    const valid = await verifyStudioSessionToken(sessionCookie);
    if (!valid) {
      return NextResponse.json(
        { success: false, error: 'Neautentificat. Te rugăm să te autentifici în Reverb Studio.' },
        { status: 401, headers: STUDIO_SECURITY_HEADERS }
      );
    }

    const studioApiRes = NextResponse.next();
    Object.entries(STUDIO_SECURITY_HEADERS).forEach(([k, v]) => studioApiRes.headers.set(k, v));
    return studioApiRes;
  }
  
  // Get host from headers
  const hostname = request.headers.get('host') || '';

  // Intercept the request if the visitor is accessing via surya.ro
  if (hostname === 'surya.ro' || hostname === 'www.surya.ro') {
    // If they hit the root, silently serve the standalone html
    if (url.pathname === '/') {
      url.pathname = '/surya/index.html';
      return NextResponse.rewrite(url);
    }
    
    // For local assets (e.g. /styles.css loading from the index.html)
    // they arrive as relative paths matching root, so we map them to /surya/
    if (!url.pathname.startsWith('/surya')) {
      url.pathname = `/surya${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Intercept the request if the visitor is accessing via oglinda.eu
  if (hostname === 'oglinda.eu' || hostname === 'www.oglinda.eu') {
    // If they hit the root, silently serve the standalone html
    if (url.pathname === '/') {
      url.pathname = '/aura/index.html';
      return NextResponse.rewrite(url);
    }
    
    // For local assets (e.g. /aura.css loading from the index.html) or node HTMLs
    // they arrive as relative paths matching root, so we map them to /aura/
    // „/aura/” cu slash: fișierele aura.css și aura.js încep și ele cu „/aura”.
    if (!url.pathname.startsWith('/aura/')) {
      url.pathname = `/aura${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // skipTrailingSlashRedirect e activ (pentru showcase-urile din GitHub), deci
  // gestionăm aici slash-ul final. nextUrl îl normalizează, așa că citim URL-ul brut.
  const rawPath = new URL(request.url).pathname;
  const showcase = GITHUB_SHOWCASE_PATHS.find(
    (p) => rawPath === `/${p}` || rawPath.startsWith(`/${p}/`)
  );
  if (showcase && !rawPath.endsWith('/') && !/\.[a-z0-9]+$/i.test(rawPath)) {
    // Folderele din GitHub Pages au nevoie de slash final (altfel GitHub face 301
    // spre github.io, iar resursele relative nu se mai rezolvă).
    return NextResponse.redirect(new URL(`${rawPath}/${url.search}`, request.url), 308);
  }
  if (!showcase && rawPath.length > 1 && rawPath.endsWith('/')) {
    // Redirect-ul standard Next.js "/pagina/" -> "/pagina" pentru restul site-ului.
    return NextResponse.redirect(new URL(rawPath.replace(/\/+$/, '') + url.search, request.url), 308);
  }

  // Normal request to reverb.ro proceeds unchanged (cu X-Robots-Tag noindex pe /studio și /instaleaza)
  const response = NextResponse.next();
  // Copiile de pe *.vercel.app (reverb-one, reverb2, previzualizări) nu trebuie indexate: doar reverb.ro.
  if (hostname.endsWith('.vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  if (
    url.pathname === '/studio' ||
    url.pathname.startsWith('/studio/') ||
    url.pathname === '/instaleaza' ||
    url.pathname.startsWith('/instaleaza/')
  ) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    response.headers.set('Cache-Control', 'no-store, private, must-revalidate');
  }
  return response;
}
