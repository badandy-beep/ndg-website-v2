/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Access — Noetic Dharma Group",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout removes the standard Nav and Footer
  // The children pages handle their own navigation
  return <>{children}</>;
}
