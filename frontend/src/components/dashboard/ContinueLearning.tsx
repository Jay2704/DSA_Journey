import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { continueLearningFileIds, getFileById } from "@/data/dsaData";
import { filePath } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import { cn, statusLabel } from "@/lib/utils";

export function ContinueLearning() {
  const items = continueLearningFileIds
    .map((id) => getFileById(id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <section className="rounded-[1.65rem] border border-white/80 bg-gradient-to-br from-white/90 via-sky-50/30 to-violet-50/25 p-6 shadow-[var(--shadow-card)] ring-1 ring-slate-200/50 sm:p-8">
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-violet-500" strokeWidth={2} />
        <h2 className="text-lg font-semibold text-[#0a1628]">Continue learning</h2>
      </div>
      <p className="mt-1 text-sm text-slate-600">Files marked in-progress, revisit, or worth another pass.</p>
      <ul className="mt-6 space-y-3">
        {items.map((f) => {
          const theme = getTopicTheme(f.topicSlug);
          return (
            <li key={f.id}>
              <Link
                to={filePath(f.topicSlug, f.slug)}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border border-white/60 bg-white/80 px-4 py-3 pl-3 shadow-sm transition",
                  theme.listAccent,
                  theme.rowHover,
                )}
              >
                <div className="min-w-0 flex-1 pl-1">
                  <p className="truncate font-mono text-sm font-semibold text-slate-900">{f.name}</p>
                  <p className="truncate text-xs text-slate-500">
                    {f.topicName} · {statusLabel(f.status)}
                  </p>
                </div>
                <ArrowRight className={cn("h-4 w-4 shrink-0", theme.rowArrow)} strokeWidth={2} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
