import { Layers, Menu, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "ui-focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
    isActive
      ? "bg-slate-900 text-white ring-1 ring-slate-900/20"
      : "text-slate-600 hover:bg-slate-100/90 hover:text-[#0a1628]",
  );

export function Navbar() {
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [loc.pathname]);

  const home = loc.pathname === "/";
  const searchActive = loc.pathname === "/search";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-[var(--shadow-nav)] backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-900/25 backdrop-blur-[1px] md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="relative z-40 mx-auto flex min-h-[3.25rem] max-w-6xl items-center gap-2 px-3 py-2 sm:min-h-16 sm:gap-3 sm:px-6">
        <div className="relative md:hidden">
          <button
            type="button"
            className="ui-focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#0a1628] transition-colors hover:bg-slate-100/90 active:bg-slate-100 sm:h-11 sm:w-11"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2} />
            ) : (
              <Menu className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2} />
            )}
          </button>
          {menuOpen ? (
            <nav
              id="mobile-nav-menu"
              className="absolute left-0 top-[calc(100%+0.5rem)] z-50 min-w-[12rem] rounded-2xl border border-slate-200/90 bg-white p-2 shadow-lg shadow-slate-900/10"
              aria-label="Mobile"
            >
              <div className="flex flex-col gap-0.5">
                <NavLink to={routes.home} className={navLinkClass} onClick={() => setMenuOpen(false)} end>
                  Dashboard
                </NavLink>
                <NavLink to={routes.topics} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Topics
                </NavLink>
                <NavLink to={routes.search} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Search
                </NavLink>
                <NavLink to={routes.profile} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Profile
                </NavLink>
              </div>
            </nav>
          ) : null}
        </div>

        <div className="hidden h-10 w-10 shrink-0 md:block" aria-hidden />

        <Link
          to={routes.home}
          aria-current={home ? "page" : undefined}
          className={cn(
            "ui-focus-ring min-w-0 max-w-[min(100%,12rem)] flex-1 truncate text-center text-[0.8125rem] font-semibold leading-snug tracking-tight sm:max-w-none sm:text-sm md:flex-none md:rounded-lg md:px-2 md:py-1.5 md:text-[0.95rem] md:text-left",
            home ? "text-slate-900 md:ring-2 md:ring-slate-900/15" : "text-[#0a1628]",
          )}
        >
          DSA Journey Explorer
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          <NavLink to={routes.topics} className={navLinkClass}>
            <span className="flex items-center gap-1.5">
              <Layers className="h-4 w-4 opacity-90" strokeWidth={2} />
              Topics
            </span>
          </NavLink>
          <NavLink to={routes.search} className={navLinkClass}>
            <span className="flex items-center gap-1.5">
              <Search className="h-4 w-4 opacity-90" strokeWidth={2} />
              Search
            </span>
          </NavLink>
          <NavLink to={routes.profile} className={navLinkClass}>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 opacity-90" strokeWidth={2} />
              Profile
            </span>
          </NavLink>
        </nav>

        <Link
          to={routes.search}
          aria-current={searchActive ? "page" : undefined}
          className={cn(
            "ui-focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl sm:h-11 sm:w-11 md:hidden",
            searchActive
              ? "bg-slate-900 text-white ring-2 ring-slate-900/20"
              : "text-[#0a1628] transition-colors hover:bg-slate-100/90 active:bg-slate-100",
          )}
          aria-label="Search"
        >
          <Search className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
