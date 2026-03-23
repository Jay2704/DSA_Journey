import { Activity } from "lucide-react";
import { recentActivity } from "@/data/dsaData";

export function RecentActivity() {
  return (
    <section className="rounded-[1.65rem] border border-slate-200/85 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="flex items-center gap-2">
        <Activity className="h-5 w-5 text-[#2563eb]" strokeWidth={2} />
        <h2 className="text-lg font-semibold text-[#0a1628]">Recent activity</h2>
      </div>
      <p className="mt-1 text-sm text-slate-600">Snapshot of what the dashboard is emphasizing lately.</p>
      <ul className="mt-6 space-y-4">
        {recentActivity.map((row, i) => (
          <li key={i} className="flex gap-3 border-l-2 border-blue-100 pl-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#0a1628]">
                <span className="text-slate-500">{row.label}</span>{" "}
                <span className="font-mono text-slate-800">{row.file}</span>
              </p>
              <p className="text-xs text-slate-500">{row.topic}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
