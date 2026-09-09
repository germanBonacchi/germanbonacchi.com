import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export function AnalyticsProviders() {
  return (
    <>
      <GoogleAnalytics />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
