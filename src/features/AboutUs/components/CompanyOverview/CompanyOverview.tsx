"use client";
import React from 'react';
import Image from 'next/image';
import styles from './CompanyOverview.module.css';
import Link from "next/link";

export const CompanyOverview = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentGrid}>

                    {/* Lado del Texto */}
                    <div className={styles.textColumn}>
                        <h4 className={styles.brandTitle}>Advanced Plumbing & HVAC</h4>
                        <h2 className={styles.mainHeading}>
                            Your Trusted Partner in <br />
                            <span>Reliable Plumbing Solutions</span>
                        </h2>
                        <p className={styles.description}>
                            At Advanced Plumbing & HVAC, we're more than just a plumbing company –
                            we're a dedicated partner in keeping your home or business safe, efficient,
                            and comfortable. With years of experience and a passion for service,
                            we've built our reputation as a reliable and professional plumbing team
                            that customers trust across the region.
                        </p>
                        <p className={styles.description}>
                            From emergency plumbing repairs to preventive maintenance and new installations,
                            we offer a comprehensive suite of plumbing services tailored to meet your needs.
                        </p>
                        <Link href="/contact-us" className={styles.contactBtn}>CONTACT US</Link>
                    </div>

                    {/* Lado de las Imágenes (Grid dinámico) */}
                    <div className={styles.imageColumn}>
                        <div className={styles.mainImageWrapper}>
                            {/* Imagen principal: el fregadero con grifo negro */}
                            <Image
                                src="/images/about/sink-installation.jpeg"
                                alt="Professional plumbing installation"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.bottomImages}>
                            <div className={styles.subImage}>
                                <Image
                                    src="/images/about/sink-detail.jpeg"
                                    alt="Sink detail"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.subImage}>
                                <Image
                                    src="/images/about/piping-detail.jpeg"
                                    alt="Piping work"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};