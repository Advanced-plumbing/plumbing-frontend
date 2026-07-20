"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./HeroVideo.module.css";

export const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [moveTitle, setMoveTitle] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es móvil de forma limpia del lado del cliente
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile(); // Ejecución inicial
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        // Segundo 2 -> Mueve título
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
            {/* Video de fondo reactivo al tamaño de pantalla */}
            <video
                key={isMobile ? "mobile" : "desktop"} // Reconstruye el nodo para forzar el cambio de src sin bugs
                ref={videoRef}
                src={isMobile ? "/animation/hero_mobile.mp4" : "/animation/hero_desktop.mp4"}
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
                    <div className={styles.btnIcon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-5 h-5 text-white"
                            style={{ width: '20px', height: '20px' }} // Asegura el tamaño exacto dentro del círculo
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                            />
                        </svg>
                    </div>
                </button>

            </div>
        </div>
    );
};