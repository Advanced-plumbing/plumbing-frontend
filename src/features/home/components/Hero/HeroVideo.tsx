"use client";
import { useRef, useState } from "react";
import styles from "./HeroVideo.module.css";

export const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [moveTitle, setMoveTitle] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        // Segundo 2.3 -> Mueve título
        if (video.currentTime >= 2) {
            setMoveTitle(true);
        } else {
            setMoveTitle(false);
        }

        // Segundo 4.0 -> Muestra botón
        if (video.currentTime >= 4.0) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div className={styles.heroContainer} data-header-theme="dark">
            {/* Video de fondo */}
            <video
                ref={videoRef}
                src="/animation/hero_video.mp4"
                className={styles.videoBackground}
                autoPlay
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                preload="auto"
            />

            {/* Capa de Interfaz fija sobre el video */}
            <div className={styles.overlayUI}>

                {/* Título Principal */}
                <h1 className={`${styles.title} ${moveTitle ? styles.titleMoved : ""}`}>
                    Trusted Plumbing<br />For Every Home
                </h1>

                {/* Botón Contact Us */}
                <button className={`${styles.contactBtn} ${showButton ? styles.btnVisible : ""}`}>
                    <span className={styles.btnText}>Contact Us</span>
                    <div className={styles.btnIcon}>➔</div>
                </button>

            </div>
        </div>
    );
};