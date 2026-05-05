import { Metadata } from "next";
import PublicationsClient from "./PublicationsClient";

export const metadata: Metadata = {
  title: "Publications",
  description: "Research publications by Arun Adwani — 6 papers on SSRN covering fintech, digital payments, AI in finance, ESG investing, and predictive analytics. 24+ citations.",
};

export default function PublicationsPage() {
  return <PublicationsClient />;
}
