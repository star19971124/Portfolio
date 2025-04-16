import './global.css';
import {Analytics} from "@vercel/analytics/react"


export default function RootLayout({children, params}) {
    return (
        <html lang={params.locale}>
        <head>
            <link rel="icon" href="/logo_short.svg"/>
        </head>
        <body className="antialiased"><Analytics>{children}</Analytics></body>
        </html>
    );
}