"use client";

import {
  ChevronRight,
  FileCode2,
  Search,
  StickyNote,
  Tag,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { RepoFile, Topic } from "@/lib/data";

type Props = {
  topic: Topic;
  initialFileId?: string;
};

function statusLabel(status: RepoFile["status"]): string {
  const map: Record<RepoFile["status"], string> = {
    reviewing: "Reviewing",
    completed: "Completed",
    revisit: "Revisit",
    "in-progress": "In progress",
  };
  return map[status];
}

function statusBadgeClass(status: RepoFile["status"]): string {
  const map: Record<RepoFile["status"], string> = {
    reviewing: "bg-sky-50 text-sky-800 ring-sky-100",
    completed: "bg-emerald-50 text-emerald-800 ring-emerald-100",
    revisit: "bg-amber-50 text-amber-900 ring-amber-100",
    "in-progress": "bg-violet-50 text-violet-800 ring-violet-100",
  };
  return map[status];
}

function difficultyLabel(d: RepoFile["difficulty"]): string | null {
  if (d === null) return null;
  return d.charAt(0).toUpperCase() + d.slice(1);
}

export function TopicFileExplorer({ topic, initialFileId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const files = topic.files;

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>(() => {
    if (initialFileId && files.some((f) => f.id === initialFileId)) {
      return initialFileId;
    }
    return files[0]?.id ?? "";
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const param = searchParams.get("file");
    if (param && files.some((f) => f.id === param)) {
      setSelectedId(param);
    }
  }, [searchParams, files]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return files;
    return files.filter((f) => {
      const blob = [
        f.name,
        f.shortDescription,
        f.language,
        statusLabel(f.status),
        ...f.patterns,
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });
  }, [files, query]);

  const selected = files.find((f) => f.id === selectedId) ?? files[0];

  const syncUrl = useCallback(
    (fileId: string) => {
      const next = new URLSearchParams(searchParams.toString());
      next.set("file", fileId);
      router.replace(`?${next.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const selectFile = (fileId: string) => {
    setSelectedId(fileId);
    syncUrl(fileId);
  };

  const repoRelativePath = `${topic.folder}${selected?.name ?? ""}`;

  const handleOpenCode = () => {
    if (!selected || !navigator.clipboard?.writeText) return;
    void navigator.clipboard.writeText(repoRelativePath).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
      {/* Left: explorer */}
      <div className="flex min-h-[min(22rem,55vh)] flex-col rounded-[1.25rem] border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] lg:col-span-5 lg:min-h-[28rem]">
        <div className="border-b border-slate-100 p-4 sm:p-5">
          <label className="relative block">
            <span className="sr-only">Search files</span>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              strokeWidth={2}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search files…"
              className="w-full rounded-xl border border-slate-200/90 bg-slate-50/80 py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none ring-blue-600/20 transition focus:border-blue-300 focus:bg-white focus:ring-4"
            />
          </label>
          <p className="mt-3 text-[11px] font-medium text-slate-500">
            {filtered.length} of {files.length} shown
          </p>
        </div>
        <ul
          className="flex-1 space-y-1 overflow-y-auto px-2 pb-3 pt-1 sm:px-3"
          role="listbox"
          aria-label="Files in this topic"
        >
          {filtered.map((file) => {
            const active = file.id === selectedId;
            return (
              <li key={file.id} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => selectFile(file.id)}
                  className={
                    active
                      ? "w-full rounded-xl border border-blue-200 bg-blue-50/90 px-3 py-3 text-left shadow-sm ring-1 ring-blue-100/80 transition"
                      : "w-full rounded-xl border border-transparent px-3 py-3 text-left transition hover:border-slate-200 hover:bg-slate-50/90"
                  }
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={
                        active
                          ? "font-mono text-[13px] font-semibold text-blue-900"
                          : "font-mono text-[13px] font-medium text-slate-800"
                      }
                    >
                      {file.name}
                    </span>
                    <span
                      className={
                        active
                          ? "shrink-0 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-blue-800 ring-1 ring-blue-100"
                          : "shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
                      }
                    >
                      {file.language}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${statusBadgeClass(file.status)}`}
                    >
                      {statusLabel(file.status)}
                    </span>
                  </div>
                  <p
                    className={
                      active
                        ? "mt-2 line-clamp-2 text-xs leading-relaxed text-blue-900/80"
                        : "mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600"
                    }
                  >
                    {file.shortDescription}
                  </p>
                </button>
              </li>
            );
          })}
          {filtered.length === 0 ? (
            <li className="px-3 py-8 text-center text-sm text-slate-500">
              No files match “{query.trim()}”.
            </li>
          ) : null}
        </ul>
      </div>

      {/* Right: preview */}
      <div className="flex min-h-[min(22rem,55vh)] flex-col rounded-[1.25rem] border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] lg:col-span-7 lg:min-h-[28rem]">
        {selected ? (
          <>
            <div className="border-b border-slate-100 p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Selected file
                  </p>
                  <h2 className="font-mono text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {selected.name}
                  </h2>
                  <p className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    <span className="font-medium text-slate-800">{topic.title}</span>
                    <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden />
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                      {selected.language}
                    </span>
                    {difficultyLabel(selected.difficulty) ? (
                      <>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs font-medium text-slate-500">
                          {difficultyLabel(selected.difficulty)}
                        </span>
                      </>
                    ) : null}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenCode}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  <FileCode2 className="h-4 w-4" strokeWidth={2} />
                  {copied ? "Path copied" : "Open code"}
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {selected.shortDescription}
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <StickyNote className="h-4 w-4 text-blue-600" strokeWidth={2} />
                  <span className="text-sm font-semibold">Learning notes</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Add insights, edge cases, and links here when you connect notes or
                  a backend.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-slate-700">
                  <Tag className="h-4 w-4 text-blue-600" strokeWidth={2} />
                  <span className="text-sm font-semibold">Patterns & tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.patterns.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto rounded-xl border border-slate-200/90 bg-slate-950">
                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2.5">
                  <span className="font-mono text-[11px] font-medium text-slate-400">
                    preview
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {selected.name}
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">
                  <code>{`# Code preview — open the file in your editor
# Path: ${repoRelativePath}

def placeholder():
    """Wire this view to raw file content or GitHub."""
    return None
`}</code>
                </pre>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center p-8 text-center text-sm text-slate-500">
            No files in this topic.
          </div>
        )}
      </div>
    </div>
  );
}
