import { ArrowRight, FileCode2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TopicIcon } from "@/components/topic/TopicIcon";
import { topicPath } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import type { Topic } from "@/types/dsa";
import { cn } from "@/lib/utils";

type Props = {
  topic: Topic;
  variant?: "featured" | "default";
};

export function TopicCard({ topic, variant }: Props) {
  const theme = getTopicTheme(topic.slug);
  const isFeatured =
    variant === "featured" || (variant !== "default" && Boolean(topic.featured));

  if (isFeatured) {
    return (
      <article
        id={topic.id}
        className={cn(
          "dashboard-card relative scroll-mt-28 overflow-hidden rounded-[2rem] border-2 shadow-[var(--shadow-card)] transition-all duration-300 sm:rounded-[2.25rem]",
          theme.border,
          theme.light,
          "bg-gradient-to-br from-white/95 to-white/80",
        )}
      >
        <div className="relative z-[1] flex min-h-[18rem] flex-col p-8 sm:min-h-[20rem] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div
              className={cn(
                "flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.15rem] text-white shadow-md",
                theme.accent,
              )}
            >
              <TopicIcon icon={topic.icon} className="h-8 w-8" strokeWidth={1.65} />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Featured path</p>
              <h3 className={cn("text-2xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-3xl", theme.text)}>
                {topic.title}
              </h3>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">{topic.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <span key={tag} className={cn("rounded-full px-3.5 py-1.5 text-xs font-medium", theme.chip)}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium shadow-sm",
                  theme.chip,
                )}
              >
                <FileCode2 className={cn("h-3.5 w-3.5 shrink-0", theme.text)} strokeWidth={2} />
                {topic.files.length} files
              </span>
              {Array.from(new Set(topic.files.map((f) => f.language))).map((lang) => (
                <span key={lang} className={cn("rounded-full px-3.5 py-2 text-xs font-semibold", theme.chip)}>
                  {lang}
                </span>
              ))}
            </div>
            <Link
              to={topicPath(topic.slug)}
              className={cn(
                "inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-2xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 sm:self-end",
                theme.button,
              )}
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
        "dashboard-card group relative flex min-h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.65rem] border-2 bg-white/90 shadow-[var(--shadow-card)] transition-all duration-300 sm:rounded-[1.85rem]",
        theme.border,
        "hover:shadow-lg",
      )}
    >
      <div className={cn("h-1.5 w-full rounded-t-[inherit] transition-all duration-300", theme.accent)} aria-hidden />
      <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] text-white shadow-sm ring-1 ring-black/5",
              theme.accent,
            )}
          >
            <TopicIcon icon={topic.icon} className="h-6 w-6" strokeWidth={1.65} />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className={cn("text-xl font-bold leading-snug tracking-[-0.02em] sm:text-[1.35rem]", theme.text)}>
              {topic.title}
            </h3>
          </div>
        </div>
        <p className="mt-6 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{topic.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {topic.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={cn("rounded-full px-3 py-1 text-[11px] font-medium", theme.chip)}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200/80 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
            <FileCode2 className={cn("h-3.5 w-3.5 shrink-0", theme.text)} strokeWidth={2} />
            {topic.files.length} files
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-[#0a1628]/80">
              {Array.from(new Set(topic.files.map((f) => f.language))).join(" · ")}
            </span>
          </div>
          <Link
            to={topicPath(topic.slug)}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.99]",
              theme.button,
            )}
          >
            Explore
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
