import { UserRound } from "lucide-react";

export const metadata = {
  title: "Profile · DSA Journey Explorer",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-accent shadow-sm">
        <UserRound className="h-7 w-7" strokeWidth={2} />
      </span>
      <h1 className="mt-6 text-xl font-bold text-foreground sm:text-2xl">
        Learning profile
      </h1>
      <p className="mt-2 text-sm text-muted sm:text-base">
        A place for streaks, notes, and goals—placeholder until you connect real
        data.
      </p>
    </div>
  );
}
