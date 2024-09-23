import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "查理 Repair 當面維修",
  description: "Apple iPhone iPad 維修 - 林口 iPhone 維修",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-slate-900 text-slate-300`}>
      <body>{children}</body>
    </html>
  );
}
