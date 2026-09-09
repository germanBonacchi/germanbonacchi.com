import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Germán Bonacchi",
    short_name: "G. Bonacchi",
    description:
      "Technical Lead specialized in VTEX, ecommerce architecture, FastStore, and integrations.",
    start_url: "/",
    display: "standalone",
    background_color: "#010606",
    theme_color: "#1e1e1e",
    icons: [
      {
        src: "/logo128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/logo256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
