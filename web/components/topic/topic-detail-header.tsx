import { TopicIcon } from "@/components/topic/topic-icon";
import type { Topic } from "@/lib/data";

type Props = {
  topic: Topic;
};

export function TopicDetailHeader({ topic }: Props) {
  return (
    <header className="mb-8 space-y-5 sm:mb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/90 sm:h-14 sm:w-14">
          <TopicIcon id={topic.icon} className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            {topic.folder.replace(/\/$/, "")}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {topic.title}
          </h1>
          <p className="max-w-3xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {topic.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full border border-slate-200/90 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-800">
          {topic.totalFiles} files
        </span>
        {topic.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
