/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "The Way — Noetic Dharma Group",
  description: "Selective engagement built on alignment, discretion, and legacy.",
};

const selectivityStatements = [
  "Engagement is by introduction only.",
  "We do not seek. We are sought—and we choose.",
  "Access is extended, not requested.",
  "Our participation is a considered decision, not a transaction.",
  "Discretion is not a policy. It is our nature.",
  "Patience is our edge. Selectivity is our discipline.",
];

const absences = [
  "No team page",
  "No deal tombstones",
  "No testimonials",
  "No publicity",
];

export default function TheWay() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Position */}
      <Section narrow>
        <h1 className="font-canela text-h1 font-medium mb-8 text-balance">
          We operate from a position of choice.
        </h1>
        <p className="text-body text-ndg-subtle leading-relaxed">
          Alignment precedes opportunity. Discernment precedes action. We value 
          discretion over visibility and legacy over transaction.
        </p>
      </Section>

      {/* Selectivity */}
      <Section narrow className="border-t border-ndg-hairline">
        <ul className="space-y-4">
          {selectivityStatements.map((statement, index) => (
            <li 
              key={index}
              className="text-body text-ndg-subtle"
            >
              {statement}
            </li>
          ))}
        </ul>
      </Section>

      {/* What is Absent */}
      <Section narrow className="border-t border-ndg-hairline">
        <h2 className="font-canela text-h2 font-medium mb-8">
          What is intentionally absent
        </h2>
        <ul className="space-y-3 mb-8">
          {absences.map((absence, index) => (
            <li 
              key={index}
              className="text-body text-ndg-muted"
            >
              {absence}
            </li>
          ))}
        </ul>
        <p className="text-body text-ndg-bone italic">
          The absence speaks louder than presence.
        </p>
      </Section>
    </div>
  );
}
