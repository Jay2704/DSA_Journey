import type { LucideIcon } from "lucide-react";
import {
  GitBranch,
  Layers,
  LayoutGrid,
  Network,
  Repeat2,
} from "lucide-react";
import type { TopicIconId } from "@/lib/types";

const iconMap: Record<TopicIconId, LucideIcon> = {
  "layout-grid": LayoutGrid,
  "git-branch": GitBranch,
  network: Network,
  repeat: Repeat2,
  layers: Layers,
};

type Props = {
  id: TopicIconId;
  className?: string;
  strokeWidth?: number;
};

export function TopicIcon({ id, className, strokeWidth = 2 }: Props) {
  const Icon = iconMap[id];
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
