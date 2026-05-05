"use client";
import { useState, FormEvent } from "react";
import { Mail, GraduationCap, Send, MapPin, CheckCircle } from "lucide-react";

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { profile } from "@/lib/data";
import styles from "./contact.module.css";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // Fallback: open mailto
      const name = data.get("name");
      const subject = data.get("subject");
      const message = data.get("message");
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=From: ${name}%0A%0A${message}`;
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <ScrollReveal>
            <h1>Get in <span className="text-gradient">Touch</span></h1>
            <p className={styles.subtitle}>
              Have a question, collaboration idea, or just want to connect? I&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Form */}
            <ScrollReveal direction="left">
              <div className={styles.formCard}>
                {submitted ? (
                  <div className={styles.successState}>
                    <CheckCircle size={48} className={styles.successIcon} />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required placeholder="Your name" />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" required rows={5} placeholder="Your message..." />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className={styles.infoSide}>
                <div className={styles.infoCard}>
                  <Mail size={22} className={styles.infoIcon} />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <MapPin size={22} className={styles.infoIcon} />
                  <div>
                    <h4>Location</h4>
                    <p>United Kingdom</p>
                  </div>
                </div>

                <div className={styles.socialCards}>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                  >
                    <LinkedinIcon size={24} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                  >
                    <GraduationCap size={24} />
                    <span>Google Scholar</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
