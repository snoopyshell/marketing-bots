import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: "72px",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 28,
              height: 28,
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 0,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#fafafa",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 14,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#fafafa",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 16,
                top: 14,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#fafafa",
              }}
            />
          </div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: title.length > 28 ? 56 : 72,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
