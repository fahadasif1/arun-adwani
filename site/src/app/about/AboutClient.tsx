"use client";
import { GraduationCap, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import type { Qualification, SkillCategory } from "@/lib/data";
import styles from "./about.module.css";

interface Props {
  qualifications: Qualification[];
  skills: SkillCategory[];
  profile: { name: string; bio: string };
}

export default function AboutClient({ qualifications, skills, profile }: Props) {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.profileSection}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                  <img src="/arun-adwani/images/arun-profile.png" alt="Arun Adwani" className={styles.avatarImg} />
                </div>
                <div className={styles.avatarGlow} />
              </div>
              <div className={styles.profileInfo}>
                <h1>About <span className="text-gradient">{profile.name}</span></h1>
                <p className={styles.bio}>{profile.bio}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Qualifications */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>
              <GraduationCap size={28} className={styles.sectionIcon} />
              Qualifications
            </h2>
          </ScrollReveal>
          <div className={styles.qualGrid}>
            {qualifications.map((q, i) => (
              <ScrollReveal key={q.degree} delay={i * 100}>
                <div className={styles.qualCard}>
                  <div className={styles.qualHeader}>
                    <h3>{q.degree}</h3>
                    {q.badge && <span className={styles.badge}>{q.badge}</span>}
                  </div>
                  <p className={styles.qualInstitution}>{q.institution}</p>
                  <p className={styles.qualMeta}>{q.location} • {q.year}</p>
                  <div className={styles.coursework}>
                    <p className={styles.courseworkLabel}>Key Coursework:</p>
                    <div className={styles.tags}>
                      {q.coursework.map((c) => (
                        <span key={c} className={styles.tag}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>
              <Award size={28} className={styles.sectionIcon} />
              Technical Skills
            </h2>
          </ScrollReveal>
          <div className={styles.skillsGrid}>
            {skills.map((category, i) => (
              <ScrollReveal key={category.category} delay={i * 100}>
                <div className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>{category.category}</h3>
                  <div className={styles.tags}>
                    {category.skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
