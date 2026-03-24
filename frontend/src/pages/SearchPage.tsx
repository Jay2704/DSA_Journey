import { FileCode2, Layers, Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HighlightText } from "@/components/search/HighlightText";
import { formatTopicSlugLabel } from "@/lib/format";
import { TopicIcon } from "@/components/topic/TopicIcon";
import { topics } from "@/data/dsaData";
import { filePath, topicPath } from "@/lib/routes";
import { searchFiles, searchTopics } from "@/lib/search";
import { getTopicTheme } from "@/lib/topicThemes";
import { cn } from "@/lib/utils";

export function SearchPage() {
  const [query, setQuery] = useState("");

  const topicHits = useMemo(() => searchTopics(topics, query), [query]);
  const fileHits = useMemo(() => searchFiles(topics, query), [query]);

  const empty = query.trim().length > 0 && topicHits.length === 0 && fileHits.length === 0;

  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 sm:pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-[#0a1628]">Search</h1>
      <p className="mt-2 text-slate-600">Find topics and files by name, tag, concept, or language.</p>

      <label className="relative mt-8 block">
        <span className="sr-only">Search</span>
        <SearchIcon
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          strokeWidth={2}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try arrays, bfs, python, recursion…"
          className="w-full rounded-2xl border border-slate-200/85 bg-white py-3.5 pl-12 pr-4 text-sm shadow-sm outline-none transition-all duration-300 focus:border-slate-400 focus:ring-4 focus:ring-slate-300/30"
          autoFocus
        />
      </label>

      {empty ? (
        <div className="mt-12 rounded-2xl border border-dashed border-slate-200/90 bg-slate-50/60 px-6 py-14 text-center">
          <p className="font-medium text-slate-700">No matches</p>
          <p className="mt-2 text-sm text-slate-500">Try a shorter term or a different keyword.</p>
        </div>
      ) : null}

      {query.trim().length === 0 ? (
        <p className="mt-10 text-center text-sm text-slate-500">Start typing to filter topics and files.</p>
      ) : null}

      {topicHits.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            <Layers className="h-4 w-4 text-slate-600" strokeWidth={2} />
            Topics
          </h2>
          <ul className="space-y-2">
            {topicHits.map((t) => {
              const theme = getTopicTheme(t.slug);
              return (
                <li key={t.slug}>
                  <Link
                    to={topicPath(t.slug)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border-2 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md",
                      theme.border,
                      theme.light,
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm",
                        theme.accent,
                      )}
                    >
                      <TopicIcon icon={t.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className={cn("font-semibold", theme.text)}>
                        <HighlightText text={t.title} query={query} />
                      </p>
                      <p className="text-xs font-medium text-slate-400">{formatTopicSlugLabel(t.slug)}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                        <HighlightText text={t.description} query={query} />
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {fileHits.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            <FileCode2 className="h-4 w-4 text-slate-600" strokeWidth={2} />
            Files
          </h2>
          <ul className="space-y-2">
            {fileHits.map(({ topic, file }) => {
              const theme = getTopicTheme(topic.slug);
              return (
                <li key={file.id}>
                  <Link
                    to={filePath(topic.slug, file.slug)}
                    className={cn(
                      "flex flex-col gap-1 rounded-xl border-2 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between",
                      theme.border,
                      theme.light,
                    )}
                  >
                    <div className="min-w-0">
                      <p className={cn("font-mono text-sm font-semibold", theme.text)}>
                        <HighlightText text={file.name} query={query} />
                      </p>
                      <p className="text-xs text-slate-500">
                        {topic.title} · {file.language}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                        <HighlightText text={file.shortDescription} query={query} />
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
