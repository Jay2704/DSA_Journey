import { FileCode2, FolderOpen, Languages } from "lucide-react";

type Props = {
  totalProblems: number;
  topicCount: number;
  languages: string[];
};

export function StatsCards({ totalProblems, topicCount, languages }: Props) {
  const items = [
    {
      label: "Total problems",
      value: String(totalProblems),
      hint: "Tracked files",
      icon: FileCode2,
    },
    {
      label: "Topics covered",
      value: String(topicCount),
      hint: "Learning paths",
      icon: FolderOpen,
    },
    {
      label: "Languages",
      value: languages.join(" · "),
      hint: "In this repo",
      icon: Languages,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map(({ label, value, hint, icon: Icon }) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)] transition duration-200 hover:border-slate-300/80 hover:shadow-[var(--shadow-card-hover)] sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-[#0a1628] sm:text-[1.65rem]">
                {value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{hint}</p>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dbeafe] text-[#2563eb] ring-1 ring-blue-100/90">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
