"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CoreValues.module.css';

const values = [
    {
        title: "Excellence",
        description: "We strive to deliver top-tier results through precision, skill, and a commitment to doing every job right the first time.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Integrity",
        description: "We operate with honesty and transparency, ensuring our clients can trust every recommendation and every decision we make.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Reliability",
        description: "We show up when it matters most, providing consistent, dependable service you can count on—every time.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const CoreValues = () => {
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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

    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % values.length);
        }, 2800);
        return () => clearInterval(interval);
    }, [visible]);

    return (
        <section ref={sectionRef} className={styles.section} data-header-theme="dark">

            <div className={styles.vectorBg}>
                <Image src="/images/vector-alt.png" alt="" fill className={styles.vectorImg} />
            </div>

            <div className={styles.container}>

                {/* ── LEFT ── */}
                <div className={`${styles.leftCol} ${visible ? styles.leftVisible : ""}`}>
                    <h2 className={styles.title}>
                        Our Core<br />
                        <span className={styles.titleAccent}>Values</span>
                    </h2>
                    <p className={styles.body}>
                        We believe great service is built on trust, consistency, and
                        attention to detail. Our team is committed to delivering clean,
                        reliable work while respecting your time, your property, and your
                        expectations—every single time.
                    </p>
                    <Link href="/contact-us" className={styles.cta}>Get in touch</Link>
                </div>

                {/* ── RIGHT: Steps ── */}
                <div className={styles.rightCol}>
                    <div className={styles.timeline}>
                        {values.map((value, i) => (
                            <div
                                key={value.title}
                                className={`${styles.step} ${activeIndex === i ? styles.stepActive : ""}`}
                                onClick={() => setActiveIndex(i)}
                            >
                                {/* Dot + line */}
                                <div className={styles.dotCol}>
                                    <div className={styles.dot} />
                                    {i < values.length - 1 && <div className={styles.line} />}
                                </div>

                                {/* Content */}
                                <div className={styles.stepContent}>
                                    <div className={styles.stepHeader}>
                                        <h3 className={styles.stepTitle}>{value.title}</h3>
                                        <span className={styles.stepIcon}>{value.icon}</span>
                                    </div>
                                    <p className={styles.stepDesc}>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};