export const routes = {
  home: "/",
  topics: "/topics",
  search: "/search",
  profile: "/profile",
} as const;

export function topicPath(slug: string): string {
  return `/topics/${slug}`;
}

export function filePath(topicSlug: string, fileSlug: string): string {
  return `/topics/${topicSlug}/${fileSlug}`;
}
