import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { DashboardPage } from "@/pages/DashboardPage";
import { FileDetailPage } from "@/pages/FileDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SearchPage } from "@/pages/SearchPage";
import { TopicDetailPage } from "@/pages/TopicDetailPage";
import { TopicsPage } from "@/pages/TopicsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="topics" element={<TopicsPage />} />
        <Route path="topics/:topicSlug" element={<TopicDetailPage />} />
        <Route path="topics/:topicSlug/:fileSlug" element={<FileDetailPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
