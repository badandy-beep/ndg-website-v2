/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "The Moment — Noetic Dharma Group",
  description: "A Fourth Turning environment reshaping institutions, capital, and decision-making.",
};

export default function TheMoment() {
  return (
    <div className="pt-20 lg:pt-24">
      <Section narrow>
        {/* Headline */}
        <h1 className="font-canela text-h1 font-medium mb-8 text-balance">
          History is seasonal. Winter selects.
        </h1>

        {/* Body */}
        <p className="text-body text-ndg-subtle mb-12 leading-relaxed">
          We are living through a Fourth Turning—a generational crisis marked by 
          institutional fracture, economic realignment, and the collapse of inherited 
          assumptions. Artificial intelligence compresses this cycle, accelerating 
          disruption while amplifying the cost of error.
        </p>

        {/* Closing Line */}
        <p className="text-h2 font-canela font-medium text-balance">
          The question is not whether the old order will change, but who will 
          shape what replaces it.
        </p>
      </Section>
    </div>
  );
}
