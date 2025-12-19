/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Engagement — Noetic Dharma Group",
  description: "Engagement is by introduction; inquiries are received.",
};

export default function Engagement() {
  return (
    <div className="pt-20 lg:pt-24">
      <Section narrow>
        <h1 className="font-canela text-h1 font-medium mb-8">
          Engagement
        </h1>
        
        <p className="text-body text-ndg-subtle leading-relaxed mb-8">
          Noetic Dharma Group works with a limited number of principals, 
          institutions, and enterprises aligned with our values and positioned 
          for the emerging era.
        </p>

        <p className="text-body text-ndg-subtle leading-relaxed mb-8">
          Engagement is by introduction only.
        </p>

        <p className="text-body text-ndg-subtle leading-relaxed">
          If you have been referred, your introducer will provide the appropriate channel.
        </p>
      </Section>
    </div>
  );
}
