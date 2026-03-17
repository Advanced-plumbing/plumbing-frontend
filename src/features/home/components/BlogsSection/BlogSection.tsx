"use client";

import React from 'react';
import Image from 'next/image';
import styles from './BlogSection.module.css';
import { BLOGS } from "@/shared/data/blogs";
import {useRouter} from "next/navigation";

const BlogSection = () => {
    const router = useRouter();

    const handleNavigation = (slug: string) => {
        router.push(`/blog/${slug}`);
    };

    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>BLOGS</h2>

                <div className={styles.blogGrid}>
                    {BLOGS.slice(0, 3).map((blog) => (
                        <article key={blog.id} className={styles.blogCard}>
                            <div className={styles.imageWrapper}>
                                {/* Usando placeholder por ahora, reemplaza con tus imágenes reales */}
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={styles.blogImage}
                                    priority={blog.id === "1"} // Prioridad de carga para el primer blog
                                />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.blogTitle}>{blog.title}</h3>
                                <p className={styles.blogExcerpt}>{blog.preview}</p>
                                <button
                                    className={styles.readMoreBtn}
                                    onClick={() => handleNavigation(blog.slug)}
                                >
                                    READ MORE
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;