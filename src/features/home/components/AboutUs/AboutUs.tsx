import Image from "next/image";
import styles from "./AboutUs.module.css";
import Link from "next/link";

export const AboutUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Composición de Imágenes */}
                <div className={styles.imageGrid}>
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src="/images/about-1.png" // Imagen de un técnico trabajando o el equipo
                            alt="Advanced Plumbing Team"
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.secondaryImageWrapper}>
                        <Image
                            src="/images/about-2.png" // Imagen detalle de herramientas o tuberías limpias
                            alt="Quality Work"
                            fill
                            className={styles.image}
                        />
                        {/* Badge de Experiencia */}
                        <div className={styles.experienceBadge}>
                            <span className={styles.years}>15+</span>
                            <span className={styles.expText}>Years of Experience</span>
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Contenido */}
                <div className={styles.content}>
                    <span className={styles.subtitle}>Our Story</span>
                    <h2 className={styles.title}>
                        Reliable Plumbing Solutions <br />
                        <span>Built on Trust</span>
                    </h2>
                    <p className={styles.description}>
                        At Advanced Plumbing & HVAC, we don’t just fix pipes; we restore comfort and peace of mind to your home. Our team of certified professionals is dedicated to providing high-quality residential services tailored to your specific needs.
                    </p>
                    <p className={styles.description}>
                        From minor leaks to major installations, we use the latest technology and durable materials to ensure long-lasting results. We pride ourselves on our transparency, punctuality, and commitment to excellence.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h3>100%</h3>
                            <p>Satisfaction Guaranteed</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>24/7</h3>
                            <p>Emergency Support</p>
                        </div>
                    </div>

                    <Link href="/about-us" className={styles.learnMoreBtn}>
                        Discover Our Method
                    </Link>
                </div>

            </div>
        </section>
    );
};