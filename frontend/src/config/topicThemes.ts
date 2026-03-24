/**
 * Dynamic per-topic UI tokens. Use getTopicTheme(slug) everywhere — never hardcode blue.
 */
export type TopicTheme = {
  primary: string;
  accent: string;
  light: string;
  border: string;
  text: string;
  chip: string;
  button: string;
  /** Full Tailwind classes for hover border on nav rows (JIT must see literal strings) */
  hoverBorder: string;
};

export const topicThemes: Record<string, TopicTheme> = {
  arrays: {
    primary: "blue",
    accent: "bg-blue-600",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    chip: "border border-blue-200 bg-blue-100 text-blue-800",
    button: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25",
    hoverBorder: "hover:border-blue-200",
  },
  graphs: {
    primary: "green",
    accent: "bg-green-600",
    light: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    chip: "border border-green-200 bg-green-100 text-green-800",
    button: "bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-500/25",
    hoverBorder: "hover:border-green-200",
  },
  "binary-trees": {
    primary: "purple",
    accent: "bg-purple-600",
    light: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    chip: "border border-purple-200 bg-purple-100 text-purple-800",
    button: "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/25",
    hoverBorder: "hover:border-purple-200",
  },
  recursion: {
    primary: "orange",
    accent: "bg-orange-600",
    light: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    chip: "border border-orange-200 bg-orange-100 text-orange-800",
    button: "bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-500/25",
    hoverBorder: "hover:border-orange-200",
  },
  stacks: {
    primary: "red",
    accent: "bg-red-600",
    light: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    chip: "border border-red-200 bg-red-100 text-red-800",
    button: "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/25",
    hoverBorder: "hover:border-red-200",
  },
};

const DEFAULT_SLUG = "arrays";

export function getTopicTheme(topicSlug: string | undefined): TopicTheme {
  if (!topicSlug) return topicThemes[DEFAULT_SLUG]!;
  return topicThemes[topicSlug] ?? topicThemes[DEFAULT_SLUG]!;
}

const topicTitleToSlug: Record<string, string> = {
  Arrays: "arrays",
  "Binary Trees": "binary-trees",
  Graphs: "graphs",
  Recursion: "recursion",
  Stacks: "stacks",
};

export function getTopicThemeFromTopicTitle(title: string): TopicTheme {
  return getTopicTheme(topicTitleToSlug[title] ?? "");
}

/** Dashboard shell — multi-tint wash, not a single blue field */
export const dashboardShell =
  "bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgb(239_246_255/0.9),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_40%,rgb(220_252_231/0.45),transparent_48%),radial-gradient(ellipse_70%_50%_at_0%_60%,rgb(243_232_255/0.4),transparent_45%),linear-gradient(to_bottom,rgb(248_250_252),rgb(255_255_255))]";
