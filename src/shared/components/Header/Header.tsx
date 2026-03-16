"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
    isHome?: boolean;
}

// Interfaz para el tipado de los servicios
interface ServiceItem {
    name: string;
    path: string;
}

export const Header = ({ isHome = false }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado para el acordeón móvil

    const router = useRouter();
    const pathname = usePathname();

    // Generación dinámica de la lista de servicios con sus paths
    const servicesList: ServiceItem[] = [
        "Drain & Sewer Cleaning",
        "Filter System Under Sink Installation",
        "Gas Line",
        "HVAC Services",
        "Insurance Pipe Burst Repair",
        "Pipe Replacement",
        "Plumbing Installation",
        "Plumbing Repair",
        "Sewer inspection SeeSnake Camera",
        "Sump Pumps",
        "Tankless Water Heater Installation",
        "Toilet Clog Removal",
        "Water Heater Replacement"
    ].map(service => ({
        name: service,
        path: `/${service.toLowerCase()
            .replace(/ & /g, '-')
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '')}-services/`
    }));

    const handleNavigation = () => {
        setIsMenuOpen(false);
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

    return (
        <header className={`${styles.header} ${headerClass}`}>
            <div className={styles.container}>
                {/* LOGO */}
                <Link href="/" className={styles.logoWrapper}>
                    <Image
                        src="/logos/logo.png"
                        alt="Advanced Plumbing"
                        fill
                        priority
                        className="object-contain object-left"
                    />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className={styles.navigationWrapper}>
                    <nav className={styles.nav}>
                        <Link href="/" className={`${styles.navLink} ${linkClass} ${pathname === "/" ? styles.navLinkActive : ""}`}>
                            Home
                        </Link>
                        <Link href="/about-us" className={`${styles.navLink} ${linkClass} ${pathname === "/about-us" ? styles.navLinkActive : ""}`}>
                            About
                        </Link>

                        {/* DESKTOP DROPDOWN */}
                        <div className={styles.dropdownContainer}>
                            <span className={`${styles.navLink} ${linkClass}`}>Services ▾</span>
                            <div className={styles.dropdownMenu}>
                                {servicesList.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.path}
                                        className={styles.dropdownItem}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/#method" className={`${styles.navLink} ${linkClass}`}>Method</Link>
                        <Link href="/#process" className={`${styles.navLink} ${linkClass}`}>Process</Link>
                    </nav>

                    <div className={styles.getInTouch} onClick={handleNavigation} role="button" tabIndex={0}>
                        <div className={styles.arrowCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <span className={styles.touchText}>Get in touch</span>
                    </div>
                </div>

                {/* MOBILE BUTTON */}
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
                        <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about-us" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>About</Link>

                        {/* MOBILE ACCORDION */}
                        <div className={styles.mobileAccordion}>
                            <button
                                className={styles.mobileNavLink}
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                type="button"
                            >
                                Services {isServicesOpen ? "▴" : "▾"}
                            </button>
                            <div className={`${styles.mobileSubMenu} ${isServicesOpen ? styles.mobileSubMenuOpen : ""}`}>
                                {servicesList.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.path}
                                        className={styles.mobileSubNavLink}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/#method" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Method</Link>
                        <button className={styles.mobileCTA} onClick={handleNavigation}>Get in touch</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};