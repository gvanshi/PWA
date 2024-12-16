export const metadata = {
  title: "PWA Example",
  description: "Progressive Web App with Next.js",
  themeColor: "#0070f3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <head>
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#0070f3" />
              <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          </head>
          <body>{children}</body>
      </html>
  );
}
