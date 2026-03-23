import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-sky-50/40 to-violet-50/50 p-8 shadow-[var(--shadow-card)] ring-1 ring-slate-200/60 sm:rounded-[2.25rem] sm:p-10 lg:p-12">
      <div
        className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-gradient-to-br from-sky-300/30 via-cyan-200/25 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-200/35 via-rose-200/25 to-transparent blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-violet-300/20 blur-3xl" aria-hidden />
      <div className="relative z-[1] grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div className="min-w-0 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Personal learning explorer</p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#0a1628] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            DSA{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-rose-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Interactive view of my DSA learning repo — browse topics, read real code, and keep track of what to revisit.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Arrays", "Trees", "Graphs", "Recursion", "Stacks"].map((label, i) => (
              <span
                key={label}
                className={cn(
                  "rounded-full border px-3 py-1 text-[11px] font-semibold",
                  i === 0 && "border-sky-200/90 bg-sky-100/80 text-sky-900",
                  i === 1 && "border-emerald-200/90 bg-emerald-100/80 text-emerald-900",
                  i === 2 && "border-violet-200/90 bg-violet-100/80 text-violet-900",
                  i === 3 && "border-amber-200/90 bg-amber-100/80 text-amber-900",
                  i === 4 && "border-rose-200/90 bg-rose-100/80 text-rose-900",
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[12rem] overflow-hidden rounded-2xl border border-violet-200/50 bg-gradient-to-br from-slate-800 via-indigo-950 to-violet-950 p-5 shadow-inner sm:min-h-[14rem]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(56_189_248/0.15),transparent_50%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgb(192_132_252/0.12),transparent_45%)]" aria-hidden />
          <div className="relative mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
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
