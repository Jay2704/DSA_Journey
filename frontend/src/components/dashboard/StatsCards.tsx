import { FileCode2, FolderOpen, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  totalProblems: number;
  topicCount: number;
  languages: string[];
};

/** Dashboard: each stat card has its own hue; bottom bar is a multi-track “coverage” strip */
const cardStyles = [
  {
    border: "border-2 border-blue-300/90",
    bg: "bg-gradient-to-br from-blue-100/95 via-white to-sky-50/90",
    icon: "bg-gradient-to-br from-blue-300 to-blue-200 text-blue-900 ring-2 ring-blue-400/80 shadow-md",
    bar: "bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400",
    fillPct: 88,
  },
  {
    border: "border-2 border-emerald-300/90",
    bg: "bg-gradient-to-br from-emerald-100/95 via-white to-green-50/90",
    icon: "bg-gradient-to-br from-emerald-300 to-emerald-200 text-emerald-950 ring-2 ring-emerald-400/80 shadow-md",
    bar: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-400",
    fillPct: 72,
  },
  {
    border: "border-2 border-violet-300/90",
    bg: "bg-gradient-to-br from-violet-100/95 via-white to-fuchsia-50/85",
    icon: "bg-gradient-to-br from-violet-300 to-violet-200 text-violet-950 ring-2 ring-violet-400/80 shadow-md",
    bar: "bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400",
    fillPct: 65,
  },
] as const;

const rainbowStrip =
  "bg-gradient-to-r from-blue-500 via-emerald-500 via-violet-500 via-amber-500 to-red-500";

export function StatsCards({ totalProblems, topicCount, languages }: Props) {
  const items = [
    {
      label: "Total problems",
      value: String(totalProblems),
      hint: "Tracked files",
      icon: FileCode2,
      style: cardStyles[0],
    },
    {
      label: "Topics covered",
      value: String(topicCount),
      hint: "Learning paths",
      icon: FolderOpen,
      style: cardStyles[1],
    },
    {
      label: "Languages",
      value: languages.join(" · "),
      hint: "In this repo",
      icon: Languages,
      style: cardStyles[2],
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map(({ label, value, hint, icon: Icon, style }) => (
        <div
          key={label}
          className={cn(
            "group relative overflow-hidden rounded-2xl p-5 shadow-lg transition duration-300 hover:shadow-xl sm:p-6",
            style.border,
            style.bg,
            "hover:brightness-[1.01]",
          )}
        >
          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">{label}</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-[#0a1628] sm:text-[1.65rem]">{value}</p>
              <p className="mt-1 text-xs text-slate-600">{hint}</p>
            </div>
            <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", style.icon)}>
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
          </div>
          <div className="relative mt-5 h-2 rounded-full bg-[#0a1628]/[0.06] shadow-inner">
            <div
              className={cn("h-full rounded-full transition-all duration-500 ease-out", style.bar)}
              style={{ width: `${style.fillPct}%` }}
            />
          </div>
        </div>
      ))}
      <div className="sm:col-span-3">
        <div className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-slate-200/90 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Topic spectrum</span>
          <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100 shadow-inner">
            <div className={cn("h-full w-full rounded-full", rainbowStrip)} />
          </div>
        </div>
      </div>
    </div>
  );
}
