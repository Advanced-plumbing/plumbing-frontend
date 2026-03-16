"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const InsuranceRepairContainer = () => {
    const INSURANCE_DETAIL_CONTENT = {
        title: "Expert Pipe burst repair Services",
        imgSrc: "/images/sections/insurance-repair-detail.jpg",
        subtitle: "Reliable Insurance Pipe Burst Repair Services for a Swift Recovery",
        content: "When pipes burst unexpectedly, the damage can be overwhelming. Advanced Plumbing & HVAC specializes in rapid, professional repairs and works directly with insurance providers to make the process as stress-free as possible. With extensive experience in handling pipe bursts, we’re here to restore your home or business to its original condition while ensuring your claim is processed smoothly."
    };

    const INSURANCE_SERVICES_ITEMS = [
        {
            subtitle: "Swift Action for Water Damage",
            content: "Our team is quick to respond to water damage emergencies, equipped with the right tools and skills to halt the flow of water and start repairs without delay."
        },
        {
            subtitle: "Comprehensive Damage Evaluation",
            content: "We carry out an in-depth assessment to document all damage, providing a detailed report for your insurance claim. This includes images, repair estimates, and cause analysis."
        },
        {
            subtitle: "Expert Pipe Repair and Replacement",
            content: "Whether the rupture resulted from freezing, corrosion, or pressure, we offer professional solutions using high-quality materials to ensure long-lasting results."
        },
        {
            subtitle: "Water Removal and Drying Services",
            content: "It’s essential to quickly eliminate water to avoid mold. Our state-of-the-art water extraction and drying equipment effectively dries out your space."
        },
        {
            subtitle: "Comprehensive Restoration Solutions",
            content: "From repairing damaged walls and floors to restoring fixtures, we offer full restoration services that bring your property back to its original condition."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero principal */}
            <ContactUsToday
                backgroundImage="/images/services/insurance-repair-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle: Imagen + Texto descriptivo */}
            <ServiceDetailSection
                title={INSURANCE_DETAIL_CONTENT.title}
                imgSrc={INSURANCE_DETAIL_CONTENT.imgSrc}
                subtitle={INSURANCE_DETAIL_CONTENT.subtitle}
                content={INSURANCE_DETAIL_CONTENT.content}
            />

            {/* Sección Azul: Detalle de servicios de seguros */}
            <ComprehensiveServicesSection
                title="Our Comprehensive Insurance Pipe Burst Repair Services:"
                items={INSURANCE_SERVICES_ITEMS}
                // content={""} // Opcional: podrías agregar una intro aquí si lo deseas
            />

            {/* Sección Estática de Confianza */}
            <WhyChooseUs />

            {/* Formulario de contacto */}
            <ContactBlue />
        </div>
    );
};