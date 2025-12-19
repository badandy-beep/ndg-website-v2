/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}

export default function Section({ 
  children, 
  className = "", 
  id,
  narrow = false 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`section-padding ${className}`}
    >
      <div className={`mx-auto px-6 lg:px-8 ${narrow ? 'max-w-prose' : 'max-w-content'}`}>
        {children}
      </div>
    </section>
  );
}
