"use client";

import { carrefourCase } from "@/content/carrefourCase";
import { useLocale } from "@/lib/locale";
import styles from "./ArchitectureDiagram.module.css";

/**
 * Carrefour-realistic architecture view (anonymized):
 * Web Store Framework + Checkout 6 | VTEX | Middleware | React Native app
 */
export function ArchitectureDiagram({ caption }: { caption?: string }) {
  const { l } = useLocale();
  const d = carrefourCase.diagram;

  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox="0 0 720 420"
        role="img"
        aria-label={caption ?? l(d.ariaLabel)}
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Channels */}
        <rect
          x="40"
          y="24"
          width="280"
          height="88"
          rx="8"
          className={styles.boxPrimary}
        />
        <text x="180" y="48" textAnchor="middle" className={styles.labelStrong}>
          {l(d.webStorefront)}
        </text>
        <text x="180" y="68" textAnchor="middle" className={styles.labelMuted}>
          {l(d.webStorefrontSub)}
        </text>
        <text x="180" y="88" textAnchor="middle" className={styles.labelMuted}>
          {l(d.webStorefrontDetail)}
        </text>

        <rect
          x="400"
          y="24"
          width="280"
          height="88"
          rx="8"
          className={styles.boxPrimary}
        />
        <text x="540" y="48" textAnchor="middle" className={styles.labelStrong}>
          {l(d.mobileApp)}
        </text>
        <text x="540" y="68" textAnchor="middle" className={styles.labelMuted}>
          {l(d.mobileAppSub)}
        </text>
        <text x="540" y="88" textAnchor="middle" className={styles.labelMuted}>
          {l(d.mobileAppDetail)}
        </text>

        {/* Arrows down */}
        <line
          x1="180"
          y1="112"
          x2="180"
          y2="148"
          className={styles.line}
          markerEnd="url(#arrow)"
        />
        <line
          x1="540"
          y1="112"
          x2="540"
          y2="148"
          className={styles.line}
          markerEnd="url(#arrow)"
        />

        {/* Middle layer */}
        <rect
          x="40"
          y="152"
          width="280"
          height="72"
          rx="8"
          className={styles.boxAccent}
        />
        <text x="180" y="178" textAnchor="middle" className={styles.labelStrong}>
          {l(d.vtexPlatform)}
        </text>
        <text x="180" y="198" textAnchor="middle" className={styles.labelMuted}>
          {l(d.vtexPlatformDetail)}
        </text>

        <rect
          x="400"
          y="152"
          width="280"
          height="72"
          rx="8"
          className={styles.boxSecondary}
        />
        <text x="540" y="178" textAnchor="middle" className={styles.labelStrong}>
          {l(d.middleware)}
        </text>
        <text x="540" y="198" textAnchor="middle" className={styles.labelMuted}>
          {l(d.middlewareDetail)}
        </text>

        {/* Cross link */}
        <line
          x1="320"
          y1="188"
          x2="400"
          y2="188"
          className={styles.line}
          markerEnd="url(#arrow)"
        />
        <text x="360" y="178" textAnchor="middle" className={styles.labelTiny}>
          {l(d.connector)}
        </text>

        {/* IO BFFs */}
        <line
          x1="180"
          y1="224"
          x2="180"
          y2="256"
          className={styles.line}
          markerEnd="url(#arrow)"
        />
        <rect
          x="70"
          y="260"
          width="220"
          height="48"
          rx="8"
          className={styles.boxMuted}
        />
        <text x="180" y="282" textAnchor="middle" className={styles.labelStrong}>
          {l(d.ioBffs)}
        </text>
        <text x="180" y="298" textAnchor="middle" className={styles.labelTiny}>
          {l(d.ioBffsDetail)}
        </text>

        {/* Domain callouts */}
        <rect
          x="360"
          y="260"
          width="320"
          height="100"
          rx="8"
          className={styles.boxMuted}
        />
        <text x="520" y="286" textAnchor="middle" className={styles.labelStrong}>
          {l(d.sharedDomain)}
        </text>
        <text x="520" y="308" textAnchor="middle" className={styles.labelMuted}>
          {l(d.sharedDomainLine1)}
        </text>
        <text x="520" y="328" textAnchor="middle" className={styles.labelMuted}>
          {l(d.sharedDomainLine2)}
        </text>
        <text x="520" y="348" textAnchor="middle" className={styles.labelTiny}>
          {l(d.sharedDomainTiny)}
        </text>

        <text x="360" y="400" textAnchor="middle" className={styles.caption}>
          {l(d.decision)}
        </text>
      </svg>
      {caption ? (
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
