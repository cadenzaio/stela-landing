import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./homepage-annotations.css";
import "./homepage-prototype.css";
import "./content-pages.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stela - Permanent Asset Identification",
  description:
    "Stela is developing permanent identification for vehicles and solar panels by linking an on-asset identifier to a digital record.",
  metadataBase: new URL("https://stelamark.com"),
  applicationName: "Stela",
  category: "technology",
  openGraph: {
    type: "website",
    siteName: "Stela",
    title: "Stela - Permanent Asset Identification",
    description:
      "A unique identifier placed directly on the asset and connected to a digital record that can be checked later.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Stela permanent asset identification for vehicles and solar panels.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stela - Permanent Asset Identification",
    description:
      "A unique identifier placed directly on the asset and connected to a digital record that can be checked later.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
