import type { Metadata } from "next";
import { RulesTable } from "@/components/product-visuals";
import { ProductDetailPage } from "@/components/product-detail-page";

export const metadata: Metadata = {
  title: "Define agent rules",
  description: "Make allowed, conditional, and blocked agent behavior understandable before production.",
};

export default function RulesPage() {
  return <ProductDetailPage product={{
    slug: "rules",
    name: "Rules",
    eyebrow: "Scopwise Rules",
    title: "Set boundaries people can understand.",
    accent: "At the action level.",
    description: "Translate agent permissions into clear operational rules that show what is allowed, conditional, or blocked before deployment.",
    question: "Should this action pass, pause, or stop?",
    answer: "Scopwise Rules connects each action to its system, purpose, condition, and owner so a broad technical permission never has to stand in for an actual policy decision.",
    capabilities: [
      { title: "Action-level policy", body: "Define boundaries around real agent actions such as read, write, send, retrieve, and delete." },
      { title: "Conditional behavior", body: "Document approvals, environments, purposes, and ownership requirements without hiding nuance." },
      { title: "Reusable rule libraries", body: "Carry reviewed policy patterns across copilots and workflows while preserving deployment context." },
    ],
    steps: [
      { title: "Start from mapped access", body: "Use the actual systems and actions from Scopwise Map as the policy surface." },
      { title: "Define the boundary", body: "Mark behavior as allowed, conditional, or blocked and record the reason." },
      { title: "Resolve exceptions", body: "Assign owners and conditions before the agent progresses to final review." },
    ],
    outputs: ["Action and connected system", "Allowed, conditional, or blocked state", "Purpose and environment", "Required approval", "Rule owner and version"],
    visual: <RulesTable />,
    next: { name: "Review", href: "/product/review", description: "Compare scope, record decisions, and produce the review package." },
  }} />;
}
