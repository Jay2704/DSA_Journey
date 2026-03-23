import type { DsaFile } from "@/types/dsa";

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function humanizeStem(fileName: string): string {
  const base = fileName.replace(/\.[^.]+$/, "");
  return base.replace(/_/g, " ").trim() || base;
}

export function statusLabel(s: DsaFile["status"]): string {
  const map: Record<DsaFile["status"], string> = {
    completed: "Completed",
    "in-progress": "In progress",
    revisit: "Revisit",
    reviewing: "Reviewing",
  };
  return map[s];
}

export function difficultyLabel(d: DsaFile["difficulty"]): string | null {
  if (d === null) return null;
  return d.charAt(0).toUpperCase() + d.slice(1);
}
