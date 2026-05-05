"use client";
import { useState } from "react";
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, FlaskConical } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { experience, academicProjects } from "@/lib/data";
import styles from "./career.module.css";

export default function CareerClient() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <ScrollReveal>
            <h1>Career <span className="text-gradient">Timeline</span></h1>
            <p className={styles.subtitle}>
              A journey through finance, audit, compliance, and fintech — across the UK and Pakistan
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {experience.map((exp, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                  <div className={styles.timelineDot}>
                    <Briefcase size={16} />
                  </div>
                  <div
                    className={`${styles.timelineCard} ${expandedIndex === i ? styles.cardExpanded : ""}`}
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  >
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.roleTitle}>{exp.title}</h3>
                        <p className={styles.company}>{exp.company}</p>
                        <div className={styles.meta}>
                          <span className={styles.metaItem}>
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className={styles.metaItem}>
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <button className={styles.expandBtn} aria-label="Toggle details">
                        {expandedIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    {expandedIndex === i && (
                      <ul className={styles.bullets}>
                        {exp.bullets.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>
              <FlaskConical size={28} className={styles.sectionIcon} />
              Academic Projects
            </h2>
          </ScrollReveal>
          <div className={styles.projectsGrid}>
            {academicProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <div className={styles.projectCard}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
