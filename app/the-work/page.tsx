/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import Section from "@/components/Section";
import ThreeColumnList from "@/components/ThreeColumnList";

export const metadata: Metadata = {
  title: "The Work — Noetic Dharma Group",
  description: "Capital, technology, and strategy delivered with discretion.",
};

const columns = [
  {
    title: "Capital",
    items: [
      "Private equity and strategic investments",
      "Merchant banking and transaction advisory",
      "Restructuring and special situations",
      "Select generational thematic funds",
    ],
  },
  {
    title: "Technology",
    items: [
      "Artificial intelligence systems",
      "Technology commercialization",
      "Automation and agentic systems",
      "Intelligence infrastructure",
    ],
  },
  {
    title: "Strategy",
    items: [
      "Crisis navigation",
      "Governance and alignment",
      "Institutional strategy under discontinuous change",
      "Disciplined execution",
    ],
  },
];

export default function TheWork() {
  return (
    <div className="pt-20 lg:pt-24">
      <Section>
        <h1 className="font-canela text-h1 font-medium mb-16">
          What We Do
        </h1>
        <ThreeColumnList columns={columns} />
      </Section>
    </div>
  );
}
