"use client";

import React from 'react';
import Image from 'next/image';
import styles from './BlogSection.module.css';
import { BLOGS } from "@/shared/data/blogs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BlogSection = () => {
    const router = useRouter();

    const handleNavigation = (slug: string) => {
        router.push(`/blog/${slug}`);
    };

    return (
        <section className={styles.section}>
            {/* Decorative vector — right side */}
            <div className={styles.vectorRight} aria-hidden>
                <Image
                    src="/images/vector-right.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={styles.vectorImg}
                />
            </div>

            <div className={styles.container}>
                {/* Header — left aligned like the mockup */}
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Blogs</h2>
                    <p className={styles.sectionSubtitle}>
                        Expert tips, practical guides, and insights to help you prevent issues,
                        protect your property, and <strong>keep your plumbing running smoothly year-round.</strong>
                    </p>
                </div>

                {/* Cards grid */}
                <div className={styles.grid}>
                    {BLOGS.slice(0, 3).map((blog) => (
                        <article
                            key={blog.id}
                            className={styles.card}
                            onClick={() => handleNavigation(blog.slug)}
                        >
                            {/* Background image fills the whole card */}
                            <div className={styles.cardBg}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={styles.cardImg}
                                    priority={blog.id === "1"}
                                />
                                {/* Dark gradient overlay */}
                                <div className={styles.cardOverlay} />
                            </div>

                            {/* Text content over the image */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}
                                    dangerouslySetInnerHTML={{ __html: formatTitle(blog.title) }}
                                />
                                <p className={styles.cardExcerpt}>{blog.preview}</p>
                                <button
                                    className={styles.readMoreBtn}
                                    onClick={(e) => { e.stopPropagation(); handleNavigation(blog.slug); }}
                                >
                                    Read more
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* More blogs CTA */}
                <div className={styles.moreBlogsWrapper}>
                    <Link href="/blog" className={styles.moreBlogsBtn}>
                        More Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
};

/**
 * Highlights keywords in the title with blue color.
 * Looks for words after "to", "Prevent", "Sewer" etc. — same style as the mockup.
 * You can tweak the regex or just hardcode per-blog if you prefer.
 */
function formatTitle(title: string): string {
    // Words/phrases to color blue — adjust as needed
    const highlights = [
        "Install\\s+a\\s+Sump\\s+Pump",
        "Prevent\\s+Frozen\\s+Pipes",
        "Sewer\\s+Camera\\s+Inspection",
    ];
    let result = title;
    highlights.forEach((pattern) => {
        result = result.replace(
            new RegExp(`(${pattern})`, "gi"),
            '<span class="highlight">$1</span>'
        );
    });
    return result;
}

export default BlogSection;