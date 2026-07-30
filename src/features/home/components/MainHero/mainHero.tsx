import Image from "next/image";
import styles from "./mainHero.module.css";
import Link from "next/link";

export const MainHero = () => {
    return (
        <section className={styles.hero} data-header-theme="light">
            <Image
                src="/images/hero-banner-alt.png"
                alt="Advanced Plumbing team"
                fill
                priority
                className={styles.heroImg}
            />
            <div className={styles.overlay} />

            <div className={styles.contentContainer}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        Trusted plumbing, <span>proven results.</span>
                    </h1>
                    <p className={styles.description}>
                        From emergency fixes to complete plumbing systems, we provide reliable service and solutions designed for the , <strong>long term.</strong>
                    </p>
                    <Link href="/contact-us" className={styles.ctaButton}>
                        Get in touch
                    </Link>
                </div>
            </div>
        </section>
    );
};