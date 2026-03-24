import { Home, Layers, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "@/lib/routes";

const items = [
  { to: routes.home, label: "Dashboard", icon: Home },
  { to: routes.topics, label: "Topics", icon: Layers },
  { to: routes.search, label: "Search", icon: Search },
  { to: routes.profile, label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = useLocation().pathname;

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <nav
        className="pointer-events-auto mx-auto max-w-lg rounded-[1.35rem] border border-slate-200/85 bg-white/95 px-1.5 py-1.5 shadow-[var(--shadow-dock)] backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
        aria-label="Primary"
      >
        <div className="flex items-stretch justify-between gap-0.5">
          {items.map(({ to, label, icon: Icon }) => {
            const active =
              to === "/"
                ? pathname === "/"
                : pathname === to || pathname.startsWith(`${to}/`);

            return (
              <Link
                key={to}
                to={to}
                className={
                  active
                    ? "flex min-h-[3.25rem] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 px-2 py-2 text-white shadow-md shadow-slate-900/25 transition duration-200 active:brightness-[0.97]"
                    : "flex min-h-[3.25rem] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl px-2 py-2 text-slate-500 transition-colors hover:bg-slate-50/90 hover:text-[#0a1628] active:bg-slate-100"
                }
              >
                <Icon
                  className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]"
                  strokeWidth={active ? 2.25 : 2}
                />
                <span className="max-w-full truncate text-[10px] font-semibold leading-tight sm:text-[11px]">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
