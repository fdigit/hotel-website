import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import { hotelImages, site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const siteUrl = "https://javinhotels.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JAVIN Hotels Limited | Port Harcourt",
    template: "%s | JAVIN Hotels Limited",
  },
  description:
    "Discover JAVIN Hotels Limited in Rumuepirikom, Port Harcourt—comfortable stays, thoughtful hospitality and direct reservations.",
  keywords: ["JAVIN Hotels", "hotel in Port Harcourt", "Rumuepirikom hotel", "Port Harcourt accommodation"],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: site.name,
    title: "JAVIN Hotels Limited | Port Harcourt",
    description:
      "A warm, polished stay in the heart of Port Harcourt—designed for guests who value comfort, calm and thoughtful hospitality.",
    images: [{ url: hotelImages.deluxe, width: 1200, height: 800, alt: "JAVIN Hotels Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAVIN Hotels Limited | Port Harcourt",
    description:
      "A warm, polished stay in the heart of Port Harcourt—designed for guests who value comfort, calm and thoughtful hospitality.",
    images: [hotelImages.deluxe],
  },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.name,
  image: hotelImages.deluxe,
  url: siteUrl,
  telephone: site.phones[0]?.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-background text-on-background font-body-md selection:bg-primary-fixed-dim`}
      >
        <ViewTransition>{children}</ViewTransition>
        <FloatingContact />
      </body>
    </html>
  );
}
