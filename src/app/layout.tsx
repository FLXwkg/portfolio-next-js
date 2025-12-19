import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ewen Héas - Fullstack Developer",
  description: "Professional portfolio of Ewen Héas, fullstack developer with 5 years of experience. Master 2 student specializing in modern web technologies.",
  keywords: "fullstack developer, Next.js, React, TypeScript, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fcf7fc] text-[#2d2d2d]`}
      >
        {children}
      </body>
    </html>
  );
}
