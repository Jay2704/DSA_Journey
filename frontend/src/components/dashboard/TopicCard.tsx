import { ArrowRight, FileCode2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TopicIcon } from "@/components/topic/TopicIcon";
import { topicPath } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import type { Topic } from "@/types/dsa";
import { cn } from "@/lib/utils";

type Props = {
  topic: Topic;
  /** Force compact cards (e.g. topics index). Omit to allow `topic.featured` to size the hero card. */
  variant?: "featured" | "default";
};

function CardBackdrop({ svgAccent }: { svgAccent: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      <svg
        className={cn(
          "absolute -right-8 -top-12 h-[min(100%,22rem)] w-[min(100%,22rem)] sm:-right-4 sm:-top-8",
          svgAccent,
        )}
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
  const theme = getTopicTheme(topic.slug);
  const isFeatured =
    variant === "featured" || (variant !== "default" && Boolean(topic.featured));

  if (isFeatured) {
    return (
      <article
        id={topic.id}
        className={cn(
          "dashboard-card relative scroll-mt-28 overflow-hidden rounded-[2rem] border shadow-[var(--shadow-card)] sm:rounded-[2.25rem]",
          theme.transition,
          theme.featuredBorder,
          theme.featuredBg,
        )}
      >
        <CardBackdrop svgAccent={theme.svgAccent} />
        <div
          className={cn("pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full blur-3xl", theme.featuredOrb)}
          aria-hidden
        />
        <div
          className={cn("pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full blur-2xl", theme.featuredOrb2)}
          aria-hidden
        />
        <div className="relative z-[1] flex min-h-[18rem] flex-col p-8 sm:min-h-[20rem] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div
              className={cn(
                "flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.15rem] shadow-sm ring-1",
                theme.iconFeatured,
              )}
            >
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
                className={cn("rounded-full border px-3.5 py-1.5 text-xs font-medium", theme.tagChip)}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium shadow-sm",
                  theme.filePill,
                )}
              >
                <FileCode2 className={cn("h-3.5 w-3.5 shrink-0", theme.filePillIcon)} strokeWidth={2} />
                {topic.files.length} files
              </span>
              {Array.from(new Set(topic.files.map((f) => f.language))).map((lang) => (
                <span
                  key={lang}
                  className={cn("rounded-full border px-3.5 py-2 text-xs font-semibold", theme.tagChip)}
                >
                  {lang}
                </span>
              ))}
            </div>
            <Link
              to={topicPath(topic.slug)}
              className={cn(
                "inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-2xl px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-[1.03] active:brightness-[0.98] sm:self-end",
                theme.ctaPrimary,
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
        "dashboard-card group relative flex min-h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.65rem] border shadow-[var(--shadow-card)] sm:rounded-[1.85rem]",
        theme.transition,
        theme.cardBorder,
        theme.cardBg,
        theme.cardBorderHover,
        "hover:shadow-[var(--shadow-card-hover)]",
      )}
    >
      <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] shadow-sm ring-1",
              theme.iconDefault,
            )}
          >
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
              className={cn("rounded-full border px-3 py-1 text-[11px] font-medium", theme.tagChip)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/40 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
            <FileCode2 className={cn("h-3.5 w-3.5 shrink-0", theme.filePillIcon)} strokeWidth={2} />
            {topic.files.length} files
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-[#0a1628]/80">
              {Array.from(new Set(topic.files.map((f) => f.language))).join(" · ")}
            </span>
          </div>
          <Link
            to={topicPath(topic.slug)}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-white/60 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#0a1628] shadow-sm transition active:scale-[0.99]",
              theme.exploreLink,
            )}
          >
            Explore
            <ArrowRight className={cn("h-4 w-4", theme.exploreIcon)} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
