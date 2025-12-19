/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import { canela, inter } from "./fonts";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Noetic Dharma Group — Wisdom for an Unstable Age",
  description: "Operating at the intersection of capital, technology, and disciplined wisdom during periods of civilizational transition.",
  openGraph: {
    title: "Noetic Dharma Group — Wisdom for an Unstable Age",
    description: "Operating at the intersection of capital, technology, and disciplined wisdom during periods of civilizational transition.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${canela.variable} ${inter.variable}`}>
      <body className="bg-ndg-black text-ndg-bone min-h-screen">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
