import { Activity } from "lucide-react";
import { recentActivity } from "@/lib/data";

const kindStyles = {
  SUCCESS: "bg-emerald-50 text-emerald-800 ring-emerald-100",
  FAILED: "bg-rose-50 text-rose-800 ring-rose-100",
  REVIEW: "bg-amber-50 text-amber-900 ring-amber-100",
} as const;

export function RecentActivity() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6 sm:pb-32">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <div className="flex items-center gap-2 border-b border-border bg-slate-50/90 px-5 py-4">
          <Activity className="h-5 w-5 text-accent" aria-hidden />
          <h2 className="text-base font-semibold text-foreground">
            Recent activity
          </h2>
          <span className="ml-auto text-xs font-medium text-muted">
            Visual log
          </span>
        </div>
        <ul className="divide-y divide-border">
          {recentActivity.map((entry) => (
            <li
              key={entry.id}
              className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
            >
              <span
                className={`inline-flex w-fit shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ring-inset ${kindStyles[entry.kind]}`}
              >
                {entry.kind}
              </span>
              <p className="min-w-0 flex-1 text-sm text-foreground">
                {entry.message}
              </p>
              <time
                className="shrink-0 text-xs text-muted sm:text-right"
                dateTime=""
              >
                {entry.time}
              </time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
