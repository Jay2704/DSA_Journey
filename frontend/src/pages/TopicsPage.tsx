import { TopicCard } from "@/components/dashboard/TopicCard";
import { topics } from "@/data/dsaData";

export function TopicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">Topics</h1>
        <p className="mt-2 text-slate-600">
          Every folder in the repo is a learning path — browse and open real implementations.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {topics.map((t) => (
          <TopicCard key={t.slug} topic={t} variant="default" />
        ))}
      </div>
    </div>
  );
}
