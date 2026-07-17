import type { Metadata } from "next";
import { AccessMap } from "@/components/product-visuals";
import { ProductDetailPage } from "@/components/product-detail-page";

export const metadata: Metadata = {
  title: "Map agent access",
  description: "Reveal every agent, system, action, environment, and owner in one reviewable access map.",
};

export default function MapPage() {
  return <ProductDetailPage product={{
    slug: "map",
    name: "Map",
    eyebrow: "Scopwise Map",
    title: "See every route your agent can reach.",
    accent: "Before reviewers have to ask.",
    description: "Turn integrations, permissions, inherited access, actions, and owners into one living access surface for enterprise review.",
    question: "What can this agent actually access?",
    answer: "Scopwise Map replaces disconnected configuration evidence with a relationship model that shows direct and inherited reach, action level, environment, and ownership together.",
    capabilities: [
      { title: "Relationship mapping", body: "Connect agents to systems, data, actions, environments, and business owners in one inspectable graph." },
      { title: "Inherited access clarity", body: "Keep inherited permissions visibly distinct so reviewers can see where reach originated and why it exists." },
      { title: "Ownership context", body: "Attach technical and business ownership to each relationship before an exception reaches review." },
    ],
    steps: [
      { title: "Connect evidence sources", body: "Bring permission snapshots, integration settings, and deployment context into one model." },
      { title: "Resolve relationships", body: "Identify direct, inherited, conditional, and unresolved access paths." },
      { title: "Share the access surface", body: "Give security, legal, platform, and business owners a common view for review." },
    ],
    outputs: ["Agent and environment", "Connected systems and data", "Action-level access", "Inheritance source", "Technical and business owners"],
    visual: <AccessMap />,
    next: { name: "Rules", href: "/product/rules", description: "Turn the mapped access surface into understandable boundaries." },
  }} />;
}
