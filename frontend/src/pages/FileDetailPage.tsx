import { CheckCircle2, ChevronRight, ClipboardCopy, Copy, Home } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FilePrevNext } from "@/components/file/FilePrevNext";
import { FileStudySidebar } from "@/components/file/FileStudySidebar";
import { getAdjacentFiles, getFileBySlugs, getTopicBySlug } from "@/data/dsaData";
import { routes, topicPath } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import { cn, difficultyLabel, statusLabel } from "@/lib/utils";
import { useFetchedText } from "@/hooks/useFetchedText";

const CodeViewer = lazy(() =>
  import("@/components/code/CodeViewer").then((m) => ({ default: m.CodeViewer })),
);

export function FileDetailPage() {
  const { topicSlug, fileSlug } = useParams<{ topicSlug: string; fileSlug: string }>();
  const topic = topicSlug ? getTopicBySlug(topicSlug) : undefined;
  const file = topicSlug && fileSlug ? getFileBySlugs(topicSlug, fileSlug) : undefined;
  const [copied, setCopied] = useState(false);

  const fetchState = useFetchedText(file?.codePath ?? "");

  if (!topic || !file) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-[#0a1628]">File not found</h1>
        <p className="mt-2 text-sm text-slate-600">Check the URL or pick a file from a topic.</p>
        <Link to={routes.topics} className="mt-6 inline-block text-sm font-semibold text-[#2563eb]">
          Browse topics
        </Link>
      </div>
    );
  }

  const { prev, next } = getAdjacentFiles(topic.slug, file.slug);
  const relatedFiles = topic.files.filter((f) => f.id !== file.id).sort((a, b) => a.name.localeCompare(b.name));

  const rawCode = fetchState.status === "ok" ? fetchState.text : "";
  const loadError = fetchState.status === "error" ? fetchState.error : null;

  const handleCopy = () => {
    if (!rawCode || !navigator.clipboard?.writeText) return;
    void navigator.clipboard.writeText(rawCode).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  const theme = getTopicTheme(topic.slug);

  return (
    <div className={cn(theme.pageShell, theme.transition, "relative min-h-full w-full")}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className={cn("absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl sm:h-80 sm:w-80", theme.pageDecorA)} />
        <div className={cn("absolute -left-12 top-1/4 h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72", theme.pageDecorB)} />
      </div>
      <div className="relative z-[1] mx-auto max-w-6xl min-w-0 px-4 pt-8 sm:px-6 sm:pt-10">
      <nav
        className="mb-8 flex min-w-0 flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 text-sm text-slate-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Breadcrumb"
      >
        <Link to={routes.home} className={cn("inline-flex shrink-0 items-center gap-1 font-medium transition-colors", theme.navLinkHover)}>
          <Home className="h-4 w-4" strokeWidth={2} />
          Dashboard
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
        <Link to={routes.topics} className={cn("shrink-0 font-medium transition-colors", theme.navLinkHover)}>
          Topics
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
        <Link to={topicPath(topic.slug)} className={cn("shrink-0 font-medium transition-colors", theme.navLinkHover)}>
          {topic.title}
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
        <span
          className={cn(
            "max-w-[min(100%,18rem)] shrink-0 truncate font-mono text-[13px] sm:max-w-none",
            theme.breadcrumbActive,
          )}
        >
          {file.name}
        </span>
      </nav>

      <header className={cn("relative mb-8 overflow-hidden rounded-[1.65rem] p-6 sm:p-8", theme.heroPanel)}>
        <div className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl", theme.heroGlow)} aria-hidden />
        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className={cn("min-w-0 space-y-3", theme.headingCluster)}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("rounded-md border px-2 py-0.5 text-xs font-semibold", theme.fileHeaderTag)}>
                {file.language}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${
                  file.status === "completed"
                    ? "bg-emerald-50 text-emerald-800 ring-emerald-100"
                    : file.status === "in-progress"
                      ? "bg-violet-50 text-violet-800 ring-violet-100"
                      : file.status === "revisit"
                        ? "bg-amber-50 text-amber-900 ring-amber-100"
                        : "bg-sky-50 text-sky-800 ring-sky-100"
                }`}
              >
                {statusLabel(file.status)}
              </span>
              {difficultyLabel(file.difficulty) ? (
                <span className="text-xs font-medium text-slate-500">{difficultyLabel(file.difficulty)}</span>
              ) : null}
            </div>
            <h1 className={cn("font-mono text-2xl font-bold tracking-tight sm:text-3xl", theme.titleGradient)}>
              {file.name}
            </h1>
            <p className="text-sm text-slate-600">{topic.title}</p>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-700">{file.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {file.tags.map((tag) => (
                <span key={tag} className={cn("rounded-full border px-3 py-1 text-xs font-medium", theme.sidebarTag)}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row lg:w-auto">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!rawCode}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-300",
                theme.copyButton,
              )}
            >
              {copied ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={2} />
              ) : (
                <Copy className={cn("h-4 w-4", theme.copyIcon)} strokeWidth={2} />
              )}
              {copied ? "Copied" : "Copy code"}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200/90 bg-slate-50/80 px-4 py-2.5 text-sm font-semibold text-slate-500"
              title="UI only — track status in your data file when you update the repo"
            >
              <ClipboardCopy className="h-4 w-4" strokeWidth={2} />
              Mark reviewed
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="min-w-0 space-y-6 lg:col-span-8">
          <FilePrevNext topic={topic} prevFile={prev} nextFile={next} />

          {fetchState.status === "loading" ? (
            <div className="rounded-2xl border border-slate-200/85 bg-white p-10 text-center text-sm text-slate-500">
              Loading source…
            </div>
          ) : loadError ? (
            <div className="rounded-2xl border border-amber-200/90 bg-amber-50/80 p-6 text-sm text-amber-950">
              <p className="font-semibold">Could not load file</p>
              <p className="mt-1 text-amber-900/90">{loadError}</p>
              <p className="mt-2 text-xs text-amber-800/80">
                Expected at <code className="rounded bg-white/80 px-1 font-mono">{file.codePath}</code> under{" "}
                <code className="rounded bg-white/80 px-1 font-mono">public/</code>.
              </p>
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="rounded-2xl border border-slate-200/85 bg-white p-10 text-center text-sm text-slate-500">
                  Preparing code viewer…
                </div>
              }
            >
              <CodeViewer
                code={rawCode}
                language={file.language}
                fileName={file.name}
                headerClassName={theme.codeViewerHeader}
                outerClassName={theme.codeViewerRing}
              />
            </Suspense>
          )}
        </div>
        <div className="min-w-0 lg:col-span-4">
          <FileStudySidebar topic={topic} file={file} relatedFiles={relatedFiles} />
        </div>
      </div>
      </div>
    </div>
  );
}
