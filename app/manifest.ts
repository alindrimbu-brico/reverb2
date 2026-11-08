import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Reverb Digital — Studio & Sisteme AI',
    short_name: 'Reverb Studio',
    description: 'Arhitectură web, magazine online și Studio Video AI automatizat.',
    start_url: '/studio',
    display: 'standalone',
    background_color: '#070809',
    theme_color: '#070809',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
