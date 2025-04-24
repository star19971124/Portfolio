import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
    const baseUrl = 'https://tvoosai.dev'
    const lastmod = process.env.NEXT_PUBLIC_LASTMOD || '2025-01-01' // Injected at build time

    const routes = [
        { path: '', priority: 1.0 }, // Homepage
    ]

    // Genera XML della sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
        .map(
            ({ path, priority }) => `
  <url>
    <loc>${baseUrl}${path ? `/${path}` : ''}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
        )
        .join('')}
</urlset>`

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}