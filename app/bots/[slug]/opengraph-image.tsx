import { getPack } from "@/data/packs";
import { ogSize, renderOgImage } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} bot`;
export const size = ogSize;
export const contentType = "image/png";

export default async function BotOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pack = getPack(slug);

  return renderOgImage({
    title: pack?.name ?? site.name,
    description: pack?.card ?? site.description,
  });
}
