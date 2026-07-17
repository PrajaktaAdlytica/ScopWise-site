import type { Metadata } from "next";
import { RequestDemoPage } from "@/components/request-demo-page";

export const metadata: Metadata = {
  title: "Request a demo",
  description: "Request a tailored Scopwise walkthrough for an enterprise agent deployment.",
};

export default function Page() {
  return <RequestDemoPage />;
}
