import Image from "next/image";
import styles from "./mainHero.module.css";
import Link from "next/link";

export const MainHero = () => {
    return (
        <section className={styles.hero}>
            <Image
                src="/images/contact-banner.png"
                alt="Advanced Plumbing team"
                fill
                priority
                className={styles.heroImg}
            />
            <div className={styles.overlay} />

            <div className={styles.contentContainer}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        Plumbing you can trust, <span>results that last.</span>
                    </h1>
                    <p className={styles.description}>
                        From fast repairs to full installations, we keep your home or business running smoothly with trusted, long-lasting solutions.
                    </p>
                    <Link href="/contact-us" className={styles.ctaButton}>
                        Request an Estimate
                    </Link>
                </div>
            </div>
        </section>
    );
};