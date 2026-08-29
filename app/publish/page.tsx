import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass, cn } from "@/lib/cn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publish",
  description:
    "Build a Grok Bot, share it as a public template, and add it to the directory. Publishing is manual in v1.",
  alternates: { canonical: "/publish" },
};

const steps = [
  {
    title: "Build a Grok Bot",
    body: "Give it a tight job and the skills it needs. One bot, one job — copy, SEO, paid, not a kitchen sink.",
  },
  {
    title: "Share it as a public template",
    body: "Publish the Grok Bot as a public template so anyone can add it in one click. That share URL is what this directory links to.",
  },
  {
    title: "Add it here",
    body: "Send the name, a short description, the category, what it can do, and the public share URL. We add a catalog row by hand. There is no upload form in v1.",
  },
];

export default function PublishPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-2xl px-5 pt-16 pb-24 sm:px-6 sm:pt-24">
        <p className="text-[13px] text-subtle">
          <Link href="/#bots" className="hover:text-muted">
            Bots
          </Link>
          <span aria-hidden="true"> / </span>
          Publish
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Publish a bot
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          A bot here is a Grok Bot template you add in one click. The directory
          grows when someone ships a useful template and we list it.
        </p>
        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            What a bot is
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            A Grok Bot template: a profile, a set of skills, and optional
            routines. One click adds it. Teammates open the same page and add it
            themselves.
          </p>
        </section>
        <ol className="mt-12 border-t border-border">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 border-b border-border py-6"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}?subject=Publish%20a%20Marketing%20Bot`}
            data-slot="button"
            className={cn(buttonClass.base, buttonClass.primary)}
          >
            Email a bot to list
          </a>
          <Link
            href="/#bots"
            data-slot="button"
            className={cn(buttonClass.base, buttonClass.outline, "h-10 px-4")}
          >
            Browse bots
          </Link>
        </div>
        <p className="mt-4 text-[13px] text-subtle">
          No waitlist and no public upload. If the template is useful and the
          share URL is real, it goes in the catalog.
        </p>
      </div>
    </main>
  );
}
