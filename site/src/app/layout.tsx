import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import "@/styles/animations.css";

export const metadata: Metadata = {
  title: {
    default: "Arun Adwani — Finance Professional & Researcher",
    template: "%s | Arun Adwani",
  },
  description:
    "Personal website of Arun Adwani — CPA, ACCA, MSc FinTech. Finance professional, published researcher with 24+ citations in fintech, digital payments, and AI-driven finance.",
  keywords: [
    "Arun Adwani",
    "Finance",
    "FinTech",
    "CPA",
    "ACCA",
    "Researcher",
    "Financial Planning",
    "Publications",
  ],
  authors: [{ name: "Arun Adwani" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Arun Adwani",
    title: "Arun Adwani — Finance Professional & Researcher",
    description:
      "CPA, ACCA, MSc FinTech. Published researcher with 24+ citations. Currently Financial Planner at the NHS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Adwani — Finance Professional & Researcher",
    description:
      "CPA, ACCA, MSc FinTech. Published researcher with 24+ citations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: "var(--header-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
