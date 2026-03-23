import { TopicCard } from "@/components/dashboard/topic-card";
import { topics } from "@/lib/data";

export const metadata = {
  title: "Topics · DSA Journey Explorer",
};

export default function TopicsPage() {
  const featured = topics.find((t) => t.featured);
  const rest = topics.filter((t) => !t.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <header className="mb-10 max-w-2xl sm:mb-12">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          All topics
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Deep links use topic ids (e.g. <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">#graphs</code>).
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
        {featured ? (
          <div className="min-w-0 lg:col-span-7">
            <TopicCard topic={featured} variant="featured" />
          </div>
        ) : null}
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:col-span-5">
          {rest.map((topic) => (
            <TopicCard key={topic.id} topic={topic} variant="default" />
          ))}
        </div>
      </div>
    </div>
  );
}
