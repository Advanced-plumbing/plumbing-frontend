"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ServiceItem { name: string; path: string; }

export const Header = ({ isHome = false }: { isHome?: boolean }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const servicesList: ServiceItem[] = [
        "Drain & Sewer Cleaning", "Filter System Under Sink Installation",
        "Gas Line", "HVAC Services", "Insurance Pipe Burst Repair",
        "Pipe Replacement", "Plumbing Installation", "Plumbing Repair",
        "Sewer inspection SeeSnake Camera", "Sump Pumps",
        "Tankless Water Heater Installation", "Toilet Clog Removal",
        "Water Heater Replacement"
    ].map(service => ({
        name: service,
        path: `/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-').replace(/[()]/g, '')}-services/`.replace("-services-services", "-services")
    }));

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = (isDialogOpen || isMobileMenuOpen) ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isDialogOpen, isMobileMenuOpen]);

    const handleMouseEnter = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => setIsHovered(false), 300);
    };

    const expanded = !isScrolled || isHovered;

    return (
        <>
            {/* ── DESKTOP HEADER ── */}
            <header className={styles.headerWrapper}>
                <div
                    className={styles.pill}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/" className={styles.logoLink}>
                        <div className={styles.logoWrap}>
                            <Image src="/logos/icon-logo.png" alt="Advanced Plumbing" fill priority className="object-contain" />
                        </div>
                    </Link>

                    <nav className={styles.pillNav}>
                        {/* Home — siempre visible */}
                        <Link
                            href="/"
                            className={`${styles.pillLink} ${pathname === "/" ? styles.pillLinkActive : ""}`}
                        >
                            Home
                        </Link>

                        {/* About — se oculta al hacer scroll */}
                        <div className={`${styles.aboutWrapper} ${!expanded ? styles.aboutHidden : ""}`}>
                            <Link
                                href="/about-us"
                                className={`${styles.pillLink} ${pathname === "/about-us" ? styles.pillLinkActive : ""}`}
                            >
                                About
                            </Link>
                        </div>
                    </nav>

                    <button
                        className={styles.burgerBtn}
                        onClick={() => setIsDialogOpen(true)}
                        aria-label="Open services menu"
                    >
                        <span className={styles.burgerLine} />
                        <span className={styles.burgerLine} />
                    </button>
                </div>

                {/* ── MOBILE PILL ── */}
                <div className={styles.mobilePill}>
                    <Link href="/" className={styles.logoLink}>
                        <div className={styles.logoWrap}>
                            <Image src="/logos/icon-logo.png" alt="Advanced Plumbing" fill priority className="object-contain" />
                        </div>
                    </Link>
                    <button
                        className={styles.burgerBtn}
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className={styles.burgerLine} />
                        <span className={styles.burgerLine} />
                    </button>
                </div>
            </header>

            {/* ── SERVICES FULLSCREEN DIALOG ── */}
            <div className={`${styles.dialog} ${isDialogOpen ? styles.dialogOpen : ""}`}>
                <div className={styles.dialogInner}>
                    <div className={styles.dialogBar}>
                        <div className={styles.dialogLogoWrap}>
                            <Image src="/logos/icon-logo.png" alt="Advanced Plumbing" fill className="object-contain object-left" />
                        </div>
                        <nav className={styles.dialogBarNav}>
                            <Link href="/" className={styles.dialogBarLink} onClick={() => setIsDialogOpen(false)}>Home</Link>
                            <Link href="/about-us" className={styles.dialogBarLink} onClick={() => setIsDialogOpen(false)}>About</Link>
                        </nav>
                        <button className={styles.closeBtn} onClick={() => setIsDialogOpen(false)} aria-label="Close">✕</button>
                    </div>

                    <ul className={styles.servicesList}>
                        {servicesList.map((s, i) => (
                            <li key={s.name} className={styles.serviceItem}>
                                <span className={styles.serviceNum}>{String(i + 1).padStart(2, "0")}</span>
                                <Link href={s.path} className={styles.serviceLink} onClick={() => setIsDialogOpen(false)}>
                                    {s.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── MOBILE FULLSCREEN MENU ── */}
            <div className={`${styles.mobileDialog} ${isMobileMenuOpen ? styles.mobileDialogOpen : ""}`}>
                <div className={styles.mobileDialogBar}>
                    <div className={styles.mobileLogoWrap}>
                        <Image src="/logos/icon-logo.png" alt="Advanced Plumbing" fill className="object-contain object-left" />
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>✕</button>
                </div>
                <nav className={styles.mobileDialogNav}>
                    <Link href="/" className={styles.mobileDialogLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about-us" className={styles.mobileDialogLink} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <div className={styles.mobileDivider} />
                    {servicesList.map((s, i) => (
                        <Link key={s.name} href={s.path} className={styles.mobileServiceLink} onClick={() => setIsMobileMenuOpen(false)}>
                            <span className={styles.mobileServiceNum}>{String(i + 1).padStart(2, "0")}</span>
                            {s.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};