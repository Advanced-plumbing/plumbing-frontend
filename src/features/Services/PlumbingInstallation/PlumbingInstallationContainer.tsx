"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const PlumbingInstallationContainer = () => {
    const INSTALLATION_DETAIL_CONTENT = {
        title: "Professional Plumbing Installation Services",
        imgSrc: "/images/sections/plumbing-installation-detail.jpg",
        subtitle: "Expert Plumbing Installation Services for Dependable Performance",
        content: "At Advanced Plumbing & HVAC, we are committed to delivering exceptional plumbing installation services customized to fit the specific requirements of your residence or commercial property. Whether you are constructing a new space, renovating, or enhancing your existing plumbing system, our experienced technicians guarantee precise and careful installation. From water heaters to complete repiping, we ensure that your plumbing system operates efficiently and reliably for years to come."
    };

    const COMPREHENSIVE_INSTALLATION_ITEMS = [
        {
            subtitle: "Water Heater Installation",
            content: "Count on us for professional water heater installation, whether you prefer a conventional tank model or an energy-efficient tankless system. We suggest the most suitable option for your home's comfort."
        },
        {
            subtitle: "Toilet & Fixture Installation",
            content: "We install everything from new toilets to stylish faucets with an eye for detail. Explore modern, eco-friendly fixtures that enhance both aesthetics and functionality."
        },
        {
            subtitle: "Whole-House Repiping",
            content: "Upgrading old or corroded pipes can significantly enhance water quality and pressure. Our specialists manage comprehensive repiping projects utilizing premium materials."
        },
        {
            subtitle: "Garbage Disposal Installation",
            content: "Streamline your kitchen cleanup with a dependable garbage disposal. We install high-quality disposals with expertise, ensuring an effective solution for waste management."
        },
        {
            subtitle: "Sump Pump Installation",
            content: "Shield your home from water damage with our expertly installed sump pumps, specifically designed to keep your basement or crawl space dry during heavy rainfall."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero Principal */}
            <ContactUsToday
                backgroundImage="/images/services/plumbing-installation-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle: Texto e Imagen de alta calidad */}
            <ServiceDetailSection
                title={INSTALLATION_DETAIL_CONTENT.title}
                imgSrc={INSTALLATION_DETAIL_CONTENT.imgSrc}
                subtitle={INSTALLATION_DETAIL_CONTENT.subtitle}
                content={INSTALLATION_DETAIL_CONTENT.content}
            />

            {/* Sección Azul: Lista de instalaciones específicas */}
            <ComprehensiveServicesSection
                title="Our Comprehensive Plumbing Installation Services"
                items={COMPREHENSIVE_INSTALLATION_ITEMS}
            />

            {/* Valores de la empresa (Estático) */}
            <WhyChooseUs />

            {/* Cierre y Formulario */}
            <ContactBlue />
        </div>
    );
};