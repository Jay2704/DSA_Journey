import {
  ArrowRight,
  ChevronRight,
  Code2,
  FileCode2,
  Home,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TopicIcon } from "@/components/topic/TopicIcon";
import { getTopicBySlug } from "@/data/dsaData";
import { filePath, routes } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import { cn, difficultyLabel, statusLabel } from "@/lib/utils";
import type { DsaFile, FileStatus, Language } from "@/types/dsa";

type SortMode = "name" | "status" | "language";

const STATUS_ORDER: Record<FileStatus, number> = {
  revisit: 0,
  "in-progress": 1,
  reviewing: 2,
  completed: 3,
};

function sortFiles(files: DsaFile[], mode: SortMode): DsaFile[] {
  const copy = [...files];
  if (mode === "name") copy.sort((a, b) => a.name.localeCompare(b.name));
  else if (mode === "status") {
    copy.sort((a, b) => {
      const d = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
      return d !== 0 ? d : a.name.localeCompare(b.name);
    });
  } else {
    copy.sort((a, b) => {
      const d = a.language.localeCompare(b.language);
      return d !== 0 ? d : a.name.localeCompare(b.name);
    });
  }
  return copy;
}

function statusBadgeClass(s: FileStatus): string {
  const map: Record<FileStatus, string> = {
    reviewing: "bg-sky-50 text-sky-800 ring-sky-100",
    completed: "bg-emerald-50 text-emerald-800 ring-emerald-100",
    revisit: "bg-amber-50 text-amber-900 ring-amber-100",
    "in-progress": "bg-violet-50 text-violet-800 ring-violet-100",
  };
  return map[s];
}

const LANGS: Language[] = ["Python", "Java"];
const STATUS_CHIPS: { id: FileStatus; label: string }[] = [
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In progress" },
  { id: "reviewing", label: "Reviewing" },
  { id: "revisit", label: "Revisit" },
];

type MobileTab = "explorer" | "preview";

export function TopicDetailPage() {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const topic = topicSlug ? getTopicBySlug(topicSlug) : undefined;
  const files = useMemo(() => topic?.files ?? [], [topic]);

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortMode>("name");
  const [langPick, setLangPick] = useState<Set<Language>>(new Set());
  const [statusPick, setStatusPick] = useState<Set<FileStatus>>(new Set());
  const [selectedId, setSelectedId] = useState<string>("");
  const [mobileTab, setMobileTab] = useState<MobileTab>("explorer");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return files.filter((f) => {
      if (q) {
        const blob = [
          f.name,
          f.shortDescription,
          f.language,
          statusLabel(f.status),
          difficultyLabel(f.difficulty) ?? "",
          ...f.tags,
          ...f.concepts,
        ]
          .join(" ")
          .toLowerCase();
        if (!blob.includes(q)) return false;
      }
      if (langPick.size > 0 && !langPick.has(f.language)) return false;
      if (statusPick.size > 0 && !statusPick.has(f.status)) return false;
      return true;
    });
  }, [files, query, langPick, statusPick]);

  const displayedFiles = useMemo(() => sortFiles(filtered, sortBy), [filtered, sortBy]);

  useEffect(() => {
    if (displayedFiles.length === 0) return;
    if (!displayedFiles.some((f) => f.id === selectedId)) {
      setSelectedId(displayedFiles[0]!.id);
    }
  }, [displayedFiles, selectedId]);

  const selected = files.find((f) => f.id === selectedId) ?? displayedFiles[0];

  const toggleLang = (lang: Language) => {
    setLangPick((prev) => {
      const next = new Set(prev);
      if (next.has(lang)) next.delete(lang);
      else next.add(lang);
      return next;
    });
  };

  const toggleStatus = (s: FileStatus) => {
    setStatusPick((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  };

  if (!topic) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-[#0a1628]">Topic not found</h1>
        <p className="mt-2 text-sm text-slate-600">This path is not in your explorer.</p>
        <Link to={routes.topics} className="mt-6 inline-block text-sm font-semibold text-slate-700 underline">
          Back to topics
        </Link>
      </div>
    );
  }

  const theme = getTopicTheme(topic.slug);

  if (files.length === 0) {
    return (
      <div className={cn(theme.light, "min-h-full w-full transition-all duration-300")}>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className={cn("rounded-2xl border-2 border-dashed px-6 py-12 text-center", theme.border, "bg-white/80")}>
            <Layers className={cn("mx-auto h-10 w-10", theme.text)} strokeWidth={1.5} />
            <h1 className="mt-4 text-lg font-semibold text-[#0a1628]">No files in this topic</h1>
            <p className="mt-2 text-sm text-slate-600">
              Add entries to <code className="rounded bg-white px-1 font-mono text-xs ring-1 ring-slate-200/80">dsaData.ts</code>{" "}
              and matching sources under <code className="rounded bg-white px-1 font-mono text-xs ring-1 ring-slate-200/80">public/code/</code>.
            </p>
            <Link
              to={routes.topics}
              className={cn(
                "mt-6 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                theme.button,
              )}
            >
              Back to topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const explorerHidden = mobileTab !== "explorer" ? "hidden lg:flex" : "";
  const previewHidden = mobileTab !== "preview" ? "hidden lg:flex" : "";

  return (
    <div className={cn(theme.light, "relative min-h-full w-full transition-all duration-300")}>
      <div className="relative z-[1] mx-auto max-w-6xl min-w-0 px-4 pt-8 sm:px-6 sm:pt-10">
        <nav
          className="mb-8 flex min-w-0 flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 text-sm text-slate-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Breadcrumb"
        >
          <Link to={routes.home} className="inline-flex items-center gap-1 font-medium text-slate-600 hover:opacity-80">
            <Home className="h-4 w-4" strokeWidth={2} />
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
          <Link to={routes.topics} className="font-medium text-slate-600 hover:opacity-80">
            Topics
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
          <span className={cn("shrink-0 font-semibold", theme.text)}>{topic.title}</span>
        </nav>

        <header
          className={cn(
            "relative mb-8 overflow-hidden rounded-[1.65rem] border-2 bg-white/90 p-6 shadow-sm sm:p-8",
            theme.border,
          )}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white", theme.accent)}>
              <TopicIcon icon={topic.icon} className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div className={cn("min-w-0 flex-1 border-l-4 pl-4", theme.border)}>
              <h1 className={cn("text-2xl font-bold tracking-tight sm:text-3xl", theme.text)}>{topic.title}</h1>
              <p className="mt-2 max-w-3xl text-slate-600">{topic.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold", theme.chip)}>
                  <Layers className="h-3.5 w-3.5" strokeWidth={2} />
                  {files.length} files
                </span>
                {Array.from(new Set(files.map((f) => f.language))).map((lang) => (
                  <span key={lang} className={cn("rounded-full px-3 py-1 text-xs font-semibold", theme.chip)}>
                    {lang}
                  </span>
                ))}
                {topic.tags.map((tag) => (
                  <span key={tag} className={cn("rounded-full px-3 py-1 text-xs font-medium", theme.chip)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className={cn("relative rounded-[1.35rem] border-2 p-3 sm:p-4", theme.border, "bg-white/70")}>
          <div className="mb-3 flex flex-col gap-2 px-1 sm:flex-row sm:items-center">
            <div className="flex min-w-0 items-center gap-2.5">
              <Layers className={cn("h-4 w-4 shrink-0", theme.text)} strokeWidth={2} />
              <h2 className="text-sm font-semibold text-[#0a1628]">Topic explorer</h2>
            </div>
            <span className="font-mono text-[11px] text-slate-500 sm:ml-auto">
              {displayedFiles.length} / {files.length} files
            </span>
          </div>

          <div
            className={cn("mb-3 flex rounded-xl border-2 bg-white p-1 shadow-sm transition-all duration-300 lg:hidden", theme.border)}
            role="tablist"
            aria-label="Explorer or preview"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mobileTab === "explorer"}
              onClick={() => setMobileTab("explorer")}
              className={cn(
                "flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-300",
                mobileTab === "explorer" ? cn(theme.accent, "text-white shadow-sm") : "text-slate-600 hover:bg-slate-50",
              )}
            >
              Files & filters
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileTab === "preview"}
              onClick={() => setMobileTab("preview")}
              className={cn(
                "flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-300",
                mobileTab === "preview" ? cn(theme.accent, "text-white shadow-sm") : "text-slate-600 hover:bg-slate-50",
              )}
            >
              Preview
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:items-stretch">
            <div
              className={cn(
                "flex min-h-[min(18rem,45vh)] flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-sm lg:col-span-5 lg:min-h-[28rem]",
                theme.border,
                explorerHidden,
              )}
            >
              <div className="space-y-3 border-b border-slate-200/80 p-4 sm:p-5">
                <label className="relative block">
                  <span className="sr-only">Search files in this topic</span>
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    strokeWidth={2}
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Filter by name, tag, concept…"
                    className={cn(
                      "w-full rounded-xl border-2 bg-slate-50/90 py-2.5 pl-10 pr-3 text-sm outline-none transition-all duration-300",
                      theme.border,
                      "focus:bg-white focus:ring-2 focus:ring-slate-300/80 focus:ring-offset-0",
                    )}
                  />
                </label>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Sort</p>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        { id: "name" as const, label: "A–Z" },
                        { id: "status" as const, label: "Status" },
                        { id: "language" as const, label: "Language" },
                      ] as const
                    ).map(({ id, label }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSortBy(id)}
                        className={cn(
                          "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300",
                          sortBy === id
                            ? cn(theme.accent, "text-white shadow-sm")
                            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Language</p>
                  <div className="flex flex-wrap gap-2">
                    {LANGS.map((lang) => {
                      const on = langPick.has(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => toggleLang(lang)}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",
                            on ? theme.chip : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                          )}
                        >
                          {lang}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Status</p>
                  <div className="flex flex-wrap gap-2">
                    {STATUS_CHIPS.map(({ id, label }) => {
                      const on = statusPick.has(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleStatus(id)}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",
                            on ? theme.chip : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                          )}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <ul className="flex-1 space-y-1 overflow-y-auto px-2 pb-4 pt-1 sm:px-3" role="listbox">
                {displayedFiles.map((file) => {
                  const active = file.id === selected?.id;
                  return (
                    <li key={file.id} role="option" aria-selected={active}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedId(file.id);
                          setMobileTab("preview");
                        }}
                        className={cn(
                          "w-full rounded-xl border-2 px-3 py-3 text-left transition-all duration-300",
                          active
                            ? cn(theme.light, theme.border, "shadow-sm ring-2 ring-black/5")
                            : "border-transparent hover:border-slate-200 hover:bg-slate-50/90",
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={cn(
                              "min-w-0 break-words font-mono text-[13px]",
                              active ? cn("font-semibold", theme.text) : "font-medium text-slate-800",
                            )}
                          >
                            {file.name}
                          </span>
                          <span
                            className={cn(
                              "shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold",
                              active ? theme.chip : "bg-slate-100 text-slate-600",
                            )}
                          >
                            {file.language}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-left text-xs text-slate-600">{file.shortDescription}</p>
                        <div className="mt-2">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${statusBadgeClass(file.status)}`}
                          >
                            {statusLabel(file.status)}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
                {displayedFiles.length === 0 ? (
                  <li className="px-3 py-10 text-center text-sm text-slate-500">
                    No files match your filters.
                    <br />
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setLangPick(new Set());
                        setStatusPick(new Set());
                      }}
                      className={cn("mt-3 text-xs font-semibold underline", theme.text)}
                    >
                      Clear filters
                    </button>
                  </li>
                ) : null}
              </ul>
            </div>

            <div
              className={cn(
                "flex min-h-[min(18rem,45vh)] flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-sm lg:col-span-7 lg:min-h-[28rem]",
                theme.border,
                previewHidden,
              )}
            >
              {selected ? (
                <>
                  <div className={cn("border-b-2 px-5 py-5 sm:px-6", theme.border, theme.light)}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Preview</p>
                    <div className="mt-2 flex items-center gap-2">
                      <FileCode2 className={cn("h-5 w-5 shrink-0", theme.text)} strokeWidth={2} />
                      <h3 className="font-mono text-lg font-bold text-slate-900 sm:text-xl">{selected.name}</h3>
                    </div>
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                      <span className="font-medium text-slate-800">{topic.title}</span>
                      <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden />
                      <span className={cn("rounded-md px-2 py-0.5 text-xs font-semibold", theme.chip)}>
                        {selected.language}
                      </span>
                      {difficultyLabel(selected.difficulty) ? (
                        <>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs font-medium text-slate-500">{difficultyLabel(selected.difficulty)}</span>
                        </>
                      ) : null}
                    </p>
                    <Link
                      to={filePath(topic.slug, selected.slug)}
                      className={cn(
                        "mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                        theme.button,
                      )}
                    >
                      <Code2 className="h-4 w-4" strokeWidth={2} />
                      Open full code
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-5 sm:p-6">
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Summary</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{selected.shortDescription}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                        <Sparkles className="h-3.5 w-3.5 text-amber-500" strokeWidth={2} />
                        Concepts
                      </h4>
                      {selected.concepts.length ? (
                        <ul className="space-y-2">
                          {selected.concepts.map((c) => (
                            <li
                              key={c}
                              className={cn("flex gap-2 rounded-lg border px-3 py-2 text-sm text-slate-800", theme.border, theme.light)}
                            >
                              <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", theme.accent)} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-slate-500">No concepts listed — add them in dsaData for this file.</p>
                      )}
                    </div>
                    <div>
                      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Tags</h4>
                      {selected.tags.length ? (
                        <div className="flex flex-wrap gap-2">
                          {selected.tags.map((tag) => (
                            <span key={tag} className={cn("rounded-full px-3 py-1 text-xs font-medium", theme.chip)}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-slate-500">No tags — defaults come from the topic and language in dsaData.</p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 p-10 text-center text-sm text-slate-500">
                  <FileCode2 className="h-10 w-10 text-slate-300" strokeWidth={1.5} />
                  <p>Select a file from the list to preview it here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
