import React from 'react';
import Image from 'next/image';
import styles from './ContactHero.module.css';

export const ContactHero = () => {
    return (
        <section className={styles.heroSection} data-header-theme="dark">
            <Image
                src="/images/contactUs/plumbing-tools-hero.jpg" // Basado en imagen ad1992.jpg
                alt="Plumbing tools and equipment"
                fill
                priority
                className={styles.heroImage}
            />
        </section>
    );
};