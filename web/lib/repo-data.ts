import type { RawTopic } from "./types";

/**
 * Static snapshot of the DSA_Journey repo (topic folders + files).
 * Descriptions are inferred from filenames only—no full problem statements.
 */
export const rawTopics: RawTopic[] = [
  {
    id: "arrays",
    title: "Arrays",
    folder: "arrays/",
    description:
      "Indexing, in-place moves, and two-pointer style work on linear sequences—foundation for many patterns.",
    icon: "layout-grid",
    accent: { label: "blue", solid: "#2563eb", soft: "#eff6ff" },
    languages: ["Python"],
    tags: ["Two pointers", "In-place", "Indexing"],
    featured: true,
    files: [
      {
        id: "arrays-check-sorted",
        name: "check_sorted.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Check whether values are sorted; warm-up for comparisons and a single pass.",
        status: "completed",
        difficulty: "easy",
        patterns: ["Linear scan", "Sorting check"],
      },
      {
        id: "arrays-largest-number",
        name: "largest_number.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Build the largest number from parts—ordering and string comparison practice.",
        status: "in-progress",
        difficulty: "medium",
        patterns: ["Custom sort", "Greedy ordering"],
      },
      {
        id: "arrays-second-largest",
        name: "second_largest.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Track the top two values—simple selection logic without full sorting.",
        status: "completed",
        difficulty: "easy",
        patterns: ["Scan", "Tracking extrema"],
      },
      {
        id: "arrays-missing-element",
        name: "missing_element.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Find a missing value in a range—ties to indices, XOR, or sum ideas.",
        status: "reviewing",
        difficulty: "easy",
        patterns: ["Index mapping", "Math"],
      },
      {
        id: "arrays-move-zeros",
        name: "move_zeros.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Shift zeros to one end while preserving order—partition / two-pointer style.",
        status: "reviewing",
        difficulty: "medium",
        patterns: ["Two pointers", "Stable partition"],
      },
      {
        id: "arrays-remove-duplicates",
        name: "remove_duplicates.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Deduplicate in-place on a sorted array—slow/fast pointer pattern.",
        status: "completed",
        difficulty: "easy",
        patterns: ["Two pointers"],
      },
      {
        id: "arrays-rotate-array",
        name: "rotate_array.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "Rotate by k steps—reverse tricks or index mapping for cyclic shifts.",
        status: "in-progress",
        difficulty: "medium",
        patterns: ["Reverse", "Modulo indexing"],
      },
      {
        id: "arrays-subtitle-convertor",
        name: "subtitle_convertor.py",
        topic: "arrays",
        language: "Python",
        shortDescription:
          "String/list handling around subtitles—formatting and parsing practice.",
        status: "in-progress",
        difficulty: null,
        patterns: ["Strings", "Parsing"],
      },
    ],
  },
  {
    id: "binary-trees",
    title: "Binary Trees",
    folder: "Binary_Trees/",
    description:
      "Tree-shaped state, BST rules, and language-side practice—Python and Java side by side.",
    icon: "git-branch",
    accent: { label: "emerald", solid: "#059669", soft: "#ecfdf5" },
    languages: ["Python", "Java"],
    tags: ["BST", "DFS", "Recursion"],
    files: [
      {
        id: "binary-trees-bst-py",
        name: "bst.py",
        topic: "binary-trees",
        language: "Python",
        shortDescription:
          "BST operations in Python—structure, search path, and recursive routines.",
        status: "revisit",
        difficulty: "medium",
        patterns: ["BST", "Recursion"],
      },
      {
        id: "binary-trees-bst-java",
        name: "BST.java",
        topic: "binary-trees",
        language: "Java",
        shortDescription:
          "Same BST themes in Java—classes, references, and iterative/recursive style.",
        status: "completed",
        difficulty: "medium",
        patterns: ["BST", "OOP"],
      },
    ],
  },
  {
    id: "graphs",
    title: "Graphs",
    folder: "Graphs/",
    description:
      "Adjacency views, traversals, components, and grid BFS—graph fluency for interviews.",
    icon: "network",
    accent: { label: "violet", solid: "#7c3aed", soft: "#f5f3ff" },
    languages: ["Python"],
    tags: ["BFS", "DFS", "Components"],
    files: [
      {
        id: "graphs-graph",
        name: "graph.py",
        topic: "graphs",
        language: "Python",
        shortDescription:
          "Graph representation helpers—building blocks before traversals.",
        status: "reviewing",
        difficulty: "medium",
        patterns: ["Adjacency", "Modeling"],
      },
      {
        id: "graphs-bfs",
        name: "bfs_traversal.py",
        topic: "graphs",
        language: "Python",
        shortDescription:
          "Breadth-first traversal—queue, levels, shortest steps on unweighted graphs.",
        status: "completed",
        difficulty: "medium",
        patterns: ["BFS", "Queue"],
      },
      {
        id: "graphs-dfs",
        name: "dfs_traversal.py",
        topic: "graphs",
        language: "Python",
        shortDescription:
          "Depth-first traversal—recursion or explicit stack over edges.",
        status: "completed",
        difficulty: "medium",
        patterns: ["DFS", "Stack"],
      },
      {
        id: "graphs-provinces",
        name: "number_of_provinces.py",
        topic: "graphs",
        language: "Python",
        shortDescription:
          "Count connected components—union-find or repeated BFS/DFS launches.",
        status: "completed",
        difficulty: "medium",
        patterns: ["Components", "Union-find"],
      },
      {
        id: "graphs-rotten",
        name: "rotten_oranges.py",
        topic: "graphs",
        language: "Python",
        shortDescription:
          "Multi-source BFS on a grid—layers of infection / time-to-reach style.",
        status: "revisit",
        difficulty: "medium",
        patterns: ["Grid BFS", "Multi-source"],
      },
    ],
  },
  {
    id: "recursion",
    title: "Recursion",
    folder: "recursion/",
    description:
      "Short drill files (v1–v8) for recursive structure, base cases, and call-stack intuition.",
    icon: "repeat",
    accent: { label: "amber", solid: "#d97706", soft: "#fffbeb" },
    languages: ["Python"],
    tags: ["Recursion", "Base case", "Drills"],
    files: [
      {
        id: "recursion-v1",
        name: "v1.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "First numbered recursion practice file in the folder—structure and drills only.",
        status: "completed",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v2",
        name: "v2.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Second numbered recursion practice file—structure and drills only.",
        status: "completed",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v3",
        name: "v3.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Third numbered recursion practice file—structure and drills only.",
        status: "in-progress",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v4",
        name: "v4.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Fourth numbered recursion practice file—structure and drills only.",
        status: "in-progress",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v5",
        name: "v5.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Fifth numbered recursion practice file—structure and drills only.",
        status: "reviewing",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v6",
        name: "v6.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Sixth numbered recursion practice file in the folder—structure and drills only.",
        status: "reviewing",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v7",
        name: "v7.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Seventh numbered recursion practice file—structure and drills only.",
        status: "revisit",
        difficulty: null,
        patterns: ["Recursion"],
      },
      {
        id: "recursion-v8",
        name: "v8.py",
        topic: "recursion",
        language: "Python",
        shortDescription:
          "Eighth numbered recursion practice file—structure and drills only.",
        status: "revisit",
        difficulty: null,
        patterns: ["Recursion"],
      },
    ],
  },
  {
    id: "stacks",
    title: "Stacks",
    folder: "stacks/",
    description:
      "LIFO structure, monotonic stacks, and histogram-style problems—high-signal interview patterns.",
    icon: "layers",
    accent: { label: "rose", solid: "#e11d48", soft: "#fff1f2" },
    languages: ["Python"],
    tags: ["Monotonic stack", "Parentheses", "Histogram"],
    files: [
      {
        id: "stacks-stack",
        name: "stack.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Core stack ADT—push, pop, and order discipline.",
        status: "completed",
        difficulty: "easy",
        patterns: ["Stack ADT"],
      },
      {
        id: "stacks-stack-operations",
        name: "stack_operations.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Mechanical stack operations—good for warming up implementations.",
        status: "completed",
        difficulty: "easy",
        patterns: ["Stack ADT"],
      },
      {
        id: "stacks-min-stack",
        name: "min_stack.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Track minimum in amortized O(1)—auxiliary stack or paired values.",
        status: "completed",
        difficulty: "medium",
        patterns: ["Augmented stack", "Design"],
      },
      {
        id: "stacks-valid-paranthesis",
        name: "valid_paranthesis.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Match bracket types in order—classic stack validation.",
        status: "reviewing",
        difficulty: "easy",
        patterns: ["Parentheses", "Stack"],
      },
      {
        id: "stacks-nge",
        name: "next_greater_element.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Next greater on the right—monotonic decreasing stack pattern.",
        status: "in-progress",
        difficulty: "medium",
        patterns: ["Monotonic stack"],
      },
      {
        id: "stacks-asteroid",
        name: "asteroid_collision.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Simulate collisions with sign and size—stack of surviving bodies.",
        status: "in-progress",
        difficulty: "medium",
        patterns: ["Simulation", "Stack"],
      },
      {
        id: "stacks-histogram",
        name: "largest_rectangle_histogram.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Max rectangle in a bar chart—heights with monotonic stack + widths.",
        status: "revisit",
        difficulty: "hard",
        patterns: ["Monotonic stack", "Histogram"],
      },
      {
        id: "stacks-trapping",
        name: "trapping_rain_water.py",
        topic: "stacks",
        language: "Python",
        shortDescription:
          "Compute trapped water between bars—two pointers or stack view of walls.",
        status: "revisit",
        difficulty: "hard",
        patterns: ["Two pointers", "Stack"],
      },
    ],
  },
];
