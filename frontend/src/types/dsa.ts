export type FileStatus = "completed" | "in-progress" | "revisit" | "reviewing";

export type Difficulty = "easy" | "medium" | "hard" | null;

export type Language = "Python" | "Java";

export interface DsaFile {
  id: string;
  slug: string;
  name: string;
  topicSlug: string;
  topicName: string;
  language: Language;
  shortDescription: string;
  tags: string[];
  concepts: string[];
  status: FileStatus;
  difficulty: Difficulty;
  /** Path under `public/` (fetch as `${base}${codePath}`) */
  codePath: string;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: "layers" | "binary" | "network" | "recursion" | "stack";
  tags: string[];
  featured?: boolean;
  files: DsaFile[];
}

export const appMeta = {
  title: "DSA Journey Explorer",
  tagline: "Interactive view of my DSA learning repository.",
};
