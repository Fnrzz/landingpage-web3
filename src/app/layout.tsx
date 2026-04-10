import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A KIDS | The New Digital Tribe",

  description:
    "Reality has evolved beyond the physical. A core expression of who you are. Join the new digital tribes with A KIDS and ED BEAST.",

  keywords: [
    "Web3",
    "NFT",
    "A KIDS",
    "ED BEAST",
    "Digital Tribe",
    "Crypto Art",
    "OpenSea",
    "Ethereum",
  ],

  openGraph: {
    title: "A KIDS | The New Digital Tribe",
    description:
      "Reality has evolved beyond the physical. Join the new digital tribes with A KIDS and ED BEAST.",
    url: "https://domain-website-anda.com",
    siteName: "A KIDS Web3",
    images: [
      {
        url: "/assets/char3.avif",
        width: 1200,
        height: 630,
        alt: "A KIDS Character",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-[#2a282b] overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
