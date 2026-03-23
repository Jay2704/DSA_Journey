/**
 * Light, colourful accents per topic (data structure).
 * Use with Tailwind class names only.
 */
export type TopicTheme = {
  /** Soft page backdrop for topic / file routes */
  pageShell: string;
  /** Featured (large) topic card */
  featuredBg: string;
  featuredBorder: string;
  featuredOrb: string;
  featuredOrb2: string;
  svgAccent: string;
  iconFeatured: string;
  iconDefault: string;
  tagChip: string;
  filePill: string;
  filePillIcon: string;
  ctaPrimary: string;
  /** Compact topic card */
  cardBg: string;
  cardBorder: string;
  cardBorderHover: string;
  exploreLink: string;
  exploreIcon: string;
  /** Continue learning row */
  rowHover: string;
  rowArrow: string;
  /** Search result topic row */
  searchCard: string;
  searchIconBg: string;
  /** Left accent on list rows */
  listAccent: string;
};

const defaultTheme: TopicTheme = {
  pageShell: "bg-gradient-to-b from-slate-50 via-white to-slate-100/80",
  featuredBg: "bg-gradient-to-br from-slate-50 via-white to-slate-100/90",
  featuredBorder: "border-slate-200/85",
  featuredOrb: "bg-slate-400/15",
  featuredOrb2: "bg-blue-400/10",
  svgAccent: "text-slate-400/25",
  iconFeatured: "bg-slate-100 text-slate-700 ring-slate-200/90",
  iconDefault: "bg-slate-100 text-slate-600 ring-slate-200/80",
  tagChip: "border-slate-200/85 bg-white/90 text-slate-800",
  filePill: "border-slate-200/85 bg-white text-slate-800",
  filePillIcon: "text-slate-600",
  ctaPrimary: "bg-gradient-to-r from-slate-600 to-slate-700 shadow-slate-500/20 hover:brightness-105",
  cardBg: "bg-white",
  cardBorder: "border-slate-200/85",
  cardBorderHover: "hover:border-slate-300/80 hover:shadow-slate-200/40",
  exploreLink: "hover:border-slate-300/90 hover:bg-slate-50 hover:text-slate-900",
  exploreIcon: "text-slate-600",
  rowHover: "hover:border-slate-200/90 hover:bg-slate-50/90",
  rowArrow: "text-slate-500",
  searchCard: "border-slate-200/85 bg-white hover:border-slate-300/80 hover:bg-slate-50/80",
  searchIconBg: "bg-slate-100 text-slate-600",
  listAccent: "border-l-4 border-l-slate-400",
};

/** Arrays — sky & cyan */
const arrays: TopicTheme = {
  pageShell: "bg-gradient-to-b from-sky-50/95 via-white to-cyan-50/50",
  featuredBg: "bg-gradient-to-br from-sky-50 via-white to-cyan-50/70",
  featuredBorder: "border-sky-200/80",
  featuredOrb: "bg-sky-400/25",
  featuredOrb2: "bg-cyan-300/20",
  svgAccent: "text-sky-400/30",
  iconFeatured: "bg-sky-100 text-sky-600 ring-sky-200/90",
  iconDefault: "bg-sky-100 text-sky-600 ring-sky-200/80",
  tagChip: "border-sky-200/70 bg-sky-50/90 text-sky-950",
  filePill: "border-sky-200/70 bg-white text-sky-950",
  filePillIcon: "text-sky-600",
  ctaPrimary: "bg-gradient-to-r from-sky-500 to-cyan-500 shadow-sky-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-sky-50/40 to-white",
  cardBorder: "border-sky-200/70",
  cardBorderHover: "hover:border-sky-300/80 hover:shadow-sky-200/50",
  exploreLink: "hover:border-sky-300/90 hover:bg-sky-50/80 hover:text-sky-900",
  exploreIcon: "text-sky-600",
  rowHover: "hover:border-sky-200/90 hover:bg-sky-50/70",
  rowArrow: "text-sky-600",
  searchCard: "border-sky-200/80 bg-gradient-to-r from-sky-50/50 to-white hover:border-sky-300/90 hover:bg-sky-50/60",
  searchIconBg: "bg-sky-100 text-sky-600",
  listAccent: "border-l-4 border-l-sky-500",
};

/** Binary trees — emerald & mint */
const binaryTrees: TopicTheme = {
  pageShell: "bg-gradient-to-b from-emerald-50/95 via-white to-teal-50/45",
  featuredBg: "bg-gradient-to-br from-emerald-50 via-white to-teal-50/65",
  featuredBorder: "border-emerald-200/75",
  featuredOrb: "bg-emerald-400/20",
  featuredOrb2: "bg-teal-300/18",
  svgAccent: "text-emerald-400/28",
  iconFeatured: "bg-emerald-100 text-emerald-700 ring-emerald-200/85",
  iconDefault: "bg-emerald-100 text-emerald-600 ring-emerald-200/75",
  tagChip: "border-emerald-200/70 bg-emerald-50/90 text-emerald-950",
  filePill: "border-emerald-200/70 bg-white text-emerald-950",
  filePillIcon: "text-emerald-600",
  ctaPrimary: "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-emerald-50/35 to-white",
  cardBorder: "border-emerald-200/65",
  cardBorderHover: "hover:border-emerald-300/75 hover:shadow-emerald-200/45",
  exploreLink: "hover:border-emerald-300/85 hover:bg-emerald-50/70 hover:text-emerald-900",
  exploreIcon: "text-emerald-600",
  rowHover: "hover:border-emerald-200/90 hover:bg-emerald-50/65",
  rowArrow: "text-emerald-600",
  searchCard: "border-emerald-200/75 bg-gradient-to-r from-emerald-50/45 to-white hover:border-emerald-300/85 hover:bg-emerald-50/55",
  searchIconBg: "bg-emerald-100 text-emerald-600",
  listAccent: "border-l-4 border-l-emerald-500",
};

/** Graphs — violet & purple */
const graphs: TopicTheme = {
  pageShell: "bg-gradient-to-b from-violet-50/95 via-white to-fuchsia-50/40",
  featuredBg: "bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/60",
  featuredBorder: "border-violet-200/75",
  featuredOrb: "bg-violet-400/22",
  featuredOrb2: "bg-fuchsia-300/18",
  svgAccent: "text-violet-400/28",
  iconFeatured: "bg-violet-100 text-violet-700 ring-violet-200/85",
  iconDefault: "bg-violet-100 text-violet-600 ring-violet-200/75",
  tagChip: "border-violet-200/70 bg-violet-50/90 text-violet-950",
  filePill: "border-violet-200/70 bg-white text-violet-950",
  filePillIcon: "text-violet-600",
  ctaPrimary: "bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-violet-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-violet-50/35 to-white",
  cardBorder: "border-violet-200/65",
  cardBorderHover: "hover:border-violet-300/75 hover:shadow-violet-200/45",
  exploreLink: "hover:border-violet-300/85 hover:bg-violet-50/70 hover:text-violet-900",
  exploreIcon: "text-violet-600",
  rowHover: "hover:border-violet-200/90 hover:bg-violet-50/65",
  rowArrow: "text-violet-600",
  searchCard: "border-violet-200/75 bg-gradient-to-r from-violet-50/45 to-white hover:border-violet-300/85 hover:bg-violet-50/55",
  searchIconBg: "bg-violet-100 text-violet-600",
  listAccent: "border-l-4 border-l-violet-500",
};

/** Recursion — amber & orange */
const recursion: TopicTheme = {
  pageShell: "bg-gradient-to-b from-amber-50/95 via-white to-orange-50/45",
  featuredBg: "bg-gradient-to-br from-amber-50 via-white to-orange-50/65",
  featuredBorder: "border-amber-200/75",
  featuredOrb: "bg-amber-400/22",
  featuredOrb2: "bg-orange-300/18",
  svgAccent: "text-amber-400/30",
  iconFeatured: "bg-amber-100 text-amber-800 ring-amber-200/85",
  iconDefault: "bg-amber-100 text-amber-700 ring-amber-200/75",
  tagChip: "border-amber-200/70 bg-amber-50/90 text-amber-950",
  filePill: "border-amber-200/70 bg-white text-amber-950",
  filePillIcon: "text-amber-700",
  ctaPrimary: "bg-gradient-to-r from-amber-500 to-orange-500 shadow-amber-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-amber-50/35 to-white",
  cardBorder: "border-amber-200/65",
  cardBorderHover: "hover:border-amber-300/75 hover:shadow-amber-200/45",
  exploreLink: "hover:border-amber-300/85 hover:bg-amber-50/70 hover:text-amber-950",
  exploreIcon: "text-amber-600",
  rowHover: "hover:border-amber-200/90 hover:bg-amber-50/65",
  rowArrow: "text-amber-600",
  searchCard: "border-amber-200/75 bg-gradient-to-r from-amber-50/45 to-white hover:border-amber-300/85 hover:bg-amber-50/55",
  searchIconBg: "bg-amber-100 text-amber-700",
  listAccent: "border-l-4 border-l-amber-500",
};

/** Stacks — rose & pink */
const stacks: TopicTheme = {
  pageShell: "bg-gradient-to-b from-rose-50/95 via-white to-pink-50/45",
  featuredBg: "bg-gradient-to-br from-rose-50 via-white to-pink-50/65",
  featuredBorder: "border-rose-200/75",
  featuredOrb: "bg-rose-400/20",
  featuredOrb2: "bg-pink-300/18",
  svgAccent: "text-rose-400/28",
  iconFeatured: "bg-rose-100 text-rose-700 ring-rose-200/85",
  iconDefault: "bg-rose-100 text-rose-600 ring-rose-200/75",
  tagChip: "border-rose-200/70 bg-rose-50/90 text-rose-950",
  filePill: "border-rose-200/70 bg-white text-rose-950",
  filePillIcon: "text-rose-600",
  ctaPrimary: "bg-gradient-to-r from-rose-500 to-pink-500 shadow-rose-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-rose-50/35 to-white",
  cardBorder: "border-rose-200/65",
  cardBorderHover: "hover:border-rose-300/75 hover:shadow-rose-200/45",
  exploreLink: "hover:border-rose-300/85 hover:bg-rose-50/70 hover:text-rose-900",
  exploreIcon: "text-rose-600",
  rowHover: "hover:border-rose-200/90 hover:bg-rose-50/65",
  rowArrow: "text-rose-600",
  searchCard: "border-rose-200/75 bg-gradient-to-r from-rose-50/45 to-white hover:border-rose-300/85 hover:bg-rose-50/55",
  searchIconBg: "bg-rose-100 text-rose-600",
  listAccent: "border-l-4 border-l-rose-500",
};

const bySlug: Record<string, TopicTheme> = {
  arrays,
  "binary-trees": binaryTrees,
  graphs,
  recursion,
  stacks,
};

export function getTopicTheme(topicSlug: string): TopicTheme {
  return bySlug[topicSlug] ?? defaultTheme;
}

/** Map dashboard copy (topic display titles) to slug for theming */
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

/** Dashboard / global — soft rainbow wash */
export const dashboardShell =
  "bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgb(224_242_254/0.9),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgb(237_233_254/0.5),transparent_45%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgb(254_243_199/0.45),transparent_40%),linear-gradient(to_bottom,rgb(248_250_252),rgb(255_255_255))]";
