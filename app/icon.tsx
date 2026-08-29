import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: 8,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fafafa">
          <circle cx="12" cy="6.6" r="3.35" />
          <circle cx="7.15" cy="16.15" r="3.35" />
          <circle cx="16.85" cy="16.15" r="3.35" />
        </svg>
      </div>
    ),
    size,
  );
}
