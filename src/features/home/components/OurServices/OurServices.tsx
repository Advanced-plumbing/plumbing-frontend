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
        title: 'Pipe Replacement',
        description: 'Prevent water damage and expensive repairs with our professional pipe replacement services. We utilize high-quality materials.',
        icon: '🚿', // Sustituir por tus iconos SVG o imágenes
    },
    {
        title: 'Water Heater Replacement',
        description: 'If you’re tired of inconsistent hot water, we offer expert water heater replacements. We ensure you enjoy a reliable supply.',
        icon: '🔥',
    },
    {
        title: 'Sump Pump',
        description: 'Protect your property from flooding with our professional sump pump installation and maintenance services.',
        icon: '🌀',
    },
    {
        title: 'Plumbing Repairs',
        description: 'Eliminate leaks, clogs, and water-related problems with our quick and effective plumbing repair services.',
        icon: '🔧',
    },
    {
        title: 'Pipe Replacement',
        description: 'Prevent water damage and expensive repairs with our professional pipe replacement services. We utilize high-quality materials.',
        icon: '🚿', // Sustituir por tus iconos SVG o imágenes
    },
    {
        title: 'Water Heater Replacement',
        description: 'If you’re tired of inconsistent hot water, we offer expert water heater replacements. We ensure you enjoy a reliable supply.',
        icon: '🔥',
    },
    {
        title: 'Sump Pump',
        description: 'Protect your property from flooding with our professional sump pump installation and maintenance services.',
        icon: '🌀',
    },
    {
        title: 'Plumbing Repairs',
        description: 'Eliminate leaks, clogs, and water-related problems with our quick and effective plumbing repair services.',
        icon: '🔧',
    },
    // Añade aquí el resto de servicios
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
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
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