"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("Home");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Home", "About", "Method", "Services", "Process"];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerTransparent}`}>
            <div className={styles.container}>
                {/* LOGO */}
                <div className={styles.logoWrapper}>
                    <Image
                        src="/logos/logo.png"
                        alt="Advanced Plumbing"
                        fill
                        priority
                        className="object-contain object-left"
                    />
                </div>

                {/* DESKTOP NAVIGATION */}
                <div className={styles.navigationWrapper}>
                    <nav className={styles.nav}>
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`${styles.navLink} ${
                                    isScrolled ? styles.navLinkScrolled : styles.navLinkTransparent
                                } ${activePath === item ? styles.navLinkActive : ""}`}
                                onClick={() => setActivePath(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className={styles.getInTouch}>
                        <div className={styles.arrowCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <span className={styles.touchText}>Get in touch</span>
                    </div>
                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.mobileMenuBtnOpen : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={isScrolled ? styles.barDark : styles.barBlue}></span>
                    <span className={isScrolled ? styles.barDark : styles.barBlue}></span>
                </button>

                {/* MOBILE OVERLAY MENU */}
                <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ""}`}>
                    <nav className={styles.mobileNav}>
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className={styles.mobileCTA}>Get in touch</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};