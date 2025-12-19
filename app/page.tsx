/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const signals = [
  "A Fourth Turning reshaping institutions and capital",
  "Artificial intelligence accelerating opportunity and risk",
  "Socratic inquiry as a discipline for truth amid noise",
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Quiet Signals - Below the fold */}
      <Section className="border-t border-ndg-hairline">
        <div className="max-w-prose mx-auto">
          <ul className="space-y-6">
            {signals.map((signal, index) => (
              <li 
                key={index}
                className="text-body text-ndg-subtle text-center lg:text-left"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
