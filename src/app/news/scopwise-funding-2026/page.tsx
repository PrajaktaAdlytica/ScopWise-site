import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";

const title = "Scopwise announces $525K in funding from TipHub";
const description =
  "Scopwise announced $525K in funding from TipHub on 13 March 2026 to support its mission to make enterprise agents reviewable through clear access maps, rules, and evidence.";
const url = "https://www.scopwise.com/news/scopwise-funding-2026";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    url,
    title,
    description,
    publishedTime: "2026-03-13T00:00:00.000Z",
    modifiedTime: "2026-03-13T00:00:00.000Z",
    images: [
      {
        url: "/og/scopwise-social.jpg",
        width: 1200,
        height: 630,
        alt: "Scopwise agent access governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/scopwise-social.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
  mainEntityOfPage: url,
  author: {
    "@type": "Organization",
    name: "Scopwise",
    url: "https://www.scopwise.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Scopwise",
    url: "https://www.scopwise.com",
  },
};

export default function FundingAnnouncementPage() {
  return (
    <MarketingShell className="funding-page">
      <article>
        <header className="funding-hero">
          <div className="container funding-hero-grid">
            <div>
              <span className="eyebrow">Funding announcement</span>
              <h1>Scopwise announces <strong>$525K</strong> in funding from TipHub.</h1>
            </div>
            <div className="funding-hero-meta">
              <span>Published</span>
              <time dateTime="2026-03-13">13 March 2026</time>
              <p>Funding to support the next phase of Scopwise&apos;s agent access governance platform and company building.</p>
            </div>
          </div>
        </header>

        <section className="funding-article section">
          <div className="container funding-article-grid">
            <div className="funding-copy">
              <p className="funding-lead">Scopwise announced $525K in funding from <a href="https://tiphub-prototype-review.vercel.app/companies/scopwise" target="_blank" rel="noreferrer">TipHub</a> on 13 March 2026.</p>

              <h2>Building the evidence layer for enterprise agents.</h2>
              <p>Scopwise exists to help enterprises understand and prove what internal copilots, workflow agents, and automation bots can access, which actions they can take, and how review decisions are supported by evidence.</p>
              <p>The funding supports that existing mission. It will help Scopwise continue developing Map, Rules, and Review as one connected platform for making agent reach, boundaries, ownership, conditions, and change history clearer across the enterprise review process.</p>

              <h2>The next phase of company building.</h2>
              <p>Scopwise&apos;s next phase is focused on disciplined company building: advancing the platform, refining the review experience, and strengthening the operational foundations needed to support enterprise teams deploying AI agents responsibly.</p>
              <p>The company will remain focused on the problem it was created to solve: agents fail enterprise review when no one can prove what data, applications, and actions they can access.</p>

              <div className="funding-actions">
                <Link className="button button-primary" href="/#platform">Explore the platform <ArrowRight size={18} /></Link>
                <Link className="button button-secondary" href="/request-demo">Request a demo <ArrowRight size={18} /></Link>
              </div>
            </div>

            <aside className="funding-facts" aria-label="Announcement details">
              <div><span>Company</span><strong>Scopwise</strong></div>
              <div><span>Funding</span><strong>$525K</strong></div>
              <div><span>Investor</span><a href="https://tiphub-prototype-review.vercel.app/companies/scopwise" target="_blank" rel="noreferrer">TipHub <ArrowUpRight size={15} /></a></div>
              <div><span>Announcement date</span><time dateTime="2026-03-13">13 March 2026</time></div>
              <div className="funding-profile-links">
                <span>Company profiles</span>
                <a href="https://www.crunchbase.com/organization/scopwise" target="_blank" rel="noreferrer">Crunchbase <ArrowUpRight size={15} /></a>
                <a href="https://www.linkedin.com/company/scopwise/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
              </div>
            </aside>
          </div>
        </section>

        <section className="funding-closing section">
          <div className="container closing-grid">
            <div><span className="eyebrow">Agent access governance</span><h2>See how Scopwise makes agent access reviewable.</h2></div>
            <div><p>Map the real access surface, define understandable boundaries, and keep the evidence behind every review decision.</p><Link className="text-link" href="/product/map">Start with Scopwise Map <ArrowRight size={17} /></Link></div>
          </div>
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </MarketingShell>
  );
}

