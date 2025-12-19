/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "The Method — Noetic Dharma Group",
  description: "Disciplined inquiry as a method for clarity under complexity.",
};

const practices = [
  "Question assumptions",
  "Expose contradictions",
  "Reach first principles",
  "Act with clarity",
];

export default function TheMethod() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Continuity Section */}
      <Section narrow>
        <h1 className="font-canela text-h1 font-medium mb-8 text-balance">
          We do not claim novelty. We claim continuity.
        </h1>
        <p className="text-body text-ndg-subtle leading-relaxed">
          Noetic Dharma Group stands within a philosophical lineage stretching 
          back more than two millennia, applying ancient methods of disciplined 
          inquiry to modern problems of capital, technology, and leadership.
        </p>
      </Section>

      {/* Socratic Method Section - Two Column */}
      <Section className="border-t border-ndg-hairline">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - First on mobile */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/ndg-method-socrates-contemplative.png"
                alt="Socrates contemplating with cosmic starfield"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, 40vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-1">
            <h2 className="font-canela text-h2 font-medium mb-6">
              The Socratic Method
            </h2>
            <p className="text-body text-ndg-subtle mb-8 leading-relaxed">
              At the core of our work is the Socratic method: rigorous, honest 
              questioning that reveals hidden assumptions, exposes contradictions, 
              and returns decisions to first principles.
            </p>

            {/* Practices */}
            <ul className="space-y-3">
              {practices.map((practice, index) => (
                <li 
                  key={index}
                  className="text-body text-ndg-bone"
                >
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
