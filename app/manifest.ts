import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Reverb.ro — Arhitectură Digitală & Sisteme Web',
    short_name: 'Reverb.ro',
    description: 'Agenția Reverb Digital: arhitectură web, magazine online, branding și ecosisteme AI.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#06090F',
    theme_color: '#06090F',
    icons: [
      {
        src: '/icon-192.png?v=2',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png?v=2',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
