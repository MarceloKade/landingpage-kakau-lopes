import type { Metadata } from "next";
import { Asap_Condensed, Karantina, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-inter'
});
const asap = Asap_Condensed({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-asap'
});
const karantina = Karantina({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-karantina'
});

export const metadata: Metadata = {
  title: "Kakau Lopes",
  description: "Landing Page sobre produtos de maquiagem da Kakau Lopes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll no-scrollbar">
      <body className={`${asap.variable} ${karantina.variable} ${inter.variable} font-sans bg-slate-900 flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}