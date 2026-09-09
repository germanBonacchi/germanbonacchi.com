import type { Technology } from "./types";

export const technologies: Technology[] = [
  { id: "vtex", name: "VTEX", category: "platform", featured: true },
  { id: "vtex-io", name: "VTEX IO", category: "platform", featured: true },
  {
    id: "faststore",
    name: "VTEX FastStore",
    category: "platform",
    featured: true,
  },
  { id: "react", name: "React", category: "frontend", featured: true },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    featured: true,
  },
  { id: "nodejs", name: "Node.js", category: "backend", featured: true },
  { id: "graphql", name: "GraphQL", category: "backend", featured: true },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    featured: true,
  },
  { id: "checkout", name: "Checkout", category: "commerce", featured: true },
  {
    id: "integrations",
    name: "Integrations",
    category: "commerce",
    featured: true,
  },
  { id: "payments", name: "Payments", category: "commerce", featured: true },
  {
    id: "logistics",
    name: "Logistics",
    category: "commerce",
    featured: true,
  },
  { id: "search", name: "Search", category: "commerce", featured: true },
  {
    id: "middleware",
    name: "APIs & Middleware",
    category: "backend",
    featured: true,
  },
  {
    id: "performance",
    name: "Performance",
    category: "commerce",
    featured: true,
  },
  { id: "git", name: "Git", category: "methodology" },
  { id: "scrum", name: "Scrum", category: "methodology" },
  { id: "oracle-db", name: "Oracle Database", category: "legacy" },
  { id: "oracle-apex", name: "Oracle APEX", category: "legacy" },
  { id: "plsql", name: "PL/SQL", category: "legacy" },
  { id: "visual-basic", name: "Visual Basic", category: "legacy" },
  { id: "java", name: "Java", category: "legacy" },
  { id: "cpp", name: "C++", category: "legacy" },
];

export const technologyById = Object.fromEntries(
  technologies.map((tech) => [tech.id, tech]),
) as Record<string, Technology>;

export const featuredTechnologies = technologies.filter((t) => t.featured);
