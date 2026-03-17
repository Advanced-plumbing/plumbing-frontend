"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const SumpPumpsContainer = () => {
    const SUMP_PUMP_DETAIL = {
        title: "EXPERT SUMP PUMP SERVICES",
        imgSrc: "/images/sections/sump-pumps-detail.jpeg",
        subtitle: "Reliable Sump Pump Services to Keep Your Property Dry and Safe",
        content: "Safeguard your home or business from water damage and flooding with the professional sump pump services from Advanced Plumbing & HVAC. Sump pumps play a vital role in managing water levels around your foundation, helping to avoid expensive repairs related to flooding. Our skilled technicians offer a full range of sump pump services, including installation, maintenance, and repairs, to ensure that your property stays dry and protected."
    };

    const SUMP_PUMP_SERVICES_ITEMS = [
        {
            subtitle: "EXPERT SUMP PUMP INSTALLATION",
            content: "Choosing the right system is essential. Our team evaluates your property’s specific requirements to recommend the ideal solution, followed by a professional installation that reliably defends against flooding."
        },
        {
            subtitle: "SUMP PUMP REPAIR SERVICES",
            content: "If your sump pump is malfunctioning, it is important to resolve the issue promptly. We provide quick and effective repair services, diagnosing the problem and restoring your system to full functionality."
        },
        {
            subtitle: "BACKUP BATTERY INSTALLATION",
            content: "Unexpected power outages can occur during severe weather. Our battery backup solutions ensure that your sump pump continues operating even during a power failure, providing peace of mind."
        },
        {
            subtitle: "ROUTINE SUMP PUMP MAINTENANCE",
            content: "Consistency is crucial. Our maintenance includes thorough cleaning, testing, and inspection of all components to guarantee optimal performance during heavy rainfall or snowmelt."
        },
        {
            subtitle: "24/7 EMERGENCY SUMP PUMP SERVICES",
            content: "When there’s a potential for water to enter your basement, immediate help is essential. Our emergency repair services are available around the clock to support you whenever you need it."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero enfocado en protección del hogar */}
            <ContactUsToday
                backgroundImage="/images/services/sump-pumps-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle: Prevención y Seguridad */}
            <ServiceDetailSection
                title={SUMP_PUMP_DETAIL.title}
                imgSrc={SUMP_PUMP_DETAIL.imgSrc}
                subtitle={SUMP_PUMP_DETAIL.subtitle}
                content={SUMP_PUMP_DETAIL.content}
            />

            {/* Sección Azul: Catálogo de servicios de bombeo y respaldo */}
            <ComprehensiveServicesSection
                title="OUR COMPREHENSIVE SUMP PUMP SERVICES"
                items={SUMP_PUMP_SERVICES_ITEMS}
            />

            {/* Sección Estática */}
            <WhyChooseUs />

            {/* Cierre y Formulario */}
            <ContactBlue />
        </div>
    );
};