import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights by Arun Adwani on finance, fintech, accounting, and professional development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Blog & <span className="text-gradient">Insights</span></h1>
          <p className={styles.subtitle}>
            Thoughts on finance, fintech, and the evolving landscape of digital financial services
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.container}>
          {posts.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyTitle}>Coming Soon</p>
              <p className={styles.emptyText}>
                Blog posts are on the way. Check back soon for articles on finance, fintech, and professional insights.
              </p>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.postCard}
                >
                  <div className={styles.postMeta}>
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
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.postTags}>
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.postTag}>
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.readMore}>
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
