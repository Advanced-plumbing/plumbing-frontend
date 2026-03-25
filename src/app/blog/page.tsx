import { BLOGS } from "@/shared/data/blogs";
import Link from "next/link";
import styles from "./BlogList.module.css";
import {Header} from "@/shared/components/Header/Header";
import Image from "next/image";
import {Footer} from "@/shared/components/Footer/Footer"; // Crea este archivo para el grid

export default async function BlogPage({
                                           searchParams,
                                       }: {
    searchParams: Promise<{ s?: string }>;
}) {
    const { s: query } = await searchParams;

    // Lógica de filtrado
    const filteredBlogs = query
        ? BLOGS.filter((blog) =>
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            blog.content.toLowerCase().includes(query.toLowerCase())
        )
        : BLOGS;

    return (
        <>
            <Header />
            <main className={styles.container} data-header-theme="dark">
                {query && (
                    <h1 className={styles.searchTitle}>
                        Search Results for: {query.toUpperCase()}
                    </h1>
                )}

                <div className={styles.blogGrid}>
                    {filteredBlogs.map((blog) => (
                        <article key={blog.id} className={styles.blogCard}>
                            <h2 className={styles.cardTitle}>
                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </h2>
                            <div className={styles.cardMeta}>
                                by {blog.author} / {blog.date}
                            </div>
                            <p className={styles.cardPreview}>
                                {blog.preview.substring(0, 150)}...
                                <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                                    Read More »
                                </Link>
                            </p>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}