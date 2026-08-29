import { site } from "@/lib/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage({
    title: "Marketing bots you add in one click.",
    description: site.description,
  });
}
