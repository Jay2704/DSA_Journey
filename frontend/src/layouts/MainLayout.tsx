import { Outlet } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { Navbar } from "@/components/layout/Navbar";

export function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1 pb-28 text-[#0a1628] sm:pb-32 md:pb-10">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
