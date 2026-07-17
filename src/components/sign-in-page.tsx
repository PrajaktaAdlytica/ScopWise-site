"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Check, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { MarketingShell } from "./marketing-shell";

export function SignInPage() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <MarketingShell className="auth-page">
      <section className="auth-section">
        <div className="container auth-grid">
          <div className="auth-context">
            <span className="eyebrow">Scopwise workspace</span>
            <h1>Continue your agent review.</h1>
            <p>Return to the access maps, rules, open items, and evidence packages your team is reviewing.</p>
            <div className="auth-assurances">
              <span><ShieldCheck size={18} /><strong>Organization-managed access</strong><small>Workspace membership and roles are controlled by your enterprise administrator.</small></span>
              <span><LockKeyhole size={18} /><strong>Enterprise SSO ready</strong><small>Identity provider configuration is completed during workspace setup.</small></span>
              <span><KeyRound size={18} /><strong>Secure email access</strong><small>Use a time-limited link when SSO is not required for your workspace.</small></span>
            </div>
          </div>
          <div className="auth-panel">
            {submitted ? (
              <div className="auth-success" aria-live="polite">
                <span className="success-icon"><Check size={24} /></span>
                <span className="eyebrow">Secure link sent</span>
                <h2>Check your work email.</h2>
                <p>The sign-in link is time-limited. Enterprise SSO will redirect through your organization&apos;s identity provider.</p>
                <button className="button button-secondary button-wide" onClick={() => setSubmitted(false)}><ArrowLeft size={17} /> Use another email</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Sign in</span>
                <h2>Access your workspace.</h2>
                <p>Use the work email connected to your Scopwise organization.</p>
                <form onSubmit={submit}>
                  <label>Work email<input type="email" required placeholder="you@company.com" autoFocus /></label>
                  <button className="button button-primary button-wide" type="submit">Continue securely <ArrowRight size={18} /></button>
                  <span className="form-divider">or</span>
                  <button className="button button-secondary button-wide" type="button" onClick={() => setSubmitted(true)}><Building2 size={18} /> Continue with enterprise SSO</button>
                </form>
                <small>Need workspace access? <Link href="/request-demo">Talk to the Scopwise team</Link>.</small>
              </>
            )}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
