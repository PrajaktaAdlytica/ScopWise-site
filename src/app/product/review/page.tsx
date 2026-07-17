import type { Metadata } from "next";
import { ReviewPackage } from "@/components/product-visuals";
import { ProductDetailPage } from "@/components/product-detail-page";

export const metadata: Metadata = {
  title: "Review agents with evidence",
  description: "Compare agent scope, resolve exceptions, and produce a reproducible enterprise review package.",
};

export default function ReviewPage() {
  return <ProductDetailPage product={{
    slug: "review",
    name: "Review",
    eyebrow: "Scopwise Review",
    title: "Turn every decision into evidence.",
    accent: "Ready for enterprise review.",
    description: "Compare reviewed and current scope, resolve exceptions, record ownership, and give every reviewer the same reproducible package.",
    question: "Is this agent ready to proceed?",
    answer: "Scopwise Review brings scope, rules, changes, evidence sources, owners, conditions, and decisions into one record that can be inspected during review and revisited after deployment.",
    capabilities: [
      { title: "Scope comparison", body: "See what changed between the reviewed agent and its current deployment before approval." },
      { title: "Decision workflow", body: "Record reviewers, owners, open items, conditions, and the reason behind each outcome." },
      { title: "Reproducible package", body: "Preserve evidence sources and timestamps in a package designed for security, compliance, and audit." },
    ],
    steps: [
      { title: "Compare current scope", body: "Surface added systems, broader actions, ownership gaps, and policy drift." },
      { title: "Resolve open items", body: "Route exceptions to named owners and keep reviewer questions next to the evidence." },
      { title: "Record the decision", body: "Generate a shared package with scope, conditions, evidence, and timestamps." },
    ],
    outputs: ["Reviewed and current scope", "Exceptions and assigned owners", "Reviewer and decision", "Conditions for approval", "Evidence source and timestamp"],
    visual: <ReviewPackage />,
    next: { name: "Map", href: "/product/map", description: "Return to the access surface that starts every Scopwise review." },
  }} />;
}
