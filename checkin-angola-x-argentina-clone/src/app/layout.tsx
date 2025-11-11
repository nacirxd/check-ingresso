import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angola x Argentina | Check-in.ao - Eventos em Angola",
  description:
    "O jogo de futebol entre ANGOLA e ARGENTINA no Estádio Nacional 11 de Novembro no dia 14 de Novembro pelas 17h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} ${sofiaSans.variable}`}
    >
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="afterInteractive"
          async
          defer
        />
      </head>
      <body suppressHydrationWarning className="antialiased dark bg-[#1d1e1f] text-white">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
