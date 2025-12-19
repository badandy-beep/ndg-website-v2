/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleAccess } from "./actions";
import Link from "next/link";

export default function ClientAccess() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    
    const result = await handleAccess(formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
    // If successful, the server action will redirect
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="font-canela text-h1 font-medium mb-4">
          Client Access
        </h1>
        
        <p className="text-body text-ndg-muted mb-8">
          Enter access code.
        </p>

        <form action={onSubmit} className="space-y-4">
          <input
            type="text"
            name="code"
            placeholder="Access code"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="characters"
            spellCheck="false"
            className="w-full px-4 py-3 bg-transparent border border-ndg-hairline text-ndg-bone text-center text-body placeholder:text-ndg-muted focus:outline-none focus:border-ndg-muted transition-colors duration-300 min-h-[44px]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-ndg-bone text-ndg-black text-body font-medium hover:bg-ndg-subtle transition-colors duration-300 disabled:opacity-50 min-h-[44px]"
          >
            {loading ? "..." : "Enter"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-small text-ndg-muted">
            {error}
          </p>
        )}

        <p className="mt-12 text-xs text-ndg-muted">
          Authorized use only.
        </p>

        <Link 
          href="/"
          className="mt-8 inline-block text-xs text-ndg-muted hover:text-ndg-subtle transition-colors duration-300"
        >
          Return to NDG
        </Link>
      </div>
    </div>
  );
}
