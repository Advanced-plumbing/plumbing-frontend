"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMousePosition } from "@/shared/hooks/use-mouse-position";
import styles from "./Hero.module.css";
import Link from "next/link";

export const Hero = () => {
    const { x, y } = useMousePosition();
    const [maskSize, setMaskSize] = useState(120);
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);
    const wallRef = useRef<HTMLDivElement>(null);
    const magRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<number>(0);
    const stateRef = useRef({ progress: 0, currentWP: 0 });

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.matchMedia("(pointer: coarse)").matches;
            setIsMobile(mobile);
            setMaskSize(mobile ? 80 : 120);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animación mobile — DOM directo, sin setState
    useEffect(() => {
        if (!isMobile) return;

        const waypoints = [
            { x: 0.75, y: 0.12 },
            { x: 0.88, y: 0.30 },
            { x: 0.85, y: 0.55 },
            { x: 0.80, y: 0.78 },
            { x: 0.50, y: 0.88 },
            { x: 0.15, y: 0.80 },
            { x: 0.10, y: 0.55 },
            { x: 0.12, y: 0.20 },
            { x: 0.45, y: 0.10 },
        ];

        const ms = maskSize;
        const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const loop = () => {
            const el = sectionRef.current;
            const wall = wallRef.current;
            const mag = magRef.current;
            if (!el || !wall || !mag) {
                animRef.current = requestAnimationFrame(loop);
                return;
            }

            const W = el.clientWidth;
            const H = el.clientHeight;

            stateRef.current.progress += 0.004;
            if (stateRef.current.progress >= 1) {
                stateRef.current.progress = 0;
                stateRef.current.currentWP = (stateRef.current.currentWP + 1) % waypoints.length;
            }

            const from = waypoints[stateRef.current.currentWP];
            const to = waypoints[(stateRef.current.currentWP + 1) % waypoints.length];
            const ease = easeInOut(stateRef.current.progress);

            const cx = (from.x + (to.x - from.x) * ease) * W;
            const cy = (from.y + (to.y - from.y) * ease) * H;

            // ✅ Escribir directo al DOM — sin React, sin re-render
            const mask = `radial-gradient(circle ${ms}px at ${cx}px ${cy}px, transparent 50%, black 100%)`;
            wall.style.maskImage = mask;
            wall.style.webkitMaskImage = mask;

            mag.style.left = `${cx}px`;
            mag.style.top = `${cy}px`;

            animRef.current = requestAnimationFrame(loop);
        };

        animRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animRef.current);
    }, [isMobile, maskSize]);

    // Coordenadas desktop (mouse)
    const adjustedY = y + scrollY;

    return (
        <section className={styles.hero} ref={sectionRef}>
            {/* CAPA 1: Tuberías */}
            <div className={styles.layerPipes}>
                <Image
                    src="/images/pipe-hero-alt-v3.jpg"
                    alt="Plumbing internal structure"
                    fill priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 2: Pared — en mobile usa ref, en desktop usa style inline */}
            <div
                ref={wallRef}
                className={styles.layerWall}
                style={!isMobile ? {
                    maskImage: `radial-gradient(circle ${maskSize}px at ${x}px ${adjustedY}px, transparent 50%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle ${maskSize}px at ${x}px ${adjustedY}px, transparent 50%, black 100%)`
                } : undefined}
            >
                <Image
                    src="/images/wall-hero.jpg"
                    alt="Clean wall"
                    fill priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 4: Lupa — en mobile usa ref */}
            <div
                ref={magRef}
                className={styles.magnifier}
                style={{
                    // Desktop: posición por mouse. Mobile: el loop escribe directo
                    ...(!isMobile ? {
                        left: `${x}px`,
                        top: `${adjustedY}px`,
                    } : {}),
                    width: `${maskSize * 4}px`,
                    height: `${maskSize * 4}px`,
                }}
            >
                <Image
                    src="/images/magnifier.png"
                    alt="Magnifier"
                    fill
                    className={styles.magnifierImg}
                />
            </div>

            {/* CAPA 3: Contenido */}
            <div className={styles.contentContainer}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        Complete Residential Plumbing Services Tailored to Your Home
                    </h1>
                    <p className={styles.description}>
                        Trusted professionals providing durable solutions for every plumbing challenge.
                    </p>
                    <Link href="/contact-us" className={styles.ctaButton}>
                        Request an Estimate
                    </Link>
                </div>
            </div>
        </section>
    );
};