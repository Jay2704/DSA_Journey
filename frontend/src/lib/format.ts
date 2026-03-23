/**
 * Display labels derived from URL slugs (e.g. `binary-trees` → "Binary Trees").
 */
export function formatTopicSlugLabel(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
