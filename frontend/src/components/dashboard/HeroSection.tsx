import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const topicChips: { label: string; className: string }[] = [
  { label: "Arrays", className: "border-blue-400/90 bg-blue-100 text-blue-950 shadow-sm" },
  { label: "Trees", className: "border-violet-400/90 bg-violet-100 text-violet-950 shadow-sm" },
  { label: "Graphs", className: "border-emerald-400/90 bg-emerald-100 text-emerald-950 shadow-sm" },
  { label: "Recursion", className: "border-yellow-400 bg-yellow-200/95 text-neutral-900 shadow-sm" },
  { label: "Stacks", className: "border-red-400/90 bg-red-100 text-red-950 shadow-sm" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border-2 border-white/90 bg-gradient-to-br from-slate-50/95 via-white to-violet-50/40 p-8 shadow-xl shadow-slate-500/10 ring-1 ring-slate-200/70 sm:rounded-[2.25rem] sm:p-10 lg:p-12">
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-400/25 via-emerald-300/20 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-300/35 via-amber-200/30 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-violet-400/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/3 h-48 w-48 rounded-full bg-red-400/15 blur-3xl"
        aria-hidden
      />
      <div className="relative z-[1] grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div className="min-w-0 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Personal learning explorer</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#0a1628] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            DSA{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-violet-600 to-rose-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Interactive view of my DSA learning repo — browse topics, read real code, and keep track of what to revisit.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {topicChips.map(({ label, className }) => (
              <span key={label} className={cn("rounded-full border-2 px-3 py-1 text-[11px] font-bold", className)}>
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[12rem] overflow-hidden rounded-2xl border-2 border-violet-300/60 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 p-5 shadow-xl shadow-violet-600/20 sm:min-h-[14rem]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(56_189_248/0.22),transparent_50%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgb(192_132_252/0.18),transparent_45%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgb(52_211_153/0.12),transparent_40%)]" aria-hidden />
          <div className="relative mb-3 flex items-center gap-2 border-b border-white/15 pb-3">
            <Terminal className="h-4 w-4 text-cyan-300" strokeWidth={2} />
            <span className="font-mono text-[11px] font-medium text-violet-200/90">study_session</span>
          </div>
          <pre className="relative font-mono text-[11px] leading-relaxed text-slate-200 sm:text-xs">
            <code>
              {`$ explore --topic arrays
→ 8 files · Python

$ explore --topic stacks  
→ classic patterns · LIFO

$ status
  focus: clarity over speed`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
