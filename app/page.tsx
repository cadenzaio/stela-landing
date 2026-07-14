import type { Metadata } from "next";
import { StelaLanding } from "@/components/landing/StelaLanding";
import { languageAlternates } from "@/lib/i18n/config";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: languageAlternates() },
};

export default function Home() {
  return <StelaLanding />;
}
