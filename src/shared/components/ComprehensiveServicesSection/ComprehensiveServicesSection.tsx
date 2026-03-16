import React from "react";
import styles from "./ComprehensiveServicesSection.module.css";

interface ServiceItem {
    subtitle: string;
    content: string;
}

interface ComprehensiveServicesSectionProps {
    title: string;
    items: ServiceItem[];
}

export const ComprehensiveServicesSection = ({
                                                 title,
                                                 items,
                                             }: ComprehensiveServicesSectionProps) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>{title}</h2>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.headerRow}>
                                <span className={styles.circle}>○</span>
                                <h3 className={styles.itemSubtitle}>{item.subtitle}</h3>
                            </div>
                            <p className={styles.itemContent}>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};