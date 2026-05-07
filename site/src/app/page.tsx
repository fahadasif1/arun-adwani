"use client";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, MapPin } from "lucide-react";
import { profile, stats } from "@/lib/data";
import StatCounter from "@/components/StatCounter/StatCounter";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";

const BASE = "/arun-adwani";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero — Editorial Split Layout */}
      <section className={styles.hero}>
        {/* Massive decorative monogram */}
        <div className={styles.monogram} aria-hidden="true">AA</div>

        {/* Vertical side rail */}
        <div className={styles.sideRail} aria-hidden="true">
          <span className={styles.railTop}>EST. 2018 — UK</span>
          <span className={styles.railMid}>PORTFOLIO</span>
          <span className={styles.railBottom}>VOL. 01</span>
        </div>

        <div className={styles.heroInner}>
          {/* Photo Column */}
          <div className={styles.photoColumn}>
            <div className={styles.photoFrame}>
              <span className={styles.frameCornerTL} />
              <span className={styles.frameCornerTR} />
              <span className={styles.frameCornerBL} />
              <span className={styles.frameCornerBR} />
              <div className={styles.photoWrap}>
                <img
                  src={`${BASE}/images/arun-profile.png`}
                  alt="Arun Adwani"
                  className={styles.photo}
                />
              </div>
            </div>
            <p className={styles.photoCaption}>
              <span className={styles.photoDot} />
              Currently in Kettering, UK
            </p>
          </div>

          {/* Content Column */}
          <div className={styles.contentColumn}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Finance Professional &amp; Researcher</span>
            </div>

            <h1 className={styles.name}>
              <span className={styles.nameFirst}>Arun</span>
              <span className={styles.nameLast}>
                Adwani
                <span className={styles.nameSwash} aria-hidden="true">.</span>
              </span>
            </h1>

            <div className={styles.tagline}>
              <em>Building bridges between</em> finance, research <em>and</em> fintech.
            </div>

            <div className={styles.credentials}>
              {["CPA", "ACCA", "MSc FinTech"].map((cred) => (
                <span key={cred} className={styles.credBadge}>{cred}</span>
              ))}
            </div>

            <p className={styles.bio}>{profile.bio}</p>

            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <MapPin size={13} />
                United Kingdom
              </span>
              <span className={styles.metaDivider} />
              <span className={styles.metaItem}>
                <Briefcase size={13} />
                NHS Financial Planner
              </span>
            </div>

            <div className={styles.ctaRow}>
              <Link href="/publications" className={styles.ctaPrimary}>
                <BookOpen size={16} />
                View Publications
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollLine} />
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
          <div className={styles.linksContainer}>
            <p className={styles.linksEyebrow}>— Navigate</p>
            <h2 className={styles.linksTitle}>Explore the Work</h2>
            <div className={styles.cardsGrid}>
              <Link href="/career" className={styles.quickCard}>
                <span className={styles.cardNumber}>01</span>
                <div className={styles.cardBody}>
                  <h3>My Career</h3>
                  <p>7+ years across NHS, Columbia Threadneedle, banking, and fintech</p>
                </div>
                <ArrowRight size={18} className={styles.cardArrow} />
              </Link>
              <Link href="/publications" className={styles.quickCard}>
                <span className={styles.cardNumber}>02</span>
                <div className={styles.cardBody}>
                  <h3>Research &amp; Publications</h3>
                  <p>6 published papers on SSRN with 24+ citations in fintech and finance</p>
                </div>
                <ArrowRight size={18} className={styles.cardArrow} />
              </Link>
              <Link href="/about" className={styles.quickCard}>
                <span className={styles.cardNumber}>03</span>
                <div className={styles.cardBody}>
                  <h3>Qualifications</h3>
                  <p>MSc FinTech, CPA, ACCA, BSc Applied Accounting — 4 professional credentials</p>
                </div>
                <ArrowRight size={18} className={styles.cardArrow} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
