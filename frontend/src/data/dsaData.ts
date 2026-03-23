import type { DsaFile, Topic } from "@/types/dsa";

const PY = "Python" as const;
const JV = "Java" as const;

function file(
  topicSlug: string,
  topicName: string,
  name: string,
  slug: string,
  language: DsaFile["language"],
  codePath: string,
  opts: Partial<
    Pick<DsaFile, "shortDescription" | "tags" | "concepts" | "status" | "difficulty">
  > = {},
): DsaFile {
  const stem = name.replace(/\.[^.]+$/, "");
  const human = stem.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    id: `${topicSlug}-${slug}`,
    slug,
    name,
    topicSlug,
    topicName,
    language,
    codePath,
    shortDescription: opts.shortDescription ?? `Study notes and implementation: ${human}.`,
    tags: opts.tags !== undefined ? opts.tags : [topicName, language],
    concepts: opts.concepts !== undefined ? opts.concepts : [human],
    status: opts.status ?? "completed",
    difficulty: opts.difficulty ?? null,
  };
}

const arraysFiles: DsaFile[] = [
  file("arrays", "Arrays", "check_sorted.py", "check-sorted", PY, "code/arrays/check_sorted.py", {
    shortDescription: "Verify whether an array is sorted in non-decreasing order.",
    tags: ["Arrays", "Basics", PY],
    concepts: ["Iteration", "Ordering"],
    status: "completed",
    difficulty: "easy",
  }),
  file("arrays", "Arrays", "largest_number.py", "largest-number", PY, "code/arrays/largest_number.py", {
    shortDescription: "Find the largest element in an array.",
    tags: ["Arrays", PY],
    concepts: ["Linear scan"],
    status: "completed",
    difficulty: "easy",
  }),
  file("arrays", "Arrays", "second_largest.py", "second-largest", PY, "code/arrays/second_largest.py", {
    shortDescription: "Find the second largest distinct value.",
    tags: ["Arrays", PY],
    concepts: ["Two-pass", "Tracking maxima"],
    status: "in-progress",
    difficulty: "easy",
  }),
  file("arrays", "Arrays", "missing_element.py", "missing-element", PY, "code/arrays/missing_element.py", {
    shortDescription: "Locate a missing number in a sequence pattern.",
    tags: ["Arrays", PY],
    concepts: ["Hashing", "XOR"],
    status: "completed",
    difficulty: "medium",
  }),
  file("arrays", "Arrays", "move_zeros.py", "move-zeros", PY, "code/arrays/move_zeros.py", {
    shortDescription: "Move all zeros to the end while preserving order of non-zeros.",
    tags: ["Arrays", "Two pointers", PY],
    concepts: ["In-place rearrangement"],
    status: "reviewing",
    difficulty: "medium",
  }),
  file("arrays", "Arrays", "remove_duplicates.py", "remove-duplicates", PY, "code/arrays/remove_duplicates.py", {
    shortDescription: "Remove duplicates from a sorted array.",
    tags: ["Arrays", PY],
    concepts: ["Two pointers"],
    status: "completed",
    difficulty: "easy",
  }),
  file("arrays", "Arrays", "rotate_array.py", "rotate-array", PY, "code/arrays/rotate_array.py", {
    shortDescription: "Rotate an array by k positions.",
    tags: ["Arrays", PY],
    concepts: ["Reversal trick", "Modulo indexing"],
    status: "completed",
    difficulty: "medium",
  }),
  file("arrays", "Arrays", "subtitle_convertor.py", "subtitle-convertor", PY, "code/arrays/subtitle_convertor.py", {
    shortDescription: "Utility for subtitle / text conversion (array or string handling).",
    tags: ["Arrays", "Strings", PY],
    concepts: ["Parsing"],
    status: "revisit",
    difficulty: null,
  }),
];

const binaryTreesFiles: DsaFile[] = [
  file(
    "binary-trees",
    "Binary Trees",
    "bst.py",
    "bst-py",
    PY,
    "code/binary-trees/bst.py",
    {
      shortDescription: "Binary search tree operations in Python.",
      tags: ["Trees", "BST", PY],
      concepts: ["Insert", "Search", "Traversal"],
      status: "in-progress",
      difficulty: "medium",
    },
  ),
  file(
    "binary-trees",
    "Binary Trees",
    "BST.java",
    "bst-java",
    JV,
    "code/binary-trees/BST.java",
    {
      shortDescription: "Binary search tree reference implementation in Java.",
      tags: ["Trees", "BST", JV],
      concepts: ["OOP", "Recursion"],
      status: "completed",
      difficulty: "medium",
    },
  ),
];

const graphsFiles: DsaFile[] = [
  file("graphs", "Graphs", "graph.py", "graph", PY, "code/graphs/graph.py", {
    shortDescription: "Graph representation (adjacency list / basics).",
    tags: ["Graphs", PY],
    concepts: ["Adjacency list"],
    status: "completed",
    difficulty: "easy",
  }),
  file("graphs", "Graphs", "bfs_traversal.py", "bfs-traversal", PY, "code/graphs/bfs_traversal.py", {
    shortDescription: "Breadth-first traversal from a source node.",
    tags: ["Graphs", "BFS", PY],
    concepts: ["Queue", "Level order"],
    status: "completed",
    difficulty: "medium",
  }),
  file("graphs", "Graphs", "dfs_traversal.py", "dfs-traversal", PY, "code/graphs/dfs_traversal.py", {
    shortDescription: "Depth-first traversal (recursive / iterative).",
    tags: ["Graphs", "DFS", PY],
    concepts: ["Stack", "Recursion"],
    status: "completed",
    difficulty: "medium",
  }),
  file("graphs", "Graphs", "number_of_provinces.py", "number-of-provinces", PY, "code/graphs/number_of_provinces.py", {
    shortDescription: "Count connected components (disjoint sets of nodes).",
    tags: ["Graphs", "Union-find", PY],
    concepts: ["Connected components"],
    status: "revisit",
    difficulty: "medium",
  }),
  file("graphs", "Graphs", "rotten_oranges.py", "rotten-oranges", PY, "code/graphs/rotten_oranges.py", {
    shortDescription: "Multi-source BFS on a grid (time to rot all oranges).",
    tags: ["Graphs", "BFS", "Grid", PY],
    concepts: ["Multi-source BFS"],
    status: "reviewing",
    difficulty: "medium",
  }),
];

const recursionFiles: DsaFile[] = [1, 2, 3, 4, 5, 6, 7, 8].map((n) =>
  file(
    "recursion",
    "Recursion",
    `v${n}.py`,
    `v${n}`,
    PY,
    `code/recursion/v${n}.py`,
    {
      shortDescription: `Recursion practice set — variant ${n}: subproblems and base cases.`,
      tags: ["Recursion", PY],
      concepts: ["Base case", "Recursive step"],
      status: n <= 3 ? "completed" : n <= 5 ? "in-progress" : "reviewing",
      difficulty: "medium",
    },
  ),
);

const stacksFiles: DsaFile[] = [
  file("stacks", "Stacks", "stack.py", "stack", PY, "code/stacks/stack.py", {
    shortDescription: "Stack ADT — push, pop, peek.",
    tags: ["Stack", PY],
    concepts: ["LIFO"],
    status: "completed",
    difficulty: "easy",
  }),
  file("stacks", "Stacks", "stack_operations.py", "stack-operations", PY, "code/stacks/stack_operations.py", {
    shortDescription: "Common stack operation patterns.",
    tags: ["Stack", PY],
    concepts: ["Operations"],
    status: "completed",
    difficulty: "easy",
  }),
  file("stacks", "Stacks", "min_stack.py", "min-stack", PY, "code/stacks/min_stack.py", {
    shortDescription: "Min-stack supporting O(1) min query.",
    tags: ["Stack", "Design", PY],
    concepts: ["Auxiliary stack"],
    status: "completed",
    difficulty: "medium",
  }),
  file("stacks", "Stacks", "valid_paranthesis.py", "valid-paranthesis", PY, "code/stacks/valid_paranthesis.py", {
    shortDescription: "Check balanced parentheses with a stack.",
    tags: ["Stack", "Strings", PY],
    concepts: ["Matching pairs"],
    status: "reviewing",
    difficulty: "easy",
  }),
  file("stacks", "Stacks", "next_greater_element.py", "next-greater-element", PY, "code/stacks/next_greater_element.py", {
    shortDescription: "Next greater element using monotonic stack.",
    tags: ["Stack", "Monotonic", PY],
    concepts: ["NGE"],
    status: "in-progress",
    difficulty: "medium",
  }),
  file("stacks", "Stacks", "asteroid_collision.py", "asteroid-collision", PY, "code/stacks/asteroid_collision.py", {
    shortDescription: "Simulate asteroid collisions on a line.",
    tags: ["Stack", "Simulation", PY],
    concepts: ["Collision resolution"],
    status: "completed",
    difficulty: "medium",
  }),
  file("stacks", "Stacks", "largest_rectangle_histogram.py", "largest-rectangle-histogram", PY, "code/stacks/largest_rectangle_histogram.py", {
    shortDescription: "Largest rectangle in a histogram — classic stack problem.",
    tags: ["Stack", "Histogram", PY],
    concepts: ["Monotonic stack", "Heights"],
    status: "revisit",
    difficulty: "hard",
  }),
  file("stacks", "Stacks", "trapping_rain_water.py", "trapping-rain-water", PY, "code/stacks/trapping_rain_water.py", {
    shortDescription: "Trapped rainwater between bars (two pointers or stack).",
    tags: ["Stack", "Two pointers", PY],
    concepts: ["Water fill"],
    status: "completed",
    difficulty: "hard",
  }),
];

export const topics: Topic[] = [
  {
    id: "arrays",
    slug: "arrays",
    title: "Arrays",
    description:
      "Foundational array patterns: scanning, two pointers, rotation, and in-place moves.",
    icon: "layers",
    tags: ["Fundamentals", "Two pointers"],
    featured: true,
    files: arraysFiles,
  },
  {
    id: "binary-trees",
    slug: "binary-trees",
    title: "Binary Trees",
    description: "BST structure, traversals, and language-side reference implementations.",
    icon: "binary",
    tags: ["Trees", "Recursion"],
    files: binaryTreesFiles,
  },
  {
    id: "graphs",
    slug: "graphs",
    title: "Graphs",
    description: "BFS, DFS, grids, and connected-component style problems.",
    icon: "network",
    tags: ["BFS", "DFS"],
    files: graphsFiles,
  },
  {
    id: "recursion",
    slug: "recursion",
    title: "Recursion",
    description: "A focused drill set for recursive thinking and base cases.",
    icon: "recursion",
    tags: ["Drills", "Base cases"],
    files: recursionFiles,
  },
  {
    id: "stacks",
    slug: "stacks",
    title: "Stacks",
    description: "Stack ADT, monotonic stacks, and classic interview patterns.",
    icon: "stack",
    tags: ["LIFO", "Monotonic stack"],
    files: stacksFiles,
  },
];

export function getAllFiles(): DsaFile[] {
  return topics.flatMap((t) => t.files);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getFileBySlugs(topicSlug: string, fileSlug: string): DsaFile | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.files.find((f) => f.slug === fileSlug);
}

export function getFileById(id: string): DsaFile | undefined {
  return getAllFiles().find((f) => f.id === id);
}

export function getAdjacentFiles(topicSlug: string, fileSlug: string): {
  prev: DsaFile | null;
  next: DsaFile | null;
} {
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return { prev: null, next: null };
  const ordered = topic.files;
  const idx = ordered.findIndex((f) => f.slug === fileSlug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ordered[idx - 1]! : null,
    next: idx < ordered.length - 1 ? ordered[idx + 1]! : null,
  };
}

/** Dashboard: continue learning picks */
export const continueLearningFileIds = [
  "arrays-move-zeros",
  "graphs-rotten-oranges",
  "stacks-valid-paranthesis",
];

/** Static recent activity lines (can tie to metadata later) */
export const recentActivity = [
  { label: "Reviewing", file: "move_zeros.py", topic: "Arrays" },
  { label: "Revisiting", file: "rotten_oranges.py", topic: "Graphs" },
  { label: "Reading", file: "valid_paranthesis.py", topic: "Stacks" },
  { label: "In progress", file: "bst.py", topic: "Binary Trees" },
];

export function computeStats() {
  const files = getAllFiles();
  const langs = new Map<string, number>();
  for (const f of files) {
    langs.set(f.language, (langs.get(f.language) ?? 0) + 1);
  }
  return {
    totalProblems: files.length,
    topicCount: topics.length,
    languagesUsed: [...langs.keys()],
    languageCounts: Object.fromEntries(langs) as Record<string, number>,
  };
}
