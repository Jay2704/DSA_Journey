import { ArrowRight, FileCode2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TopicIcon } from "@/components/topic/TopicIcon";
import { topicPath } from "@/lib/routes";
import type { Topic } from "@/types/dsa";
import { cn } from "@/lib/utils";

type Props = {
  topic: Topic;
  /** Force compact cards (e.g. topics index). Omit to allow `topic.featured` to size the hero card. */
  variant?: "featured" | "default";
};

function CardBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      <svg
        className="absolute -right-8 -top-12 h-[min(100%,22rem)] w-[min(100%,22rem)] text-[#2563eb]/[0.12] sm:-right-4 sm:-top-8"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M280 20c40 48 62 108 62 172 0 120-97 218-218 218-32 0-63-7-90-20"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function TopicCard({ topic, variant }: Props) {
  const isFeatured =
    variant === "featured" || (variant !== "default" && Boolean(topic.featured));

  if (isFeatured) {
    return (
      <article
        id={topic.id}
        className="dashboard-card relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200/85 bg-white shadow-[var(--shadow-card)] sm:rounded-[2.25rem]"
      >
        <CardBackdrop />
        <div className="relative z-[1] flex min-h-[18rem] flex-col p-8 sm:min-h-[20rem] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.15rem] bg-[#dbeafe] text-[#2563eb] shadow-sm ring-1 ring-blue-100/90">
              <TopicIcon icon={topic.icon} className="h-8 w-8" strokeWidth={1.65} />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Featured path</p>
              <h3 className="text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#0a1628] sm:text-3xl">
                {topic.title}
              </h3>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">{topic.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200/85 bg-slate-50/95 px-3.5 py-1.5 text-xs font-medium text-[#0a1628]/90"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/85 bg-white/95 px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm">
                <FileCode2 className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" strokeWidth={2} />
                {topic.files.length} files
              </span>
              {Array.from(new Set(topic.files.map((f) => f.language))).map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-slate-200/85 bg-white px-3.5 py-2 text-xs font-semibold text-[#0a1628]/90"
                >
                  {lang}
                </span>
              ))}
            </div>
            <Link
              to={topicPath(topic.slug)}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-2xl bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:brightness-[1.03] active:brightness-[0.98] sm:self-end"
            >
              Explore topic
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
      className={cn(
        "dashboard-card group relative flex min-h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.65rem] border border-slate-200/85 bg-white shadow-[var(--shadow-card)] transition hover:border-slate-300/80 hover:shadow-[var(--shadow-card-hover)] sm:rounded-[1.85rem]",
      )}
    >
      <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[#dbeafe] text-[#2563eb] ring-1 ring-blue-100/90">
            <TopicIcon icon={topic.icon} className="h-6 w-6" strokeWidth={1.65} />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-[#0a1628] sm:text-[1.35rem]">
              {topic.title}
            </h3>
          </div>
        </div>
        <p className="mt-6 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{topic.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {topic.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/85 bg-slate-50/95 px-3 py-1 text-[11px] font-medium text-[#0a1628]/85"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200/50 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
            <FileCode2 className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" strokeWidth={2} />
            {topic.files.length} files
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-[#0a1628]/80">
              {Array.from(new Set(topic.files.map((f) => f.language))).join(" · ")}
            </span>
          </div>
          <Link
            to={topicPath(topic.slug)}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-slate-200/85 bg-white px-5 py-2.5 text-sm font-semibold text-[#0a1628] shadow-sm transition hover:border-blue-300/90 hover:bg-[#eff6ff] hover:text-[#1d4ed8] active:scale-[0.99]"
          >
            Explore
            <ArrowRight className="h-4 w-4 text-[#2563eb]" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
