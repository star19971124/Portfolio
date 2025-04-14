import "./global.css";

export const metadata = {
  title: "Tvoosai",
  description: "Tvoosai portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/logo_short.svg"/>
            <link rel="apple-touch-icon" href="/logo_short.svg"/>
        </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
