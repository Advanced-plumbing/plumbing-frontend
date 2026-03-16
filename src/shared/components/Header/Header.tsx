"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

interface HeaderProps {
    isHome?: boolean;
}

export const Header = ({ isHome = false }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = () => {
        setIsMenuOpen(false); // Cerramos el menú si estuviera abierto
        router.push('/contact-us/');
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = isHome
        ? (isScrolled ? styles.headerScrolled : styles.headerTransparent)
        : styles.headerScrolled;

    const linkClass = isHome
        ? (isScrolled ? styles.navLinkScrolled : styles.navLinkTransparent)
        : styles.navLinkScrolled;

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about-us" },
        { name: "Method", path: "/#method" }, // Ancla al home
        { name: "Services", path: "/#services" },
        { name: "Process", path: "/#process" },
    ];

    return (
        <header className={`${styles.header} ${headerClass}`}>
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
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`${styles.navLink} ${linkClass} ${
                                    pathname === item.path ? styles.navLinkActive : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div
                        className={styles.getInTouch}
                        onClick={handleNavigation}
                        role="button"
                        tabIndex={0}
                    >
                        <div className={styles.arrowCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <span className={styles.touchText}>Get in touch</span>
                    </div>
                </div>

                {/* MOBILE BUTTON - Cambia color según el fondo */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.mobileMenuBtnOpen : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={!isHome || isScrolled ? styles.barDark : styles.barBlue}></span>
                    <span className={!isHome || isScrolled ? styles.barDark : styles.barBlue}></span>
                </button>

                {/* MOBILE OVERLAY MENU */}
                <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ""}`}>
                    <nav className={styles.mobileNav}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};