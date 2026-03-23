import { Activity } from "lucide-react";
import { recentActivity } from "@/data/dsaData";
import { getTopicThemeFromTopicTitle } from "@/lib/topicThemes";
import { cn } from "@/lib/utils";

export function RecentActivity() {
  return (
    <section className="rounded-[1.65rem] border border-white/80 bg-gradient-to-br from-white/95 via-violet-50/20 to-amber-50/15 p-6 shadow-[var(--shadow-card)] ring-1 ring-slate-200/50 sm:p-8">
      <div className="flex items-center gap-2">
        <Activity className="h-5 w-5 text-fuchsia-500" strokeWidth={2} />
        <h2 className="text-lg font-semibold text-[#0a1628]">Recent activity</h2>
      </div>
      <p className="mt-1 text-sm text-slate-600">Snapshot of what the dashboard is emphasizing lately.</p>
      <ul className="mt-6 space-y-4">
        {recentActivity.map((row, i) => {
          const theme = getTopicThemeFromTopicTitle(row.topic);
          return (
            <li key={i} className={cn("pl-4", theme.listAccent)}>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#0a1628]">
                  <span className="text-slate-500">{row.label}</span>{" "}
                  <span className="font-mono text-slate-800">{row.file}</span>
                </p>
                <p className="text-xs text-slate-500">{row.topic}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
