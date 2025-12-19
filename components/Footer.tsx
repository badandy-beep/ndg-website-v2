/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ndg-hairline py-12 lg:py-16">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Wordmark */}
          <div className="font-canela">
            <span className="text-lg font-medium">Noetic Dharma</span>
            <span className="block text-sm text-ndg-muted tracking-wider mt-0.5">
              GROUP
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-ndg-muted">
            Wisdom for an Unstable Age
          </p>

          {/* Client Access Link */}
          <Link
            href="/client-access"
            className="text-sm text-ndg-muted hover:text-ndg-bone transition-opacity duration-300"
          >
            Client Access
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-ndg-hairline">
          <p className="text-xs text-ndg-muted text-center">
            © {new Date().getFullYear()} Noetic Dharma Group™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
