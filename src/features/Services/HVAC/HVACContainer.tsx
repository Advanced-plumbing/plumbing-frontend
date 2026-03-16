"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const HVACContainer = () => {
    const HVAC_DETAIL_CONTENT = {
        title: "HVAC Services for complete home comfort",
        imgSrc: "/images/sections/hvac-detail.jpg",
        subtitle: "Expert HVAC Services to Keep Your Home Comfortable Year-Round",
        content: "At Advanced Plumbing & HVAC, we don’t just stop at plumbing – we’re also your trusted partner for reliable, energy-efficient HVAC services. Whether you need heating, ventilation, or air conditioning solutions, our experienced team is here to ensure your home or business stays comfortable no matter the season. From system installations to repairs and maintenance, we deliver quality service you can count on."
    };

    const HVAC_OFFERS_ITEMS = [
        {
            subtitle: "HVAC Installation",
            content: "Upgrade your home with a new, energy-efficient HVAC system. Our team will assess your property and recommend the ideal heating and cooling solution to meet your needs and budget."
        },
        {
            subtitle: "HVAC REPAIRS",
            content: "Experiencing uneven temperatures, strange noises, or poor air quality? Our skilled technicians diagnose and repair issues quickly, restoring your HVAC system to peak performance."
        },
        {
            subtitle: "routine maintenance",
            content: "Keep your HVAC system running efficiently with regular tune-ups and inspections. Prevent costly breakdowns and extend the lifespan of your system."
        },
        {
            subtitle: "Air Quality solutions",
            content: "Improve indoor air quality with advanced ventilation systems, air purifiers, and humidifiers. We’ll help you create a healthier environment for your family."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            <ContactUsToday
                backgroundImage="/images/services/hvac-services-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle */}
            <ServiceDetailSection
                title={HVAC_DETAIL_CONTENT.title}
                imgSrc={HVAC_DETAIL_CONTENT.imgSrc}
                subtitle={HVAC_DETAIL_CONTENT.subtitle}
                content={HVAC_DETAIL_CONTENT.content}
            />

            {/* Sección Azul: Comprehensive HVAC Services */}
            <ComprehensiveServicesSection
                title="Comprehensive HVAC Services We Offer"
                items={HVAC_OFFERS_ITEMS}
                // No enviamos 'content' para mantener el diseño de 4 bloques limpio
            />

            <WhyChooseUs />

            <ContactBlue />
        </div>
    );
};