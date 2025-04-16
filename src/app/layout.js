import './global.css';


export default function RootLayout({children, params}) {
    return (
        <html lang={params.locale}>
        <head>
            <link rel="icon" href="/logo_short.svg"/>
        </head>
        <body className="antialiased">{children}</body>
        </html>
    );
}