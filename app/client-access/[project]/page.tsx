/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, ACCESS_MAP } from "@/lib/access-map";

interface Props {
  params: { project: string };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return Object.values(ACCESS_MAP).map((project) => ({
    project: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.project);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ndg-black">
      {/* Header */}
      <header className="border-b border-ndg-hairline py-6">
        <div className="max-w-content mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Client Logo Placeholder */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-ndg-hairline flex items-center justify-center text-xs text-ndg-muted">
              LOGO
            </div>
            <span className="font-canela text-lg font-medium">
              {project.displayName}
            </span>
          </div>

          {/* NDG Mark */}
          <span className="text-sm text-ndg-muted font-canela">
            NDG
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          {/* Opening Statement */}
          <div className="mb-16">
            <h1 className="font-canela text-h1 font-medium mb-4">
              Strategic Materials
            </h1>
            <p className="text-body text-ndg-muted">
              Prepared for authorized principals.
            </p>
          </div>

          {/* Materials Section */}
          {project.modules.length > 0 ? (
            <section className="mb-16">
              <div className="grid gap-4">
                {project.modules.map((module, index) => (
                  <a
                    key={index}
                    href={module.url}
                    className={`flex items-center justify-between p-4 border border-ndg-hairline hover:border-ndg-muted transition-colors duration-300 ${
                      module.url === "#" ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    <span className="text-body text-ndg-bone">
                      {module.title}
                    </span>
                    <span className="text-small text-ndg-muted uppercase">
                      {module.type}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ) : (
            <section className="mb-16 p-8 border border-ndg-hairline text-center">
              <p className="text-body text-ndg-muted">
                Materials pending. Check back soon.
              </p>
            </section>
          )}

          {/* Execution Doctrine */}
          <section className="border-t border-ndg-hairline pt-16">
            <h2 className="font-canela text-h2 font-medium mb-6">
              Execution Doctrine
            </h2>
            <p className="text-body text-ndg-subtle max-w-prose leading-relaxed">
              Once alignment is achieved through rigorous inquiry, execution is 
              decisive. We move with speed, precision, and force of intent—compressing 
              time, removing friction, and acting before advantage dissipates.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ndg-hairline py-8">
        <div className="max-w-content mx-auto px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-xs text-ndg-muted">
            Authorized use only.
          </p>
          <span className="font-canela text-sm text-ndg-muted">
            Noetic Dharma Group™
          </span>
        </div>
      </footer>
    </div>
  );
}
