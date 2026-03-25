import React from "react";
import Image from "next/image";
import styles from "./ServiceDetailSection.module.css";

interface ServiceDetailSectionProps {
    title: string;
    imgSrc: string;
    subtitle: string;
    content: string;
}

export const ServiceDetailSection = ({
                                         title,
                                         imgSrc,
                                         subtitle,
                                         content,
                                     }: ServiceDetailSectionProps) => {
    return (
        <section className={styles.container} data-header-theme="dark">
            {/* Título Principal Superior */}
            <h2 className={styles.mainTitle}>{title}</h2>

            <div className={styles.contentGrid}>
                {/* Columna Imagen */}
                <div className={styles.imageWrapper}>
                    <Image
                        src={imgSrc}
                        alt={title}
                        width={600}
                        height={400}
                        className={styles.image}
                    />
                </div>

                {/* Columna Texto */}
                <div className={styles.textColumn}>
                    <h3 className={styles.subtitle}>{subtitle}</h3>
                    <p className={styles.description}>{content}</p>
                </div>
            </div>
        </section>
    );
};