"use client";
import { ExternalLink, Quote, BarChart3, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { publications, scholarMetrics, profile } from "@/lib/data";
import styles from "./publications.module.css";

export default function PublicationsClient() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <ScrollReveal>
            <h1>Research & <span className="text-gradient">Publications</span></h1>
            <p className={styles.subtitle}>
              Independent research in FinTech, Digital Finance, AI, and ESG — published on SSRN
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Scholar Metrics */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.metricsCard}>
              <div className={styles.metric}>
                <Quote size={24} className={styles.metricIcon} />
                <span className={styles.metricValue}>{scholarMetrics.totalCitations}</span>
                <span className={styles.metricLabel}>Total Citations</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metric}>
                <BarChart3 size={24} className={styles.metricIcon} />
                <span className={styles.metricValue}>{scholarMetrics.hIndex}</span>
                <span className={styles.metricLabel}>h-index</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metric}>
                <TrendingUp size={24} className={styles.metricIcon} />
                <span className={styles.metricValue}>{scholarMetrics.researchInterestScore}</span>
                <span className={styles.metricLabel}>Research Interest Score</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Publications List */}
      <section className={styles.pubsSection}>
        <div className={styles.container}>
          <div className={styles.pubsList}>
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={i * 80}>
                <div className={styles.pubCard}>
                  <div className={styles.pubContent}>
                    <div className={styles.pubNumber}>{String(i + 1).padStart(2, '0')}</div>
                    <div className={styles.pubInfo}>
                      <h3 className={styles.pubTitle}>{pub.title}</h3>
                      <p className={styles.pubAuthor}>Adwani, A. — Published on SSRN</p>
                    </div>
                  </div>
                  <div className={styles.pubActions}>
                    <span className={styles.citationBadge}>
                      <Quote size={14} />
                      {pub.citations} citation{pub.citations !== 1 ? "s" : ""}
                    </span>
                    <a
                      href={pub.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.pubLink}
                    >
                      View on Scholar
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Scholar CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <h2>View Full Google Scholar Profile</h2>
              <p>See all publications, citation metrics, and co-author network</p>
              <a
                href={profile.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Open Google Scholar
                <ExternalLink size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
