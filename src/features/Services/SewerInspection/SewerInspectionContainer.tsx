"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const SewerInspectionContainer = () => {
    const SEWER_DETAIL_CONTENT = {
        title: "sewer inspection w/ SeeSnake camera technology",
        imgSrc: "/images/sections/sewer-inspection-detail.jpg",
        subtitle: "Advanced Sewer Inspection with SeeSnake Camera Technology",
        content: "Discover hidden problems in your plumbing system with precision and clarity. Advanced Plumbing & HVAC offers professional sewer inspection services utilizing state-of-the-art SeeSnake camera technology. Our camera inspections enable us to diagnose and assess sewer and drain issues with exceptional accuracy, providing you with a clear understanding of your system’s condition and ensuring the appropriate solution for every problem."
    };

    const SEESNAKE_BENEFITS_ITEMS = [
        {
            subtitle: "Accurate Diagnosis",
            content: "Our SeeSnake camera inspections offer a detailed, real-time view of your sewer lines. This allows us to accurately pinpoint and diagnose issues such as tree root invasions, clogs, and pipe collapses—eliminating guesswork."
        },
        {
            subtitle: "Non-Invasive and Cost-Effective",
            content: "Unlike traditional inspection methods, SeeSnake inspections are minimally invasive and require no excavation. This approach reduces labor costs and minimizes disruption to your property, saving you both time and money."
        },
        {
            subtitle: "Prevention of Future Issues",
            content: "Regular sewer inspections can uncover potential problems early, enabling you to address them before they develop into major and costly repairs. Our inspections are designed to help you maintain the health of your sewer lines."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con tecnología visual */}
            <ContactUsToday
                backgroundImage="/images/services/sewer-inspection-camera-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle: Tecnología y precisión */}
            <ServiceDetailSection
                title={SEWER_DETAIL_CONTENT.title}
                imgSrc={SEWER_DETAIL_CONTENT.imgSrc}
                subtitle={SEWER_DETAIL_CONTENT.subtitle}
                content={SEWER_DETAIL_CONTENT.content}
            />

            {/* Sección Azul: Beneficios técnicos de la cámara */}
            <ComprehensiveServicesSection
                title="Benefits of Our SeeSnake Sewer Inspection Services"
                items={SEESNAKE_BENEFITS_ITEMS}
            />

            {/* Sección Estática de Confianza */}
            <WhyChooseUs />

            {/* Cierre con Formulario */}
            <ContactBlue />
        </div>
    );
};