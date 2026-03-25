import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

const WHY_DATA = [
    {
        title: "Rapid Emergency Services",
        image: "/images/services/emergency.png",
        description: "Plumbing problems don't wait, and neither do we. With our emergency repair services, you'll have a team you can count on."
    },
    {
        title: "Upfront, Transparent Pricing",
        image: "/images/services/pricing.png",
        description: "No surprises, just honest pricing. We offer clear, upfront quotes so you always know what to expect."
    },
    {
        title: "Quality Workmanship With Warranties",
        image: "/images/services/quality.png",
        description: "We stand by the quality of our work. All repairs come with a satisfaction guarantee and warranties for peace of mind."
    },
    {
        title: "Eco-Friendly Solutions",
        image: "/images/services/eco.png",
        description: "We are committed to providing green plumbing solutions whenever possible to reduce environmental impact."
    }
];

export const WhyChooseUs = () => {
    return (
        <section className={styles.wrapper} data-header-theme="dark">
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>WHY ADVANCED PLUMBING & HVAC?</h2>

                <div className={styles.grid}>
                    {WHY_DATA.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};