import React from 'react';
import Image from 'next/image';
import styles from './BlogSection.module.css';

const blogSection = [
    {
        id: 1,
        title: '5 Reasons to Install a Sump Pump in Your Basement',
        excerpt: 'Your basement might be out of sight, but it should never be out of mind—especially when it comes to protecting it from water damage...',
        image: '/blog1.jpg', // Reemplaza con tus rutas de imagen
    },
    {
        id: 2,
        title: 'How To Prevent Frozen Pipes This Winter',
        excerpt: 'Winter is here, and while the season brings snow and cozy nights, it can also bring a hidden danger to your home: frozen pipes. When water freezes, it expands...',
        image: '/blog2.jpg',
    },
    {
        id: 3,
        title: 'How Does a Sewer Camera Inspection Work?',
        excerpt: 'If you’re dealing with recurring clogs, slow drains, or mysterious plumbing issues, a sewer camera inspection could be the key to uncovering the problem...',
        image: '/blog3.jpg',
    },
];

const BlogSection = () => {
    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>BLOGS</h2>

                <div className={styles.blogGrid}>
                    {blogSection.map((blog) => (
                        <article key={blog.id} className={styles.blogCard}>
                            <div className={styles.imageWrapper}>
                                {/* Usando placeholder por ahora, reemplaza con tus imágenes reales */}
                                <div className={styles.placeholderImg}>
                                    <span className={styles.imgLabel}>Blog Image</span>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.blogTitle}>{blog.title}</h3>
                                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                                <button className={styles.readMoreBtn}>READ MORE</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;