/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */

// SERVER-SIDE ONLY - Never expose client-side
export interface ProjectConfig {
  slug: string;
  displayName: string;
  logoPath: string;
  modules: {
    title: string;
    type: "pdf" | "xlsx" | "pptx" | "link";
    url: string;
  }[];
}

export const ACCESS_MAP: Record<string, ProjectConfig> = {
  "MAHA-972028": {
    slug: "project-maha",
    displayName: "Project MAHA",
    logoPath: "/client-logos/project-maha.png",
    modules: [
      { title: "Executive Brief", type: "pdf", url: "#" },
      { title: "Strategic Thesis", type: "pdf", url: "#" },
      { title: "Operating Plan", type: "pdf", url: "#" },
      { title: "Financial Model", type: "xlsx", url: "#" },
      { title: "Projections & Scenarios", type: "pdf", url: "#" },
      { title: "Board Materials", type: "pdf", url: "#" },
    ],
  },
  "USAX-687173": {
    slug: "project-usax",
    displayName: "Project USAX",
    logoPath: "/client-logos/project-usax.png",
    modules: [],
  },
  "WEBUILT-398960": {
    slug: "project-webuilt",
    displayName: "Project WEBUILT",
    logoPath: "/client-logos/project-webuilt.png",
    modules: [],
  },
  "WARROOM-482177": {
    slug: "project-warroom",
    displayName: "Project WARROOM",
    logoPath: "/client-logos/project-warroom.png",
    modules: [],
  },
  "GARY-535231": {
    slug: "project-gary",
    displayName: "Project GARY",
    logoPath: "/client-logos/project-gary.png",
    modules: [],
  },
  "EMBLEM-146236": {
    slug: "project-emblem",
    displayName: "Project EMBLEM",
    logoPath: "/client-logos/project-emblem.png",
    modules: [],
  },
  "NIKOLAELECTRIC-411400": {
    slug: "project-nikolaelectric",
    displayName: "Project NIKOLA ELECTRIC",
    logoPath: "/client-logos/project-nikolaelectric.png",
    modules: [],
  },
};

// Helper to get project by slug
export function getProjectBySlug(slug: string): ProjectConfig | undefined {
  return Object.values(ACCESS_MAP).find((project) => project.slug === slug);
}

// Helper to validate code and get project
export function validateAccessCode(code: string): ProjectConfig | null {
  const normalized = code.trim().toUpperCase();
  return ACCESS_MAP[normalized] || null;
}
