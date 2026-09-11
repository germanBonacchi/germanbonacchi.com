"use client";

import { cetrogarCase } from "@/content/cetrogarCase";
import { useLocale } from "@/lib/locale";
import styles from "./ArchitectureDiagram.module.css";

/**
 * Cetrogar-realistic architecture view (anonymized):
 * FastStore storefront + Checkout | VTEX | Admin apps | IO Node services
 */
export function CetrogarArchitectureDiagram({ caption }: { caption?: string }) {
  const { l } = useLocale();
  const d = cetrogarCase.diagram;

  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox="0 0 720 460"
        role="img"
        aria-label={caption ?? l(d.ariaLabel)}
      >
        <defs>
          <marker
            id="arrowCetrogar"
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
          {l(d.faststore)}
        </text>
        <text x="180" y="68" textAnchor="middle" className={styles.labelMuted}>
          {l(d.faststoreSub)}
        </text>
        <text x="180" y="88" textAnchor="middle" className={styles.labelMuted}>
          {l(d.faststoreDetail)}
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
          {l(d.checkout)}
        </text>
        <text x="540" y="68" textAnchor="middle" className={styles.labelMuted}>
          {l(d.checkoutSub)}
        </text>
        <text x="540" y="88" textAnchor="middle" className={styles.labelMuted}>
          {l(d.checkoutDetail)}
        </text>

        <line
          x1="180"
          y1="112"
          x2="180"
          y2="148"
          className={styles.line}
          markerEnd="url(#arrowCetrogar)"
        />
        <line
          x1="540"
          y1="112"
          x2="540"
          y2="148"
          className={styles.line}
          markerEnd="url(#arrowCetrogar)"
        />

        {/* Platform */}
        <rect
          x="40"
          y="152"
          width="640"
          height="64"
          rx="8"
          className={styles.boxAccent}
        />
        <text x="360" y="178" textAnchor="middle" className={styles.labelStrong}>
          {l(d.vtexPlatform)}
        </text>
        <text x="360" y="198" textAnchor="middle" className={styles.labelMuted}>
          {l(d.vtexPlatformDetail)}
        </text>

        <line
          x1="180"
          y1="216"
          x2="180"
          y2="248"
          className={styles.line}
          markerEnd="url(#arrowCetrogar)"
        />
        <line
          x1="540"
          y1="216"
          x2="540"
          y2="248"
          className={styles.line}
          markerEnd="url(#arrowCetrogar)"
        />

        {/* Admin + services */}
        <rect
          x="40"
          y="252"
          width="280"
          height="88"
          rx="8"
          className={styles.boxSecondary}
        />
        <text x="180" y="278" textAnchor="middle" className={styles.labelStrong}>
          {l(d.adminApps)}
        </text>
        <text x="180" y="298" textAnchor="middle" className={styles.labelMuted}>
          {l(d.adminAppsLine1)}
        </text>
        <text x="180" y="318" textAnchor="middle" className={styles.labelMuted}>
          {l(d.adminAppsLine2)}
        </text>

        <rect
          x="400"
          y="252"
          width="280"
          height="88"
          rx="8"
          className={styles.boxSecondary}
        />
        <text x="540" y="278" textAnchor="middle" className={styles.labelStrong}>
          {l(d.ioServices)}
        </text>
        <text x="540" y="298" textAnchor="middle" className={styles.labelMuted}>
          {l(d.ioServicesLine1)}
        </text>
        <text x="540" y="318" textAnchor="middle" className={styles.labelMuted}>
          {l(d.ioServicesLine2)}
        </text>

        <line
          x1="320"
          y1="296"
          x2="400"
          y2="296"
          className={styles.line}
          markerEnd="url(#arrowCetrogar)"
        />
        <text x="360" y="286" textAnchor="middle" className={styles.labelTiny}>
          {l(d.vbaseApis)}
        </text>

        {/* Domain callout */}
        <rect
          x="40"
          y="360"
          width="640"
          height="56"
          rx="8"
          className={styles.boxMuted}
        />
        <text x="360" y="384" textAnchor="middle" className={styles.labelStrong}>
          {l(d.customDomain)}
        </text>
        <text x="360" y="404" textAnchor="middle" className={styles.labelMuted}>
          {l(d.customDomainDetail)}
        </text>

        <text x="360" y="444" textAnchor="middle" className={styles.caption}>
          {l(d.decision)}
        </text>
      </svg>
      {caption ? (
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
