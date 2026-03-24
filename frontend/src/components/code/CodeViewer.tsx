import { useEffect, useMemo, useState } from "react";
import type { Language } from "@/types/dsa";
import { getSharedHighlighter } from "@/lib/shikiSingleton";
import { cn } from "@/lib/utils";

type Props = {
  code: string;
  language: Language;
  fileName: string;
  className?: string;
  /** Accent the header bar (e.g. topic theme) without changing the code panel */
  headerClassName?: string;
  /** Outer frame ring / glow (topic theme) */
  outerClassName?: string;
};

const LINE_LEADING = "leading-[1.625]";

export function CodeViewer({ code, language, fileName, className, headerClassName, outerClassName }: Props) {
  const [html, setHtml] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const lang = language === "Java" ? "java" : "python";
  const lines = useMemo(() => code.split("\n"), [code]);

  useEffect(() => {
    let cancelled = false;
    setErr(null);
    setHtml(null);
    getSharedHighlighter()
      .then((h) =>
        h.codeToHtml(code, {
          lang,
          theme: "github-dark",
        }),
      )
      .then((out) => {
        if (!cancelled) setHtml(out);
      })
      .catch(() => {
        if (!cancelled) setErr("Syntax highlighting failed — showing plain text.");
      });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  return (
    <div
      className={cn(
        "min-w-0 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0d1117] shadow-inner transition-[box-shadow,ring-color] duration-300",
        outerClassName,
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-0 items-center justify-between gap-2 border-b px-4 py-2.5 transition-colors duration-300",
          headerClassName ?? "border-slate-700/80 bg-slate-900/90",
        )}
      >
        <span className="min-w-0 truncate font-mono text-[11px] font-medium text-slate-400">{fileName}</span>
        <span className="shrink-0 rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
          {language}
        </span>
      </div>
      <div className="max-h-[min(70vh,42rem)] overflow-auto overscroll-contain">
        {err ? (
          <p className="px-4 py-3 text-sm text-amber-200/90">{err}</p>
        ) : null}
        <div className="flex min-w-0 gap-0 p-4 sm:p-5">
          <div
            className={cn(
              "min-w-[2.75rem] shrink-0 select-none pr-3 text-right font-mono text-[12px] text-slate-500 tabular-nums sm:text-[13px]",
              LINE_LEADING,
            )}
            aria-hidden
          >
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain">
            {html ? (
              <div
                className={cn(
                  "shiki-code min-w-0 [&_.shiki]:!bg-transparent [&_code]:whitespace-pre [&_pre]:m-0 [&_pre]:min-w-0 [&_pre]:overflow-x-auto [&_pre]:p-0",
                  LINE_LEADING,
                )}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <pre
                className={cn(
                  "m-0 min-w-0 overflow-x-auto whitespace-pre font-mono text-[13px] text-slate-200 sm:text-sm",
                  LINE_LEADING,
                )}
              >
                <code>{code}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
