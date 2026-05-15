import Image from "next/image";
import styles from "./Accreditations.module.css";

const partnerLogos = [
    { src: "/logos/bbb-logo.webp", alt: "BBB Accredited Business", width: 180 },
    { src: "/logos/birdeye-logo.webp", alt: "Birdeye Reviews", width: 160 },
    { src: "/logos/google-reviews-logo.webp", alt: "Google Reviews 5 Stars", width: 180 },
    { src: "/logos/yelp-logo.webp", alt: "Yelp Reviews 5 Stars", width: 140 },
];

export const Accreditations = () => {
    return (
        <section className={styles.wrapper} data-header-theme="dark">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Trusted & Certified</span>
                    <h2 className={styles.title}>Our Professional Accreditations</h2>
                </div>

                <div className={styles.logoGrid}>
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className={styles.logoCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={80}
                                    style={{ objectFit: 'contain' }}
                                    className={styles.logoImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};