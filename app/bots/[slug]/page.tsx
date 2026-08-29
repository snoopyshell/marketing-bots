import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { AddButton } from "@/components/add-button";
import { ShareButton } from "@/components/share-button";
import { getPack, packs } from "@/data/packs";
import { skillIcons } from "@/lib/icons";
import { buttonClass, cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return packs.map((pack) => ({ slug: pack.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pack = getPack(slug);
  if (!pack) {
    return { title: "Not found" };
  }

  return {
    title: pack.name,
    description: pack.description,
    alternates: { canonical: `/bots/${pack.slug}` },
    openGraph: {
      title: `${pack.name} — ${site.name}`,
      description: pack.description,
      url: `/bots/${pack.slug}`,
    },
    twitter: {
      title: `${pack.name} — ${site.name}`,
      description: pack.description,
    },
  };
}

export default async function BotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pack = getPack(slug);
  if (!pack) notFound();

  const skillCount = pack.skills.length;

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1120px] px-5 pt-12 pb-20 sm:px-6 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="text-[13px] text-subtle">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/#bots" className="hover:text-muted">
                    Bots
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-muted">{pack.name}</li>
              </ol>
            </nav>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {pack.name}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
              {pack.description}
            </p>
            <p className="mt-4 text-[13px] text-subtle">
              {skillCount} {skillCount === 1 ? "capability" : "capabilities"} ·
              Updated {pack.updated}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AddButton pack={pack} />
              <ShareButton slug={pack.slug} variant="label" />
            </div>
            {pack.shareUrl ? (
              <p className="mt-3 text-[13px] text-subtle">
                Add opens this Grok Bot in a new tab.
              </p>
            ) : (
              <p className="mt-3 text-[13px] text-subtle">
                This bot is being published. Add will open the Grok Bot share
                link when it is live.
              </p>
            )}
            <p className="mt-4 max-w-lg text-[13.5px] leading-relaxed text-subtle">
              After you add it, send this page to a teammate. That is how the
              directory grows.
            </p>
            <section className="mt-12">
              <h2 className="mb-2 text-[15px] font-semibold tracking-tight text-foreground">
                What this bot can do
              </h2>
              <ul className="border-t border-border">
                {pack.skills.map((skill) => {
                  const Icon = skillIcons[skill.icon];
                  return (
                    <li
                      key={skill.name}
                      className="flex items-start gap-3.5 border-b border-border py-5"
                    >
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center">
                        <Icon
                          className="size-4 text-muted"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] font-semibold tracking-tight text-foreground">
                          {skill.name}
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-muted">
                          {skill.description}
                        </p>
                      </div>
                      <ChevronRight
                        className="mt-1 size-4 shrink-0 text-subtle"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <aside className="flex flex-col gap-4">
            <section className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                What happens next
              </h2>
              <ol className="mt-4">
                {[
                  "Add to Grok Bot",
                  "It uses your product context",
                  "Share this bot when the work is good",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 border-b border-border/80 py-3 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-[13.5px] text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
            <section className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                Publish your own
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                Share the bot you actually use. Help others ship better
                marketing.
              </p>
              <Link
                href="/publish"
                data-slot="button"
                className={cn(
                  buttonClass.base,
                  buttonClass.outline,
                  "mt-5 h-10 w-full px-4",
                )}
              >
                Start a bot
              </Link>
            </section>
          </aside>
        </div>
      </div>
      <footer className="border-t border-border/80 py-8">
        <p className="text-center text-[13.5px] text-subtle">
          Used this bot?{" "}
          <Link href="/publish" className="text-muted hover:text-foreground">
            Remix it and publish it back.
          </Link>
        </p>
      </footer>
    </main>
  );
}
