/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const canela = localFont({
  src: [
    { path: "../public/fonts/Canela-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Canela-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Canela-Semibold.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-canela",
  display: "swap",
  preload: true,
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
