"use client";

import { Home, Layers, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/topics", label: "Topics", icon: Layers },
  { href: "/search", label: "Search", icon: Search },
  { href: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_24px_rgba(15,23,42,0.06)] backdrop-blur supports-[backdrop-filter]:bg-surface/90 md:px-8"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={
                active
                  ? "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl bg-accent px-3 py-2 text-white shadow-sm transition"
                  : "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-muted transition hover:bg-slate-100 hover:text-foreground"
              }
            >
              <Icon className="h-5 w-5 shrink-0" strokeWidth={active ? 2.25 : 2} />
              <span className="truncate text-[10px] font-medium sm:text-xs">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
