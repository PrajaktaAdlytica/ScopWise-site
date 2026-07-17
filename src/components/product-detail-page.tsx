import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleDot, FileCheck2, Network, ShieldCheck } from "lucide-react";
import { MarketingShell } from "./marketing-shell";

export type ProductDetail = {
  slug: "map" | "rules" | "review";
  name: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  question: string;
  answer: string;
  capabilities: Array<{ title: string; body: string }>;
  steps: Array<{ title: string; body: string }>;
  outputs: string[];
  visual: React.ReactNode;
  next: { name: string; href: string; description: string };
};

const capabilityIcons = [Network, ShieldCheck, FileCheck2];

export function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <MarketingShell className={`detail-${product.slug}`}>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div className="detail-hero-copy">
            <span className="eyebrow">{product.eyebrow}</span>
            <h1>{product.title}</h1>
            <p className="detail-serif">{product.accent}</p>
            <p className="detail-lead">{product.description}</p>
            <div className="detail-actions">
              <Link className="button button-primary" href="/request-demo">Request a demo <ArrowRight size={18} /></Link>
              <a className="button button-secondary" href="#capabilities">Explore capabilities <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="detail-hero-visual">{product.visual}</div>
        </div>
      </section>

      <section className="detail-question section">
        <div className="container detail-question-grid">
          <span className="detail-index">01</span>
          <div><span className="eyebrow">Decision supported</span><h2>{product.question}</h2></div>
          <p>{product.answer}</p>
        </div>
      </section>

      <section className="detail-capabilities section" id="capabilities">
        <div className="container">
          <div className="detail-section-heading">
            <div><span className="eyebrow">Core capabilities</span><h2>Make the review surface concrete.</h2></div>
            <p>Designed around the evidence enterprise reviewers need, without losing the delivery context agent teams depend on.</p>
          </div>
          <div className="capability-grid">
            {product.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article key={capability.title}>
                  <span className={`capability-icon tone-${index}`}><Icon size={21} /></span>
                  <span className="chapter-number">0{index + 1}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="detail-workflow section">
        <div className="container detail-workflow-grid">
          <div className="detail-workflow-copy">
            <span className="eyebrow">How it works</span>
            <h2>Move from configuration to shared evidence.</h2>
            <p>Each stage preserves its source, owner, and timestamp so teams can review the same object together.</p>
          </div>
          <ol className="workflow-steps">
            {product.steps.map((step, index) => (
              <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="detail-output section">
        <div className="container detail-output-grid">
          <div className="output-artifact">
            <div className="output-artifact-top"><Image src="/brand/scopwise-logo-symbol.svg" alt="" width={42} height={30} /><span>{product.name} evidence</span><small>Example data</small></div>
            <div className="output-artifact-body">
              <span className="mini-label">Included in the record</span>
              {product.outputs.map((output) => <div key={output}><Check size={15} /><span>{output}</span><CircleDot size={13} /></div>)}
            </div>
          </div>
          <div className="detail-output-copy">
            <span className="eyebrow">Review-ready output</span>
            <h2>Evidence stays useful after the meeting.</h2>
            <p>Export a clear record or keep it live in Scopwise as agent scope, rules, owners, and decisions change.</p>
            <Link className="text-link" href="/request-demo">See this workflow with your agent <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="detail-next">
        <Link className="container detail-next-link" href={product.next.href}>
          <span><small>Continue through the platform</small><strong>Scopwise {product.next.name}</strong><p>{product.next.description}</p></span>
          <ArrowRight size={28} />
        </Link>
      </section>
    </MarketingShell>
  );
}
