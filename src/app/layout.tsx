import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scopwise.com"),
  title: {
    default: "Scopwise | Agent access governance",
    template: "%s | Scopwise",
  },
  description:
    "Map agent access, set understandable boundaries, and produce review-ready evidence for enterprise AI deployments.",
  applicationName: "Scopwise",
  keywords: [
    "AI agent governance",
    "enterprise copilots",
    "agent access review",
    "AI compliance",
    "workflow agents",
  ],
  authors: [{ name: "Scopwise" }],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://scopwise.com",
    title: "Scopwise | Prove what your agents can access",
    description:
      "One access model for mapping agent reach, applying rules, and producing review-ready evidence.",
    siteName: "Scopwise",
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
    title: "Scopwise | Agent access governance",
    description:
      "Map agent access, set boundaries, and review every change with evidence.",
    images: ["/og/scopwise-social.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F7F3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
