// app/blog/[slug]/page.tsx
import { BLOGS } from "@/shared/data/blogs";
import { notFound } from "next/navigation";
import styles from "./BlogPost.module.css";

export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({
                                               params
                                           }: {
    params: Promise<{ slug: string }>  // 👈 Tipo como Promise
}) {
    const { slug } = await params;     // 👈 Await aquí

    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{blog.title}</h1>
                <div className={styles.meta}>
                    <span>By {blog.author}</span> | <span>{blog.date}</span>
                </div>
            </header>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </article>
    );
}