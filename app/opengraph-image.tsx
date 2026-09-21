import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #123049 0%, #0c2338 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#4dbb68", marginBottom: 28, fontWeight: 700 }}>
          DEVIS GRATUIT
        </div>
        <div style={{ fontSize: 84, lineHeight: 1.1, fontWeight: 800 }}>{SITE.tagline}</div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 36, maxWidth: 820 }}>
          Nettoyage, entretien, petits travaux — devis gratuit et intervention rapide.
        </div>
      </div>
    ),
    { ...size },
  );
}
