import { formatTopicSlugLabel } from "@/lib/format";
import type { DsaFile, Topic } from "@/types/dsa";

function normalizeTerms(q: string): string[] {
  return q
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function topicHaystack(t: Topic): string {
  const slugPretty = formatTopicSlugLabel(t.slug);
  return [t.title, t.slug, slugPretty, t.description, ...t.tags].join(" ").toLowerCase();
}

function fileHaystack(topic: Topic, f: DsaFile): string {
  const slugPretty = formatTopicSlugLabel(topic.slug);
  const diff = f.difficulty ?? "";
  return [
    f.name,
    f.slug,
    f.shortDescription,
    f.language,
    f.status,
    diff,
    topic.title,
    topic.slug,
    slugPretty,
    ...f.tags,
    ...f.concepts,
  ]
    .join(" ")
    .toLowerCase();
}

function matches(haystack: string, terms: string[]): boolean {
  if (terms.length === 0) return true;
  return terms.every((t) => haystack.includes(t));
}

export function searchTopics(topics: Topic[], query: string): Topic[] {
  const terms = normalizeTerms(query);
  if (terms.length === 0) return topics;
  return topics.filter((t) => matches(topicHaystack(t), terms));
}

export function searchFiles(topics: Topic[], query: string): { topic: Topic; file: DsaFile }[] {
  const terms = normalizeTerms(query);
  const out: { topic: Topic; file: DsaFile }[] = [];
  for (const topic of topics) {
    for (const file of topic.files) {
      if (matches(fileHaystack(topic, file), terms)) {
        out.push({ topic, file });
      }
    }
  }
  return out;
}
