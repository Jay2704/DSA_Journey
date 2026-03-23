import { Terminal } from "lucide-react";

const terminalLines = [
  { text: "$ cd ~/DSA_Journey && git status -sb", dim: false },
  { text: "## main...origin/main", dim: true },
  { text: " M arrays/move_zeros.py", dim: true },
  { text: " M stacks/valid_paranthesis.py", dim: true },
  {
    text: '$ git add . && git commit -m "session: arrays + stacks"',
    dim: false,
  },
  { text: "[main abc1234] 2 files changed, 42 insertions(+)", dim: true },
  { text: '$ python arrays/move_zeros.py && echo "✓ ok"', dim: false },
  { text: "✓ ok", dim: true },
];

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          DSA{" "}
          <span className="text-accent">Journey</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          An interactive, read-friendly view of my personal DSA practice repo—browse
          topics, skim files, and keep momentum on the path.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground shadow-sm">
            Repo-driven
          </span>
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground shadow-sm">
            Learning-first
          </span>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-soft/80 via-white to-slate-50 blur-2xl"
        />
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
          <div className="flex items-center gap-2 border-b border-border bg-slate-50/80 px-4 py-3">
            <Terminal className="h-4 w-4 text-accent" aria-hidden />
            <span className="text-xs font-semibold text-foreground">
              practice — zsh
            </span>
            <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-muted">
              local
            </span>
          </div>
          <div className="space-y-1.5 bg-[#0f172a] px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs">
            {terminalLines.map((line, i) => (
              <p
                key={i}
                className={line.dim ? "text-slate-400" : "text-emerald-300"}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
