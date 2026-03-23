import { Search } from "lucide-react";

export const metadata = {
  title: "Search · DSA Journey Explorer",
};

export default function SearchPage() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
        <Search className="h-7 w-7" strokeWidth={2} />
      </span>
      <h1 className="mt-6 text-xl font-bold text-foreground sm:text-2xl">
        Search coming soon
      </h1>
      <p className="mt-2 text-sm text-muted sm:text-base">
        This will index filenames and paths from your repo when you wire it up.
        For now, browse topics from the dashboard or Topics tab.
      </p>
    </div>
  );
}
