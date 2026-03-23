import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { continueLearningFileIds, getFileById } from "@/data/dsaData";
import { filePath } from "@/lib/routes";
import { statusLabel } from "@/lib/utils";

export function ContinueLearning() {
  const items = continueLearningFileIds
    .map((id) => getFileById(id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <section className="rounded-[1.65rem] border border-slate-200/85 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-[#2563eb]" strokeWidth={2} />
        <h2 className="text-lg font-semibold text-[#0a1628]">Continue learning</h2>
      </div>
      <p className="mt-1 text-sm text-slate-600">Files marked in-progress, revisit, or worth another pass.</p>
      <ul className="mt-6 space-y-3">
        {items.map((f) => (
          <li key={f.id}>
            <Link
              to={filePath(f.topicSlug, f.slug)}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 transition hover:border-blue-200/90 hover:bg-blue-50/60"
            >
              <div className="min-w-0">
                <p className="truncate font-mono text-sm font-semibold text-slate-900">{f.name}</p>
                <p className="truncate text-xs text-slate-500">
                  {f.topicName} · {statusLabel(f.status)}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#2563eb]" strokeWidth={2} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
