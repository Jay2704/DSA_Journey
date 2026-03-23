/**
 * Per-topic accent theming (Tailwind classes only).
 * Default / dashboard: blue. Topic routes use slug-specific palettes.
 *
 * Color map: Arrays → blue, Graphs → green, Binary Trees → purple,
 * Recursion → orange, Stacks → red.
 */
export type TopicThemeMeta = {
  slug: string;
  displayName: string;
};

export type TopicTheme = {
  meta: TopicThemeMeta;
  /** Apply to page shells and cards for smooth theme switches */
  transition: string;

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

  /** Breadcrumb & nav links on topic/file pages */
  navLinkHover: string;
  /** Current breadcrumb segment (topic or file name) */
  breadcrumbActive: string;
  /** Left border accent beside topic / file titles */
  headingCluster: string;

  /** Topic header meta row */
  headerMetaChip: string;
  headerMetaIcon: string;
  headerLangChip: string;
  headerTopicTag: string;

  /** “Topic explorer” row */
  explorerIcon: string;
  /** Outer explorer + preview shell tint */
  explorerChrome: string;

  /** Mobile explorer / preview tabs */
  tabActive: string;
  tabInactive: string;

  /** Filter search input focus */
  searchFocus: string;

  /** Sort chips */
  sortActive: string;
  sortInactive: string;

  /** Language & status filter chips */
  filterChipOn: string;
  filterChipOff: string;

  /** Selected file row in topic explorer */
  fileRowActive: string;
  fileRowActiveTitle: string;
  fileRowActiveBadge: string;
  fileRowInactive: string;

  /** Inline text links (e.g. clear filters) */
  textLink: string;

  /** Preview panel (topic detail) */
  previewHeader: string;
  previewIcon: string;
  previewCta: string;
  conceptDot: string;
  previewTag: string;

  /** Code viewer chrome */
  codeViewerHeader: string;

  /** File detail page */
  copyButton: string;
  copyIcon: string;
  fileHeaderTag: string;

  /** Prev/next nav */
  prevNextHover: string;
  prevNextIconHover: string;

  /** Sidebar */
  sidebarConceptDot: string;
  sidebarFileIcon: string;
  sidebarTag: string;
};

const transition = "transition-[color,background-color,border-color,box-shadow] duration-300 ease-out";

const defaultMeta: TopicThemeMeta = { slug: "", displayName: "Default" };

const defaultTheme: TopicTheme = {
  meta: defaultMeta,
  transition,

  pageShell: "bg-gradient-to-b from-slate-50 via-white to-slate-100/80",
  featuredBg: "bg-gradient-to-br from-slate-50 via-white to-slate-100/90",
  featuredBorder: "border-slate-200/85",
  featuredOrb: "bg-slate-400/15",
  featuredOrb2: "bg-blue-400/10",
  svgAccent: "text-slate-400/25",
  iconFeatured: "bg-blue-50 text-blue-700 ring-blue-200/90",
  iconDefault: "bg-slate-100 text-slate-600 ring-slate-200/80",
  tagChip: "border-slate-200/85 bg-white/90 text-slate-800",
  filePill: "border-slate-200/85 bg-white text-slate-800",
  filePillIcon: "text-slate-600",
  ctaPrimary: "bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-500/20 hover:brightness-105",
  cardBg: "bg-white",
  cardBorder: "border-slate-200/85",
  cardBorderHover: "hover:border-slate-300/80 hover:shadow-slate-200/40",
  exploreLink: "hover:border-slate-300/90 hover:bg-slate-50 hover:text-slate-900",
  exploreIcon: "text-slate-600",
  rowHover: "hover:border-slate-200/90 hover:bg-slate-50/90",
  rowArrow: "text-slate-500",
  searchCard: "border-slate-200/85 bg-white hover:border-slate-300/80 hover:bg-slate-50/80",
  searchIconBg: "bg-slate-100 text-slate-600",
  listAccent: "border-l-4 border-l-blue-500",

  navLinkHover: "hover:text-blue-600",
  breadcrumbActive: "font-semibold text-blue-950",
  headingCluster: "border-l-[3px] border-blue-500 pl-4",

  headerMetaChip: "border-blue-200/80 bg-blue-50/90 text-blue-950",
  headerMetaIcon: "text-blue-600",
  headerLangChip: "border-slate-200/85 bg-white text-[#0a1628]",
  headerTopicTag: "border-slate-200/85 bg-white text-slate-700",

  explorerIcon: "text-blue-600",
  explorerChrome: "border-slate-200/85 bg-slate-50/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",

  tabActive: "flex-1 rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50",

  searchFocus:
    "focus:border-blue-300/90 focus:bg-white focus:ring-4 focus:ring-blue-500/12",

  sortActive: "rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm",
  sortInactive:
    "rounded-lg border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-200/90 hover:bg-blue-50/70",

  filterChipOn: "rounded-full border border-blue-200/90 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900",
  filterChipOff: "rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border border-blue-200/90 bg-blue-50/95 px-3 py-3 text-left shadow-sm ring-1 ring-blue-100/85",
  fileRowActiveTitle: "font-semibold text-blue-900",
  fileRowActiveBadge: "bg-white/90 text-blue-800 ring-1 ring-blue-100",
  fileRowInactive: "w-full rounded-xl border border-transparent px-3 py-3 text-left hover:border-slate-200/80 hover:bg-slate-50/90",

  textLink: "text-blue-600 hover:text-blue-800",

  previewHeader: "border-b border-slate-200/60 bg-gradient-to-b from-blue-50/40 to-white",
  previewIcon: "text-blue-600",
  previewCta: "rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/15 transition hover:bg-blue-700",
  conceptDot: "bg-blue-400",
  previewTag: "rounded-full border border-slate-200/85 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm",

  codeViewerHeader: "border-b border-slate-700/80 bg-slate-900/95",

  copyButton:
    "border-slate-200/85 bg-white hover:border-blue-200/90 hover:bg-blue-50/85 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-blue-600",
  fileHeaderTag: "border-slate-200/85 bg-slate-50 text-slate-700",

  prevNextHover: "hover:border-blue-200/85 hover:bg-blue-50/80",
  prevNextIconHover: "group-hover:text-blue-600",

  sidebarConceptDot: "bg-blue-400",
  sidebarFileIcon: "text-blue-600",
  sidebarTag: "border-slate-200/85 bg-slate-50 text-slate-700",
};

/** Arrays — blue */
const arrays: TopicTheme = {
  meta: { slug: "arrays", displayName: "Arrays" },
  transition,

  pageShell: "bg-gradient-to-b from-blue-50/95 via-white to-sky-50/40",
  featuredBg: "bg-gradient-to-br from-blue-50 via-white to-sky-50/70",
  featuredBorder: "border-blue-200/75",
  featuredOrb: "bg-blue-400/22",
  featuredOrb2: "bg-sky-300/18",
  svgAccent: "text-blue-400/28",
  iconFeatured: "bg-blue-100 text-blue-700 ring-blue-200/90",
  iconDefault: "bg-blue-100 text-blue-700 ring-blue-200/80",
  tagChip: "border-blue-200/70 bg-blue-50/90 text-blue-950",
  filePill: "border-blue-200/70 bg-white text-blue-950",
  filePillIcon: "text-blue-600",
  ctaPrimary: "bg-gradient-to-r from-blue-600 to-sky-600 shadow-blue-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-blue-50/40 to-white",
  cardBorder: "border-blue-200/70",
  cardBorderHover: "hover:border-blue-300/80 hover:shadow-blue-200/45",
  exploreLink: "hover:border-blue-300/90 hover:bg-blue-50/80 hover:text-blue-900",
  exploreIcon: "text-blue-600",
  rowHover: "hover:border-blue-200/90 hover:bg-blue-50/70",
  rowArrow: "text-blue-600",
  searchCard: "border-blue-200/80 bg-gradient-to-r from-blue-50/50 to-white hover:border-blue-300/90 hover:bg-blue-50/60",
  searchIconBg: "bg-blue-100 text-blue-700",
  listAccent: "border-l-4 border-l-blue-500",

  navLinkHover: "hover:text-blue-700",
  breadcrumbActive: "font-semibold text-blue-950",
  headingCluster: "border-l-[3px] border-blue-500 pl-4",

  headerMetaChip: "border-blue-200/80 bg-blue-50/90 text-blue-950",
  headerMetaIcon: "text-blue-600",
  headerLangChip: "border-blue-200/70 bg-white text-blue-950",
  headerTopicTag: "border-blue-200/70 bg-white/95 text-blue-900",

  explorerIcon: "text-blue-600",
  explorerChrome: "border-blue-200/60 bg-blue-50/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",

  tabActive: "flex-1 rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-blue-50/50",

  searchFocus: "focus:border-blue-300/90 focus:bg-white focus:ring-4 focus:ring-blue-500/15",

  sortActive: "rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm",
  sortInactive:
    "rounded-lg border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-200/90 hover:bg-blue-50/70",

  filterChipOn: "rounded-full border border-blue-200/90 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900",
  filterChipOff: "rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border border-blue-200/90 bg-blue-50/95 px-3 py-3 text-left shadow-sm ring-1 ring-blue-100/85",
  fileRowActiveTitle: "font-semibold text-blue-900",
  fileRowActiveBadge: "bg-white/90 text-blue-800 ring-1 ring-blue-100",
  fileRowInactive: "w-full rounded-xl border border-transparent px-3 py-3 text-left hover:border-blue-100/80 hover:bg-blue-50/40",

  textLink: "text-blue-600 hover:text-blue-800",

  previewHeader: "border-b border-blue-100/80 bg-gradient-to-b from-blue-50/60 to-white",
  previewIcon: "text-blue-600",
  previewCta:
    "rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition hover:bg-blue-700",
  conceptDot: "bg-blue-400",
  previewTag: "rounded-full border border-blue-200/80 bg-white px-3 py-1 text-xs font-medium text-blue-900 shadow-sm",

  codeViewerHeader: "border-b border-blue-500/35 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/90",

  copyButton:
    "border-blue-200/80 bg-white hover:border-blue-300/90 hover:bg-blue-50/90 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-blue-600",
  fileHeaderTag: "border-blue-200/80 bg-blue-50/90 text-blue-950",

  prevNextHover: "hover:border-blue-200/85 hover:bg-blue-50/85",
  prevNextIconHover: "group-hover:text-blue-600",

  sidebarConceptDot: "bg-blue-400",
  sidebarFileIcon: "text-blue-600",
  sidebarTag: "border-blue-200/75 bg-blue-50/80 text-blue-900",
};

/** Graphs — green */
const graphs: TopicTheme = {
  meta: { slug: "graphs", displayName: "Graphs" },
  transition,

  pageShell: "bg-gradient-to-b from-emerald-50/95 via-white to-green-50/35",
  featuredBg: "bg-gradient-to-br from-emerald-50 via-white to-green-50/65",
  featuredBorder: "border-emerald-200/75",
  featuredOrb: "bg-emerald-400/20",
  featuredOrb2: "bg-green-300/16",
  svgAccent: "text-emerald-400/28",
  iconFeatured: "bg-emerald-100 text-emerald-800 ring-emerald-200/90",
  iconDefault: "bg-emerald-100 text-emerald-700 ring-emerald-200/80",
  tagChip: "border-emerald-200/70 bg-emerald-50/90 text-emerald-950",
  filePill: "border-emerald-200/70 bg-white text-emerald-950",
  filePillIcon: "text-emerald-600",
  ctaPrimary: "bg-gradient-to-r from-emerald-600 to-green-600 shadow-emerald-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-emerald-50/35 to-white",
  cardBorder: "border-emerald-200/65",
  cardBorderHover: "hover:border-emerald-300/75 hover:shadow-emerald-200/40",
  exploreLink: "hover:border-emerald-300/85 hover:bg-emerald-50/75 hover:text-emerald-950",
  exploreIcon: "text-emerald-600",
  rowHover: "hover:border-emerald-200/90 hover:bg-emerald-50/65",
  rowArrow: "text-emerald-600",
  searchCard: "border-emerald-200/75 bg-gradient-to-r from-emerald-50/45 to-white hover:border-emerald-300/85 hover:bg-emerald-50/55",
  searchIconBg: "bg-emerald-100 text-emerald-700",
  listAccent: "border-l-4 border-l-emerald-500",

  navLinkHover: "hover:text-emerald-700",
  breadcrumbActive: "font-semibold text-emerald-950",
  headingCluster: "border-l-[3px] border-emerald-500 pl-4",

  headerMetaChip: "border-emerald-200/80 bg-emerald-50/90 text-emerald-950",
  headerMetaIcon: "text-emerald-600",
  headerLangChip: "border-emerald-200/70 bg-white text-emerald-950",
  headerTopicTag: "border-emerald-200/70 bg-white/95 text-emerald-900",

  explorerIcon: "text-emerald-600",
  explorerChrome: "border-emerald-200/55 bg-emerald-50/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",

  tabActive: "flex-1 rounded-lg bg-emerald-600 py-2.5 text-xs font-semibold text-white shadow-sm",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-emerald-50/40",

  searchFocus: "focus:border-emerald-300/90 focus:bg-white focus:ring-4 focus:ring-emerald-500/12",

  sortActive: "rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm",
  sortInactive:
    "rounded-lg border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-emerald-200/90 hover:bg-emerald-50/70",

  filterChipOn: "rounded-full border border-emerald-200/90 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900",
  filterChipOff: "rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border border-emerald-200/90 bg-emerald-50/95 px-3 py-3 text-left shadow-sm ring-1 ring-emerald-100/85",
  fileRowActiveTitle: "font-semibold text-emerald-900",
  fileRowActiveBadge: "bg-white/90 text-emerald-800 ring-1 ring-emerald-100",
  fileRowInactive: "w-full rounded-xl border border-transparent px-3 py-3 text-left hover:border-emerald-100/80 hover:bg-emerald-50/35",

  textLink: "text-emerald-600 hover:text-emerald-800",

  previewHeader: "border-b border-emerald-100/80 bg-gradient-to-b from-emerald-50/55 to-white",
  previewIcon: "text-emerald-600",
  previewCta:
    "rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-700",
  conceptDot: "bg-emerald-400",
  previewTag: "rounded-full border border-emerald-200/80 bg-white px-3 py-1 text-xs font-medium text-emerald-900 shadow-sm",

  codeViewerHeader: "border-b border-emerald-500/35 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/85",

  copyButton:
    "border-emerald-200/80 bg-white hover:border-emerald-300/90 hover:bg-emerald-50/90 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-emerald-600",
  fileHeaderTag: "border-emerald-200/80 bg-emerald-50/90 text-emerald-950",

  prevNextHover: "hover:border-emerald-200/85 hover:bg-emerald-50/85",
  prevNextIconHover: "group-hover:text-emerald-600",

  sidebarConceptDot: "bg-emerald-400",
  sidebarFileIcon: "text-emerald-600",
  sidebarTag: "border-emerald-200/75 bg-emerald-50/80 text-emerald-900",
};

/** Binary trees — purple */
const binaryTrees: TopicTheme = {
  meta: { slug: "binary-trees", displayName: "Binary Trees" },
  transition,

  pageShell: "bg-gradient-to-b from-violet-50/95 via-white to-purple-50/38",
  featuredBg: "bg-gradient-to-br from-violet-50 via-white to-purple-50/65",
  featuredBorder: "border-violet-200/75",
  featuredOrb: "bg-violet-400/20",
  featuredOrb2: "bg-purple-300/16",
  svgAccent: "text-violet-400/28",
  iconFeatured: "bg-violet-100 text-violet-800 ring-violet-200/90",
  iconDefault: "bg-violet-100 text-violet-700 ring-violet-200/80",
  tagChip: "border-violet-200/70 bg-violet-50/90 text-violet-950",
  filePill: "border-violet-200/70 bg-white text-violet-950",
  filePillIcon: "text-violet-600",
  ctaPrimary: "bg-gradient-to-r from-violet-600 to-purple-600 shadow-violet-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-violet-50/35 to-white",
  cardBorder: "border-violet-200/65",
  cardBorderHover: "hover:border-violet-300/75 hover:shadow-violet-200/40",
  exploreLink: "hover:border-violet-300/85 hover:bg-violet-50/75 hover:text-violet-900",
  exploreIcon: "text-violet-600",
  rowHover: "hover:border-violet-200/90 hover:bg-violet-50/65",
  rowArrow: "text-violet-600",
  searchCard: "border-violet-200/75 bg-gradient-to-r from-violet-50/45 to-white hover:border-violet-300/85 hover:bg-violet-50/55",
  searchIconBg: "bg-violet-100 text-violet-700",
  listAccent: "border-l-4 border-l-violet-500",

  navLinkHover: "hover:text-violet-700",
  breadcrumbActive: "font-semibold text-violet-950",
  headingCluster: "border-l-[3px] border-violet-500 pl-4",

  headerMetaChip: "border-violet-200/80 bg-violet-50/90 text-violet-950",
  headerMetaIcon: "text-violet-600",
  headerLangChip: "border-violet-200/70 bg-white text-violet-950",
  headerTopicTag: "border-violet-200/70 bg-white/95 text-violet-900",

  explorerIcon: "text-violet-600",
  explorerChrome: "border-violet-200/55 bg-violet-50/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",

  tabActive: "flex-1 rounded-lg bg-violet-600 py-2.5 text-xs font-semibold text-white shadow-sm",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-violet-50/45",

  searchFocus: "focus:border-violet-300/90 focus:bg-white focus:ring-4 focus:ring-violet-500/12",

  sortActive: "rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm",
  sortInactive:
    "rounded-lg border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-violet-200/90 hover:bg-violet-50/70",

  filterChipOn: "rounded-full border border-violet-200/90 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-900",
  filterChipOff: "rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border border-violet-200/90 bg-violet-50/95 px-3 py-3 text-left shadow-sm ring-1 ring-violet-100/85",
  fileRowActiveTitle: "font-semibold text-violet-900",
  fileRowActiveBadge: "bg-white/90 text-violet-800 ring-1 ring-violet-100",
  fileRowInactive: "w-full rounded-xl border border-transparent px-3 py-3 text-left hover:border-violet-100/80 hover:bg-violet-50/35",

  textLink: "text-violet-600 hover:text-violet-800",

  previewHeader: "border-b border-violet-100/80 bg-gradient-to-b from-violet-50/55 to-white",
  previewIcon: "text-violet-600",
  previewCta:
    "rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-violet-500/20 transition hover:bg-violet-700",
  conceptDot: "bg-violet-400",
  previewTag: "rounded-full border border-violet-200/80 bg-white px-3 py-1 text-xs font-medium text-violet-900 shadow-sm",

  codeViewerHeader: "border-b border-violet-500/35 bg-gradient-to-r from-slate-900 via-slate-900 to-violet-950/85",

  copyButton:
    "border-violet-200/80 bg-white hover:border-violet-300/90 hover:bg-violet-50/90 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-violet-600",
  fileHeaderTag: "border-violet-200/80 bg-violet-50/90 text-violet-950",

  prevNextHover: "hover:border-violet-200/85 hover:bg-violet-50/85",
  prevNextIconHover: "group-hover:text-violet-600",

  sidebarConceptDot: "bg-violet-400",
  sidebarFileIcon: "text-violet-600",
  sidebarTag: "border-violet-200/75 bg-violet-50/80 text-violet-900",
};

/** Recursion — orange */
const recursion: TopicTheme = {
  meta: { slug: "recursion", displayName: "Recursion" },
  transition,

  pageShell: "bg-gradient-to-b from-amber-50/95 via-white to-orange-50/38",
  featuredBg: "bg-gradient-to-br from-amber-50 via-white to-orange-50/65",
  featuredBorder: "border-amber-200/75",
  featuredOrb: "bg-amber-400/22",
  featuredOrb2: "bg-orange-300/16",
  svgAccent: "text-amber-400/30",
  iconFeatured: "bg-amber-100 text-amber-900 ring-amber-200/90",
  iconDefault: "bg-amber-100 text-amber-800 ring-amber-200/80",
  tagChip: "border-amber-200/70 bg-amber-50/90 text-amber-950",
  filePill: "border-amber-200/70 bg-white text-amber-950",
  filePillIcon: "text-amber-700",
  ctaPrimary: "bg-gradient-to-r from-orange-500 to-amber-600 shadow-amber-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-amber-50/35 to-white",
  cardBorder: "border-amber-200/65",
  cardBorderHover: "hover:border-amber-300/75 hover:shadow-amber-200/40",
  exploreLink: "hover:border-amber-300/85 hover:bg-amber-50/75 hover:text-amber-950",
  exploreIcon: "text-amber-700",
  rowHover: "hover:border-amber-200/90 hover:bg-amber-50/65",
  rowArrow: "text-amber-700",
  searchCard: "border-amber-200/75 bg-gradient-to-r from-amber-50/45 to-white hover:border-amber-300/85 hover:bg-amber-50/55",
  searchIconBg: "bg-amber-100 text-amber-800",
  listAccent: "border-l-4 border-l-orange-500",

  navLinkHover: "hover:text-orange-700",
  breadcrumbActive: "font-semibold text-amber-950",
  headingCluster: "border-l-[3px] border-orange-500 pl-4",

  headerMetaChip: "border-amber-200/80 bg-amber-50/90 text-amber-950",
  headerMetaIcon: "text-orange-600",
  headerLangChip: "border-amber-200/70 bg-white text-amber-950",
  headerTopicTag: "border-amber-200/70 bg-white/95 text-amber-900",

  explorerIcon: "text-orange-600",
  explorerChrome: "border-amber-200/55 bg-amber-50/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",

  tabActive: "flex-1 rounded-lg bg-orange-600 py-2.5 text-xs font-semibold text-white shadow-sm",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-amber-50/45",

  searchFocus: "focus:border-orange-300/90 focus:bg-white focus:ring-4 focus:ring-orange-500/12",

  sortActive: "rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm",
  sortInactive:
    "rounded-lg border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-amber-200/90 hover:bg-amber-50/70",

  filterChipOn: "rounded-full border border-amber-200/90 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-950",
  filterChipOff: "rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border border-amber-200/90 bg-amber-50/95 px-3 py-3 text-left shadow-sm ring-1 ring-amber-100/85",
  fileRowActiveTitle: "font-semibold text-amber-950",
  fileRowActiveBadge: "bg-white/90 text-amber-900 ring-1 ring-amber-100",
  fileRowInactive: "w-full rounded-xl border border-transparent px-3 py-3 text-left hover:border-amber-100/80 hover:bg-amber-50/35",

  textLink: "text-orange-600 hover:text-orange-800",

  previewHeader: "border-b border-amber-100/80 bg-gradient-to-b from-amber-50/55 to-white",
  previewIcon: "text-orange-600",
  previewCta:
    "rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-500/20 transition hover:bg-orange-700",
  conceptDot: "bg-orange-400",
  previewTag: "rounded-full border border-amber-200/80 bg-white px-3 py-1 text-xs font-medium text-amber-950 shadow-sm",

  codeViewerHeader: "border-b border-orange-500/35 bg-gradient-to-r from-slate-900 via-slate-900 to-orange-950/85",

  copyButton:
    "border-amber-200/80 bg-white hover:border-orange-300/90 hover:bg-amber-50/90 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-orange-600",
  fileHeaderTag: "border-amber-200/80 bg-amber-50/90 text-amber-950",

  prevNextHover: "hover:border-amber-200/85 hover:bg-amber-50/85",
  prevNextIconHover: "group-hover:text-orange-600",

  sidebarConceptDot: "bg-orange-400",
  sidebarFileIcon: "text-orange-600",
  sidebarTag: "border-amber-200/75 bg-amber-50/80 text-amber-950",
};

/** Stacks — red */
const stacks: TopicTheme = {
  meta: { slug: "stacks", displayName: "Stacks" },
  transition,

  pageShell: "bg-gradient-to-b from-red-50/95 via-white to-rose-50/35",
  featuredBg: "bg-gradient-to-br from-red-50 via-white to-rose-50/65",
  featuredBorder: "border-red-200/75",
  featuredOrb: "bg-red-400/18",
  featuredOrb2: "bg-rose-300/16",
  svgAccent: "text-red-400/26",
  iconFeatured: "bg-red-100 text-red-800 ring-red-200/90",
  iconDefault: "bg-red-100 text-red-700 ring-red-200/80",
  tagChip: "border-red-200/70 bg-red-50/90 text-red-950",
  filePill: "border-red-200/70 bg-white text-red-950",
  filePillIcon: "text-red-600",
  ctaPrimary: "bg-gradient-to-r from-red-600 to-rose-600 shadow-red-500/25 hover:brightness-105",
  cardBg: "bg-gradient-to-b from-red-50/35 to-white",
  cardBorder: "border-red-200/65",
  cardBorderHover: "hover:border-red-300/75 hover:shadow-red-200/40",
  exploreLink: "hover:border-red-300/85 hover:bg-red-50/75 hover:text-red-950",
  exploreIcon: "text-red-600",
  rowHover: "hover:border-red-200/90 hover:bg-red-50/65",
  rowArrow: "text-red-600",
  searchCard: "border-red-200/75 bg-gradient-to-r from-red-50/45 to-white hover:border-red-300/85 hover:bg-red-50/55",
  searchIconBg: "bg-red-100 text-red-700",
  listAccent: "border-l-4 border-l-red-500",

  navLinkHover: "hover:text-red-700",
  breadcrumbActive: "font-semibold text-red-950",
  headingCluster: "border-l-[3px] border-red-500 pl-4",

  headerMetaChip: "border-red-200/80 bg-red-50/90 text-red-950",
  headerMetaIcon: "text-red-600",
  headerLangChip: "border-red-200/70 bg-white text-red-950",
  headerTopicTag: "border-red-200/70 bg-white/95 text-red-900",

  explorerIcon: "text-red-600",
  explorerChrome: "border-red-200/55 bg-red-50/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",

  tabActive: "flex-1 rounded-lg bg-red-600 py-2.5 text-xs font-semibold text-white shadow-sm",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-red-50/40",

  searchFocus: "focus:border-red-300/90 focus:bg-white focus:ring-4 focus:ring-red-500/12",

  sortActive: "rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm",
  sortInactive:
    "rounded-lg border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-red-200/90 hover:bg-red-50/70",

  filterChipOn: "rounded-full border border-red-200/90 bg-red-50 px-3 py-1 text-xs font-semibold text-red-900",
  filterChipOff: "rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border border-red-200/90 bg-red-50/95 px-3 py-3 text-left shadow-sm ring-1 ring-red-100/85",
  fileRowActiveTitle: "font-semibold text-red-900",
  fileRowActiveBadge: "bg-white/90 text-red-800 ring-1 ring-red-100",
  fileRowInactive: "w-full rounded-xl border border-transparent px-3 py-3 text-left hover:border-red-100/80 hover:bg-red-50/35",

  textLink: "text-red-600 hover:text-red-800",

  previewHeader: "border-b border-red-100/80 bg-gradient-to-b from-red-50/55 to-white",
  previewIcon: "text-red-600",
  previewCta:
    "rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-red-500/20 transition hover:bg-red-700",
  conceptDot: "bg-red-400",
  previewTag: "rounded-full border border-red-200/80 bg-white px-3 py-1 text-xs font-medium text-red-900 shadow-sm",

  codeViewerHeader: "border-b border-red-500/35 bg-gradient-to-r from-slate-900 via-slate-900 to-red-950/85",

  copyButton:
    "border-red-200/80 bg-white hover:border-red-300/90 hover:bg-red-50/90 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-red-600",
  fileHeaderTag: "border-red-200/80 bg-red-50/90 text-red-950",

  prevNextHover: "hover:border-red-200/85 hover:bg-red-50/85",
  prevNextIconHover: "group-hover:text-red-600",

  sidebarConceptDot: "bg-red-400",
  sidebarFileIcon: "text-red-600",
  sidebarTag: "border-red-200/75 bg-red-50/80 text-red-900",
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

/** Ordered list for docs / settings screens */
export const TOPIC_THEME_ORDER: TopicThemeMeta[] = [
  arrays.meta,
  graphs.meta,
  binaryTrees.meta,
  recursion.meta,
  stacks.meta,
];

/** Dashboard / global — soft wash; primary accent stays blue */
export const dashboardShell =
  "bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgb(224_242_254/0.9),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgb(237_233_254/0.5),transparent_45%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgb(254_243_199/0.45),transparent_40%),linear-gradient(to_bottom,rgb(248_250_252),rgb(255_255_255))]";
