"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./AboutUs.module.css";

// ── CONFIG: change target to control where each bar stops ──
const BARS_CONFIG = [
    { label: "Precision & Craftsmanship", target: 100, reverse: false },
    { label: "Unresolved Issues",           target: 0,   reverse: true  },
];

const KPIS = [
    { value: 15,   suffix: "+",  label: "Years of Experience" },
    { value: 100, suffix: "%",   label: "Happy Customers" },
    { value: 350,  suffix: "+",  label: "Projects Completed" },
    { value: 24,   suffix: "/7", label: "Emergency Service" },
];

function useInView(threshold = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

function Counter({ target, suffix, duration = 1600 }: {
    target: number; suffix: string; duration?: number;
}) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView(0.2);
    const isKilo = target === 1000;

    useEffect(() => {
        if (!inView) return;
        let startTime: number | null = null;
        const animate = (ts: number) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [inView, target, duration]);

    const display = isKilo && count >= 1000 ? "1K+" : `${count}${suffix}`;
    return <span ref={ref}>{display}</span>;
}

function Bar({ label, target, reverse, delay = 0 }: {
    label: string; target: number; reverse: boolean; delay?: number;
}) {
    const [width, setWidth] = useState(reverse ? 100 : 0);
    const [num, setNum]     = useState(reverse ? 100 : 0);
    const { ref, inView }   = useInView(0.2);

    useEffect(() => {
        if (!inView) return;
        const timeout = setTimeout(() => {
            setWidth(reverse ? 0 : target);
            const from = reverse ? 100 : 0;
            const to   = reverse ? 0   : target;
            const dur  = 1400;
            let startTime: number | null = null;
            const animate = (ts: number) => {
                if (!startTime) startTime = ts;
                const progress = Math.min((ts - startTime) / dur, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setNum(Math.round(from + (to - from) * eased));
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }, delay);
        return () => clearTimeout(timeout);
    }, [inView, target, reverse, delay]);

    return (
        <div ref={ref} className={styles.barRow}>
            <div className={styles.barHeader}>
                <span className={styles.barLabel}>{label}</span>
                <span className={styles.barNum}>{num}%</span>
            </div>
            <div className={styles.barTrack}>
                <div
                    className={styles.barFill}
                    style={{
                        width: `${width}%`,
                        transition: inView
                            ? `width 1.4s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
                            : "none",
                    }}
                />
            </div>
        </div>
    );
}

export const AboutUs = () => {
    const { ref: kpiRef, inView: kpiInView } = useInView(0.2);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Images */}
                <div className={styles.imageGrid}>
                    <div className={styles.mainImageWrapper}>
                        <Image src="/images/about-us-1.png" alt="Advanced Plumbing technician" fill className={styles.image} />
                    </div>
                    <div className={styles.secondaryImageWrapper}>
                        <Image src="/images/about-us-2.png" alt="Quality plumbing work" fill className={styles.image} />
                    </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <h2 className={styles.title}>About us</h2>
                    <p className={styles.description}>
                        Welcome to <strong>Advanced Plumbing & HVAC</strong>, where reliable plumbing meets exceptional service.
                        Our experienced team <strong>delivers high-quality solutions</strong> for homes and businesses—from
                        fast repairs to maintenance and complex installations. We ensure your systems run efficiently
                        with transparency and lasting results.
                    </p>

                    <div className={styles.bars}>
                        {BARS_CONFIG.map((bar, i) => (
                            <Bar key={bar.label} label={bar.label} target={bar.target} reverse={bar.reverse} delay={i * 150} />
                        ))}
                    </div>

                    <Link href="/contact-us" className={styles.ctaButton}>
                        Get in touch
                    </Link>
                </div>
            </div>

            {/* KPI strip */}
            <div className={styles.kpiStrip} ref={kpiRef}>
                {KPIS.map((kpi, i) => (
                    <div key={kpi.label} className={styles.kpiItem}>
                        <div className={styles.kpiValue}>
                            {kpiInView
                                ? <Counter target={kpi.value} suffix={kpi.suffix} />
                                : <span>0{kpi.suffix}</span>
                            }
                        </div>
                        <div className={styles.kpiLabel}>{kpi.label}</div>

                        {/* Separator: static line + arrow that travels bottom → top */}
                        {i < KPIS.length - 1 && (
                            <div className={styles.kpiSepWrapper}>
                                {/* Static background line */}
                                <div className={styles.kpiSepLine} />
                                {/* Arrow travels from bottom to top along the line */}
                                <div
                                    className={`${styles.kpiSepArrow} ${kpiInView ? styles.kpiSepArrowVisible : ""}`}
                                    style={{ transitionDelay: `${i * 150}ms` }}
                                >
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                                        <path d="M1 5L4.5 1.5L8 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};