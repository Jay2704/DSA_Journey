import { Menu, Search } from "lucide-react";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition hover:bg-slate-100"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" strokeWidth={2} />
        </button>
        <p className="text-center text-sm font-semibold tracking-tight text-foreground sm:text-base">
          DSA Journey Explorer
        </p>
        <Link
          href="/search"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition hover:bg-slate-100"
          aria-label="Search"
        >
          <Search className="h-5 w-5" strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
