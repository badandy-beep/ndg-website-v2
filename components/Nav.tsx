/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/the-moment", label: "The Moment" },
  { href: "/the-method", label: "The Method" },
  { href: "/the-work", label: "The Work" },
  { href: "/the-way", label: "The Way" },
  { href: "/engagement", label: "Engagement" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Don't show nav on client-access project pages
  if (pathname?.startsWith("/client-access/project-")) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ndg-black/90 backdrop-blur-sm border-b border-ndg-hairline">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-canela text-lg lg:text-xl font-medium tracking-tight"
          >
            Noetic Dharma
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-opacity duration-300 ${
                  pathname === item.href
                    ? "text-ndg-bone"
                    : "text-ndg-muted hover:text-ndg-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/client-access"
              className="text-sm text-ndg-muted hover:text-ndg-bone transition-opacity duration-300 ml-4"
            >
              Client Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-ndg-bone transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ndg-bone transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ndg-bone transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-2 transition-opacity duration-300 ${
                  pathname === item.href
                    ? "text-ndg-bone"
                    : "text-ndg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/client-access"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base py-2 text-ndg-muted border-t border-ndg-hairline pt-4 mt-2"
            >
              Client Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
