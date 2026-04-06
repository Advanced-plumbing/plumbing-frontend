"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurServices.module.css';

const services = [
    {
        listLabel: 'Drain & Sewer',
        titleLine1: 'Drain &',
        titleLine2: 'Sewer Cleaning',
        image: '/images/ourServices/drain_cleaning.webp',
        description: 'Keep your plumbing system flowing smoothly with our thorough drain and sewer cleaning services. We remove debris, grease, and blockages that could disrupt your plumbing.',
    },
    {
        listLabel: 'Filter System',
        titleLine1: 'Filter System',
        titleLine2: 'Under Sink Installation',
        image: '/images/ourServices/filter_system.webp',
        description: "Improve your home's water quality with professional under-sink filtration. Enjoy clean, safe, and great-tasting drinking water straight from your tap.",
    },
    {
        listLabel: 'Gas Line',
        titleLine1: 'Gas Line',
        titleLine2: 'Services',
        image: '/images/ourServices/gas_line.webp',
        description: 'Safety is our top priority. We offer certified gas line installation, repair, and inspection services for residential and commercial properties.',
    },
    {
        listLabel: 'HVAC Services',
        titleLine1: 'Professional',
        titleLine2: 'HVAC Services',
        image: '/images/ourServices/HVAC.webp', // Pendiente imagen HVAC
        description: 'Expert heating, ventilation, and air conditioning services to keep your indoor environment comfortable and energy-efficient throughout the year.',
    },
    {
        listLabel: 'Pipe Burst',
        titleLine1: 'Insurance',
        titleLine2: 'Pipe Burst Repair',
        image: '/images/ourServices/pipe_burst_repair.webp',
        description: 'We quickly identify and repair damaged, corroded, or leaking pipes to restore flow and prevent further water damage to your property.',
    },
    {
        listLabel: 'Pipe Replacement',
        titleLine1: 'Pipe',
        titleLine2: 'Replacement',
        image: '/images/ourServices/pipe_replacement.webp',
        description: 'Prevent costly repairs with our professional pipe replacement services using high-quality, durable materials for long-lasting results.',
    },
    {
        listLabel: 'Installations',
        titleLine1: 'Plumbing',
        titleLine2: 'Installations',
        image: '/images/ourServices/plumbing_installation.webp',
        description: 'From new constructions to full remodels, we provide quality installations for sinks, showers, toilets, and fixtures of all kinds.',
    },
    {
        listLabel: 'Plumbing Repair',
        titleLine1: 'Plumbing',
        titleLine2: 'Repair Services',
        image: '/images/ourServices/plumbing_repair.webp',
        description: 'Eliminate leaks and clogs with our effective repair services. Our experts diagnose issues accurately and deliver lasting fixes.',
    },
    {
        listLabel: 'Sewer Inspection',
        titleLine1: 'Sewer Inspection',
        titleLine2: 'w/ SeeSnake Camera',
        image: '/images/ourServices/sewer_work.webp',
        description: 'Advanced SeeSnake camera inspections provide a detailed view of your sewer system, detecting hidden blockages, cracks, and root intrusions.',
    },
    {
        listLabel: 'Sump Pumps',
        titleLine1: 'Sump Pumps',
        titleLine2: 'Services',
        image: '/images/ourServices/sump_pumps.webp',
        description: 'Protect your property from flooding with professional sump pump installation and maintenance, keeping your basement dry and secure.',
    },
    {
        listLabel: 'Tankless Heater',
        titleLine1: 'Tankless Water',
        titleLine2: 'Heater Installation',
        image: '/images/ourServices/tankless_heater.webp',
        description: 'Enjoy endless hot water and energy savings with our expert tankless water heater installation services tailored to your home’s needs.',
    },
    {
        listLabel: 'Toilet Clog',
        titleLine1: 'Toilet Clog',
        titleLine2: 'Removal Services',
        image: '/images/ourServices/toilet_clog.webp',
        description: 'Fast and reliable toilet clog removal to restore your bathroom’s functionality. We handle even the toughest blockages with ease.',
    },
    {
        listLabel: 'Water Heater',
        titleLine1: 'Water Heater',
        titleLine2: 'Replacement',
        image: '/images/ourServices/water_heater.webp',
        description: "Expert water heater replacements ensuring a reliable, energy-efficient supply of hot water throughout every season of the year.",
    },
];

const TRANSITION_DURATION = 500;

export default function OurServices() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLButtonElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const goTo = useCallback((index: number) => {
        if (index === activeIndex || isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex(index);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setDisplayIndex(index);
            setIsTransitioning(false);
        }, TRANSITION_DURATION / 2);
    }, [activeIndex, isTransitioning]);

    const scrollTabs = useCallback((direction: 'left' | 'right') => {
        if (!listRef.current) return;
        listRef.current.scrollBy({ left: direction === 'left' ? -220 : 220, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (activeItemRef.current && listRef.current) {
            const item = activeItemRef.current;
            const container = listRef.current;
            container.scrollTo({
                left: item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2,
                behavior: 'smooth',
            });
        }
    }, [activeIndex]);

    useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

    const current = services[displayIndex];
    const active  = services[activeIndex];
    const isFirst = activeIndex === 0;
    const isLast  = activeIndex === services.length - 1;

    return (
        <section className={styles.section} data-header-theme="dark">
            <div className={styles.vectorBg}>
                <Image src="/images/vector.png" alt="" width={0} height={0} sizes="100vw" className={styles.vectorImg} aria-hidden />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} data-header-theme="dark">
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <p className={styles.sectionSubtitle}>
                        Whether you&apos;re dealing with a minor issue or a plumbing emergency.{' '}
                        <strong>Our team is equipped to handle all your plumbing needs.</strong>
                    </p>
                </div>

                {/*
                    cardWrapper: position relative, overflow visible.
                    The card fills 100% of this. The arrows sit absolute
                    at top:50% of THIS wrapper — perfectly centered on the card —
                    and use negative left/right to escape without shrinking the card.
                */}
                <div className={styles.cardWrapper} data-header-theme="light">
                    <button
                        className={`${styles.cardArrow} ${styles.cardArrowLeft}`}
                        onClick={() => goTo(Math.max(0, activeIndex - 1))}
                        disabled={isFirst}
                        aria-label="Previous service"
                    >‹</button>

                    <div className={`${styles.card} ${isTransitioning ? styles.cardFading : styles.cardVisible}`}>
                        <div className={styles.cardImageWrapper}>
                            <Image src={current.image} alt={current.titleLine2} fill className={styles.cardImage} priority />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h3 className={styles.serviceTitle}>
                                    <span className={styles.titleWhite}>{active.titleLine1}</span>
                                    <br />
                                    <span className={styles.titleBlue}>{active.titleLine2}</span>
                                </h3>
                                <p className={styles.serviceDesc}>{current.description}</p>
                            </div>
                            <Link href="/contact-us" className={styles.ctaButton}>Get in touch</Link>
                        </div>
                    </div>

                    <button
                        className={`${styles.cardArrow} ${styles.cardArrowRight}`}
                        onClick={() => goTo(Math.min(services.length - 1, activeIndex + 1))}
                        disabled={isLast}
                        aria-label="Next service"
                    >›</button>
                </div>

                {/* Tabs */}
                <div className={styles.tabsWrapper} data-header-theme="dark">
                    <button className={`${styles.tabArrow}`} onClick={() => scrollTabs('left')} aria-label="Scroll tabs left">‹</button>
                    <div className={styles.tabsList} ref={listRef}>
                        {services.map((s, i) => (
                            <button
                                key={i}
                                ref={i === activeIndex ? activeItemRef : null}
                                className={`${styles.tab} ${i === activeIndex ? styles.tabActive : ''}`}
                                onClick={() => goTo(i)}
                            >
                                {s.listLabel}
                            </button>
                        ))}
                    </div>
                    <button className={`${styles.tabArrow}`} onClick={() => scrollTabs('right')} aria-label="Scroll tabs right">›</button>
                </div>
            </div>
        </section>
    );
}