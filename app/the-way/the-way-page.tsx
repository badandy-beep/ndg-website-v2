/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "The Way — Noetic Dharma Group",
  description: "Selective engagement built on alignment, discretion, and legacy.",
};

export default function TheWay() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Opening */}
      <Section narrow>
        <h1 className="font-canela text-h1 font-medium mb-8 text-balance">
          We operate from a position of choice.
        </h1>
        
        <div className="space-y-6 text-body text-ndg-subtle leading-relaxed">
          <p>
            Our work begins with discernment. Alignment precedes opportunity.
            Understanding precedes action.
          </p>

          <p>
            We apply disciplined inquiry—questioning assumptions, testing coherence,
            and returning decisions to first principles—before committing capital,
            effort, or reputation.
          </p>

          <p>
            We value discretion over visibility, and continuity over transaction.
            What we engage in reflects not only conviction, but responsibility.
          </p>

          <p>
            Engagements arise through trusted relationships.
            Participation is extended deliberately, when purpose and timing align.
            Our involvement is a considered decision, not a commercial exchange.
          </p>

          <p>
            Patience is essential to sound judgment.
            Selectivity is not a constraint—it is the method.
          </p>
        </div>
      </Section>

      {/* Intentionally Absent */}
      <Section narrow className="border-t border-ndg-hairline">
        <h2 className="font-canela text-h2 font-medium mb-8">
          Certain elements are intentionally absent.
        </h2>
        
        <div className="space-y-6 text-body text-ndg-subtle leading-relaxed">
          <p>
            Not as a statement, but as a consequence of how we work.
          </p>

          <p>
            We do not present ourselves through profiles or promotions.
            We do not catalogue past transactions.
            We do not solicit validation through testimonials.
            We do not pursue publicity as a signal of substance.
          </p>

          <p>
            What matters is the quality of judgment,
            the durability of outcomes,
            and the continuity of trust.
          </p>

          <p className="text-ndg-bone">
            The absence is not strategic.
            It is simply consistent.
          </p>
        </div>
      </Section>
    </div>
  );
}
