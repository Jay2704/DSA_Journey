import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { filePath } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import { cn } from "@/lib/utils";
import type { DsaFile, Topic } from "@/types/dsa";

type Props = {
  topic: Topic;
  prevFile: DsaFile | null;
  nextFile: DsaFile | null;
};

export function FilePrevNext({ topic, prevFile, nextFile }: Props) {
  const theme = getTopicTheme(topic.slug);
  return (
    <nav
      className={cn(
        "mb-6 flex flex-col gap-3 rounded-2xl border-2 bg-white p-3 shadow-[var(--shadow-card)] transition-all duration-300 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4 sm:p-4",
        theme.border,
      )}
      aria-label="Previous and next file in topic"
    >
      {prevFile ? (
        <Link
          to={filePath(topic.slug, prevFile.slug)}
          className={cn(
            "group flex min-h-[3.25rem] flex-1 items-center gap-3 rounded-xl border-2 border-transparent px-4 py-3 transition-all duration-300",
            theme.light,
            theme.hoverBorder,
          )}
        >
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 group-hover:text-current",
              theme.text,
            )}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">Previous</span>
            <span className="mt-0.5 block truncate font-mono text-sm font-semibold text-slate-900">{prevFile.name}</span>
          </span>
        </Link>
      ) : (
        <div className="flex min-h-[3.25rem] flex-1 items-center gap-3 rounded-xl border border-dashed border-slate-200/90 bg-slate-50/40 px-4 py-3 text-sm text-slate-400">
          <span className="font-medium">Start of topic</span>
        </div>
      )}

      <div className="hidden w-px bg-slate-200 sm:block" aria-hidden />

      {nextFile ? (
        <Link
          to={filePath(topic.slug, nextFile.slug)}
          className={cn(
            "group flex min-h-[3.25rem] flex-1 items-end justify-end gap-3 rounded-xl border-2 border-transparent px-4 py-3 text-right transition-all duration-300",
            theme.light,
            theme.hoverBorder,
          )}
        >
          <span className="min-w-0 text-right">
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">Next</span>
            <span className="mt-0.5 block truncate font-mono text-sm font-semibold text-slate-900">{nextFile.name}</span>
          </span>
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 group-hover:text-current",
              theme.text,
            )}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </span>
        </Link>
      ) : (
        <div className="flex min-h-[3.25rem] flex-1 items-center justify-end gap-3 rounded-xl border border-dashed border-slate-200/90 bg-slate-50/40 px-4 py-3 text-sm text-slate-400">
          <span className="font-medium">End of topic</span>
        </div>
      )}
    </nav>
  );
}
