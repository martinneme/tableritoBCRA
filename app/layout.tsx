import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tablerito BCRA",
  description: "Tablero de variables del BCRA",
  openGraph: {
    type: "website",
    url: "https://tablerito-bcra.vercel.app/",
    title: "Tablerito BCRA",
    description: "Tablero de variables BCRA",
    images: [
      {
        url: "../public/iconWeb.png", // Ruta relativa desde la carpeta /public
        width: 1200,
        height: 630,
        alt: "Tablerito BCRA"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tablerito BCRA",
    description: "Tablero de variables BCRA",
    images: ["../public/iconWeb.png"],
  },
};

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
