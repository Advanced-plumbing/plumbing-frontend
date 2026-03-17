"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const ToiletClogContainer = () => {
    const TOILET_CLOG_DETAIL = {
        title: "PROFESSIONAL TOILET CLOG REMOVAL",
        imgSrc: "/images/sections/toilet-clog-detail.png",
        subtitle: "Fast and Reliable Toilet Clog Removal Services",
        content: "A clogged toilet can be a major disruption, but Advanced Plumbing & HVAC is here to restore your bathroom’s functionality quickly and effectively. Our experienced technicians handle all types of toilet clogs, from minor blockages to complex issues caused by buildup, foreign objects, or plumbing problems. With professional tools and a commitment to quality, we ensure long-lasting results that keep your plumbing running smoothly."
    };

    const TOILET_SERVICES_ITEMS = [
        {
            subtitle: "Thorough Clog Removal",
            content: "Our team is equipped to handle clogs caused by toilet paper, waste, or foreign objects, utilizing specialized tools and techniques. We ensure complete removal while protecting your plumbing fixtures."
        },
        {
            subtitle: "IDENTIFYING ROOT CAUSES",
            content: "We don't just clear the surface; we investigate why the clog happened. This proactive approach helps identify recurring issues in your drain system before they lead to more expensive repairs."
        },
        {
            subtitle: "Sewer Line Inspection and Cleaning",
            content: "Clogs in your toilet may indicate deeper issues within the sewer line. We use state-of-the-art technology to inspect and clear your sewer line, helping to prevent backups and serious complications."
        },
        {
            subtitle: "ECO-FRIENDLY SOLUTIONS",
            content: "We prioritize the environment by using sustainable methods for clearing blockages, avoiding harmful chemicals that can affect your plumbing or the ecosystem. Safe and effective results for your home."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero enfocado en servicio rápido */}
            <ContactUsToday
                backgroundImage="/images/services/toilet-clog-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle: Resolución de problemas inmediata */}
            <ServiceDetailSection
                title={TOILET_CLOG_DETAIL.title}
                imgSrc={TOILET_CLOG_DETAIL.imgSrc}
                subtitle={TOILET_CLOG_DETAIL.subtitle}
                content={TOILET_CLOG_DETAIL.content}
            />

            {/* Sección Azul: Detalle de servicios de limpieza y prevención */}
            <ComprehensiveServicesSection
                title="OUR COMPREHENSIVE TOILET CLOG REMOVAL SERVICES:"
                items={TOILET_SERVICES_ITEMS}
            />

            {/* Sección Estática de Beneficios Generales */}
            <WhyChooseUs />

            {/* Cierre y Formulario */}
            <ContactBlue />
        </div>
    );
};