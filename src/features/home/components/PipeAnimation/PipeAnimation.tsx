"use client";
import { useEffect, useRef } from "react";
import styles from "./PipeAnimation.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const PipeAnimation = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const wrapper = wrapperRef.current;
        const sticky = stickyRef.current;
        if (!video || !wrapper || !sticky) return;

        const initScrollTrigger = () => {
            ScrollTrigger.create({
                trigger: wrapper,
                start: "top top",
                end: "bottom bottom",
                pin: sticky,
                pinSpacing: false,
                scrub: 1, // suavidad
                onUpdate: (self) => {
                    if (video.duration) {
                        video.currentTime = self.progress * video.duration;
                    }
                },
            });

            ScrollTrigger.refresh(); // asegura layout correcto
        };

        if (video.readyState >= 1) {
            initScrollTrigger();
        } else {
            video.addEventListener("loadedmetadata", initScrollTrigger, { once: true });
        }

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <div ref={stickyRef} className={styles.stickyContainer}>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    className={styles.video}
                >
                    <source src="/animation/animacion-optimized.mp4" type="video/mp4" />
                </video>

                <div className={styles.contentOverlay}>
                    <h2 className={styles.overlayTitle}>
                        Expert Plumbing Solutions
                    </h2>
                </div>
            </div>
        </div>
    );
};