"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const WaterHeaterReplacementContainer = () => {
    const REPLACEMENT_DETAIL_CONTENT = {
        title: "EXPERT WATER HEATER REPLACEMENT SERVICES",
        imgSrc: "/images/sections/water-heater-replacement-detail.jpeg",
        subtitle: "Professional Water Heater Replacement Services for Reliable Hot Water",
        content: "When your water heater reaches the end of its lifespan, trust the experts at Advanced Plumbing & HVAC to provide a seamless replacement experience. We understand the importance of dependable hot water, and our experienced technicians are here to ensure you enjoy consistent, efficient heating for years to come. From selecting the right model to precise installation, we make the replacement process hassle-free."
    };

    const REPLACEMENT_SERVICES_ITEMS = [
        {
            subtitle: "Comprehensive Assessment and Recommendations",
            content: "Every household has unique needs. We begin with a thorough assessment of your usage and energy requirements, helping you choose the best option—whether it’s a traditional tank or a tankless unit."
        },
        {
            subtitle: "expert installation of All Models",
            content: "Our team is trained to install electric, gas, hybrid, and tankless models. We strictly adhere to manufacturer guidelines for each unit, ensuring safety, compliance, and long-term reliability."
        },
        {
            subtitle: "ENERGY-EFFICIENT OPTIONS",
            content: "If you want to save on utility bills and reduce your environmental impact, we offer a selection of high-efficiency water heaters that provide ample hot water while lowering energy consumption."
        },
        {
            subtitle: "OLD WATER HEATER DISPOSAL",
            content: "You don’t need to worry about the mess. We handle the entire process for you, removing and properly disposing of your old unit according to local regulations."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero enfocado en renovación de equipos */}
            <ContactUsToday
                backgroundImage="/images/services/water-heater-replacement-hero.jpeg"
            />

            <Accreditations />

            {/* Sección de Detalle: Reemplazo profesional y sin complicaciones */}
            <ServiceDetailSection
                title={REPLACEMENT_DETAIL_CONTENT.title}
                imgSrc={REPLACEMENT_DETAIL_CONTENT.imgSrc}
                subtitle={REPLACEMENT_DETAIL_CONTENT.subtitle}
                content={REPLACEMENT_DETAIL_CONTENT.content}
            />

            {/* Sección Azul: Los 4 pilares del servicio de reemplazo */}
            <ComprehensiveServicesSection
                title="OUR COMPREHENSIVE WATER HEATER REPLACEMENT SERVICES:"
                items={REPLACEMENT_SERVICES_ITEMS}
            />

            {/* Sección Estática de Beneficios Generales */}
            <WhyChooseUs />

            {/* Cierre y Formulario */}
            <ContactBlue />
        </div>
    );
};