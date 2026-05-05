"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Check } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import styles from "./post.module.css";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to all posts
          </Link>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className={styles.metaItem}>
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
            <h1>{post.title}</h1>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </header>

          <div className={styles.content} dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/^### (.*$)/gm, '<h3>$1</h3>')
              .replace(/^## (.*$)/gm, '<h2>$1</h2>')
              .replace(/^# (.*$)/gm, '<h1>$1</h1>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(?!<[h|p|u|o|l])(.+)$/gm, '<p>$1</p>')
          }} />

          <footer className={styles.footer}>
            <button onClick={handleShare} className={styles.shareBtn}>
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              {copied ? "Link Copied!" : "Share this article"}
            </button>
          </footer>
        </div>
      </article>
    </div>
  );
}
