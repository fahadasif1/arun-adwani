"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAccent}>A</span>
            <span className={styles.logoMain}>run Adwani</span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className={`${styles.menuBtn} ${isOpen ? styles.menuBtnOpen : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileMenuInner}>
          <span className={styles.mobileMenuLabel}>— Menu</span>
          <nav className={styles.mobileNav}>
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ""}`}
                style={{ transitionDelay: isOpen ? `${0.15 + idx * 0.06}s` : "0s" }}
              >
                <span className={styles.mobileLinkNum}>
                  0{idx + 1}
                </span>
                <span className={styles.mobileLinkText}>{link.label}</span>
              </Link>
            ))}
          </nav>
          <div className={styles.mobileFooter}>
            <a href="mailto:arun_adwani32@hotmail.com" className={styles.mobileContactLink}>
              arun_adwani32@hotmail.com
            </a>
            <span className={styles.mobileLocation}>United Kingdom</span>
          </div>
        </div>
      </div>
    </>
  );
}
