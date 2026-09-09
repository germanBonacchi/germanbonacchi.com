import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} | Technical Lead | VTEX & Commerce Architecture`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #010606 0%, #1e1e1e 55%, #2a1038 100%)",
          color: "#f7f8fa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#a32eff",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 32, color: "#00c8ff", fontWeight: 600 }}>
            Líder técnico VTEX | Technical Lead | Valtech
          </div>
          <div style={{ fontSize: 24, color: "rgba(247,248,250,0.75)", maxWidth: 900 }}>
            VTEX IO · FastStore · Arquitectura ecommerce · React · TypeScript
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(247,248,250,0.55)" }}>
          germanbonacchi.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
