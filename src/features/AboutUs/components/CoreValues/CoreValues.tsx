"use client";
import React from 'react';
import Image from 'next/image';
import styles from './CoreValues.module.css';

export const CoreValues = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Columna de Texto */}
                    <div className={styles.textSide}>
                        <h2 className={styles.title}>
                            Our Core Values: <br />
                            <span>Excellence, Integrity, and Reliability</span>
                        </h2>
                        <div className={styles.divider}></div>
                        <div className={styles.content}>
                            <p>
                                At Advanced Plumbing & HVAC, we hold ourselves to the highest standards of
                                integrity and excellence. Every member of our team shares a dedication to honesty,
                                reliability, and quality workmanship, ensuring that our clients receive the best
                                service possible.
                            </p>
                            <p>
                                We approach each job with respect for our clients' time, property, and peace of mind.
                                These values are the foundation of our success and the reason we've become a
                                trusted name in plumbing services.
                            </p>
                        </div>
                    </div>

                    {/* Columna de Imagen con Estilo Industrial */}
                    <div className={styles.imageSide}>
                        <div className={styles.mainImageWrapper}>
                            <Image
                                src="/images/about/technician-work.jpg"
                                alt="Our technician working with excellence"
                                fill
                                className={styles.image}
                            />
                            <div className={styles.experienceBadge}>
                                <span className={styles.years}>25+</span>
                                <span className={styles.yearsText}>Years of <br/> Experience</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};