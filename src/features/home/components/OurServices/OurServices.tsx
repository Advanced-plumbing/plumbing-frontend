"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurServices.module.css';

const services = [
    {
        listLabel: 'Pipe Burst',
        titleLine1: 'Insurance',
        titleLine2: 'Pipe Burst',
        image: '/images/ourServices/our_services_1.png',
        description: 'We quickly identify and repair damaged, corroded, or leaking pipes to restore proper water flow and prevent further damage. Our team ensures efficient solutions that extend the lifespan of your plumbing system while minimizing disruption to your home or business.',
    },
    {
        listLabel: 'Pipe Replace',
        titleLine1: 'Pipe',
        titleLine2: 'Replacement',
        image: '/images/ourServices/our_services_1.png',
        description: 'Prevent water damage and costly repairs with our professional pipe replacement services. We use high-quality, durable materials to deliver reliable long-lasting results, ensuring your plumbing system operates at peak performance for years to come.',
    },
    {
        listLabel: 'Water Heater',
        titleLine1: 'Water Heater',
        titleLine2: 'Replacement',
        image: '/images/ourServices/our_services_1.png',
        description: "If you're tired of inconsistent hot water or an aging system, we offer expert water heater replacements. Our certified technicians ensure you enjoy a reliable, energy-efficient supply of hot water throughout every season of the year.",
    },
    {
        listLabel: 'Sump Pump',
        titleLine1: 'Sump Pump',
        titleLine2: 'Services',
        image: '/images/ourServices/our_services_1.png',
        description: 'Protect your property from flooding with our professional sump pump installation and maintenance services. Our team conducts thorough assessments to recommend the right system for your home, keeping your basement dry, secure, and protected year-round.',
    },
    {
        listLabel: 'Plumbing Repairs',
        titleLine1: 'Plumbing',
        titleLine2: 'Repairs',
        image: '/images/ourServices/our_services_1.png',
        description: 'Eliminate leaks, clogs, and water-related problems with our quick and effective plumbing repair services. Our licensed experts diagnose issues accurately and deliver lasting fixes, ensuring your entire system remains in optimal condition with minimal disruption.',
    },
    {
        listLabel: 'Sewer Work',
        titleLine1: 'Sewer Inspection',
        titleLine2: 'w/ SeeSnake Camera',
        image: '/images/ourServices/our_services_1.png',
        description: 'Our advanced SeeSnake camera inspections provide a detailed view of the interior of your sewer system, detecting hidden blockages, cracks, and root intrusions. This thorough examination helps prevent costly emergency repairs and extends the life of your sewer line.',
    },
    {
        listLabel: 'Drain Clean',
        titleLine1: 'Drain &',
        titleLine2: 'Sewer Cleaning',
        image: '/images/ourServices/our_services_1.png',
        description: 'Keep your plumbing system flowing smoothly with our thorough drain and sewer cleaning services. We remove debris, grease, and blockages that could disrupt your plumbing, preventing costly damage and keeping your home or business functioning without interruption.',
    },
    {
        listLabel: 'Gas Line',
        titleLine1: 'Gas Line',
        titleLine2: 'Services',
        image: '/images/ourServices/our_services_1.png',
        description: 'Safety is our top priority when it comes to gas lines. We offer safe, certified, and dependable gas line installation, repair, and inspection services for residential and commercial properties. Trust our licensed technicians to handle every detail with precision and care.',
    },
    {
        listLabel: 'Installations',
        titleLine1: 'Plumbing',
        titleLine2: 'Installations',
        image: '/images/ourServices/our_services_1.png',
        description: 'From new constructions to full remodels, we provide quality plumbing installations for sinks, showers, toilets, pipes, and fixtures of all kinds. Our team ensures every installation meets local code requirements and delivers optimal performance and long-term efficiency.',
    },
    {
        listLabel: 'Leak Check',
        titleLine1: 'Leak',
        titleLine2: 'Detection',
        image: '/images/ourServices/our_services_1.png',
        description: 'Using advanced technology and precision equipment, our team accurately locates hidden leaks within your plumbing system before they become major problems. Early detection saves you money, prevents water damage, and reduces unnecessary water waste.',
    },
    {
        listLabel: 'Water Filtration',
        titleLine1: 'Water',
        titleLine2: 'Filtration',
        image: '/images/ourServices/our_services_1.png',
        description: "Improve your home's water quality with our professional water filtration system installation and maintenance services. We help you choose the right solution for your needs, delivering clean, safe, great-tasting drinking water straight from every tap in your home.",
    },
    {
        listLabel: 'Bathroom',
        titleLine1: 'Bathroom',
        titleLine2: 'Remodeling',
        image: '/images/ourServices/our_services_1.png',
        description: 'Transform your bathroom with our expert plumbing remodeling services. We handle everything from individual fixture upgrades to complete bathroom plumbing overhauls, coordinating every detail to deliver a beautiful, fully functional space you will love for years.',
    },
    {
        listLabel: 'Emergency',
        titleLine1: 'Emergency',
        titleLine2: 'Plumbing',
        image: '/images/ourServices/our_services_1.png',
        description: "Plumbing emergencies don't wait for business hours. Our team is available 24 hours a day, 7 days a week, 365 days a year to respond quickly and resolve any urgent plumbing issues. We arrive fast and fix the problem right the first time.",
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