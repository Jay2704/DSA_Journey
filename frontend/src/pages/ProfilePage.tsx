import { BookOpen, Code2, FolderOpen } from "lucide-react";
import { computeStats, topics } from "@/data/dsaData";
import { appMeta } from "@/types/dsa";

export function ProfilePage() {
  const stats = computeStats();

  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 sm:pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-[#0a1628]">Profile</h1>
      <p className="mt-2 text-slate-600">A lightweight snapshot of this learning explorer — no accounts, no backend.</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)]">
          <FolderOpen className="h-5 w-5 text-[#2563eb]" strokeWidth={2} />
          <p className="mt-3 text-2xl font-semibold text-[#0a1628]">{stats.topicCount}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Topics</p>
        </div>
        <div className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)]">
          <Code2 className="h-5 w-5 text-[#2563eb]" strokeWidth={2} />
          <p className="mt-3 text-2xl font-semibold text-[#0a1628]">{stats.totalProblems}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Files</p>
        </div>
        <div className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)]">
          <BookOpen className="h-5 w-5 text-[#2563eb]" strokeWidth={2} />
          <p className="mt-3 text-sm font-semibold text-[#0a1628]">{stats.languagesUsed.join(" · ")}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Languages</p>
        </div>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200/85 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        <h2 className="text-lg font-semibold text-[#0a1628]">Progress snapshot</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Status tags on each file are part of the static data layer — update <code className="rounded bg-slate-100 px-1 font-mono text-xs">dsaData.ts</code>{" "}
          when you want to reflect completed or revisit items. This UI is a calm mirror of that metadata, not a competitive
          scoreboard.
        </p>
        <div className="mt-6 space-y-2 text-sm text-slate-700">
          {Object.entries(stats.languageCounts).map(([lang, n]) => (
            <div key={lang} className="flex justify-between rounded-lg bg-slate-50/90 px-3 py-2">
              <span>{lang}</span>
              <span className="font-semibold tabular-nums">{n}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-dashed border-slate-200/90 bg-slate-50/60 p-6">
        <h2 className="text-sm font-semibold text-[#0a1628]">Favorite topic</h2>
        <p className="mt-2 text-sm text-slate-500">Placeholder — pin a topic here when you add personal prefs to the data layer.</p>
        <p className="mt-3 text-sm font-medium text-[#2563eb]">{topics.find((t) => t.featured)?.title ?? topics[0]?.title}</p>
      </section>

      <section className="mt-8 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-semibold text-[#0a1628]">About {appMeta.title}</h2>
        <p className="mt-3">
          {appMeta.tagline} It is a static, deploy-friendly front end: topics and file metadata live in TypeScript, and raw code is
          served from the <code className="rounded bg-slate-100 px-1 font-mono text-xs">public</code> folder. No database, no auth,
          no judge — just a clean way to browse real repo files and stay oriented while studying DSA.
        </p>
      </section>
    </div>
  );
}
