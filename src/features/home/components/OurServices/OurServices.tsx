"use client"; // <--- Esta es la clave para solucionar el error
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './OurServices.module.css';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
    {
        title: 'Insurance Pipe Burst',
        description: 'If you experience a pipe burst, our team will collaborate with you and your insurance company to promptly repair the damage and minimize further issues, handling every detail with ease.',
        icon: '💧',
    },
    {
        title: 'Pipe Replacement',
        description: 'Prevent water damage and expensive repairs with our professional pipe replacement services. We utilize high-quality materials to deliver reliable, long-lasting results.',
        icon: '🔩',
    },
    {
        title: 'Water Heater Replacement',
        description: "If you're tired of inconsistent hot water, we offer expert water heater replacements. We ensure you enjoy a reliable supply of hot water throughout the year.",
        icon: '🔥',
    },
    {
        title: 'Sump Pump',
        description: 'Protect your property from flooding with our professional sump pump installation and maintenance services. We are dedicated to keeping your basement dry and secure.',
        icon: '🌀',
    },
    {
        title: 'Plumbing Repairs',
        description: 'Eliminate leaks, clogs, and water-related problems with our quick and effective plumbing repair services. Our experts will ensure your system remains in optimal condition.',
        icon: '🔧',
    },
    {
        title: 'Sewer Inspection w/ SeeSnake Camera',
        description: 'Our advanced SeeSnake camera inspections can detect hidden issues within your sewer system. This detailed examination helps prevent costly repairs in the future.',
        icon: '📷',
    },
    {
        title: 'Drain & Sewer Cleaning',
        description: 'Keep your plumbing system flowing smoothly with our thorough drain and sewer cleaning services. We remove debris, grease, and blockages that could disrupt your plumbing.',
        icon: '🚛',
    },
    {
        title: 'Gas Line',
        description: 'Safety is our top priority when it comes to gas lines. We offer safe and dependable gas line installation, repair, and inspection services you can trust.',
        icon: '⛽',
    },
    {
        title: 'Plumbing Installations',
        description: 'From new constructions to remodels, we provide quality plumbing installations for sinks, showers, pipes, and fixtures, ensuring optimal performance and efficiency.',
        icon: '🛁',
    },
    // Los 4 restantes — ajusta títulos/descripciones según tu contenido real
    {
        title: 'Leak Detection',
        description: 'Using advanced technology, our team accurately locates hidden leaks in your plumbing system to prevent water damage and reduce water waste effectively.',
        icon: '🔍',
    },
    {
        title: 'Water Filtration',
        description: 'Improve your home\'s water quality with our professional water filtration system installation and maintenance services for clean, safe drinking water.',
        icon: '💎',
    },
    {
        title: 'Bathroom Remodeling',
        description: 'Transform your bathroom with our expert plumbing remodeling services. We handle everything from fixture upgrades to complete bathroom plumbing overhauls.',
        icon: '🏠',
    },
    {
        title: 'Emergency Plumbing',
        description: 'Plumbing emergencies don\'t wait for business hours. Our team is available 24/7 to respond quickly and resolve any urgent plumbing issues in your home.',
        icon: '🚨',
    },
];

const OurServices = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Services</h2>
                <p className={styles.subtitle}>
                    Whether you’re dealing with a minor issue or a plumbing emergency.
                    Our team is equipped to handle all your plumbing needs.
                </p>

                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    slidesPerGroup={4}
                    breakpoints={{
                        640: { slidesPerView: 1, slidesPerGroup: 1 },
                        768: { slidesPerView: 2, slidesPerGroup: 2 },
                        1024: { slidesPerView: 4, slidesPerGroup: 4 },
                    }}
                    className={styles.mySwiper}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>
                                    {/* Aquí puedes colocar los SVG de tus imágenes */}
                                    <span className={styles.iconPlaceholder}>{service.icon}</span>
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurServices;