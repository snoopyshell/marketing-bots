import { notFound, permanentRedirect } from "next/navigation";
import { getPack, packs } from "@/data/packs";

export function generateStaticParams() {
  return packs.map((pack) => ({ slug: pack.slug }));
}

export default async function PackRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getPack(slug)) notFound();
  permanentRedirect(`/bots/${slug}`);
}
