import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import "./homepage-annotations.css";
import "./content-pages.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const metadataBase = host
    ? new URL(`${protocol}://${host}`)
    : new URL("http://localhost:3000");

  return {
    title: "Stela - Verifiable Physical Identity",
    description:
      "Stela creates verifiable physical identity for high-value assets through permanent marking, signed evidence events, and digital certificates.",
    metadataBase,
    openGraph: {
      title: "Stela - Permanent marks. Verified records. Trusted assets.",
      description:
        "Physical-digital trust infrastructure for assets that need identity to remain verifiable across time.",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Stela social preview with permanent marks, verified records, and trusted assets.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Stela - Permanent marks. Verified records. Trusted assets.",
      description:
        "Physical-digital trust infrastructure for assets that need identity to remain verifiable across time.",
      images: ["/og.png"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
