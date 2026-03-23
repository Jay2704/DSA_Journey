import { FileCode2, FolderOpen, Languages } from "lucide-react";

type Props = {
  totalProblems: number;
  topicCount: number;
  languages: string[];
};

const cardStyles = [
  {
    border: "border-sky-200/80",
    bg: "bg-gradient-to-br from-sky-50/90 to-white",
    icon: "bg-sky-100 text-sky-600 ring-sky-200/70",
  },
  {
    border: "border-violet-200/80",
    bg: "bg-gradient-to-br from-violet-50/90 to-white",
    icon: "bg-violet-100 text-violet-600 ring-violet-200/70",
  },
  {
    border: "border-amber-200/80",
    bg: "bg-gradient-to-br from-amber-50/90 to-white",
    icon: "bg-amber-100 text-amber-700 ring-amber-200/70",
  },
] as const;

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
          className={`rounded-2xl border p-5 shadow-[var(--shadow-card)] transition duration-200 hover:shadow-[var(--shadow-card-hover)] sm:p-6 ${style.border} ${style.bg}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-[#0a1628] sm:text-[1.65rem]">
                {value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{hint}</p>
            </div>
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ${style.icon}`}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
