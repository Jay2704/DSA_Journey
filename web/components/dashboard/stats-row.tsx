import { BookOpen, Code2, FolderTree } from "lucide-react";
import { stats } from "@/lib/data";

export function StatsRow() {
  const topicProgress = Math.min(
    100,
    Math.round((stats.topicCount / 5) * 100),
  );

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Total problems
              </p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">
                {stats.totalProblems}
              </p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Code2 className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">
            Files tracked across topic folders (excluding scaffolding).
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Topics covered
              </p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">
                {stats.topicCount}
              </p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <FolderTree className="h-5 w-5" />
            </span>
          </div>
          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-xs font-medium text-muted">
              <span>Exploration</span>
              <span>{topicProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-accent transition-[width]"
                style={{ width: `${topicProgress}%` }}
              />
            </div>
          </div>
          <p className="mt-3 line-clamp-2 text-sm text-muted">
            {stats.topicsCovered.join(" · ")}
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Languages
              </p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">
                {stats.languageCount}
              </p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <BookOpen className="h-5 w-5" />
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {stats.languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-border bg-slate-50 px-3 py-1 text-xs font-semibold text-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted">
            Mostly Python practice with Java where noted.
          </p>
        </article>
      </div>
    </section>
  );
}
