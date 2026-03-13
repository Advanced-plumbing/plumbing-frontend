"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePath, setActivePath] = useState("Home"); // Simplificado para este ejemplo

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Home", "About", "Method", "Services", "Process"];

    const navLinkClass = `${styles.navLink} ${
        isScrolled ? styles.navLinkScrolled : styles.navLinkTransparent
    }`;

    const touchTextClass = `${styles.touchText} ${
        isScrolled ? styles.touchTextScrolled : styles.touchTextTransparent
    }`;

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerTransparent}`}>
            <div className={styles.container}>
                <div className="relative w-[200px] h-[60px]"> {/* Ajusta el ancho y alto según el logo original */}
                    <Image
                        src="/logo/logo.png"
                        alt="Advanced Plumbing"
                        fill
                        priority
                        className="object-contain object-left" // object-left para pegarlo a la izquierda
                    />
                </div>

                <div className={styles.navigationWrapper}>
                    {/* NAVEGACIÓN con enlaces activos bold */}
                    <nav className={styles.nav}>
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`${navLinkClass} ${activePath === item ? styles.navLinkActive : ""}`}
                                onClick={() => setActivePath(item)} // Para fines de demo
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* BOTÓN DINÁMICO "Get in touch" */}
                    <div className={styles.getInTouch}>
                        <div className={styles.arrowCircle}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={styles.arrowIcon}
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <span className={styles.touchText}>Get in touch</span>
                    </div>
                </div>

            </div>
        </header>
    );
};