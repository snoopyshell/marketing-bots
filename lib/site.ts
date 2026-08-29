export const site = {
  name: "Marketing Bots",
  description:
    "Copy, SEO, CRO, paid, and growth. One click adds the bot to Grok Bot.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marketing-bots.com",
  email: "pranav@qogita.com",
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
}
