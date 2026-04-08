import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
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
    if (!url.pathname.startsWith('/aura')) {
      url.pathname = `/aura${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Normal request to reverb.ro proceeds unchanged
  return NextResponse.next();
}
