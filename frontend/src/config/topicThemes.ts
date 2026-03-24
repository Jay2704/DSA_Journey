/**
 * Multi-color topic themes — strong, visible accents while staying readable.
 * Tailwind classes only. Arrays=blue, Graphs=green, Binary Trees=purple, Recursion=orange, Stacks=red.
 */
export type TopicThemeMeta = {
  slug: string;
  displayName: string;
};

export type TopicTheme = {
  meta: TopicThemeMeta;
  transition: string;

  pageShell: string;
  /** Extra decorative blobs / wash (absolute layers on topic pages) */
  pageDecorA: string;
  pageDecorB: string;

  featuredBg: string;
  featuredBorder: string;
  featuredOrb: string;
  featuredOrb2: string;
  featuredCardShadow: string;
  svgAccent: string;
  iconFeatured: string;
  iconDefault: string;
  tagChip: string;
  filePill: string;
  filePillIcon: string;
  ctaPrimary: string;
  /** Featured card title */
  titleGradient: string;

  cardBg: string;
  cardBorder: string;
  /** Top accent bar on compact cards */
  cardTopBar: string;
  cardBorderHover: string;
  cardHoverShadow: string;
  exploreLink: string;
  exploreIcon: string;
  rowHover: string;
  rowArrow: string;
  searchCard: string;
  searchIconBg: string;
  listAccent: string;

  navLinkHover: string;
  breadcrumbActive: string;
  headingCluster: string;

  headerMetaChip: string;
  headerMetaIcon: string;
  headerLangChip: string;
  headerTopicTag: string;
  /** Topic / file page hero panel */
  heroPanel: string;
  heroGlow: string;

  explorerIcon: string;
  explorerChrome: string;
  explorerLeftColumn: string;
  previewColumn: string;

  tabActive: string;
  tabInactive: string;
  searchFocus: string;
  sortActive: string;
  sortInactive: string;
  filterChipOn: string;
  filterChipOff: string;

  fileRowActive: string;
  fileRowActiveTitle: string;
  fileRowActiveBadge: string;
  fileRowInactive: string;

  textLink: string;

  previewHeader: string;
  previewIcon: string;
  previewCta: string;
  conceptDot: string;
  previewTag: string;

  codeViewerHeader: string;
  codeViewerRing: string;

  copyButton: string;
  copyIcon: string;
  fileHeaderTag: string;

  prevNextHover: string;
  prevNextIconHover: string;

  sidebarConceptDot: string;
  sidebarFileIcon: string;
  sidebarTag: string;
  sidebarSection: string;

  /** Stats / small progress fills */
  progressFill: string;
};

const transition =
  "transition-[color,background-color,border-color,box-shadow,filter] duration-300 ease-out";

const defaultMeta: TopicThemeMeta = { slug: "", displayName: "Default" };

const defaultTheme: TopicTheme = {
  meta: defaultMeta,
  transition,

  pageShell:
    "bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgb(219_234_254/0.85),transparent_52%),linear-gradient(to_bottom,rgb(248_250_252),rgb(255_255_255))]",
  pageDecorA: "bg-blue-400/25",
  pageDecorB: "bg-indigo-300/20",

  featuredBg: "bg-gradient-to-br from-blue-100/90 via-white to-sky-100/70",
  featuredBorder: "border-2 border-blue-400/55",
  featuredOrb: "bg-blue-500/35",
  featuredOrb2: "bg-cyan-400/30",
  featuredCardShadow: "shadow-xl shadow-blue-500/20",
  svgAccent: "text-blue-500/40",
  iconFeatured: "bg-gradient-to-br from-blue-200 to-blue-100 text-blue-800 ring-2 ring-blue-300/80 shadow-inner",
  iconDefault: "bg-slate-100 text-slate-600 ring-2 ring-slate-200/90",
  tagChip: "border-2 border-slate-200/90 bg-white text-slate-800 shadow-sm",
  filePill: "border-2 border-slate-200/90 bg-white text-slate-800",
  filePillIcon: "text-slate-600",
  ctaPrimary: "bg-gradient-to-r from-blue-600 via-blue-600 to-sky-600 shadow-lg shadow-blue-500/35 hover:brightness-105 active:brightness-95",
  titleGradient: "bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 bg-clip-text text-transparent",

  cardBg: "bg-gradient-to-b from-slate-50 to-white",
  cardBorder: "border-2 border-slate-200/90",
  cardTopBar: "border-t-4 border-t-blue-500",
  cardBorderHover: "hover:border-blue-300/90",
  cardHoverShadow: "hover:shadow-xl hover:shadow-blue-500/15",
  exploreLink:
    "border-2 border-blue-200/90 bg-white hover:bg-blue-50 hover:border-blue-400/90 hover:shadow-md hover:shadow-blue-500/10",
  exploreIcon: "text-blue-600",
  rowHover: "hover:border-blue-200/90 hover:bg-blue-50/90",
  rowArrow: "text-blue-600",
  searchCard: "border-2 border-slate-200/90 bg-white hover:border-blue-300/80 hover:bg-blue-50/80",
  searchIconBg: "bg-blue-100 text-blue-700",
  listAccent: "border-l-4 border-l-blue-500",

  navLinkHover: "hover:text-blue-700",
  breadcrumbActive: "font-semibold text-blue-800",
  headingCluster: "border-l-4 border-blue-500 pl-4",

  headerMetaChip: "border-2 border-blue-200 bg-blue-100/90 text-blue-950 shadow-sm",
  headerMetaIcon: "text-blue-600",
  headerLangChip: "border-2 border-slate-200/90 bg-white text-[#0a1628]",
  headerTopicTag: "border-2 border-slate-200/90 bg-white text-slate-700",

  heroPanel: "border-2 border-blue-300/60 bg-gradient-to-br from-blue-50/95 via-white to-sky-50/80 shadow-lg shadow-blue-500/10",
  heroGlow: "bg-blue-400/30",

  explorerIcon: "text-blue-600",
  explorerChrome: "border-2 border-blue-200/70 bg-gradient-to-b from-blue-50/50 to-slate-50/40 shadow-inner",
  explorerLeftColumn: "border-2 border-blue-200/60 bg-white shadow-md shadow-blue-500/5",
  previewColumn: "border-2 border-blue-200/60 bg-white shadow-md shadow-blue-500/5",

  tabActive:
    "flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-blue-50/70",

  searchFocus: "focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/20",

  sortActive: "rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20",
  sortInactive:
    "rounded-lg border-2 border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300/90 hover:bg-blue-50",

  filterChipOn: "rounded-full border-2 border-blue-300/90 bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-950 shadow-sm",
  filterChipOff: "rounded-full border-2 border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border-2 border-blue-400/80 bg-blue-100/90 px-3 py-3 text-left shadow-md shadow-blue-500/15 ring-2 ring-blue-200/60",
  fileRowActiveTitle: "font-semibold text-blue-950",
  fileRowActiveBadge: "bg-white text-blue-800 ring-2 ring-blue-200/80",
  fileRowInactive:
    "w-full rounded-xl border-2 border-transparent px-3 py-3 text-left hover:border-blue-200/80 hover:bg-blue-50/70",

  textLink: "font-semibold text-blue-700 hover:text-blue-900",

  previewHeader: "border-b-2 border-blue-200/80 bg-gradient-to-b from-blue-100/70 to-white",
  previewIcon: "text-blue-600",
  previewCta:
    "rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-105",
  conceptDot: "bg-blue-500 shadow-sm shadow-blue-500/40",
  previewTag: "rounded-full border-2 border-blue-200/90 bg-white px-3 py-1 text-xs font-medium text-blue-950 shadow-sm",

  codeViewerHeader: "border-b-2 border-blue-500/50 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900",
  codeViewerRing: "ring-2 ring-blue-500/40 shadow-lg shadow-blue-500/20",

  copyButton:
    "border-2 border-blue-200/90 bg-white hover:border-blue-400 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-500/15 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-blue-600",
  fileHeaderTag: "border-2 border-blue-200/90 bg-blue-100/90 text-blue-950",

  prevNextHover: "hover:border-blue-300/90 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-500/10",
  prevNextIconHover: "group-hover:text-blue-600",

  sidebarConceptDot: "bg-blue-500",
  sidebarFileIcon: "text-blue-600",
  sidebarTag: "border-2 border-blue-200/80 bg-blue-50 text-blue-950",
  sidebarSection: "border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/50 to-white",

  progressFill: "bg-gradient-to-r from-blue-500 to-sky-500",
};

const arrays: TopicTheme = {
  meta: { slug: "arrays", displayName: "Arrays" },
  transition,

  pageShell:
    "bg-[radial-gradient(ellipse_110%_75%_at_50%_-18%,rgb(147_197_253/0.95),transparent_50%),radial-gradient(ellipse_80%_55%_at_100%_30%,rgb(186_230_253/0.55),transparent_48%),linear-gradient(to_bottom,rgb(239_246_255),rgb(255_255_255),rgb(224_242_254/0.65))]",
  pageDecorA: "bg-blue-500/40",
  pageDecorB: "bg-cyan-400/35",

  featuredBg: "bg-gradient-to-br from-blue-200/80 via-white to-sky-100/90",
  featuredBorder: "border-2 border-blue-400/70",
  featuredOrb: "bg-blue-500/45",
  featuredOrb2: "bg-sky-400/40",
  featuredCardShadow: "shadow-xl shadow-blue-600/25",
  svgAccent: "text-blue-500/50",
  iconFeatured: "bg-gradient-to-br from-blue-300 to-blue-200 text-blue-900 ring-2 ring-blue-400/90 shadow-md",
  iconDefault: "bg-gradient-to-br from-blue-200 to-blue-100 text-blue-900 ring-2 ring-blue-300/90",
  tagChip: "border-2 border-blue-300/80 bg-blue-100 text-blue-950 shadow-sm",
  filePill: "border-2 border-blue-300/80 bg-white text-blue-950 shadow-sm",
  filePillIcon: "text-blue-700",
  ctaPrimary: "bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 shadow-lg shadow-blue-600/35 hover:brightness-105 active:brightness-95",
  titleGradient: "bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-700 bg-clip-text text-transparent",

  cardBg: "bg-gradient-to-b from-blue-100/90 to-white",
  cardBorder: "border-2 border-blue-300/85",
  cardTopBar: "border-t-4 border-t-blue-600",
  cardBorderHover: "hover:border-blue-500/90",
  cardHoverShadow: "hover:shadow-xl hover:shadow-blue-600/20",
  exploreLink:
    "border-2 border-blue-300/90 bg-white hover:bg-blue-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20",
  exploreIcon: "text-blue-700",
  rowHover: "hover:border-blue-300/90 hover:bg-blue-100/80",
  rowArrow: "text-blue-700",
  searchCard:
    "border-2 border-blue-300/90 bg-gradient-to-r from-blue-50 to-white hover:border-blue-500 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-500/15",
  searchIconBg: "bg-blue-200 text-blue-800",
  listAccent: "border-l-4 border-l-blue-600",

  navLinkHover: "hover:text-blue-800",
  breadcrumbActive: "font-bold text-blue-800",
  headingCluster: "border-l-4 border-blue-600 pl-4",

  headerMetaChip: "border-2 border-blue-300/90 bg-blue-100 text-blue-950 shadow-sm",
  headerMetaIcon: "text-blue-700",
  headerLangChip: "border-2 border-blue-200/90 bg-white text-blue-950",
  headerTopicTag: "border-2 border-blue-200/90 bg-blue-50/90 text-blue-900",

  heroPanel: "border-2 border-blue-400/60 bg-gradient-to-br from-blue-100/95 via-white to-sky-50/90 shadow-xl shadow-blue-500/15",
  heroGlow: "bg-blue-500/35",

  explorerIcon: "text-blue-700",
  explorerChrome: "border-2 border-blue-300/70 bg-gradient-to-b from-blue-100/40 to-blue-50/30 shadow-inner",
  explorerLeftColumn: "border-2 border-blue-300/70 bg-white shadow-lg shadow-blue-500/10",
  previewColumn: "border-2 border-blue-300/70 bg-white shadow-lg shadow-blue-500/10",

  tabActive:
    "flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/30",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-blue-100/60",

  searchFocus: "focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/25",

  sortActive: "rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25",
  sortInactive:
    "rounded-lg border-2 border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-400 hover:bg-blue-50",

  filterChipOn: "rounded-full border-2 border-blue-400/90 bg-blue-100 px-3 py-1 text-xs font-bold text-blue-950 shadow-sm",
  filterChipOff: "rounded-full border-2 border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border-2 border-blue-400 bg-blue-100 px-3 py-3 text-left shadow-lg shadow-blue-500/15 ring-2 ring-blue-300/50",
  fileRowActiveTitle: "font-bold text-blue-950",
  fileRowActiveBadge: "bg-white text-blue-900 ring-2 ring-blue-300/80",
  fileRowInactive: "w-full rounded-xl border-2 border-transparent px-3 py-3 text-left hover:border-blue-200 hover:bg-blue-50/80",

  textLink: "font-semibold text-blue-700 hover:text-blue-900",

  previewHeader: "border-b-2 border-blue-300/80 bg-gradient-to-b from-blue-100 to-white",
  previewIcon: "text-blue-700",
  previewCta:
    "rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:brightness-105",
  conceptDot: "bg-blue-500 shadow shadow-blue-600/40",
  previewTag: "rounded-full border-2 border-blue-300/90 bg-white px-3 py-1 text-xs font-semibold text-blue-950",

  codeViewerHeader: "border-b-2 border-blue-500/60 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900",
  codeViewerRing: "ring-2 ring-blue-500/50 shadow-xl shadow-blue-600/25",

  copyButton:
    "border-2 border-blue-300/90 bg-white hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-blue-700",
  fileHeaderTag: "border-2 border-blue-300/90 bg-blue-100 text-blue-950",

  prevNextHover: "hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/15",
  prevNextIconHover: "group-hover:text-blue-700",

  sidebarConceptDot: "bg-blue-500",
  sidebarFileIcon: "text-blue-700",
  sidebarTag: "border-2 border-blue-300/90 bg-blue-50 text-blue-950 font-medium",
  sidebarSection: "border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white",

  progressFill: "bg-gradient-to-r from-blue-600 to-cyan-500",
};

const graphs: TopicTheme = {
  meta: { slug: "graphs", displayName: "Graphs" },
  transition,

  pageShell:
    "bg-[radial-gradient(ellipse_110%_75%_at_50%_-18%,rgb(167_243_208/0.95),transparent_50%),radial-gradient(ellipse_75%_50%_at_0%_40%,rgb(187_247_208/0.5),transparent_48%),linear-gradient(to_bottom,rgb(236_253_245),rgb(255_255_255),rgb(209_250_229/0.7))]",
  pageDecorA: "bg-emerald-500/40",
  pageDecorB: "bg-green-400/35",

  featuredBg: "bg-gradient-to-br from-emerald-200/75 via-white to-green-100/85",
  featuredBorder: "border-2 border-emerald-400/70",
  featuredOrb: "bg-emerald-500/45",
  featuredOrb2: "bg-green-400/38",
  featuredCardShadow: "shadow-xl shadow-emerald-600/25",
  svgAccent: "text-emerald-500/50",
  iconFeatured: "bg-gradient-to-br from-emerald-300 to-emerald-200 text-emerald-950 ring-2 ring-emerald-400/90 shadow-md",
  iconDefault: "bg-gradient-to-br from-emerald-200 to-green-100 text-emerald-900 ring-2 ring-emerald-300/90",
  tagChip: "border-2 border-emerald-300/85 bg-emerald-100 text-emerald-950 shadow-sm",
  filePill: "border-2 border-emerald-300/85 bg-white text-emerald-950 shadow-sm",
  filePillIcon: "text-emerald-700",
  ctaPrimary: "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 shadow-lg shadow-emerald-600/35 hover:brightness-105",
  titleGradient: "bg-gradient-to-r from-emerald-900 via-green-800 to-teal-800 bg-clip-text text-transparent",

  cardBg: "bg-gradient-to-b from-emerald-100/90 to-white",
  cardBorder: "border-2 border-emerald-300/85",
  cardTopBar: "border-t-4 border-t-emerald-600",
  cardBorderHover: "hover:border-emerald-500/90",
  cardHoverShadow: "hover:shadow-xl hover:shadow-emerald-600/20",
  exploreLink:
    "border-2 border-emerald-300/90 bg-white hover:bg-emerald-100 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20",
  exploreIcon: "text-emerald-700",
  rowHover: "hover:border-emerald-300/90 hover:bg-emerald-100/80",
  rowArrow: "text-emerald-700",
  searchCard:
    "border-2 border-emerald-300/90 bg-gradient-to-r from-emerald-50 to-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15",
  searchIconBg: "bg-emerald-200 text-emerald-900",
  listAccent: "border-l-4 border-l-emerald-600",

  navLinkHover: "hover:text-emerald-800",
  breadcrumbActive: "font-bold text-emerald-900",
  headingCluster: "border-l-4 border-emerald-600 pl-4",

  headerMetaChip: "border-2 border-emerald-300/90 bg-emerald-100 text-emerald-950 shadow-sm",
  headerMetaIcon: "text-emerald-700",
  headerLangChip: "border-2 border-emerald-200/90 bg-white text-emerald-950",
  headerTopicTag: "border-2 border-emerald-200/90 bg-emerald-50 text-emerald-900",

  heroPanel: "border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-100/95 via-white to-green-50/90 shadow-xl shadow-emerald-500/15",
  heroGlow: "bg-emerald-500/35",

  explorerIcon: "text-emerald-700",
  explorerChrome: "border-2 border-emerald-300/70 bg-gradient-to-b from-emerald-100/40 to-green-50/30 shadow-inner",
  explorerLeftColumn: "border-2 border-emerald-300/70 bg-white shadow-lg shadow-emerald-500/10",
  previewColumn: "border-2 border-emerald-300/70 bg-white shadow-lg shadow-emerald-500/10",

  tabActive:
    "flex-1 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-500/30",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-emerald-100/60",

  searchFocus: "focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/25",

  sortActive: "rounded-lg bg-gradient-to-r from-emerald-600 to-green-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-500/25",
  sortInactive:
    "rounded-lg border-2 border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-emerald-400 hover:bg-emerald-50",

  filterChipOn: "rounded-full border-2 border-emerald-400/90 bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950 shadow-sm",
  filterChipOff: "rounded-full border-2 border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border-2 border-emerald-400 bg-emerald-100 px-3 py-3 text-left shadow-lg shadow-emerald-500/15 ring-2 ring-emerald-300/50",
  fileRowActiveTitle: "font-bold text-emerald-950",
  fileRowActiveBadge: "bg-white text-emerald-900 ring-2 ring-emerald-300/80",
  fileRowInactive: "w-full rounded-xl border-2 border-transparent px-3 py-3 text-left hover:border-emerald-200 hover:bg-emerald-50/80",

  textLink: "font-semibold text-emerald-700 hover:text-emerald-900",

  previewHeader: "border-b-2 border-emerald-300/80 bg-gradient-to-b from-emerald-100 to-white",
  previewIcon: "text-emerald-700",
  previewCta:
    "rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 hover:brightness-105",
  conceptDot: "bg-emerald-500 shadow shadow-emerald-600/40",
  previewTag: "rounded-full border-2 border-emerald-300/90 bg-white px-3 py-1 text-xs font-semibold text-emerald-950",

  codeViewerHeader: "border-b-2 border-emerald-500/60 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900",
  codeViewerRing: "ring-2 ring-emerald-500/50 shadow-xl shadow-emerald-600/25",

  copyButton:
    "border-2 border-emerald-300/90 bg-white hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-emerald-700",
  fileHeaderTag: "border-2 border-emerald-300/90 bg-emerald-100 text-emerald-950",

  prevNextHover: "hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-500/15",
  prevNextIconHover: "group-hover:text-emerald-700",

  sidebarConceptDot: "bg-emerald-500",
  sidebarFileIcon: "text-emerald-700",
  sidebarTag: "border-2 border-emerald-300/90 bg-emerald-50 text-emerald-950 font-medium",
  sidebarSection: "border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50 to-white",

  progressFill: "bg-gradient-to-r from-emerald-600 to-teal-500",
};

const binaryTrees: TopicTheme = {
  meta: { slug: "binary-trees", displayName: "Binary Trees" },
  transition,

  pageShell:
    "bg-[radial-gradient(ellipse_110%_75%_at_50%_-18%,rgb(196_181_253/0.95),transparent_50%),radial-gradient(ellipse_75%_50%_at_100%_35%,rgb(233_213_255/0.55),transparent_48%),linear-gradient(to_bottom,rgb(245_243_255),rgb(255_255_255),rgb(237_233_254/0.75))]",
  pageDecorA: "bg-violet-500/40",
  pageDecorB: "bg-purple-400/35",

  featuredBg: "bg-gradient-to-br from-violet-200/75 via-white to-purple-100/85",
  featuredBorder: "border-2 border-violet-400/70",
  featuredOrb: "bg-violet-500/45",
  featuredOrb2: "bg-purple-400/38",
  featuredCardShadow: "shadow-xl shadow-violet-600/25",
  svgAccent: "text-violet-500/50",
  iconFeatured: "bg-gradient-to-br from-violet-300 to-violet-200 text-violet-950 ring-2 ring-violet-400/90 shadow-md",
  iconDefault: "bg-gradient-to-br from-violet-200 to-purple-100 text-violet-900 ring-2 ring-violet-300/90",
  tagChip: "border-2 border-violet-300/85 bg-violet-100 text-violet-950 shadow-sm",
  filePill: "border-2 border-violet-300/85 bg-white text-violet-950 shadow-sm",
  filePillIcon: "text-violet-700",
  ctaPrimary: "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-600/35 hover:brightness-105",
  titleGradient: "bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-800 bg-clip-text text-transparent",

  cardBg: "bg-gradient-to-b from-violet-100/90 to-white",
  cardBorder: "border-2 border-violet-300/85",
  cardTopBar: "border-t-4 border-t-violet-600",
  cardBorderHover: "hover:border-violet-500/90",
  cardHoverShadow: "hover:shadow-xl hover:shadow-violet-600/20",
  exploreLink:
    "border-2 border-violet-300/90 bg-white hover:bg-violet-100 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20",
  exploreIcon: "text-violet-700",
  rowHover: "hover:border-violet-300/90 hover:bg-violet-100/80",
  rowArrow: "text-violet-700",
  searchCard:
    "border-2 border-violet-300/90 bg-gradient-to-r from-violet-50 to-white hover:border-violet-500 hover:shadow-md hover:shadow-violet-500/15",
  searchIconBg: "bg-violet-200 text-violet-900",
  listAccent: "border-l-4 border-l-violet-600",

  navLinkHover: "hover:text-violet-800",
  breadcrumbActive: "font-bold text-violet-900",
  headingCluster: "border-l-4 border-violet-600 pl-4",

  headerMetaChip: "border-2 border-violet-300/90 bg-violet-100 text-violet-950 shadow-sm",
  headerMetaIcon: "text-violet-700",
  headerLangChip: "border-2 border-violet-200/90 bg-white text-violet-950",
  headerTopicTag: "border-2 border-violet-200/90 bg-violet-50 text-violet-900",

  heroPanel: "border-2 border-violet-400/60 bg-gradient-to-br from-violet-100/95 via-white to-purple-50/90 shadow-xl shadow-violet-500/15",
  heroGlow: "bg-violet-500/35",

  explorerIcon: "text-violet-700",
  explorerChrome: "border-2 border-violet-300/70 bg-gradient-to-b from-violet-100/40 to-purple-50/30 shadow-inner",
  explorerLeftColumn: "border-2 border-violet-300/70 bg-white shadow-lg shadow-violet-500/10",
  previewColumn: "border-2 border-violet-300/70 bg-white shadow-lg shadow-violet-500/10",

  tabActive:
    "flex-1 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-500/30",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-violet-100/60",

  searchFocus: "focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/25",

  sortActive: "rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-violet-500/25",
  sortInactive:
    "rounded-lg border-2 border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-violet-400 hover:bg-violet-50",

  filterChipOn: "rounded-full border-2 border-violet-400/90 bg-violet-100 px-3 py-1 text-xs font-bold text-violet-950 shadow-sm",
  filterChipOff: "rounded-full border-2 border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border-2 border-violet-400 bg-violet-100 px-3 py-3 text-left shadow-lg shadow-violet-500/15 ring-2 ring-violet-300/50",
  fileRowActiveTitle: "font-bold text-violet-950",
  fileRowActiveBadge: "bg-white text-violet-900 ring-2 ring-violet-300/80",
  fileRowInactive: "w-full rounded-xl border-2 border-transparent px-3 py-3 text-left hover:border-violet-200 hover:bg-violet-50/80",

  textLink: "font-semibold text-violet-700 hover:text-violet-900",

  previewHeader: "border-b-2 border-violet-300/80 bg-gradient-to-b from-violet-100 to-white",
  previewIcon: "text-violet-700",
  previewCta:
    "rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-500/30 hover:brightness-105",
  conceptDot: "bg-violet-500 shadow shadow-violet-600/40",
  previewTag: "rounded-full border-2 border-violet-300/90 bg-white px-3 py-1 text-xs font-semibold text-violet-950",

  codeViewerHeader: "border-b-2 border-violet-500/60 bg-gradient-to-r from-slate-950 via-violet-950 to-slate-900",
  codeViewerRing: "ring-2 ring-violet-500/50 shadow-xl shadow-violet-600/25",

  copyButton:
    "border-2 border-violet-300/90 bg-white hover:border-violet-500 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-violet-700",
  fileHeaderTag: "border-2 border-violet-300/90 bg-violet-100 text-violet-950",

  prevNextHover: "hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-500/15",
  prevNextIconHover: "group-hover:text-violet-700",

  sidebarConceptDot: "bg-violet-500",
  sidebarFileIcon: "text-violet-700",
  sidebarTag: "border-2 border-violet-300/90 bg-violet-50 text-violet-950 font-medium",
  sidebarSection: "border-l-4 border-violet-600 bg-gradient-to-r from-violet-50 to-white",

  progressFill: "bg-gradient-to-r from-violet-600 to-fuchsia-500",
};

const recursion: TopicTheme = {
  meta: { slug: "recursion", displayName: "Recursion" },
  transition,

  pageShell:
    "bg-[radial-gradient(ellipse_110%_75%_at_50%_-18%,rgb(254_215_170/0.95),transparent_50%),radial-gradient(ellipse_75%_50%_at_0%_45%,rgb(253_230_138/0.55),transparent_48%),linear-gradient(to_bottom,rgb(255_251_235),rgb(255_255_255),rgb(254_243_199/0.75))]",
  pageDecorA: "bg-orange-500/40",
  pageDecorB: "bg-amber-400/38",

  featuredBg: "bg-gradient-to-br from-amber-200/80 via-white to-orange-100/85",
  featuredBorder: "border-2 border-amber-400/70",
  featuredOrb: "bg-orange-500/45",
  featuredOrb2: "bg-amber-400/40",
  featuredCardShadow: "shadow-xl shadow-orange-500/25",
  svgAccent: "text-orange-500/50",
  iconFeatured: "bg-gradient-to-br from-amber-300 to-orange-200 text-amber-950 ring-2 ring-amber-400/90 shadow-md",
  iconDefault: "bg-gradient-to-br from-amber-200 to-orange-100 text-amber-950 ring-2 ring-amber-300/90",
  tagChip: "border-2 border-amber-300/85 bg-amber-100 text-amber-950 shadow-sm",
  filePill: "border-2 border-amber-300/85 bg-white text-amber-950 shadow-sm",
  filePillIcon: "text-amber-800",
  ctaPrimary: "bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600 shadow-lg shadow-orange-500/35 hover:brightness-105",
  titleGradient: "bg-gradient-to-r from-orange-900 via-amber-800 to-orange-800 bg-clip-text text-transparent",

  cardBg: "bg-gradient-to-b from-amber-100/90 to-white",
  cardBorder: "border-2 border-amber-300/85",
  cardTopBar: "border-t-4 border-t-orange-500",
  cardBorderHover: "hover:border-orange-500/90",
  cardHoverShadow: "hover:shadow-xl hover:shadow-orange-500/20",
  exploreLink:
    "border-2 border-amber-300/90 bg-white hover:bg-amber-100 hover:border-orange-500 hover:shadow-lg hover:shadow-amber-500/20",
  exploreIcon: "text-orange-700",
  rowHover: "hover:border-amber-300/90 hover:bg-amber-100/80",
  rowArrow: "text-orange-700",
  searchCard:
    "border-2 border-amber-300/90 bg-gradient-to-r from-amber-50 to-white hover:border-orange-500 hover:shadow-md hover:shadow-amber-500/15",
  searchIconBg: "bg-amber-200 text-amber-950",
  listAccent: "border-l-4 border-l-orange-600",

  navLinkHover: "hover:text-orange-800",
  breadcrumbActive: "font-bold text-amber-950",
  headingCluster: "border-l-4 border-orange-600 pl-4",

  headerMetaChip: "border-2 border-amber-300/90 bg-amber-100 text-amber-950 shadow-sm",
  headerMetaIcon: "text-orange-700",
  headerLangChip: "border-2 border-amber-200/90 bg-white text-amber-950",
  headerTopicTag: "border-2 border-amber-200/90 bg-amber-50 text-amber-950",

  heroPanel: "border-2 border-amber-400/60 bg-gradient-to-br from-amber-100/95 via-white to-orange-50/90 shadow-xl shadow-amber-500/15",
  heroGlow: "bg-orange-500/35",

  explorerIcon: "text-orange-700",
  explorerChrome: "border-2 border-amber-300/70 bg-gradient-to-b from-amber-100/40 to-orange-50/30 shadow-inner",
  explorerLeftColumn: "border-2 border-amber-300/70 bg-white shadow-lg shadow-orange-500/10",
  previewColumn: "border-2 border-amber-300/70 bg-white shadow-lg shadow-orange-500/10",

  tabActive:
    "flex-1 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-orange-500/30",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-amber-100/60",

  searchFocus: "focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/25",

  sortActive: "rounded-lg bg-gradient-to-r from-orange-600 to-amber-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-orange-500/25",
  sortInactive:
    "rounded-lg border-2 border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-amber-400 hover:bg-amber-50",

  filterChipOn: "rounded-full border-2 border-amber-400/90 bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950 shadow-sm",
  filterChipOff: "rounded-full border-2 border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border-2 border-orange-400 bg-amber-100 px-3 py-3 text-left shadow-lg shadow-orange-500/15 ring-2 ring-amber-300/50",
  fileRowActiveTitle: "font-bold text-amber-950",
  fileRowActiveBadge: "bg-white text-amber-950 ring-2 ring-amber-300/80",
  fileRowInactive: "w-full rounded-xl border-2 border-transparent px-3 py-3 text-left hover:border-amber-200 hover:bg-amber-50/80",

  textLink: "font-semibold text-orange-700 hover:text-orange-900",

  previewHeader: "border-b-2 border-amber-300/80 bg-gradient-to-b from-amber-100 to-white",
  previewIcon: "text-orange-700",
  previewCta:
    "rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:brightness-105",
  conceptDot: "bg-orange-500 shadow shadow-orange-600/40",
  previewTag: "rounded-full border-2 border-amber-300/90 bg-white px-3 py-1 text-xs font-semibold text-amber-950",

  codeViewerHeader: "border-b-2 border-orange-500/60 bg-gradient-to-r from-slate-950 via-orange-950 to-slate-900",
  codeViewerRing: "ring-2 ring-orange-500/50 shadow-xl shadow-orange-600/25",

  copyButton:
    "border-2 border-amber-300/90 bg-white hover:border-orange-500 hover:bg-amber-50 hover:shadow-lg hover:shadow-orange-500/20 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-orange-700",
  fileHeaderTag: "border-2 border-amber-300/90 bg-amber-100 text-amber-950",

  prevNextHover: "hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg hover:shadow-orange-500/15",
  prevNextIconHover: "group-hover:text-orange-700",

  sidebarConceptDot: "bg-orange-500",
  sidebarFileIcon: "text-orange-700",
  sidebarTag: "border-2 border-amber-300/90 bg-amber-50 text-amber-950 font-medium",
  sidebarSection: "border-l-4 border-orange-600 bg-gradient-to-r from-amber-50 to-white",

  progressFill: "bg-gradient-to-r from-orange-600 to-amber-500",
};

const stacks: TopicTheme = {
  meta: { slug: "stacks", displayName: "Stacks" },
  transition,

  pageShell:
    "bg-[radial-gradient(ellipse_110%_75%_at_50%_-18%,rgb(254_202_202/0.95),transparent_50%),radial-gradient(ellipse_75%_50%_at_100%_40%,rgb(252_165_165/0.5),transparent_48%),linear-gradient(to_bottom,rgb(254_242_242),rgb(255_255_255),rgb(254_226_226/0.75))]",
  pageDecorA: "bg-red-500/40",
  pageDecorB: "bg-rose-400/38",

  featuredBg: "bg-gradient-to-br from-red-200/75 via-white to-rose-100/85",
  featuredBorder: "border-2 border-red-400/70",
  featuredOrb: "bg-red-500/45",
  featuredOrb2: "bg-rose-400/40",
  featuredCardShadow: "shadow-xl shadow-red-600/25",
  svgAccent: "text-red-500/50",
  iconFeatured: "bg-gradient-to-br from-red-300 to-rose-200 text-red-950 ring-2 ring-red-400/90 shadow-md",
  iconDefault: "bg-gradient-to-br from-red-200 to-rose-100 text-red-900 ring-2 ring-red-300/90",
  tagChip: "border-2 border-red-300/85 bg-red-100 text-red-950 shadow-sm",
  filePill: "border-2 border-red-300/85 bg-white text-red-950 shadow-sm",
  filePillIcon: "text-red-700",
  ctaPrimary: "bg-gradient-to-r from-red-600 via-red-600 to-rose-600 shadow-lg shadow-red-600/35 hover:brightness-105",
  titleGradient: "bg-gradient-to-r from-red-900 via-rose-800 to-red-800 bg-clip-text text-transparent",

  cardBg: "bg-gradient-to-b from-red-100/90 to-white",
  cardBorder: "border-2 border-red-300/85",
  cardTopBar: "border-t-4 border-t-red-600",
  cardBorderHover: "hover:border-red-500/90",
  cardHoverShadow: "hover:shadow-xl hover:shadow-red-600/20",
  exploreLink:
    "border-2 border-red-300/90 bg-white hover:bg-red-100 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20",
  exploreIcon: "text-red-700",
  rowHover: "hover:border-red-300/90 hover:bg-red-100/80",
  rowArrow: "text-red-700",
  searchCard:
    "border-2 border-red-300/90 bg-gradient-to-r from-red-50 to-white hover:border-red-500 hover:shadow-md hover:shadow-red-500/15",
  searchIconBg: "bg-red-200 text-red-900",
  listAccent: "border-l-4 border-l-red-600",

  navLinkHover: "hover:text-red-800",
  breadcrumbActive: "font-bold text-red-900",
  headingCluster: "border-l-4 border-red-600 pl-4",

  headerMetaChip: "border-2 border-red-300/90 bg-red-100 text-red-950 shadow-sm",
  headerMetaIcon: "text-red-700",
  headerLangChip: "border-2 border-red-200/90 bg-white text-red-950",
  headerTopicTag: "border-2 border-red-200/90 bg-red-50 text-red-900",

  heroPanel: "border-2 border-red-400/60 bg-gradient-to-br from-red-100/95 via-white to-rose-50/90 shadow-xl shadow-red-500/15",
  heroGlow: "bg-red-500/35",

  explorerIcon: "text-red-700",
  explorerChrome: "border-2 border-red-300/70 bg-gradient-to-b from-red-100/40 to-rose-50/30 shadow-inner",
  explorerLeftColumn: "border-2 border-red-300/70 bg-white shadow-lg shadow-red-500/10",
  previewColumn: "border-2 border-red-300/70 bg-white shadow-lg shadow-red-500/10",

  tabActive:
    "flex-1 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-red-500/30",
  tabInactive: "flex-1 rounded-lg py-2.5 text-xs font-medium text-slate-600 hover:bg-red-100/60",

  searchFocus: "focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/25",

  sortActive: "rounded-lg bg-gradient-to-r from-red-600 to-rose-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-red-500/25",
  sortInactive:
    "rounded-lg border-2 border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-red-400 hover:bg-red-50",

  filterChipOn: "rounded-full border-2 border-red-400/90 bg-red-100 px-3 py-1 text-xs font-bold text-red-950 shadow-sm",
  filterChipOff: "rounded-full border-2 border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50",

  fileRowActive:
    "w-full rounded-xl border-2 border-red-400 bg-red-100 px-3 py-3 text-left shadow-lg shadow-red-500/15 ring-2 ring-red-300/50",
  fileRowActiveTitle: "font-bold text-red-950",
  fileRowActiveBadge: "bg-white text-red-900 ring-2 ring-red-300/80",
  fileRowInactive: "w-full rounded-xl border-2 border-transparent px-3 py-3 text-left hover:border-red-200 hover:bg-red-50/80",

  textLink: "font-semibold text-red-700 hover:text-red-900",

  previewHeader: "border-b-2 border-red-300/80 bg-gradient-to-b from-red-100 to-white",
  previewIcon: "text-red-700",
  previewCta:
    "rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/30 hover:brightness-105",
  conceptDot: "bg-red-500 shadow shadow-red-600/40",
  previewTag: "rounded-full border-2 border-red-300/90 bg-white px-3 py-1 text-xs font-semibold text-red-950",

  codeViewerHeader: "border-b-2 border-red-500/60 bg-gradient-to-r from-slate-950 via-red-950 to-slate-900",
  codeViewerRing: "ring-2 ring-red-500/50 shadow-xl shadow-red-600/25",

  copyButton:
    "border-2 border-red-300/90 bg-white hover:border-red-500 hover:bg-red-50 hover:shadow-lg hover:shadow-red-500/20 disabled:cursor-not-allowed disabled:opacity-50",
  copyIcon: "text-red-700",
  fileHeaderTag: "border-2 border-red-300/90 bg-red-100 text-red-950",

  prevNextHover: "hover:border-red-400 hover:bg-red-50 hover:shadow-lg hover:shadow-red-500/15",
  prevNextIconHover: "group-hover:text-red-700",

  sidebarConceptDot: "bg-red-500",
  sidebarFileIcon: "text-red-700",
  sidebarTag: "border-2 border-red-300/90 bg-red-50 text-red-950 font-medium",
  sidebarSection: "border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white",

  progressFill: "bg-gradient-to-r from-red-600 to-rose-500",
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

export const TOPIC_THEME_ORDER: TopicThemeMeta[] = [
  arrays.meta,
  graphs.meta,
  binaryTrees.meta,
  recursion.meta,
  stacks.meta,
];

/** Vibrant multi-color dashboard wash — clearly not “all blue” */
export const dashboardShell =
  "bg-[radial-gradient(ellipse_130%_90%_at_50%_-25%,rgb(191_219_254/0.85),transparent_55%),radial-gradient(ellipse_70%_55%_at_0%_30%,rgb(167_243_208/0.55),transparent_50%),radial-gradient(ellipse_65%_50%_at_100%_25%,rgb(196_181_253/0.5),transparent_48%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgb(254_202_202/0.45),transparent_45%),radial-gradient(ellipse_50%_40%_at_15%_85%,rgb(254_215_170/0.4),transparent_42%),linear-gradient(to_bottom,rgb(248_250_252),rgb(255_255_255))]";
