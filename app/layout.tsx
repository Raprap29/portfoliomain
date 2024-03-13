import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portfolio | Ralph Maglaya",
  description: "I am Ralph Maglaya,  this is my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <body style={{scrollBehavior:'smooth', backgroundColor: "#000", color: "#fff"}} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
