import Link from "next/link";
import { Mail, GraduationCap } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
import { profile, navLinks } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoAccent}>A</span>run Adwani
            </Link>
            <p className={styles.tagline}>
              Finance Professional, Published Researcher, CPA & ACCA Qualified
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.connect}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <GraduationCap size={18} />
              <span>Google Scholar</span>
            </a>
            <a href={`mailto:${profile.email}`} className={styles.socialLink}>
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Arun Adwani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
