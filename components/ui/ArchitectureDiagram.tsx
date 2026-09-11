"use client";

import styles from "./ArchitectureDiagram.module.css";

/**
 * Carrefour-realistic architecture view (anonymized):
 * Web Store Framework + Checkout 6 | VTEX | Middleware | React Native app
 */
export function ArchitectureDiagram({ caption }: { caption?: string }) {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox="0 0 720 420"
        role="img"
        aria-label={caption ?? "Carrefour VTEX architecture diagram"}
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
        <rect x="40" y="24" width="280" height="88" rx="8" className={styles.boxPrimary} />
        <text x="180" y="48" textAnchor="middle" className={styles.labelStrong}>
          Web storefront
        </text>
        <text x="180" y="68" textAnchor="middle" className={styles.labelMuted}>
          VTEX IO Store Framework
        </text>
        <text x="180" y="88" textAnchor="middle" className={styles.labelMuted}>
          Theme · custom apps · Checkout 6
        </text>

        <rect x="400" y="24" width="280" height="88" rx="8" className={styles.boxPrimary} />
        <text x="540" y="48" textAnchor="middle" className={styles.labelStrong}>
          Mobile app
        </text>
        <text x="540" y="68" textAnchor="middle" className={styles.labelMuted}>
          React Native
        </text>
        <text x="540" y="88" textAnchor="middle" className={styles.labelMuted}>
          Catalog · cart · checkout screens
        </text>

        {/* Arrows down */}
        <line x1="180" y1="112" x2="180" y2="148" className={styles.line} markerEnd="url(#arrow)" />
        <line x1="540" y1="112" x2="540" y2="148" className={styles.line} markerEnd="url(#arrow)" />

        {/* Middle layer */}
        <rect x="40" y="152" width="280" height="72" rx="8" className={styles.boxAccent} />
        <text x="180" y="178" textAnchor="middle" className={styles.labelStrong}>
          VTEX platform
        </text>
        <text x="180" y="198" textAnchor="middle" className={styles.labelMuted}>
          Catalog · Sessions · OMS · Master Data
        </text>

        <rect x="400" y="152" width="280" height="72" rx="8" className={styles.boxSecondary} />
        <text x="540" y="178" textAnchor="middle" className={styles.labelStrong}>
          Carrefour middleware
        </text>
        <text x="540" y="198" textAnchor="middle" className={styles.labelMuted}>
          Catalog · Checkout · Logistics · Payments
        </text>

        {/* Cross link */}
        <line x1="320" y1="188" x2="400" y2="188" className={styles.line} markerEnd="url(#arrow)" />
        <text x="360" y="178" textAnchor="middle" className={styles.labelTiny}>
          connector
        </text>

        {/* IO BFFs */}
        <line x1="180" y1="224" x2="180" y2="256" className={styles.line} markerEnd="url(#arrow)" />
        <rect x="70" y="260" width="220" height="48" rx="8" className={styles.boxMuted} />
        <text x="180" y="282" textAnchor="middle" className={styles.labelStrong}>
          IO BFFs / Node services
        </text>
        <text x="180" y="298" textAnchor="middle" className={styles.labelTiny}>
          regionalizer · checkout · cart sync
        </text>

        {/* Domain callouts */}
        <rect x="360" y="260" width="320" height="100" rx="8" className={styles.boxMuted} />
        <text x="520" y="286" textAnchor="middle" className={styles.labelStrong}>
          Shared commerce domain
        </text>
        <text x="520" y="308" textAnchor="middle" className={styles.labelMuted}>
          Regionalizer · Split cart · Food / Non-food
        </text>
        <text x="520" y="328" textAnchor="middle" className={styles.labelMuted}>
          Drive · Quick Commerce · Incompatibility rules
        </text>
        <text x="520" y="348" textAnchor="middle" className={styles.labelTiny}>
          Same rules, different channel implementations
        </text>

        <text x="360" y="400" textAnchor="middle" className={styles.caption}>
          Decision: keep channel UIs separate; align domain rules across web and app
        </text>
      </svg>
      {caption ? (
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
