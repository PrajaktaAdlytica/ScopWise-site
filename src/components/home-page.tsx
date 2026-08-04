"use client";

import { CSSProperties, FormEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Copy,
  Download,
  Globe2,
  History,
  LockKeyhole,
  Menu,
  Quote,
  Users,
  X,
} from "lucide-react";
import {
  AccessMap,
  EvidenceTimeline,
  ReviewArtifact,
  ReviewPackage,
  RulesTable,
  ScopeDiff,
} from "./product-visuals";

gsap.registerPlugin(ScrollTrigger);

const productLinks = [
  ["Map", "Reveal every agent, system, action, and owner.", "/icons/products/map.svg", "/product/map"],
  ["Rules", "Define allowed, conditional, and blocked behavior.", "/icons/products/rules.svg", "/product/rules"],
  ["Review", "Produce a clear, review-ready evidence record.", "/icons/products/review.svg", "/product/review"],
] as const;

const showcaseStepCount = 4;

const solutionLinks = [
  ["Security review", "See actual reach and action-level permissions."],
  ["AI platform teams", "Reuse boundaries across agent deployments."],
  ["Compliance and legal", "Keep purpose, conditions, and evidence together."],
  ["Internal audit", "Inspect sources, owners, decisions, and history."],
] as const;

const roles = {
  Security: {
    title: "Make access review concrete.",
    outcomes: [
      "Trace agent reach across connected systems",
      "Identify write and delete actions before deployment",
      "Assign a named owner to every exception",
    ],
  },
  "AI platform": {
    title: "Govern without losing delivery context.",
    outcomes: [
      "Reuse understandable rules across agent teams",
      "Compare reviewed and deployed scope",
      "Keep governance work connected to delivery",
    ],
  },
  "Compliance + legal": {
    title: "Put evidence behind each decision.",
    outcomes: [
      "Review purpose, scope, conditions, and evidence together",
      "Track exceptions and decision history",
      "Export a reproducible review package",
    ],
  },
  "Internal audit": {
    title: "Follow change across systems and owners.",
    outcomes: [
      "Inspect evidence sources and timestamps",
      "Trace decisions across owners and systems",
      "Review retention and change history",
    ],
  },
};

type RoleName = keyof typeof roles;
type MenuName = "product" | "solutions" | null;
const roleNames = Object.keys(roles) as RoleName[];

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval = 0;
    const delay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(delay);
      window.clearInterval(interval);
    };
  }, [speed, startDelay, text]);

  return { displayed, done };
}

function EntryExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousX = useRef<number | null>(null);
  const targetTime = useRef(0);
  const seeking = useRef(false);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { displayed, done } = useTypewriter(
    "Your agents can move fast. Your reviewers should see every system, action, and decision before they say yes.",
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setActionsVisible(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const queueSeek = () => {
      if (seeking.current || !Number.isFinite(video.duration)) return;
      if (Math.abs(video.currentTime - targetTime.current) < 0.01) return;
      seeking.current = true;
      video.currentTime = targetTime.current;
    };

    const handleMove = (event: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight || !Number.isFinite(video.duration)) {
        previousX.current = event.clientX;
        return;
      }

      if (previousX.current === null) {
        previousX.current = event.clientX;
        return;
      }

      const delta = event.clientX - previousX.current;
      previousX.current = event.clientX;
      targetTime.current = Math.min(
        video.duration,
        Math.max(0, targetTime.current + (delta / window.innerWidth) * 0.8 * video.duration),
      );
      queueSeek();
    };

    const handleSeeked = () => {
      seeking.current = false;
      queueSeek();
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    video.addEventListener("seeked", handleSeeked);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, []);

  async function copyEmail() {
    await navigator.clipboard.writeText("hello@scopwise.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const entryLinks = [
    ["Map", "/product/map"],
    ["Rules", "/product/rules"],
    ["Review", "/product/review"],
    ["Company", "/company"],
    ["Funding", "/news/scopwise-funding-2026"],
  ] as const;

  return (
    <section className="entry-hero" id="entry" ref={sectionRef} aria-labelledby="entry-title">
      <video
        className="entry-video"
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/media/scopwise-entry-agent.mp4" type="video/mp4" />
      </video>
      <div className="entry-scrim" />
      <header className="entry-nav">
        <a className="entry-brand" href="#entry" aria-label="Scopwise introduction">
          <Image src="/brand/scopwise-logo-horizontal.svg" alt="Scopwise" width={820} height={188} priority />
        </a>
        <nav className="entry-desktop-links" aria-label="Intro navigation">
          {entryLinks.map(([label, href], index) => (
            <span key={label}>
              <a href={href}>{label}</a>{index < entryLinks.length - 1 ? ", " : ""}
            </span>
          ))}
        </nav>
        <a className="entry-contact" href="/request-demo">Request a demo</a>
        <button
          className={`entry-menu-toggle ${mobileOpen ? "is-open" : ""}`}
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </header>
      <div className={`entry-mobile-overlay ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        {entryLinks.map(([label, href]) => <a href={href} onClick={() => setMobileOpen(false)} key={label}>{label}</a>)}
        <a href="/request-demo" onClick={() => setMobileOpen(false)}>Request a demo</a>
      </div>
      <a className="entry-funding-strip" href="/news/scopwise-funding-2026">
        <span className="funding-strip-label">Funding announcement</span>
        <strong>Scopwise announces $525K in funding from TipHub</strong>
        <time dateTime="2026-03-13">13 March 2026</time>
        <span className="funding-strip-link">Read announcement <ArrowRight size={15} /></span>
      </a>
      <div className="entry-content">
        <p className="entry-intro" id="entry-title">Meet Scopwise,<br />your agent access governance layer.</p>
        <p className="entry-typewriter">
          {displayed}
          {!done ? <span className="entry-cursor" aria-hidden="true" /> : null}
        </p>
        <div className={`entry-actions ${actionsVisible ? "is-visible" : ""}`}>
          <a href="/product/map">Map agent access</a>
          <a href="/product/rules">Set clear rules</a>
          <a href="/product/review">Review the evidence</a>
          <a href="#top">See how it works</a>
          <button className="entry-email" type="button" onClick={copyEmail}>
            <span>{copied ? "Copied" : "Reach us:"} <u>hello@scopwise.com</u></span>
            <Copy size={13} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function DemoDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function closeDialog() {
    setSubmitted(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && closeDialog()}
        >
          <motion.div
            className="demo-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.22 }}
          >
            <button className="icon-button dialog-close" onClick={closeDialog} aria-label="Close demo request">
              <X size={20} />
            </button>
            {submitted ? (
              <div className="dialog-success" aria-live="polite">
                <span className="success-icon"><Check size={24} /></span>
                <span className="eyebrow">Request received</span>
                <h2 id="demo-title">We’ll bring the evidence.</h2>
                <p>Thanks. The Scopwise team will follow up to understand your agent environment and review process.</p>
                <button className="button button-primary" onClick={closeDialog}>Done</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Request a demo</span>
                <h2 id="demo-title">Bring an agent you need to review.</h2>
                <p>Tell us where your agent is deployed and which teams need evidence. We’ll tailor the walkthrough.</p>
                <form onSubmit={submit}>
                  <label>
                    Work email
                    <input name="email" type="email" required placeholder="you@company.com" autoFocus />
                  </label>
                  <label>
                    Company
                    <input name="company" required placeholder="Company name" />
                  </label>
                  <label>
                    What are you deploying?
                    <select name="deployment" defaultValue="Internal copilot">
                      <option>Internal copilot</option>
                      <option>Workflow agent</option>
                      <option>Automation bot</option>
                      <option>Enterprise AI platform</option>
                    </select>
                  </label>
                  <button className="button button-primary button-wide" type="submit">
                    Request a walkthrough <ArrowRight size={18} />
                  </button>
                </form>
                <small>By submitting, you agree that Scopwise may contact you about this request.</small>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function SignInDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function closeDialog() {
    setSubmitted(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && closeDialog()}
        >
          <motion.div
            className="demo-dialog sign-in-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sign-in-title"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.22 }}
          >
            <button className="icon-button dialog-close" onClick={closeDialog} aria-label="Close sign in">
              <X size={20} />
            </button>
            <Image src="/brand/scopwise-logo-horizontal.svg" alt="Scopwise" width={820} height={188} />
            {submitted ? (
              <div className="dialog-success" aria-live="polite">
                <span className="success-icon"><LockKeyhole size={23} /></span>
                <span className="eyebrow">Secure sign in</span>
                <h2 id="sign-in-title">Check your work email.</h2>
                <p>We sent a secure sign-in link. Enterprise SSO is configured with each Scopwise workspace.</p>
                <button className="button button-primary" onClick={closeDialog}>Done</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Workspace access</span>
                <h2 id="sign-in-title">Sign in to Scopwise.</h2>
                <p>Use your company email or continue through your organization&apos;s identity provider.</p>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <label>
                    Work email
                    <input name="signInEmail" type="email" required placeholder="you@company.com" autoFocus />
                  </label>
                  <button className="button button-primary button-wide" type="submit">Continue securely <ArrowRight size={18} /></button>
                  <span className="form-divider">or</span>
                  <button className="button button-secondary button-wide" type="button" onClick={() => setSubmitted(true)}>
                    <Building2 size={18} /> Continue with enterprise SSO
                  </button>
                </form>
                <small>Workspace access is managed by your organization&apos;s Scopwise administrator.</small>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function SiteHeader({ followsEntry = false }: { followsEntry?: boolean }) {
  const [menu, setMenu] = useState<MenuName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introHidden, setIntroHidden] = useState(followsEntry);

  useEffect(() => {
    const update = () => {
      const entryHeight = followsEntry
        ? document.querySelector<HTMLElement>(".entry-hero")?.offsetHeight ?? window.innerHeight
        : 0;
      setIntroHidden(followsEntry && window.scrollY < entryHeight - 2);
      setScrolled(window.scrollY > entryHeight + 24);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [followsEntry]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${introHidden ? "is-intro-hidden" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <a className="brand-link" href="#top" aria-label="Scopwise home">
          <Image src="/brand/scopwise-logo-horizontal.svg" alt="Scopwise" width={820} height={188} priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-menu-wrap">
            <button className="nav-link" onClick={() => setMenu(menu === "product" ? null : "product")} aria-expanded={menu === "product"}>
              Product <ChevronDown size={15} />
            </button>
            <AnimatePresence>
              {menu === "product" ? (
                <motion.div className="nav-dropdown product-dropdown" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>
                  <div className="dropdown-main">
                    {productLinks.map(([name, description, icon, href], index) => (
                      <a href={href} key={name} onClick={() => setMenu(null)}>
                        <span className={`dropdown-icon tone-${index}`}><Image src={icon} alt="" width={24} height={24} /></span>
                        <span><strong>Scopwise {name}</strong><small>{description}</small></span>
                        <ArrowRight size={17} />
                      </a>
                    ))}
                  </div>
                  <div className="dropdown-secondary">
                    <a href="#platform">Platform overview</a>
                    <a href="#trust">Security and trust</a>
                    <a href="#sample-review">Sample review</a>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="nav-menu-wrap">
            <button className="nav-link" onClick={() => setMenu(menu === "solutions" ? null : "solutions")} aria-expanded={menu === "solutions"}>
              Solutions <ChevronDown size={15} />
            </button>
            <AnimatePresence>
              {menu === "solutions" ? (
                <motion.div className="nav-dropdown solutions-dropdown" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>
                  {solutionLinks.map(([name, description]) => (
                    <a href="#use-cases" key={name} onClick={() => setMenu(null)}>
                      <span><strong>{name}</strong><small>{description}</small></span>
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="/company">Company</a>
          <a className="nav-link" href="/news/scopwise-funding-2026">Funding</a>
        </nav>
        <div className="header-actions">
          <a className="nav-link contact-link" href="mailto:hello@scopwise.com">Contact</a>
          <a className="nav-link sign-in-link" href="/sign-in">Sign in</a>
          <a className="button button-primary header-cta" href="/request-demo">Request a demo <ArrowRight size={17} /></a>
          <button className="icon-button mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div className="mobile-nav" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mobile-nav-top">
              <Image src="/brand/scopwise-logo-horizontal.svg" alt="Scopwise" width={820} height={188} />
              <button className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={22} /></button>
            </div>
            <div className="mobile-nav-links">
              <span className="mini-label">Product</span>
              {productLinks.map(([name, , icon, href]) => <a key={name} href={href} onClick={() => setMobileOpen(false)}><Image src={icon} alt="" width={20} height={20} /> Scopwise {name}<ArrowRight size={17} /></a>)}
              <span className="mini-label">Company</span>
              <a href="/company" onClick={() => setMobileOpen(false)}>Company <ArrowRight size={17} /></a>
              <a href="/news/scopwise-funding-2026" onClick={() => setMobileOpen(false)}>Funding <ArrowRight size={17} /></a>
              <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing <ArrowRight size={17} /></a>
              <a href="mailto:hello@scopwise.com">Contact <ArrowUpRight size={17} /></a>
              <a href="/sign-in" onClick={() => setMobileOpen(false)}><LockKeyhole size={18} /> Sign in <ArrowRight size={17} /></a>
            </div>
            <a className="button button-primary button-wide" href="/request-demo" onClick={() => setMobileOpen(false)}>Request a demo <ArrowRight size={18} /></a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero({ requestDemo }: { requestDemo: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="hero-band band-sky" />
      <div className="hero-band band-lavender" />
      <div className="hero-band band-mint" />
      <div className="hero-band band-apricot" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow hero-reveal">Agent access governance</span>
          <h1 className="hero-reveal">Prove what your<br />agents can access.</h1>
          <p className="serif-accent hero-reveal">with evidence.</p>
          <p className="hero-lead hero-reveal">Map every connection, set clear boundaries, and bring review-ready evidence to security, legal, and business owners.</p>
          <div className="hero-actions hero-reveal">
            <button className="button button-primary" onClick={requestDemo}>Request a demo <ArrowRight size={18} /></button>
            <a className="button button-secondary" href="#platform">Explore the platform <ArrowRight size={18} /></a>
          </div>
          <p className="trust-line hero-reveal"><Globe2 size={16} /> Built in the EU for enterprise AI governance.</p>
        </div>
        <div className="hero-visual" aria-label="Example agent access route">
          <span className="hero-route hero-route-a" />
          <span className="hero-route hero-route-b dashed" />
          <span className="hero-route hero-route-c" />
          <span className="hero-route hero-route-d dashed" />
          <div className="hero-node hero-agent"><span className="node-dot tone-accent" /><strong>Support Copilot</strong><small>Production</small></div>
          <div className="hero-node hero-salesforce"><span className="node-dot tone-sky" /><strong>Salesforce</strong><small>Actual · Read</small></div>
          <div className="hero-node hero-sharepoint"><span className="node-dot tone-butter" /><strong>SharePoint</strong><small>Inherited · Read</small></div>
          <div className="hero-node hero-jira"><span className="node-dot tone-mint" /><strong>Jira</strong><small>Actual · Write</small></div>
          <div className="hero-node hero-outlook"><span className="node-dot tone-apricot" /><strong>Outlook</strong><small>Conditional · Send</small></div>
          <span className="visual-label">Access route / live scope</span>
        </div>
      </div>
      <a className="next-chapter" href="#review-gap"><span>The review gap</span><ArrowRight size={16} /></a>
    </section>
  );
}

const gapSteps = [
  ["Hidden reach", "Connected apps do not reveal inherited data access."],
  ["Unclear actions", "Read, write, approve, trigger, and delete collapse into one permission."],
  ["Permission drift", "The reviewed scope and the deployed scope stop matching."],
  ["Missing ownership", "No record connects the change, owner, decision, and evidence."],
];

function ReviewGap() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const triggers = gapSteps.map((_, index) => ScrollTrigger.create({
      trigger: sectionRef.current,
      start: `${index * 22 + 12}% center`,
      end: `${index * 22 + 34}% center`,
      onEnter: () => setActive(index),
      onEnterBack: () => setActive(index),
    }));
    return () => triggers.forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="review-gap" id="review-gap" ref={sectionRef}>
      <div className="container review-gap-sticky">
        <div className="review-gap-copy reveal">
          <span className="eyebrow">The review gap</span>
          <h2>The agent works.<br />The evidence does not.</h2>
          <p>A working agent is not the same as a reviewable agent. Teams still need to show reach, actions, ownership, and a reproducible decision record.</p>
          <ol className="gap-steps">
            {gapSteps.map(([title, body], index) => (
              <li className={active === index ? "active" : ""} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{title}</strong><p>{body}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="review-gap-visual reveal"><ScopeDiff /></div>
        <span className="chapter-index">01 / 03 — See</span>
      </div>
    </section>
  );
}

function EditorialPause() {
  return (
    <section className="editorial-pause">
      <div className="container reveal">
        <span className="eyebrow">A shared object for review</span>
        <h2>You cannot govern what<br />you <em>cannot see.</em></h2>
        <p>Scopwise turns agent access into a shared object that security, legal, platform, and business owners can inspect together.</p>
      </div>
    </section>
  );
}

function PlatformStory() {
  const chapters = [
    {
      id: "map",
      number: "01",
      label: "Map",
      href: "/product/map",
      title: "Map the real access surface.",
      body: "See every relationship between agents, data, applications, actions, environments, and owners, including inherited access.",
      visual: <AccessMap />,
    },
    {
      id: "rules",
      number: "02",
      label: "Rules",
      href: "/product/rules",
      title: "Set boundaries people can understand.",
      body: "Define action-level rules in plain operational language. Show what is allowed, conditional, or blocked before production.",
      visual: <RulesTable />,
    },
    {
      id: "review",
      number: "03",
      label: "Review",
      href: "/product/review",
      title: "Every change leaves evidence.",
      body: "Compare reviewed and current scope, record exceptions, assign owners, and produce a clear package for enterprise review.",
      visual: <ReviewPackage />,
    },
  ];

  return (
    <section className="platform" id="platform">
      <div className="container platform-intro reveal">
        <div><span className="eyebrow">The Scopwise platform</span><h2>One access model. Three ways to make it reviewable.</h2></div>
        <p>The same agent, systems, and routes stay visible as Scopwise reveals the map, applies rules, and records the review.</p>
      </div>
      {chapters.map((chapter) => (
        <article className={`product-chapter product-${chapter.id}`} id={chapter.id} key={chapter.id}>
          <div className="container product-chapter-inner">
            <div className="product-chapter-copy reveal">
              <span className="chapter-number">{chapter.number}</span>
              <span className="eyebrow">{chapter.label}</span>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
              <a className="text-link" href={chapter.href}>Explore Scopwise {chapter.label} <ArrowRight size={17} /></a>
            </div>
            <div className="product-chapter-visual reveal">{chapter.visual}</div>
          </div>
        </article>
      ))}
    </section>
  );
}

function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    ["Access map", "See the actual route, not just the integration list.", "Is the agent’s reach understood?", <AccessMap compact key="access-map" />],
    ["Rule detail", "Separate permission from permitted behavior.", "Should this action pass, pause, or stop?", <RulesTable key="rules-table" />],
    ["Change comparison", "Catch drift before the next review.", "What changed since approval?", <ScopeDiff key="scope-diff" />],
    ["Review package", "Give every reviewer the same evidence.", "Is this agent ready to proceed?", <ReviewPackage compact key="review-package" />],
  ] as const;

  useLayoutEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 901px)", () => {
      let currentIndex = -1;

      const updateActiveCard = (progress: number) => {
        const nextIndex = Math.min(showcaseStepCount - 1, Math.floor(progress * showcaseStepCount));
        if (nextIndex !== currentIndex) {
          currentIndex = nextIndex;
          setActiveIndex(nextIndex);
        }
      };

      const syncActiveCard = () => {
        if (!sectionRef.current) return;

        const sectionBounds = sectionRef.current.getBoundingClientRect();
        const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 80;
        const scrollDistance = Math.max(
          1,
          sectionBounds.height - window.innerHeight + headerHeight,
        );
        const travelledDistance = Math.min(
          scrollDistance,
          Math.max(0, headerHeight - sectionBounds.top),
        );

        updateActiveCard(travelledDistance / scrollDistance);
      };

      syncActiveCard();
      gsap.ticker.add(syncActiveCard);
      window.addEventListener("scroll", syncActiveCard, { passive: true });
      window.addEventListener("resize", syncActiveCard);

      return () => {
        gsap.ticker.remove(syncActiveCard);
        window.removeEventListener("scroll", syncActiveCard);
        window.removeEventListener("resize", syncActiveCard);
      };
    });

    return () => media.revert();
  }, []);

  return (
    <section className="showcase" id="product-tour" ref={sectionRef}>
      <div className="showcase-stage">
        <div className="showcase-heading">
          <span className="eyebrow">Inside Scopwise</span>
          <h2>From access map to signed decision.</h2>
          <p>One continuous evidence trail.</p>
        </div>
        <div className="showcase-track">
          {items.map(([title, claim, decision, visual], index) => (
            <article
              className={`showcase-panel panel-${index + 1} ${index === activeIndex ? "is-active" : index < activeIndex ? "is-stacked" : "is-upcoming"}`}
              key={title}
              style={{ "--stack-offset": `${index * 28}px`, zIndex: index === activeIndex ? 10 : index + 1 } as CSSProperties}
            >
              <div className="panel-copy">
                <span className="chapter-number">0{index + 1}</span>
                <span className="eyebrow">{title}</span>
                <h3>{claim}</h3>
                <div className="decision-copy"><span>Decision supported</span><strong>{decision}</strong></div>
              </div>
              <div className="panel-visual">{visual}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const [role, setRole] = useState<RoleName>("Security");
  const sectionRef = useRef<HTMLElement>(null);
  const selected = roles[role];

  useLayoutEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 901px)", () => {
      let activeIndex = 0;
      const updateRole = (progress: number) => {
        const nextIndex = Math.min(roleNames.length - 1, Math.floor(progress * roleNames.length));
        if (nextIndex !== activeIndex) {
          activeIndex = nextIndex;
          setRole(roleNames[nextIndex]);
        }
      };
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => updateRole(self.progress),
      });

      updateRole(trigger.progress);
      return () => trigger.kill();
    });

    return () => media.revert();
  }, []);

  return (
    <section className="use-cases section scroll-role-story" id="use-cases" ref={sectionRef}>
      <div className="container use-cases-sticky">
        <div className="section-heading split-heading reveal">
          <div><span className="eyebrow">Use cases</span><h2>Built for the people who have to say yes.</h2></div>
          <p>Scopwise gives every reviewer the same access surface while preserving the questions their role needs to answer.</p>
        </div>
        <div className="role-tabs reveal" role="tablist" aria-label="Outcomes by role">
          {roleNames.map((name) => (
            <button key={name} role="tab" aria-selected={role === name} onClick={() => setRole(name)}>{name}</button>
          ))}
        </div>
        <div className="role-content reveal">
          <AnimatePresence mode="wait">
            <motion.div className="role-outcomes" key={role} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <span className="eyebrow">{role}</span>
              <h3>{selected.title}</h3>
              <ul>{selected.outcomes.map((outcome) => <li key={outcome}><Check size={16} /> {outcome}</li>)}</ul>
            </motion.div>
          </AnimatePresence>
          <RoleEvidenceVisual role={role} />
        </div>
        <div className="deployment-links reveal"><span className="mini-label">{String(roleNames.indexOf(role) + 1).padStart(2, "0")} / 04</span><a href="#demo">Internal copilots</a><a href="#demo">Workflow agents</a><a href="#demo">Automation bots</a><a href="#demo">Regulated operations</a></div>
      </div>
    </section>
  );
}

function RoleEvidenceVisual({ role }: { role: RoleName }) {
  return (
    <>
      {role === "Security" && (
        <motion.div className="role-evidence evidence-security" key={role} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <span className="mini-label">Security review · Open items</span>
          {[
            ["Inherited SharePoint reach", "Owner required", "butter"],
            ["Outlook send action", "Conditional", "apricot"],
            ["Jira write scope", "Verified", "mint"],
          ].map(([title, state, tone]) => (
            <div className="evidence-row" key={title}><span className="evidence-dot" data-tone={tone} /><span><strong>{title}</strong><small>{state}</small></span><ArrowRight size={18} /></div>
          ))}
        </motion.div>
      )}
      {role === "AI platform" && (
        <motion.div className="role-evidence evidence-platform" key={role} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <span className="mini-label">Release gate · Production</span>
          <div className="policy-lanes">
            <div><span>Agent definition</span><strong>Support Copilot</strong><Check size={17} /></div>
            <div><span>Reviewed scope</span><strong>v4.1 candidate</strong><Check size={17} /></div>
            <div><span>Deployment state</span><strong>Ready with condition</strong><ArrowRight size={17} /></div>
          </div>
        </motion.div>
      )}
      {role === "Compliance + legal" && (
        <motion.div className="role-evidence evidence-record" key={role} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <span className="mini-label">Decision record · Review context</span>
          <dl className="role-record-fields">
            <div><dt>Purpose</dt><dd>Customer support assistance</dd></div>
            <div><dt>Condition</dt><dd>Service owner approval</dd></div>
            <div><dt>Evidence</dt><dd>Graph permission snapshot</dd></div>
            <div><dt>Decision</dt><dd>Approved with condition</dd></div>
          </dl>
        </motion.div>
      )}
      {role === "Internal audit" && (
        <motion.div className="role-evidence evidence-audit" key={role} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <span className="mini-label">Audit trail · Review history</span>
          <div className="audit-trail">
            <div><History size={17} /><span><strong>Scope snapshot captured</strong><small>17 Jul 2026 · 14:32 CEST</small></span></div>
            <div><Users size={17} /><span><strong>Owner assigned</strong><small>Customer Operations AI</small></span></div>
            <div><Check size={17} /><span><strong>Decision recorded</strong><small>Approved with condition</small></span></div>
          </div>
        </motion.div>
      )}
    </>
  );
}

function TrustSection() {
  const principles = [
    [<LockKeyhole key="lock" />, "Least-privilege clarity", "Show action-level access and conditions."],
    [<Users key="users" />, "Human ownership", "Connect each exception and decision to an owner."],
    [<History key="history" />, "Reproducible history", "Preserve the source and timestamp behind review state."],
    [<Building2 key="building" />, "Deployment choice", "Document handling, residency, retention, and deployment accurately."],
  ] as const;

  return (
    <section className="trust section" id="trust">
      <div className="container trust-grid">
        <div className="trust-copy reveal">
          <span className="eyebrow">Trust and EU readiness</span>
          <h2>Evidence designed for enterprise review.</h2>
          <p>Clear enough for security. Reproducible enough for audit. Honest about what is verified today.</p>
          <div className="principles">
            {principles.map(([icon, title, body], index) => <div key={title}><span className="principle-icon">{icon}</span><span className="chapter-number">0{index + 1}</span><strong>{title}</strong><p>{body}</p></div>)}
          </div>
          <a className="text-link" href="#sample-review">Explore security and trust <ArrowRight size={17} /></a>
        </div>
        <div className="reveal"><EvidenceTimeline /></div>
      </div>
    </section>
  );
}

const illustrativeFeedback = [
  {
    quote: "For the first time, the review starts with the actual access route instead of a spreadsheet assembled after the fact.",
    perspective: "Security architecture",
    detail: "Illustrative enterprise review perspective",
    tone: "sky",
  },
  {
    quote: "The useful part is that a conditional action stays conditional in the record. It does not get flattened into a vague approval.",
    perspective: "AI platform operations",
    detail: "Illustrative enterprise review perspective",
    tone: "lavender",
  },
  {
    quote: "A decision is easier to stand behind when the source, owner, exception, and timestamp live beside one another.",
    perspective: "Compliance and legal",
    detail: "Illustrative enterprise review perspective",
    tone: "mint",
  },
] as const;

function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 901px)", () => {
      let currentIndex = 0;
      const updateActiveTestimonial = (progress: number) => {
        const nextIndex = Math.min(illustrativeFeedback.length - 1, Math.floor(progress * illustrativeFeedback.length));
        if (nextIndex !== currentIndex) {
          currentIndex = nextIndex;
          setActiveIndex(nextIndex);
        }
      };
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => updateActiveTestimonial(self.progress),
      });

      updateActiveTestimonial(trigger.progress);
      return () => trigger.kill();
    });

    return () => media.revert();
  }, []);

  return (
    <section className="testimonials" id="reviewer-feedback" ref={sectionRef}>
      <div className="container testimonials-sticky">
        <div className="testimonials-heading">
          <span className="eyebrow">Illustrative reviewer feedback</span>
          <h2>What a clearer review should feel like.</h2>
          <p>Example perspectives for this demo site. They are not customer endorsements.</p>
          <div className="testimonial-controls" role="tablist" aria-label="Illustrative reviewer feedback">
            {illustrativeFeedback.map((feedback, index) => (
              <button type="button" role="tab" aria-selected={activeIndex === index} onClick={() => setActiveIndex(index)} key={feedback.perspective}>
                <span>0{index + 1}</span>
                <small>{feedback.perspective}</small>
              </button>
            ))}
          </div>
        </div>
        <div className="testimonial-stack">
          {illustrativeFeedback.map((feedback, index) => (
            <article className={`testimonial-card testimonial-${index + 1} ${activeIndex === index ? "is-active" : ""}`} aria-hidden={activeIndex !== index} data-tone={feedback.tone} key={feedback.perspective}>
              <div className="testimonial-card-top"><Quote size={21} /><span>0{index + 1}</span></div>
              <p>&ldquo;{feedback.quote}&rdquo;</p>
              <footer><strong>{feedback.perspective}</strong><small>{feedback.detail}</small></footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofAndPricing() {
  function downloadSampleReview() {
    const content = [
      "SCOPWISE SAMPLE REVIEW",
      "Agent: Support Copilot",
      "Environment: Production",
      "Decision: Conditional approval",
      "",
      "Scope summary",
      "- Salesforce: Read",
      "- SharePoint: Inherited read",
      "- Jira: Write",
      "- Outlook: Conditional send",
      "",
      "Open item",
      "- Assign an owner to inherited SharePoint access.",
      "",
      "Evidence record",
      "- Scope snapshot captured",
      "- Rule set reviewed",
      "- Decision owner recorded",
    ].join("\n");
    const href = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.download = "scopwise-sample-review.txt";
    anchor.click();
    URL.revokeObjectURL(href);
  }

  return (
    <>
      <section className="product-proof section" id="sample-review">
        <div className="container proof-grid">
          <div className="proof-copy reveal">
            <span className="eyebrow">Product proof</span>
            <h2>A review record people can inspect.</h2>
            <p>Until approved customer evidence exists, the product itself carries the proof.</p>
            <button className="text-link" onClick={downloadSampleReview}><Download size={17} /> Download a sample review</button>
          </div>
          <div className="reveal"><ReviewArtifact /></div>
        </div>
      </section>
      <section className="pricing section" id="pricing">
        <div className="container pricing-grid">
          <div className="pricing-copy reveal">
            <span className="eyebrow">Pricing</span>
            <h2>Start with the scope you need to review.</h2>
            <p>Enterprise packaging reflects the systems, workflows, evidence retention, and deployment model your team needs.</p>
            <a className="button button-primary" href="/request-demo">Talk to us about your deployment <ArrowRight size={18} /></a>
          </div>
          <div className="pricing-dimensions reveal">
            <span className="mini-label">Packaging dimensions</span>
            {["Agents", "Connected systems", "Rule libraries", "Review workflows", "Evidence retention", "Deployment options", "Support model"].map((item, index) => <div key={item}><span className={`dimension-dot dot-${index}`} /><strong>{item}</strong><small>Discuss with team</small></div>)}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ() {
  const questions = [
    ["Which agents and copilots can Scopwise review?", "Scopwise is designed for internal copilots, workflow agents, automation bots, and enterprise agent platforms that connect to business data and applications."],
    ["How does Scopwise discover actual access?", "Scopwise combines integration configuration, permission snapshots, environment context, and owner input into one reviewable relationship map."],
    ["Does Scopwise enforce rules or document them?", "Rules make allowed, conditional, and blocked behavior explicit. Enforcement capabilities depend on the connected platform and deployment architecture."],
    ["What evidence is included in a review package?", "A package can include scope, changes, actions, owners, decisions, exceptions, evidence sources, and timestamps."],
    ["How does Scopwise handle inherited permissions and drift?", "Inherited relationships remain visibly distinct, while reviewed and current scope can be compared to surface changes before the next review."],
    ["Which deployment and data-residency options are available?", "Deployment, retention, and data-residency choices are confirmed during solution design so the final architecture matches enterprise requirements."],
  ];
  return (
    <section className="faq section">
      <div className="container faq-grid">
        <div className="faq-copy reveal"><span className="eyebrow">Questions</span><h2>What teams ask before they bring an agent to review.</h2><p>Direct answers, clear boundaries, and no compliance theatre.</p></div>
        <div className="faq-list reveal">
          {questions.map(([question, answer]) => <details key={question}><summary>{question}<span className="faq-icon" /></summary><p>{answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}

function Closing({ requestDemo }: { requestDemo: () => void }) {
  return (
    <section className="closing section" id="demo">
      <div className="container closing-grid reveal">
        <div><span className="eyebrow">Ready for review</span><h2>Bring your next agent to review with evidence.</h2></div>
        <div><p>Show security, legal, and business owners the same access surface, boundaries, and decision record.</p><div className="closing-actions"><button className="button button-primary" onClick={requestDemo}>Request a demo <ArrowRight size={18} /></button><a className="button button-secondary" href="#sample-review">View a sample review <ArrowRight size={18} /></a></div><small>Based in Poland. Built for European enterprise teams.</small></div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" id="company">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/brand/scopwise-logo-horizontal-reverse.svg" alt="Scopwise" width={820} height={188} />
            <p>Agent access governance for enterprise AI.</p>
            <address className="footer-contact">
              <span>Warsaw, Poland / European Union</span>
              <a href="mailto:hello@scopwise.com">hello@scopwise.com</a>
              <a href="mailto:legal@scopwise.com">legal@scopwise.com</a>
            </address>
          </div>
          <div className="footer-links">
            <div><span>Product</span><a href="/product/map">Map</a><a href="/product/rules">Rules</a><a href="/product/review">Review</a><a href="#platform">Platform</a></div>
            <div><span>Solutions</span><a href="#use-cases">Security review</a><a href="#use-cases">AI platform teams</a><a href="#use-cases">Compliance</a><a href="#use-cases">Internal audit</a></div>
            <div><span>Company</span><a href="/company">Company</a><a href="/news/scopwise-funding-2026">Funding announcement</a><a href="https://www.crunchbase.com/organization/scopwise" target="_blank" rel="noreferrer">Crunchbase</a><a href="https://www.linkedin.com/company/scopwise/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@scopwise.com">Contact</a><a href="#trust">Security</a></div>
            <div><span>Legal</span><a href="mailto:legal@scopwise.com?subject=Scopwise%20privacy">Privacy</a><a href="mailto:legal@scopwise.com?subject=Scopwise%20terms">Terms</a><small>No tracking cookies</small></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Poland / European Union</span>
          <div className="social-links" aria-label="Scopwise social links">
            <a className="social-placeholder social-link" href="https://www.linkedin.com/company/scopwise/" target="_blank" rel="noreferrer" aria-label="Scopwise on LinkedIn">
              <Image src="/icons/social/linkedin.svg" alt="" width={18} height={18} />
            </a>
            {[
              ["X", "/icons/social/x.svg"],
              ["GitHub", "/icons/social/github.svg"],
              ["YouTube", "/icons/social/youtube.svg"],
              ["Instagram", "/icons/social/instagram.svg"],
            ].map(([name, icon]) => (
              <span className="social-placeholder" title={`${name} profile coming soon`} aria-label={`${name} profile coming soon`} key={name}>
                <Image src={icon} alt="" width={18} height={18} />
              </span>
            ))}
          </div>
          <span>© {year} Scopwise</span>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const alignHashTarget = () => {
      if (!window.location.hash) return;
      const target = document.querySelector<HTMLElement>(window.location.hash);
      if (!target) return;

      window.setTimeout(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: "auto" });
      }, 60);
    };

    alignHashTarget();
    window.addEventListener("hashchange", alignHashTarget);
    return () => window.removeEventListener("hashchange", alignHashTarget);
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const hero = rootRef.current!.querySelector<HTMLElement>(".hero");

      media.add("(min-width: 901px)", () => {
        if (!hero) return;

        const deferredCopy = hero.querySelectorAll<HTMLElement>(".serif-accent, .hero-lead, .hero-actions, .trust-line");
        const routes = hero.querySelectorAll<HTMLElement>(".hero-route");
        const nodes = hero.querySelectorAll<HTMLElement>(".hero-node, .visual-label");

        gsap.from(hero.querySelectorAll(".eyebrow, h1"), {
          autoAlpha: 0,
          y: 20,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.12,
        });
        gsap.set(deferredCopy, { autoAlpha: 0, y: 30 });
        gsap.set(routes, { autoAlpha: 0 });
        gsap.set(nodes, { autoAlpha: 0, y: 18, scale: 0.96 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=1450",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        timeline
          .to(deferredCopy[0], { autoAlpha: 1, y: 0, duration: 0.18, ease: "power2.out" })
          .to(deferredCopy[1], { autoAlpha: 1, y: 0, duration: 0.22, ease: "power2.out" })
          .to(deferredCopy[2], { autoAlpha: 1, y: 0, duration: 0.15, ease: "power2.out" })
          .to(deferredCopy[3], { autoAlpha: 1, y: 0, duration: 0.14, ease: "power2.out" })
          .to(routes, { autoAlpha: 1, duration: 0.16, stagger: 0.03, ease: "none" })
          .to(nodes, { autoAlpha: 1, y: 0, scale: 1, duration: 0.22, stagger: 0.04, ease: "power2.out" })
          .to(hero.querySelector(".hero-visual"), { y: -30, duration: 0.2, ease: "none" }, 0.25)
          .to(hero.querySelectorAll(".hero-band"), { yPercent: -12, duration: 0.35, stagger: 0.03, ease: "none" }, 0.22);
      });

      media.add("(max-width: 900px)", () => {
        gsap.from(".hero-reveal", { autoAlpha: 0, y: 20, duration: 0.7, stagger: 0.09, ease: "power3.out", delay: 0.12 });
        gsap.from(".hero-node", { autoAlpha: 0, scale: 0.96, duration: 0.6, stagger: 0.09, ease: "power2.out", delay: 0.45 });
        gsap.from(".hero-route", { autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: "power2.inOut", delay: 0.65 });
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, { y: 42, duration: 0.72, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
      });

      const reviewGap = rootRef.current!.querySelector<HTMLElement>(".review-gap");
      if (reviewGap) {
        gsap.fromTo(reviewGap.querySelector(".review-gap-visual"), { y: 70, rotation: 2.4, scale: 0.94 }, {
          y: -38,
          rotation: -1.25,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: reviewGap, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      const pause = rootRef.current!.querySelector<HTMLElement>(".editorial-pause");
      if (pause) {
        gsap.fromTo(pause.querySelector(".container"), { y: 58, clipPath: "inset(0 0 26% 0)" }, {
          y: -22,
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: { trigger: pause, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      gsap.utils.toArray<HTMLElement>(".product-chapter").forEach((chapter) => {
        const copy = chapter.querySelector<HTMLElement>(".product-chapter-copy");
        const visual = chapter.querySelector<HTMLElement>(".product-chapter-visual");
        if (copy) gsap.fromTo(copy, { x: -36 }, { x: 0, ease: "none", scrollTrigger: { trigger: chapter, start: "top 78%", end: "center center", scrub: true } });
        if (visual) gsap.fromTo(visual, { x: 48, y: 30 }, { x: 0, y: -18, ease: "none", scrollTrigger: { trigger: chapter, start: "top 82%", end: "bottom 30%", scrub: true } });
      });

      const trust = rootRef.current!.querySelector<HTMLElement>(".trust");
      if (trust) {
        gsap.fromTo(trust.querySelector(".evidence-timeline"), { y: 84, rotation: 1.6 }, {
          y: -26,
          rotation: -0.8,
          ease: "none",
          scrollTrigger: { trigger: trust, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    }, rootRef);
    ScrollTrigger.refresh();
    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <EntryExperience />
      <SiteHeader followsEntry />
      <main id="main">
        <Hero requestDemo={() => setDemoOpen(true)} />
        <ReviewGap />
        <EditorialPause />
        <PlatformStory />
        <ProductShowcase />
        <UseCases />
        <TrustSection />
        <Testimonials />
        <ProofAndPricing />
        <FAQ />
        <Closing requestDemo={() => setDemoOpen(true)} />
      </main>
      <Footer />
      <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
