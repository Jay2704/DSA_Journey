import { Outlet } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { Navbar } from "@/components/layout/Navbar";
import { dashboardShell } from "@/lib/topicThemes";

export function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main
        className={`flex-1 pb-28 text-[#0a1628] transition-colors duration-300 ease-out sm:pb-32 md:pb-10 ${dashboardShell}`}
      >
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
