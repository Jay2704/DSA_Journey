export type FileStatus =
  | "reviewing"
  | "completed"
  | "revisit"
  | "in-progress";

export type Difficulty = "easy" | "medium" | "hard" | null;

export type TopicIconId = "layout-grid" | "git-branch" | "network" | "repeat" | "layers";

export type TopicAccent = {
  /** Human label for themes / debugging */
  label: string;
  /** Primary accent (icons, highlights) */
  solid: string;
  /** Soft fill (chips, subtle backgrounds) */
  soft: string;
};

export type RepoFile = {
  id: string;
  name: string;
  /** Matches parent topic `id` */
  topic: string;
  language: "Python" | "Java";
  shortDescription: string;
  status: FileStatus;
  difficulty: Difficulty;
  /** Inferred patterns from filename / common usage—no full statements */
  patterns: string[];
};

export type RawTopic = {
  id: string;
  title: string;
  folder: string;
  description: string;
  icon: TopicIconId;
  accent: TopicAccent;
  languages: ("Python" | "Java")[];
  tags: string[];
  featured?: boolean;
  files: RepoFile[];
};

export type Topic = RawTopic & {
  totalFiles: number;
};
