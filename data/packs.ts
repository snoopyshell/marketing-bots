export const categories = [
  "Copy",
  "SEO",
  "CRO",
  "Paid",
  "Growth",
  "Strategy",
  "Sales",
  "Measurement",
] as const;

export type Category = (typeof categories)[number];

export type SkillIcon =
  | "megaphone"
  | "users"
  | "mouse-pointer-click"
  | "user-plus"
  | "rocket"
  | "message-square"
  | "credit-card"
  | "pen-line"
  | "scissors"
  | "mail"
  | "send"
  | "message-circle"
  | "smartphone"
  | "image"
  | "video"
  | "tag"
  | "search"
  | "sparkles"
  | "layers"
  | "network"
  | "swords"
  | "scan-search"
  | "braces"
  | "app-window"
  | "notebook-pen"
  | "palette"
  | "calendar"
  | "handshake"
  | "chart-column"
  | "flask-conical"
  | "git-branch"
  | "gift"
  | "user-minus"
  | "wrench"
  | "users-round"
  | "magnet"
  | "repeat"
  | "clipboard-list"
  | "lightbulb"
  | "brain"
  | "messages-square"
  | "flag"
  | "circle-dollar-sign"
  | "newspaper"
  | "workflow"
  | "book-open"
  | "target"
  | "library";

export type Skill = {
  name: string;
  description: string;
  icon: SkillIcon;
};

export type Pack = {
  slug: string;
  name: string;
  category: Category;
  card: string;
  description: string;
  updated: string;
  shareUrl: string | null;
  skills: Skill[];
};

export const packs: Pack[] = [
  {
    slug: "product-marketing",
    name: "Product marketing",
    category: "Strategy",
    card: "Set positioning, ICP, messaging, and customer language before a campaign ships.",
    description:
      "A standalone specialist for founders and product marketers who need one place to lock positioning, ICP, messaging, and customer language before a campaign ships. Ask it to name the buyer, write the narrative, and record the words customers actually use. You get a short product-marketing brief — not a slide deck.",
    updated: "Aug 2026",
    shareUrl: "https://x.ai/bot/e3LgBmpbhzWHhLYUM1xeZ",
    skills: [
      {
        name: "Product marketing",
        description:
          "Set positioning, ICP, messaging, and customer language for the product.",
        icon: "megaphone",
      },
      {
        name: "Customer research",
        description:
          "Interview, synthesize, and capture how customers actually talk.",
        icon: "users",
      },
    ],
  },
  {
    slug: "conversion",
    name: "Conversion",
    category: "CRO",
    card: "Fix pages, signup, onboarding, popups, and paywalls.",
    description:
      "For anyone staring at a leaky funnel. Paste a URL or a flow and ask where people stall. You get specific copy and structure changes for pages, signup, onboarding, popups, and paywalls — not a generic CRO lecture.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "CRO",
        description:
          "Find friction on key pages and rewrite the path to the next step.",
        icon: "mouse-pointer-click",
      },
      {
        name: "Signup",
        description:
          "Shorten the signup flow and clarify what happens after submit.",
        icon: "user-plus",
      },
      {
        name: "Onboarding",
        description:
          "Get a new user to first value without extra screens or copy.",
        icon: "rocket",
      },
      {
        name: "Popups",
        description:
          "Write and time popups so they help a decision instead of blocking it.",
        icon: "message-square",
      },
      {
        name: "Paywalls",
        description:
          "Test paywall copy, timing, and what the plan is actually selling.",
        icon: "credit-card",
      },
    ],
  },
  {
    slug: "copy",
    name: "Copy",
    category: "Copy",
    card: "Write pages, email, social, SMS, and offers.",
    description:
      "For anyone who has to ship words this week. Give it the audience, the offer, and the channel. You get drafts you can edit: pages, email, social, SMS, and the offer line itself — not a style guide.",
    updated: "Aug 2026",
    shareUrl: "https://x.ai/bot/tFwQlKDGzy2rXcUaGyKjg",
    skills: [
      {
        name: "Copywriting",
        description: "Draft headlines, pages, and campaigns from a brief.",
        icon: "pen-line",
      },
      {
        name: "Copy editing",
        description: "Cut and fix existing copy without flattening the voice.",
        icon: "scissors",
      },
      {
        name: "Emails",
        description: "Write lifecycle and campaign emails people can act on.",
        icon: "mail",
      },
      {
        name: "Cold email",
        description:
          "Write outbound sequences that sound like a person and ask for a reply.",
        icon: "send",
      },
      {
        name: "Social",
        description: "Draft posts and threads for the channels you already run.",
        icon: "message-circle",
      },
      {
        name: "SMS",
        description: "Write short SMS with one action and no leftover copy.",
        icon: "smartphone",
      },
      {
        name: "Image",
        description:
          "Brief still assets so the visual carries the same line as the copy.",
        icon: "image",
      },
      {
        name: "Video",
        description: "Outline scripts and on-screen copy for short video.",
        icon: "video",
      },
      {
        name: "Offers",
        description: "Name and frame the offer so the trade is obvious.",
        icon: "tag",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "SEO",
    card: "Audits, AI search, programmatic pages, and comparison content.",
    description:
      "For teams that need organic traffic without a 40-page audit PDF. Point it at the site, the query set, or a competitor. You get technical and content work: audits, AI-search structure, programmatic page specs, and comparison drafts.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "SEO audit",
        description:
          "Find technical and content issues that block ranking or crawling.",
        icon: "search",
      },
      {
        name: "AI SEO",
        description:
          "Structure pages so AI search can cite and summarize them accurately.",
        icon: "sparkles",
      },
      {
        name: "Programmatic SEO",
        description:
          "Design templates and data for pages that can scale without junk.",
        icon: "layers",
      },
      {
        name: "Site architecture",
        description:
          "Map URLs, hubs, and internal links so important pages can rank.",
        icon: "network",
      },
      {
        name: "Competitors",
        description: "Track who ranks for your terms and what they keep publishing.",
        icon: "swords",
      },
      {
        name: "Competitor profiling",
        description:
          "Break down a competitor's positioning, pages, and content system.",
        icon: "scan-search",
      },
      {
        name: "Schema",
        description:
          "Add and validate structured data that search engines actually read.",
        icon: "braces",
      },
      {
        name: "ASO",
        description: "Rewrite App Store and Play listing copy and metadata.",
        icon: "app-window",
      },
      {
        name: "Content strategy",
        description:
          "Decide what to publish, in what order, and which pages it should support.",
        icon: "notebook-pen",
      },
    ],
  },
  {
    slug: "paid",
    name: "Paid",
    category: "Paid",
    card: "Ads, creative, events, and creator partnerships.",
    description:
      "For marketers running spend, not just reporting it. Brief the product, the claim, and the channel. You get campaign structure, creative briefs, event follow-up, and creator notes you can send.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "Ads",
        description:
          "Plan and write paid campaigns with a single claim per ad group.",
        icon: "megaphone",
      },
      {
        name: "Ad creative",
        description:
          "Brief and iterate creatives against that claim, not a new idea each time.",
        icon: "palette",
      },
      {
        name: "Events",
        description: "Plan event promotion, the invite, and the follow-up after.",
        icon: "calendar",
      },
      {
        name: "Creator partnerships",
        description: "Brief creators and record what the partnership produced.",
        icon: "handshake",
      },
    ],
  },
  {
    slug: "measurement",
    name: "Measurement",
    category: "Measurement",
    card: "Analytics, experiments, and attribution.",
    description:
      "For people tired of dashboards that do not answer the question. Tell it what you are trying to decide. You get event definitions, test design, and an honest read on which channels actually get credit.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "Analytics",
        description:
          "Define events, dashboards, and the questions they are allowed to answer.",
        icon: "chart-column",
      },
      {
        name: "A/B testing",
        description: "Design a test with a hypothesis, a metric, and a stop rule.",
        icon: "flask-conical",
      },
      {
        name: "Attribution",
        description:
          "Map which channels get credit and where the model is lying.",
        icon: "git-branch",
      },
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    category: "Growth",
    card: "Referrals, churn, loops, and partnerships.",
    description:
      "For operators looking for compounding, not another campaign. Describe the product and where people enter and leave. You get referral offers, save paths, loop maps, and partner motions you can run.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "Referrals",
        description: "Design a referral offer people will actually send.",
        icon: "gift",
      },
      {
        name: "Churn prevention",
        description: "Find why people leave and write the save paths.",
        icon: "user-minus",
      },
      {
        name: "Free tools",
        description:
          "Spec a free tool that brings in the audience you can convert.",
        icon: "wrench",
      },
      {
        name: "Co-marketing",
        description:
          "Plan a partner campaign with a split of work, list, and credit.",
        icon: "handshake",
      },
      {
        name: "Community marketing",
        description:
          "Run community programs that feed the product, not a ghost town.",
        icon: "users-round",
      },
      {
        name: "Lead magnets",
        description:
          "Spec a lead magnet that matches the next step, not a generic PDF.",
        icon: "magnet",
      },
      {
        name: "Marketing loops",
        description:
          "Find loops that can compound without buying the next click.",
        icon: "repeat",
      },
    ],
  },
  {
    slug: "strategy",
    name: "Strategy",
    category: "Strategy",
    card: "Plans, ideas, launch, pricing, and PR.",
    description:
      "For the person who has to decide what to do next quarter. Give it the constraint, the audience, and the date. You get a sequenced plan, launch order, pricing frames, and a PR story — not a brainstorm dump.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "Marketing plan",
        description:
          "Write a plan with goals, bets, and a sequence — not a slide dump.",
        icon: "clipboard-list",
      },
      {
        name: "Marketing ideas",
        description:
          "Generate ideas tied to a constraint, channel, and next test.",
        icon: "lightbulb",
      },
      {
        name: "Marketing psychology",
        description:
          "Apply a known bias only where it changes the decision on the page.",
        icon: "brain",
      },
      {
        name: "Marketing council",
        description:
          "Stress-test a plan against objections before you spend on it.",
        icon: "messages-square",
      },
      {
        name: "Launch",
        description: "Sequence a launch from brief to the week after ship.",
        icon: "flag",
      },
      {
        name: "Pricing",
        description:
          "Test packaging, price points, and how the offer is framed.",
        icon: "circle-dollar-sign",
      },
      {
        name: "Public relations",
        description:
          "Draft the story, the targets, and the assets for a PR push.",
        icon: "newspaper",
      },
    ],
  },
  {
    slug: "sales",
    name: "Sales",
    category: "Sales",
    card: "RevOps, enablement, prospecting, and directories.",
    description:
      "For founders and AEs who need the system around the pitch. Share the ICP and the current pipeline. You get stage definitions, talk tracks, prospecting openers, and the directory list worth submitting to.",
    updated: "Aug 2026",
    shareUrl: null,
    skills: [
      {
        name: "RevOps",
        description:
          "Align pipeline stages, handoffs, and the fields sales actually uses.",
        icon: "workflow",
      },
      {
        name: "Sales enablement",
        description:
          "Write the one-pagers, talk tracks, and objection docs reps will open.",
        icon: "book-open",
      },
      {
        name: "Prospecting",
        description:
          "Build lists and openers for a defined ICP, not a scraped dump.",
        icon: "target",
      },
      {
        name: "Directory submissions",
        description:
          "Submit the product to directories that still send real traffic.",
        icon: "library",
      },
    ],
  },
];

export function getPack(slug: string) {
  return packs.find((pack) => pack.slug === slug);
}

export function filterPacks(category?: string | null) {
  if (!category) return packs;
  return packs.filter((pack) => pack.category === category);
}

export function isCategory(value: string | null | undefined): value is Category {
  return Boolean(value && (categories as readonly string[]).includes(value));
}

export function categoryCounts() {
  return categories.map((category) => ({
    category,
    count: packs.filter((pack) => pack.category === category).length,
  }));
}
