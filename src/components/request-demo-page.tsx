"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, FileSearch, ShieldCheck } from "lucide-react";
import { MarketingShell } from "./marketing-shell";

export function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <MarketingShell className="demo-page">
      <section className="demo-page-section">
        <div className="container demo-page-grid">
          <div className="demo-page-copy">
            <span className="eyebrow">Request a demo</span>
            <h1>Bring an agent you need to review.</h1>
            <p>We will tailor the walkthrough around its systems, actions, ownership model, and enterprise review path.</p>
            <div className="demo-expectations">
              <span><FileSearch size={18} /><strong>Use your deployment context</strong><small>Internal copilot, workflow agent, automation bot, or platform rollout.</small></span>
              <span><ShieldCheck size={18} /><strong>Focus on reviewer evidence</strong><small>Security, legal, compliance, audit, and accountable business owners.</small></span>
              <span><Clock3 size={18} /><strong>Plan a focused session</strong><small>We will follow up to agree on scope and the right participants.</small></span>
            </div>
            <small>Based in Poland. Built for European enterprise teams.</small>
          </div>
          <div className="demo-form-panel">
            {submitted ? (
              <div className="demo-page-success" aria-live="polite">
                <span className="success-icon"><Check size={24} /></span>
                <span className="eyebrow">Request received</span>
                <h2>We&apos;ll bring the evidence.</h2>
                <p>The Scopwise team will follow up to understand your agent environment and review process.</p>
                <div><Link className="button button-primary" href="/">Return home <ArrowRight size={18} /></Link><button className="button button-secondary" onClick={() => setSubmitted(false)}><ArrowLeft size={17} /> Edit request</button></div>
              </div>
            ) : (
              <>
                <div className="demo-form-heading"><span className="mini-label">Your deployment</span><h2>Tell us what needs review.</h2><p>No generic sales deck. We use this context to shape the walkthrough.</p></div>
                <form onSubmit={submit}>
                  <div className="form-row"><label htmlFor="demo-email">Work email<input id="demo-email" type="email" required placeholder="you@company.com" /></label><label htmlFor="demo-company">Company<input id="demo-company" required placeholder="Company name" /></label></div>
                  <label htmlFor="demo-deployment">What are you deploying?<select id="demo-deployment" defaultValue="Internal copilot"><option>Internal copilot</option><option>Workflow agent</option><option>Automation bot</option><option>Enterprise AI platform</option></select></label>
                  <div className="form-row"><label htmlFor="demo-systems">Connected systems<select id="demo-systems" defaultValue="3-10"><option>1-2</option><option>3-10</option><option>11-25</option><option>26+</option></select></label><label htmlFor="demo-reviewer">Primary reviewer<select id="demo-reviewer" defaultValue="Security"><option>Security</option><option>AI platform</option><option>Compliance or legal</option><option>Internal audit</option><option>Business owner</option></select></label></div>
                  <label htmlFor="demo-context">What needs to be proven?<textarea id="demo-context" rows={4} placeholder="Describe the access, action, ownership, or evidence questions your team needs to answer." /></label>
                  <button className="button button-primary button-wide" type="submit">Request a tailored walkthrough <ArrowRight size={18} /></button>
                </form>
                <small>By submitting, you agree that Scopwise may contact you about this request.</small>
              </>
            )}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
