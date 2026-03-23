import { HeroSection } from "@/components/dashboard/hero-section";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatsRow } from "@/components/dashboard/stats-row";
import { TopicsSection } from "@/components/dashboard/topics-section";

export default function HomePage() {
  return (
    <div className="min-h-full">
      <HeroSection />
      <StatsRow />
      <TopicsSection />
      <RecentActivity />
    </div>
  );
}
