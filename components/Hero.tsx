/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const phrases = [
  "The Examined Opportunity",
  "Wisdom for an Unstable Age",
  "Discernment Is Our Discipline",
  "Architects of What Follows",
  "Truth Through Inquiry",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 700); // Fade transition duration
    }, 7000); // 7 seconds per phrase

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="relative min-h-[100vh] pt-[88px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ndg-hero-socrates-cosmic.png"
          alt="Socrates sculpture with cosmic halo motif"
          fill
          priority
          className="object-cover object-top"
          style={{ objectFit: "cover", objectPosition: "50% 10%" }}
          sizes="100vw"
        />
        {/* Overlay - stronger on mobile */}
        <div className="absolute inset-0 bg-ndg-black/75 lg:bg-ndg-black/75 md:bg-ndg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Rotating Headline */}
        <h1
          className={`font-canela text-hero font-medium mb-8 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          // First phrase in DOM for SEO
          aria-label={phrases[0]}
        >
          {phrases[currentIndex]}
        </h1>

        {/* Static Subline */}
        <p className="text-body text-ndg-subtle max-w-prose mx-auto text-balance">
          Noetic Dharma Group operates at the intersection of capital,
          technology, and disciplined wisdom during periods of civilizational
          transition.
        </p>
      </div>

      {/* Scroll Indicator (subtle) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-ndg-bone to-transparent" />
      </div>
    </section>
  );
}
