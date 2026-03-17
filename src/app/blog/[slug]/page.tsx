import { BLOGS } from "@/shared/data/blogs";
import { notFound } from "next/navigation";
import styles from "./BlogPost.module.css";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({
                                               params
                                           }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) notFound();

    // Obtener los 5 posts más recientes para la barra lateral
    const recentPosts = BLOGS.slice(0, 5);

    return (
        <>
            <Header />
            <main className={styles.mainWrapper}>
                <div className={styles.container}>
                    {/* COLUMNA IZQUIERDA: CONTENIDO */}
                    <article className={styles.articleContent}>
                        <header className={styles.header}>
                            <h1 className={styles.title}>{blog.title}</h1>
                            <div className={styles.meta}>
                                <span>by {blog.author}</span> / <span>{blog.date}</span>
                            </div>
                        </header>

                        <div className={styles.featuredImageWrapper}>
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Caja azul decorativa similar al mockup bajo la imagen */}
                        <div className={styles.blueIntroBox}>
                            <p>{blog.preview}</p>
                        </div>

                        <div
                            className={styles.contentBody}
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </article>

                    {/* COLUMNA DERECHA: SIDEBAR */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarSection}>
                            <h4 className={styles.sidebarTitle}>Search</h4>
                            <div className={styles.searchBar}>
                                <input type="text" placeholder="Search..." />
                                <button className={styles.searchBtn}>Search</button>
                            </div>
                        </div>

                        <div className={styles.sidebarSection}>
                            <h4 className={styles.sidebarTitle}>Recent Posts</h4>
                            <ul className={styles.recentList}>
                                {BLOGS
                                    .filter((post) => post.slug !== slug) // Filtra el post actual
                                    .slice(0, 5) // Muestra solo los 5 más recientes restantes
                                    .map((post) => (
                                        <li key={post.id}>
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={styles.sidebarSection}>
                            <h4 className={styles.sidebarTitle}>Recent Comments</h4>
                            <p className={styles.noComments}>No comments to show.</p>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </>
    );
}