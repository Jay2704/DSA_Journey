import { rawTopics } from "./repo-data";
import type { RepoFile, Topic } from "./types";

export type {
  Difficulty,
  FileStatus,
  RepoFile,
  Topic,
  TopicAccent,
  TopicIconId,
} from "./types";

function withTotals(raw: (typeof rawTopics)[number]): Topic {
  return {
    ...raw,
    totalFiles: raw.files.length,
  };
}

export const topics: Topic[] = rawTopics.map(withTotals);

export const allFiles: RepoFile[] = topics.flatMap((t) => t.files);

export const stats = {
  totalProblems: allFiles.length,
  topicsCovered: topics.map((t) => t.title),
  languages: ["Python", "Java"] as const,
  topicCount: topics.length,
  languageCount: 2,
};

export type ActivityEntry = {
  id: string;
  kind: "SUCCESS" | "FAILED" | "REVIEW";
  message: string;
  time: string;
};

export const recentActivity: ActivityEntry[] = [
  {
    id: "1",
    kind: "SUCCESS",
    message: 'Reviewing "move_zeros.py"',
    time: "2h ago",
  },
  {
    id: "2",
    kind: "SUCCESS",
    message: 'Reading "valid_paranthesis.py"',
    time: "5h ago",
  },
  {
    id: "3",
    kind: "FAILED",
    message: 'Testing "bst.py"',
    time: "Yesterday",
  },
  {
    id: "4",
    kind: "REVIEW",
    message: 'Revisiting "rotten_oranges.py"',
    time: "Yesterday",
  },
];

export function getTopicById(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function getFilesByTopic(topicId: string): RepoFile[] {
  return allFiles.filter((f) => f.topic === topicId);
}
