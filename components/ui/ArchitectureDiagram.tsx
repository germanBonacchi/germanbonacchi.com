"use client";

import styles from "./ArchitectureDiagram.module.css";

/**
 * High-level VTEX commerce architecture diagram (anonimized / educational).
 * Used on Carrefour case study and problems section context.
 */
export function ArchitectureDiagram({ caption }: { caption?: string }) {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox="0 0 640 360"
        role="img"
        aria-label={caption ?? "VTEX architecture diagram"}
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

        {/* Storefront */}
        <rect
          x="200"
          y="16"
          width="240"
          height="48"
          rx="8"
          className={styles.boxPrimary}
        />
        <text x="320" y="38" textAnchor="middle" className={styles.labelStrong}>
          Storefront
        </text>
        <text x="320" y="54" textAnchor="middle" className={styles.labelMuted}>
          VTEX IO / FastStore
        </text>

        <line
          x1="320"
          y1="64"
          x2="320"
          y2="96"
          className={styles.line}
          markerEnd="url(#arrow)"
        />

        {/* VTEX platform */}
        <rect
          x="180"
          y="100"
          width="280"
          height="56"
          rx="8"
          className={styles.boxAccent}
        />
        <text x="320" y="124" textAnchor="middle" className={styles.labelStrong}>
          VTEX Platform
        </text>
        <text x="320" y="142" textAnchor="middle" className={styles.labelMuted}>
          Catalog · Checkout · Orders · Master Data
        </text>

        <line
          x1="320"
          y1="156"
          x2="320"
          y2="188"
          className={styles.line}
          markerEnd="url(#arrow)"
        />

        {/* Integration layer */}
        <rect
          x="160"
          y="192"
          width="320"
          height="44"
          rx="8"
          className={styles.boxSecondary}
        />
        <text x="320" y="219" textAnchor="middle" className={styles.labelStrong}>
          Integration Layer
        </text>

        {/* External systems */}
        <line x1="120" y1="236" x2="120" y2="268" className={styles.line} markerEnd="url(#arrow)" />
        <line x1="250" y1="236" x2="250" y2="268" className={styles.line} markerEnd="url(#arrow)" />
        <line x1="390" y1="236" x2="390" y2="268" className={styles.line} markerEnd="url(#arrow)" />
        <line x1="520" y1="236" x2="520" y2="268" className={styles.line} markerEnd="url(#arrow)" />
        <line x1="120" y1="236" x2="520" y2="236" className={styles.line} />

        {[
          { x: 60, label: "ERP" },
          { x: 190, label: "OMS" },
          { x: 330, label: "PIM" },
          { x: 460, label: "Payments" },
        ].map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y="272"
              width="120"
              height="40"
              rx="8"
              className={styles.boxMuted}
            />
            <text
              x={node.x + 60}
              y="297"
              textAnchor="middle"
              className={styles.labelStrong}
            >
              {node.label}
            </text>
          </g>
        ))}

        <text x="320" y="340" textAnchor="middle" className={styles.caption}>
          Decision: keep business systems outside VTEX; integrate, do not absorb
        </text>
      </svg>
      {caption ? <figcaption className={styles.figcaption}>{caption}</figcaption> : null}
    </figure>
  );
}
