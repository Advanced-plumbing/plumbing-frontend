import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesHero.module.css';

interface ServicesHeroProps {
    title: string;
    content: string;
    boldContent?: string;
    extraContent?: string;
}

// Divide el título en dos partes: primera palabra(s) en blanco, última palabra en azul
const splitTitle = (title: string) => {
    const words = title.trim().split(' ');
    if (words.length === 1) return { white: '', blue: words[0] };
    const blue = words[words.length - 1];
    const white = words.slice(0, words.length - 1).join(' ');
    return { white, blue };
};

export const ServicesHero = ({ title, content, boldContent, extraContent }: ServicesHeroProps) => {
    const { white, blue } = splitTitle(title);

    return (
        <section className={styles.section} data-header-theme="light">

            {/* Background image */}
            <Image
                src="/images/ourServices/our_services_1.png"
                alt={title}
                fill
                priority
                className={styles.bgImage}
            />

            {/* Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        {white && <span className={styles.titleWhite}>{white} </span>}
                        <span className={styles.titleBlue}>{blue}</span>
                    </h1>

                    <p className={styles.body}>{content}</p>

                    {boldContent && (
                        <p className={styles.bodyBold}>
                            <strong>{boldContent}</strong>
                            {extraContent && <span className={styles.bodyExtra}> {extraContent}</span>}
                        </p>
                    )}

                    <Link href="/contact-us" className={styles.cta}>
                        Get in touch
                    </Link>
                </div>
            </div>

        </section>
    );
};