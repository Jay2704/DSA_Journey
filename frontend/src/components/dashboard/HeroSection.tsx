import { Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/85 bg-white p-8 shadow-[var(--shadow-card)] sm:rounded-[2.25rem] sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#2563eb]/[0.07] blur-3xl" aria-hidden />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div className="min-w-0 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Personal learning explorer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#0a1628] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            DSA{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Interactive view of my DSA learning repo — browse topics, read real code, and keep track of what to revisit.
          </p>
        </div>
        <div className="relative min-h-[12rem] rounded-2xl border border-slate-800/90 bg-[#0a1628] p-5 shadow-inner sm:min-h-[14rem]">
          <div className="mb-3 flex items-center gap-2 border-b border-slate-700/80 pb-3">
            <Terminal className="h-4 w-4 text-emerald-400" strokeWidth={2} />
            <span className="font-mono text-[11px] font-medium text-slate-400">study_session</span>
          </div>
          <pre className="font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">
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
