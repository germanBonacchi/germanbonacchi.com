import { track as vercelTrack } from "@vercel/analytics";
import type { AnalyticsEventMap, AnalyticsEventName } from "@/content/types";

type GtagFunction = (
  command: "event" | "config" | "js" | "set",
  targetOrEventName: string | Date,
  params?: Record<string, unknown>,
) => void;

function getGtag(): GtagFunction | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { gtag?: GtagFunction }).gtag;
}

function toGtagParams(
  payload: Record<string, unknown>,
): Record<string, string | number | boolean> {
  const params: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      params[key] = value;
    }
  }
  return params;
}

/**
 * Thin typed analytics layer.
 * Prefer calling `track()` from UI handlers instead of wiring
 * vendor SDKs directly into components.
 *
 * Fans out to Vercel Analytics + GA4 (gtag) when available.
 */
export function track<E extends AnalyticsEventName>(
  event: E,
  payload: AnalyticsEventMap[E],
): void {
  if (typeof window === "undefined") return;

  try {
    const data = payload as Record<string, unknown>;

    vercelTrack(event, data as Record<string, string | number | boolean>);

    const gtag = getGtag();
    if (typeof gtag === "function") {
      gtag("event", event, toGtagParams(data));
    }

    if (process.env.NODE_ENV === "development") {
      console.debug("[analytics]", event, payload);
    }
  } catch {
    // Never break UX because of analytics
  }
}
