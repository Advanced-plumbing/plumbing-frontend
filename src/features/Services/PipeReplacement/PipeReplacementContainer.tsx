"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";
import {ServicesHero} from "@/shared/components/ServicesHero/ServicesHero";

export const PipeReplacementContainer = () => {
    const PIPE_REPLACEMENT_CONTENT = {
        title: "Professional Pipe Replacement Services",
        imgSrc: "/images/sections/pipe-replacement-detail.jpeg",
        subtitle: "Expert Pipe Replacement Services for a Dependable Plumbing System",
        content: "Aging or damaged pipes can cause a range of issues, from reduced water pressure to leaks that can lead to costly water damage. At Advanced Plumbing & HVAC, we offer specialized and effective pipe replacement services designed to meet the specific needs of your home or business. Our skilled technicians use premium materials to ensure your plumbing system remains robust and efficient for years."
    };

    const COMPREHENSIVE_PIPE_ITEMS = [
        {
            subtitle: "Comprehensive Whole-House Pipe Replacement",
            content: "For residences with outdated plumbing, a complete pipe replacement can eliminate persistent problems and improve water quality. Our experts install high-quality, corrosion-resistant pipes."
        },
        {
            subtitle: "Targeted Pipe Replacement and Repair",
            content: "Sometimes, only certain sections of piping require replacement. We provide focused solutions by evaluating problematic areas and replacing only what is necessary, saving you time and money."
        },
        {
            subtitle: "Emergency Burst Pipe Replacement",
            content: "Burst pipes demand prompt intervention. Our emergency replacement services are available around the clock to minimize damage and restore your water supply as quickly as possible."
        },
        {
            subtitle: "Repiping for Renovations and Remodels",
            content: "Planning a renovation? We offer repiping services to ensure that your updated space has a dependable plumbing system that fits both your design and practical requirements."
        }
    ];

    return (
        <div>
            {/* Hero principal */}
            <ServicesHero title={PIPE_REPLACEMENT_CONTENT.title} content={PIPE_REPLACEMENT_CONTENT.content}/>

            {/* Sección Azul: Catálogo de servicios de reemplazo */}
            <ComprehensiveServicesSection
                title="OUR COMPREHENSIVE PIPE REPLACEMENT SERVICES:"
                items={COMPREHENSIVE_PIPE_ITEMS}
            />

            {/* Sección Estática de Confianza */}
            <WhyChooseUs />

            {/* Cierre con Formulario */}
            <ContactBlue />
        </div>
    );
};