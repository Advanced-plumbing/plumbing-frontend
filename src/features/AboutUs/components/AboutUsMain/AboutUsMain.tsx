"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutUsMain.module.css";

const partnerLogos = [
    { src: "/logos/bbb-logo-white.png", alt: "BBB Accredited Business", width: 180 },
    { src: "/logos/birdeye-logo-white.png", alt: "Birdeye Reviews", width: 160 },
    { src: "/logos/google-reviews-logo-white.png", alt: "Google Reviews 5 Stars", width: 180 },
    { src: "/logos/yelp-logo-white.png", alt: "Yelp Reviews 5 Stars", width: 140 },
];

export const AboutUsMain = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={styles.section}
            data-header-theme="light"
        >
            <div className={styles.container}>

                {/* ── LEFT: texto ── */}
                <div className={`${styles.textCol} ${visible ? styles.textVisible : ""}`}>
                    <h1 className={styles.title}>
                        Reliable Plumbing<br />You Can Trust
                    </h1>
                    <p className={styles.body}>
                        We're more than a plumbing company—we're your trusted partner in
                        keeping homes and businesses safe, efficient, and running smoothly.
                        From emergency repairs to maintenance and installations, we deliver
                        reliable, professional service you can count on.
                    </p>
                    <Link href="/contact-us" className={styles.cta}>Get in touch</Link>

                    <div className={styles.certs}>
                        <span className={styles.certsLabel}>Trusted certificates</span>
                        <div className={styles.certsRow}>
                            {partnerLogos.map((logo) => (
                                <div key={logo.alt} className={styles.logoWrap} style={{ width: logo.width * 0.55 }}>
                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: cards ── */}
                <div className={styles.cardsCol}>

                    {/* Top row */}
                    <div className={styles.topRow}>

                        {/* Card izquierda — 4.9 */}
                        <div className={`${styles.card} ${styles.cardLeft} ${visible ? styles.cardVisible : ""}`}>
                            <div className={styles.cardOverflow}>
                                <div className={`${styles.bigStat} ${visible ? styles.slideDown : ""}`}>
                                    4.9<span className={styles.star}>★</span>
                                </div>
                                <br />
                            </div>
                            <div className={styles.tagsRow}>
                                <div
                                    className={`${styles.tag} ${visible ? styles.slideFromLeft : ""}`}
                                    style={{ animationDelay: "0.5s" }}
                                >
                                    Top Rated in Chicago
                                </div>
                                <div
                                    className={`${styles.tag} ${styles.tagOutline} ${visible ? styles.slideFromLeft : ""}`}
                                    style={{ animationDelay: "0.7s" }}
                                >
                                    Verified team
                                </div>
                            </div>
                        </div>

                        {/* Card derecha — 15+ */}
                        <div
                            className={`${styles.card} ${styles.cardRight} ${visible ? styles.cardVisible : ""}`}
                            style={{ animationDelay: "0.15s" }}
                        >
                            <div className={styles.cardOverflow}>
                                <div
                                    className={`${styles.bigStat} ${visible ? styles.slideDown : ""}`}
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    15+
                                </div>
                            </div>
                            <p className={styles.yearsLabel}>Years Experience</p>
                            <div className={styles.tagsRow}>
                                <div className={styles.tagsRowWrapper}>
                                    <div
                                        className={`${styles.tag} ${visible ? styles.slideFromRight : ""}`}
                                        style={{ animationDelay: "0.6s" }}
                                    >
                                        Professional
                                    </div>
                                    <div
                                        className={`${styles.tag} ${visible ? styles.slideFromRight : ""}`}
                                        style={{ animationDelay: "0.75s" }}
                                    >
                                        Reliable
                                    </div>
                                </div>
                                <div
                                    className={`${styles.tag} ${styles.tagOutline} ${visible ? styles.slideFromRight : ""}`}
                                    style={{ animationDelay: "0.9s" }}
                                >
                                    Efficient
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom card — imagen */}
                    <div className={`${styles.bottomCard} ${visible ? styles.bottomCardVisible : ""}`}>
                        {/* Capa 1: imagen de fondo */}
                        <Image
                            src="/images/bottom-card.png"
                            alt="Plumbing background"
                            fill
                            className={styles.bottomBg}
                        />

                        {/* Capa 2: trabajador — sube desde abajo */}
                        <div className={`${styles.staffWrap} ${visible ? styles.staffVisible : ""}`}>
                            <Image
                                src="/images/main-staff.png"
                                alt="Advanced Plumbing staff"
                                fill
                                className={styles.staffImg}
                            />
                        </div>

                        {/* Capa 3: logo blur — fade in */}
                        <div className={`${styles.logoBlur} ${visible ? styles.logoBlurVisible : ""}`}>
                            <div className={styles.logoInner}>
                                <Image
                                    src="/logos/icon-logo-alt.png"
                                    alt="Advanced Plumbing"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};