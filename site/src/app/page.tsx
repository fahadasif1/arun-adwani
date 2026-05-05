"use client";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase } from "lucide-react";
import { profile, stats } from "@/lib/data";
import StatCounter from "@/components/StatCounter/StatCounter";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gradientOrb3} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <div className={styles.titleRotator}>
            {profile.rotatingTitles.map((title, i) => (
              <span
                key={title}
                className={`${styles.rotatingTitle} ${i === titleIndex ? styles.titleActive : ""}`}
              >
                {title}
              </span>
            ))}
          </div>
          <p className={styles.heroBio}>{profile.bio}</p>
          <div className={styles.heroCtas}>
            <Link href="/publications" className={styles.ctaPrimary}>
              <BookOpen size={18} />
              View Publications
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <ScrollReveal>
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Quick Links */}
      <ScrollReveal>
        <section className={styles.quickLinks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Explore My <span className="text-gradient">Journey</span>
            </h2>
            <div className={styles.cardsGrid}>
              <Link href="/career" className={styles.quickCard}>
                <div className={styles.quickCardIcon}>
                  <Briefcase size={28} />
                </div>
                <h3>Career Timeline</h3>
                <p>7+ years across NHS, Columbia Threadneedle, banking, and fintech</p>
                <span className={styles.cardArrow}>
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/publications" className={styles.quickCard}>
                <div className={styles.quickCardIcon}>
                  <BookOpen size={28} />
                </div>
                <h3>Research & Publications</h3>
                <p>6 published papers on SSRN with 24+ citations in fintech and finance</p>
                <span className={styles.cardArrow}>
                  Read More <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/about" className={styles.quickCard}>
                <div className={styles.quickCardIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3>Qualifications</h3>
                <p>MSc FinTech, CPA, ACCA, BSc Applied Accounting — 4 professional credentials</p>
                <span className={styles.cardArrow}>
                  View All <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
