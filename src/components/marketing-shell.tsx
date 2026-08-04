"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  ["Map", "Reveal every agent, system, action, and owner.", "/icons/products/map.svg", "/product/map"],
  ["Rules", "Define allowed, conditional, and blocked behavior.", "/icons/products/rules.svg", "/product/rules"],
  ["Review", "Produce a clear, review-ready evidence record.", "/icons/products/review.svg", "/product/review"],
] as const;

export function MarketingHeader() {
  const pathname = usePathname();
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className={`site-header marketing-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <Link className="brand-link" href="/" aria-label="Scopwise home">
          <Image src="/brand/scopwise-logo-horizontal.svg" alt="Scopwise" width={820} height={188} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-menu-wrap">
            <button className="nav-link" onClick={() => setProductOpen(!productOpen)} aria-expanded={productOpen}>
              Product <ChevronDown size={15} />
            </button>
            {productOpen ? (
              <div className="nav-dropdown product-dropdown route-dropdown">
                <div className="dropdown-main">
                  {products.map(([name, description, icon, href], index) => (
                    <Link href={href} key={name} onClick={() => setProductOpen(false)}>
                      <span className={`dropdown-icon tone-${index}`}><Image src={icon} alt="" width={24} height={24} /></span>
                      <span><strong>Scopwise {name}</strong><small>{description}</small></span>
                      <ArrowRight size={17} />
                    </Link>
                  ))}
                </div>
                <div className="dropdown-secondary">
                  <Link href="/#platform">Platform overview</Link>
                  <Link href="/#trust">Security and trust</Link>
                </div>
              </div>
            ) : null}
          </div>
          <Link className={`nav-link ${pathname === "/company" ? "active" : ""}`} href="/company">Company</Link>
          <Link className="nav-link" href="/#pricing">Pricing</Link>
        </nav>
        <div className="header-actions">
          <a className="nav-link contact-link" href="mailto:hello@scopwise.com">Contact</a>
          <Link className={`nav-link sign-in-link ${pathname === "/sign-in" ? "active" : ""}`} href="/sign-in">Sign in</Link>
          <Link className="button button-primary header-cta" href="/request-demo">Request a demo <ArrowRight size={17} /></Link>
          <button className="icon-button mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
        </div>
      </div>
      {mobileOpen ? (
        <div className="mobile-nav route-mobile-nav">
          <div className="mobile-nav-top">
            <Image src="/brand/scopwise-logo-horizontal.svg" alt="Scopwise" width={820} height={188} />
            <button className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={22} /></button>
          </div>
          <div className="mobile-nav-links">
            <span className="mini-label">Product</span>
            {products.map(([name, , icon, href]) => <Link key={name} href={href}><Image src={icon} alt="" width={20} height={20} /> Scopwise {name}<ArrowRight size={17} /></Link>)}
            <span className="mini-label">Company</span>
            <Link href="/company"><span />Company <ArrowRight size={17} /></Link>
            <Link href="/news/scopwise-funding-2026"><span />Funding announcement <ArrowRight size={17} /></Link>
            <Link href="/#pricing"><span />Pricing <ArrowRight size={17} /></Link>
            <Link href="/sign-in"><span />Sign in <ArrowRight size={17} /></Link>
            <a href="mailto:hello@scopwise.com"><span />Contact <ArrowUpRight size={17} /></a>
          </div>
          <Link className="button button-primary button-wide" href="/request-demo">Request a demo <ArrowRight size={18} /></Link>
        </div>
      ) : null}
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="site-footer route-footer">
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
            <div><span>Product</span><Link href="/product/map">Map</Link><Link href="/product/rules">Rules</Link><Link href="/product/review">Review</Link><Link href="/#platform">Platform</Link></div>
            <div><span>Solutions</span><Link href="/#use-cases">Security review</Link><Link href="/#use-cases">AI platform teams</Link><Link href="/#use-cases">Compliance</Link><Link href="/#use-cases">Internal audit</Link></div>
            <div><span>Company</span><Link href="/company">Company</Link><Link href="/news/scopwise-funding-2026">Funding announcement</Link><a href="https://www.crunchbase.com/organization/scopwise" target="_blank" rel="noreferrer">Crunchbase</a><a href="https://www.linkedin.com/company/scopwise/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@scopwise.com">Contact</a><Link href="/#trust">Security</Link></div>
            <div><span>Access</span><Link href="/sign-in">Sign in</Link><Link href="/request-demo">Request demo</Link><a href="mailto:legal@scopwise.com?subject=Scopwise%20privacy">Privacy</a></div>
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
          <span>© {new Date().getFullYear()} Scopwise</span>
        </div>
      </div>
    </footer>
  );
}

export function MarketingShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const root = rootRef.current!;
      const hero = root.querySelector<HTMLElement>(".detail-hero, .company-hero, .auth-section, .demo-page-section");

      gsap.from(".marketing-header .header-inner", {
        autoAlpha: 0,
        y: -14,
        duration: 0.5,
        ease: "power2.out",
      });

      if (hero) {
        const copy = hero.querySelector<HTMLElement>(".detail-hero-copy, .company-hero-grid > div:first-child, .auth-context, .demo-page-copy");
        const visual = hero.querySelector<HTMLElement>(".detail-hero-visual, .company-hero-note, .auth-panel, .demo-form-panel");

        if (copy) {
          gsap.from(copy.children, {
            autoAlpha: 0,
            y: 24,
            duration: 0.72,
            stagger: 0.11,
            ease: "power3.out",
            delay: 0.1,
          });
        }

        if (visual) {
          gsap.from(visual, {
            autoAlpha: 0,
            y: 30,
            scale: 0.975,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.28,
          });
        }
      }

      gsap.utils.toArray<HTMLElement>(".detail-section-heading, .company-statement .container, .company-cta .closing-grid").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 38,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".capability-grid article, .company-principle-grid article").forEach((element, index) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 32,
          duration: 0.64,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 87%", once: true },
          delay: index % 3 * 0.06,
        });
      });

      gsap.utils.toArray<HTMLElement>(".workflow-steps li, .company-model-list > div, .auth-assurances > span, .demo-expectations > span").forEach((element, index) => {
        gsap.from(element, {
          autoAlpha: 0,
          x: index % 2 === 0 ? 28 : -18,
          duration: 0.58,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".output-artifact, .detail-output-copy, .detail-next-link, .route-footer .footer-top, .route-footer .footer-bottom").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 30,
          duration: 0.68,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      media.add("(min-width: 901px)", () => {
        if (hero) {
          const copy = hero.querySelector<HTMLElement>(".detail-hero-copy, .company-hero-grid > div:first-child, .auth-context, .demo-page-copy");
          const visual = hero.querySelector<HTMLElement>(".detail-hero-visual, .company-hero-note, .auth-panel, .demo-form-panel");

          if (copy) {
            gsap.to(copy, {
              y: -72,
              autoAlpha: 0.34,
              ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
            });
          }

          if (visual) {
            gsap.to(visual, {
              y: -112,
              scale: 1.025,
              ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
            });
          }
        }

        const question = root.querySelector<HTMLElement>(".detail-question");
        if (question) {
          gsap.fromTo(question.querySelectorAll(".detail-index, h2, p"), {
            x: (index) => index === 0 ? -36 : 38,
            autoAlpha: 0.25,
          }, {
            x: 0,
            autoAlpha: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: question, start: "top 74%", end: "center center", scrub: true },
          });
        }

        const output = root.querySelector<HTMLElement>(".detail-output");
        if (output) {
          const artifact = output.querySelector<HTMLElement>(".output-artifact");
          const outputCopy = output.querySelector<HTMLElement>(".detail-output-copy");
          if (artifact) gsap.to(artifact, { y: -58, rotation: -1.2, ease: "none", scrollTrigger: { trigger: output, start: "top bottom", end: "bottom top", scrub: true } });
          if (outputCopy) gsap.to(outputCopy, { y: 38, ease: "none", scrollTrigger: { trigger: output, start: "top bottom", end: "bottom top", scrub: true } });
        }

        const statement = root.querySelector<HTMLElement>(".company-statement");
        if (statement) {
          gsap.fromTo(statement.querySelector("h2"), { y: 68, autoAlpha: 0.2 }, {
            y: -28,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: { trigger: statement, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });
    }, rootRef);

    ScrollTrigger.refresh();
    return () => {
      media.revert();
      context.revert();
    };
  }, [pathname]);

  return (
    <div className={`route-page ${className}`} ref={rootRef}>
      <MarketingHeader />
      <main id="main">{children}</main>
      <MarketingFooter />
    </div>
  );
}
