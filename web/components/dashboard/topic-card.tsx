import { ArrowRight, FileCode2 } from "lucide-react";
import Link from "next/link";
import { TopicIcon } from "@/components/topic/topic-icon";
import type { Topic } from "@/lib/data";

type Props = {
  topic: Topic;
  variant?: "featured" | "default";
};

function CardBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className ?? ""}`}
      aria-hidden
    >
      <svg
        className="absolute -right-8 -top-12 h-[min(100%,22rem)] w-[min(100%,22rem)] text-blue-600/10 sm:-right-4 sm:-top-8"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M280 20c40 48 62 108 62 172 0 120-97 218-218 218-32 0-63-7-90-20"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M320 120c28 36 44 80 44 128 0 106-86 192-192 192-40 0-78-12-110-33"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />
        <circle cx="48" cy="320" r="120" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.35" />
      </svg>
      <svg
        className="absolute -bottom-16 -left-10 h-48 w-48 text-slate-400/[0.12]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M10 180c40-60 100-100 170-110"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M0 140c32-28 72-44 116-44"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function TopicCard({ topic, variant = "default" }: Props) {
  const isFeatured = variant === "featured" || topic.featured;

  if (isFeatured) {
    return (
      <article
        id={topic.id}
        className="relative scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.08)] sm:rounded-[2rem]"
      >
        <CardBackdrop />
        <div className="relative z-[1] flex min-h-[20rem] flex-col p-8 sm:min-h-[22rem] sm:p-10 lg:p-11">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ring-1 ring-blue-100/80">
              <TopicIcon id={topic.icon} className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Study path · {topic.folder.replace(/\/$/, "")}
              </p>
              <h3 className="text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]">
                {topic.title}
              </h3>
            </div>
          </div>

          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {topic.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200/90 bg-slate-50/90 px-3.5 py-1.5 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-5 pt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-xs font-medium text-slate-700">
                <FileCode2 className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
                {topic.totalFiles} files
              </span>
              {topic.languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700"
                >
                  {lang}
                </span>
              ))}
            </div>
            <Link
              href={`/topics#${topic.id}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:self-end"
            >
              Continue path
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={topic.id}
      className="group relative flex scroll-mt-28 min-h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-white/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:border-slate-300/90 hover:shadow-[0_12px_40px_-20px_rgba(15,23,42,0.1)] sm:rounded-[1.5rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 100% 0%, ${topic.accent.solid} 0%, transparent 55%)`,
        }}
      />
      <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/80">
            <TopicIcon id={topic.icon} className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-[1.35rem]">
              {topic.title}
            </h3>
            <p className="mt-1 text-[11px] font-medium text-slate-500">
              {topic.folder.replace(/\/$/, "")}
            </p>
          </div>
        </div>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {topic.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1 text-[11px] font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <FileCode2 className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
              {topic.totalFiles} files
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-slate-700">
              {topic.languages.join(" · ")}
            </span>
          </div>
          <Link
            href={`/topics#${topic.id}`}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/80 hover:text-blue-700"
          >
            Explore
            <ArrowRight className="h-4 w-4 text-blue-600" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
