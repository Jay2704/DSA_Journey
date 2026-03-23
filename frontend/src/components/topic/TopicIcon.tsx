import { Boxes, GitBranch, LayoutGrid, Network, Recycle } from "lucide-react";
import type { Topic } from "@/types/dsa";
import { cn } from "@/lib/utils";

const map = {
  layers: LayoutGrid,
  binary: GitBranch,
  network: Network,
  recursion: Recycle,
  stack: Boxes,
} as const;

type Props = {
  icon: Topic["icon"];
  className?: string;
  strokeWidth?: number;
};

export function TopicIcon({ icon, className, strokeWidth = 2 }: Props) {
  const Icon = map[icon];
  return <Icon className={cn("shrink-0", className)} strokeWidth={strokeWidth} aria-hidden />;
}
