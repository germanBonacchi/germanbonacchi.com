/**
 * Skills as a learning graph: edges follow how knowledge actually stacked.
 * Pulses travel along those paths (foundations → platform → commerce).
 */

export type SkillEra = 0 | 1 | 2 | 3 | 4;

export interface SkillNode {
  id: string;
  label: string;
  /** Learning generation: 0 earliest → 4 current commerce depth */
  era: SkillEra;
  /** Relative weight for node size (1–3) */
  weight: number;
}

export interface SkillEdge {
  from: string;
  to: string;
}

export const skillNodes: SkillNode[] = [
  { id: "visual-basic", label: "Visual Basic", era: 0, weight: 1 },
  { id: "cpp", label: "C++", era: 0, weight: 1 },
  { id: "java", label: "Java", era: 0, weight: 1 },
  { id: "oracle-db", label: "Oracle DB", era: 1, weight: 1 },
  { id: "oracle-apex", label: "Oracle APEX", era: 1, weight: 1 },
  { id: "plsql", label: "PL/SQL", era: 1, weight: 1 },
  { id: "javascript", label: "JavaScript", era: 1, weight: 2 },
  { id: "typescript", label: "TypeScript", era: 2, weight: 3 },
  { id: "react", label: "React", era: 2, weight: 3 },
  { id: "nodejs", label: "Node.js", era: 2, weight: 2 },
  { id: "graphql", label: "GraphQL", era: 2, weight: 2 },
  { id: "git", label: "Git", era: 2, weight: 1 },
  { id: "scrum", label: "Scrum", era: 2, weight: 1 },
  { id: "vtex", label: "VTEX", era: 3, weight: 3 },
  { id: "vtex-io", label: "VTEX IO", era: 3, weight: 3 },
  { id: "faststore", label: "FastStore", era: 4, weight: 3 },
  { id: "checkout", label: "Checkout", era: 4, weight: 2 },
  { id: "payments", label: "Payments", era: 4, weight: 2 },
  { id: "logistics", label: "Logistics", era: 4, weight: 2 },
  { id: "search", label: "Search", era: 4, weight: 2 },
  { id: "integrations", label: "Integrations", era: 4, weight: 2 },
  { id: "middleware", label: "Middleware", era: 4, weight: 2 },
  { id: "performance", label: "Performance", era: 4, weight: 2 },
];

/** Directed learning paths: from earlier skill → what it unlocked */
export const skillEdges: SkillEdge[] = [
  { from: "visual-basic", to: "javascript" },
  { from: "cpp", to: "java" },
  { from: "java", to: "javascript" },
  { from: "oracle-db", to: "plsql" },
  { from: "plsql", to: "oracle-apex" },
  { from: "oracle-apex", to: "javascript" },
  { from: "javascript", to: "typescript" },
  { from: "javascript", to: "nodejs" },
  { from: "typescript", to: "react" },
  { from: "react", to: "graphql" },
  { from: "nodejs", to: "graphql" },
  { from: "typescript", to: "vtex-io" },
  { from: "react", to: "vtex-io" },
  { from: "nodejs", to: "vtex-io" },
  { from: "vtex-io", to: "vtex" },
  { from: "graphql", to: "vtex" },
  { from: "vtex", to: "faststore" },
  { from: "react", to: "faststore" },
  { from: "vtex", to: "checkout" },
  { from: "checkout", to: "payments" },
  { from: "vtex", to: "logistics" },
  { from: "vtex", to: "search" },
  { from: "nodejs", to: "middleware" },
  { from: "middleware", to: "integrations" },
  { from: "vtex", to: "integrations" },
  { from: "react", to: "performance" },
  { from: "faststore", to: "performance" },
  { from: "git", to: "typescript" },
  { from: "scrum", to: "vtex" },
];

export const skillNodeById = Object.fromEntries(
  skillNodes.map((n) => [n.id, n]),
) as Record<string, SkillNode>;
