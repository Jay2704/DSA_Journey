import type { Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

export function getSharedHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = (async () => {
      const { createHighlighter } = await import("shiki");
      return createHighlighter({
        themes: ["github-dark"],
        langs: ["python", "java"],
      });
    })();
  }
  return highlighterPromise;
}
