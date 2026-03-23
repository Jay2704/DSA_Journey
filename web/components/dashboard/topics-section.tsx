import { topics } from "@/lib/data";
import { TopicCard } from "./topic-card";

export function TopicsSection() {
  const featured = topics.find((t) => t.featured);
  const rest = topics.filter((t) => !t.featured);

  return (
    <section
      id="topics"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="mb-10 flex flex-col gap-3 sm:mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Topics
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Your repo folders as study units—open a path and stay oriented the same
          way your files are.
        </p>
      </div>

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
    </section>
  );
}
