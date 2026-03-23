import { FileCode2 } from "lucide-react";
import { Link } from "react-router-dom";
import { filePath } from "@/lib/routes";
import { getTopicTheme } from "@/lib/topicThemes";
import { cn } from "@/lib/utils";
import type { DsaFile, Topic } from "@/types/dsa";

type Props = {
  topic: Topic;
  file: DsaFile;
  relatedFiles: DsaFile[];
};

export function FileStudySidebar({ topic, file, relatedFiles }: Props) {
  const theme = getTopicTheme(topic.slug);
  return (
    <div className={cn("space-y-6", theme.transition)}>
      <section className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)]">
        <h3 className="text-sm font-semibold text-[#0a1628]">Concepts practiced</h3>
        {file.concepts.length ? (
          <ul className="mt-3 space-y-2">
            {file.concepts.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-slate-700">
                <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", theme.sidebarConceptDot)} />
                {c}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            No concepts listed. Extend metadata in <code className="rounded bg-slate-100 px-1 font-mono text-xs">dsaData.ts</code>.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)]">
        <h3 className="text-sm font-semibold text-[#0a1628]">Patterns / tags</h3>
        {file.tags.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {file.tags.map((tag) => (
              <span
                key={tag}
                className={cn("rounded-full border px-3 py-1 text-xs font-medium", theme.sidebarTag)}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-500">No tags on this file yet.</p>
        )}
      </section>

      <section className="rounded-2xl border border-dashed border-slate-200/90 bg-slate-50/60 p-5">
        <h3 className="text-sm font-semibold text-[#0a1628]">Notes</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          Space for your own insights — keep this repo as the source of truth and jot takeaways offline or in your editor.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[var(--shadow-card)]">
        <h3 className="text-sm font-semibold text-[#0a1628]">Related files</h3>
        {relatedFiles.length ? (
          <ul className="mt-3 space-y-2">
            {relatedFiles.slice(0, 8).map((f) => (
              <li key={f.id}>
                <Link
                  to={filePath(topic.slug, f.slug)}
                  className="flex min-w-0 items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                >
                  <FileCode2 className={cn("h-4 w-4 shrink-0", theme.sidebarFileIcon)} strokeWidth={2} />
                  <span className="truncate font-mono text-xs font-medium">{f.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">This is the only file in this topic.</p>
        )}
      </section>
    </div>
  );
}
