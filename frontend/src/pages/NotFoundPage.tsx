import { Home, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "@/lib/routes";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0a1628]">Page not found</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        That route does not exist in this single-page app.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          to={routes.home}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/25 transition hover:brightness-[1.03]"
        >
          <Home className="h-4 w-4" strokeWidth={2} />
          Dashboard
        </Link>
        <Link
          to={routes.topics}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/85 bg-white px-5 py-2.5 text-sm font-semibold text-[#0a1628] shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          <Layers className="h-4 w-4 text-slate-700" strokeWidth={2} />
          Topics
        </Link>
      </div>
    </div>
  );
}
