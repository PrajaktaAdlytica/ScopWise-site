import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, FileSearch, Scale, Users } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";

export const metadata: Metadata = {
  title: "Company",
  description: "Scopwise is building the evidence layer for enterprise agents from Poland and the European Union.",
};

const principles = [
  [FileSearch, "Make access visible", "Enterprise teams should be able to inspect what an agent can reach without reconstructing it from disconnected configuration screens."],
  [Scale, "Keep decisions honest", "Scopwise separates verified evidence, owner input, open questions, and final decisions instead of flattening them into a confidence score."],
  [Users, "Design for shared review", "Security, legal, platform, audit, and business owners need the same object with enough context for their different responsibilities."],
] as const;

export default function CompanyPage() {
  return (
    <MarketingShell className="company-page">
      <section className="company-hero">
        <div className="container company-hero-grid">
          <div>
            <span className="eyebrow">About Scopwise</span>
            <h1>Enterprise agents need an evidence layer.</h1>
            <p className="detail-serif">We are building it in Europe.</p>
          </div>
          <div className="company-hero-note">
            <Image src="/brand/scopwise-logo-symbol.svg" alt="" width={264} height={188} />
            <p>Scopwise helps enterprises prove what internal copilots, workflow agents, and automation bots can access and do.</p>
            <span><Building2 size={16} /> Poland / European Union</span>
          </div>
        </div>
      </section>

      <section className="company-statement">
        <div className="container">
          <span className="eyebrow">Why Scopwise exists</span>
          <h2>The agent can work.<br />The enterprise still needs to prove <em>why it should.</em></h2>
          <p>Deployment velocity is moving faster than the evidence required by security, legal, compliance, audit, and business owners. Scopwise turns agent access and action boundaries into a shared, reviewable record.</p>
        </div>
      </section>

      <section className="company-principles section">
        <div className="container">
          <div className="detail-section-heading"><div><span className="eyebrow">Product principles</span><h2>Clarity before theatre.</h2></div><p>Our product and company choices begin with the quality of the review, not the appearance of certainty.</p></div>
          <div className="company-principle-grid">
            {principles.map(([Icon, title, body], index) => <article key={title}><span className={`capability-icon tone-${index}`}><Icon size={21} /></span><span className="chapter-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="company-model section">
        <div className="container company-model-grid">
          <div><span className="eyebrow">How we build</span><h2>European roots. Enterprise expectations.</h2><p>Scopwise is designed for teams that need precision around access, ownership, evidence handling, residency, and change history. Deployment choices are documented during solution design rather than implied by marketing language.</p></div>
          <div className="company-model-list">
            <div><span>01</span><strong>Evidence over assertion</strong><p>Keep the source and timestamp behind every review state.</p></div>
            <div><span>02</span><strong>Human ownership</strong><p>Connect exceptions and decisions to named accountable owners.</p></div>
            <div><span>03</span><strong>Reviewable change</strong><p>Make drift visible between approval and current deployment.</p></div>
            <div><span>04</span><strong>Accurate commitments</strong><p>Describe deployment and control capabilities exactly as delivered.</p></div>
          </div>
        </div>
      </section>

      <section className="company-cta section">
        <div className="container closing-grid">
          <div><span className="eyebrow">Work with Scopwise</span><h2>Bring us an agent your enterprise needs to review.</h2></div>
          <div><p>We will use the walkthrough to understand the systems, actions, owners, and evidence your reviewers need.</p><Link className="button button-primary" href="/request-demo">Request a demo <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </MarketingShell>
  );
}
