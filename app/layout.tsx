import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliorap.netlify.app/'),
  title: "Portfolio | Ralph Maglaya",
  description: "I am Ralph Maglaya,  this is my portfolio.",
  openGraph: {
    title: "Portfolio | Ralph Maglaya",
    description: "I am Ralph Maglaya,  this is my portfolio.",
    type: "website",
    url: "https://portfoliorap.netlify.app/",
    siteName: "Portfolio | Ralph Maglaya",
    images: "/imagework/8.png",
  },
  manifest: '/favicons/site.webmanifest',
  icons: [
    {
      rel: 'shortcut',
      url: '/favicons/favicon.ico',
      type: 'image/x-icon',
    },
    {
      url: '/favicons/favicon-16x16.png',
      type: 'image/png',
      sizes: "16x16",
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
      sizes: '180x180',
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{scrollBehavior:'smooth', backgroundColor: "#000", color: "#fff"}} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
