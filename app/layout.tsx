import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JAVIN Hotels Limited | Port Harcourt",
    template: "%s | JAVIN Hotels Limited",
  },
  description:
    "Discover JAVIN Hotels Limited in Rumuepirikom, Port Harcourt—comfortable stays, thoughtful hospitality and direct reservations.",
  keywords: ["JAVIN Hotels", "hotel in Port Harcourt", "Rumuepirikom hotel", "Port Harcourt accommodation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-background text-on-background font-body-md selection:bg-primary-fixed-dim`}
      >
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
