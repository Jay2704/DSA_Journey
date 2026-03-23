import { ContinueLearning } from "@/components/dashboard/ContinueLearning";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { TopicCard } from "@/components/dashboard/TopicCard";
import { computeStats, topics } from "@/data/dsaData";

export function DashboardPage() {
  const stats = computeStats();
  const featured = topics.find((t) => t.featured) ?? topics[0]!;
  const others = topics.filter((t) => t.slug !== featured.slug);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pt-8 sm:space-y-12 sm:px-6 sm:pt-10">
      <HeroSection />
      <StatsCards
        totalProblems={stats.totalProblems}
        topicCount={stats.topicCount}
        languages={stats.languagesUsed}
      />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <ContinueLearning />
        <RecentActivity />
      </div>
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-[#0a1628] sm:text-2xl">Topic paths</h2>
          <p className="mt-1 text-sm text-slate-600">Pick a track and open files in the explorer.</p>
        </div>
        <TopicCard topic={featured} variant="featured" />
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((t) => (
            <TopicCard key={t.slug} topic={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
