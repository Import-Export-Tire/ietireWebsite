import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Import Export Tire',
    short_name: 'IE Tire',
    description: "Western PA's trusted wholesale tire distributor since 1972.",
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
