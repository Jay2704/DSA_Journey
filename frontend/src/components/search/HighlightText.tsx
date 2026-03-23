import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  query: string;
  className?: string;
};

export function HighlightText({ text, query, className }: Props) {
  const terms = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((t) => t.length >= 2);
  if (terms.length === 0) {
    return <span className={className}>{text}</span>;
  }

  const lower = text.toLowerCase();
  const ranges: { start: number; end: number }[] = [];
  for (const t of terms) {
    let from = 0;
    while (from < lower.length) {
      const idx = lower.indexOf(t, from);
      if (idx === -1) break;
      ranges.push({ start: idx, end: idx + t.length });
      from = idx + 1;
    }
  }
  ranges.sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (!last || r.start > last.end) merged.push({ ...r });
    else last.end = Math.max(last.end, r.end);
  }

  const parts: ReactNode[] = [];
  let cursor = 0;
  merged.forEach((r, i) => {
    if (cursor < r.start) {
      parts.push(<Fragment key={`t-${i}-a`}>{text.slice(cursor, r.start)}</Fragment>);
    }
    parts.push(
      <mark
        key={`t-${i}-b`}
        className="rounded bg-amber-200/90 px-0.5 font-medium text-[#0a1628]"
      >
        {text.slice(r.start, r.end)}
      </mark>,
    );
    cursor = r.end;
  });
  if (cursor < text.length) {
    parts.push(<Fragment key="t-end">{text.slice(cursor)}</Fragment>);
  }

  return <span className={cn(className)}>{parts}</span>;
}
