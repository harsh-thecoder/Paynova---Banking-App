import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayNova",
  description: "Seamless banking with smart offline and online transactions.",
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&family=IBM+Plex+Serif:wght@400;700&family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter"> {/* Apply your font through Tailwind CSS class */}
        {children}
      </body>
    </html>
  );
}
