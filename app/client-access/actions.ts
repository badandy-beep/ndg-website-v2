/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
"use server";

import { redirect } from "next/navigation";
import { validateAccessCode } from "@/lib/access-map";

export async function handleAccess(formData: FormData) {
  const code = formData.get("code") as string;
  
  if (!code) {
    return { error: "Access not recognized." };
  }

  const project = validateAccessCode(code);
  
  if (!project) {
    return { error: "Access not recognized." };
  }

  redirect(`/client-access/${project.slug}`);
}
