"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";

export const TanklessWaterHeaterContainer = () => {
    const TANKLESS_DETAIL_CONTENT = {
        title: "Tankless Water Heater Installation Services",
        imgSrc: "/images/sections/tankless-water-heater-detail.jpg",
        subtitle: "Upgrade to Endless Hot Water with Tankless Water Heater Installation",
        content: "Experience the ultimate in home comfort and efficiency with an on-demand water heating system. Advanced Plumbing & HVAC specializes in the professional installation of tankless water heaters, providing your household with a continuous supply of hot water while significantly reducing energy costs. Our expert technicians will help you transition from traditional bulky tanks to a modern, high-performance solution tailored to your hot water needs."
    };

    const TANKLESS_SERVICES_ITEMS = [
        {
            subtitle: "uNLIMITED hOT WATER",
            content: "With a tankless water heater, you’ll never have to worry about running out of hot water again. Enjoy a consistent supply for showers, laundry, and more—no matter the demand."
        },
        {
            subtitle: "energy efficiency",
            content: "Tankless systems heat water on demand instead of keeping a tank hot all day, lowering energy consumption and saving you money on utility bills."
        },
        {
            subtitle: "space-saving design",
            content: "Tankless water heaters are compact and wall-mounted, freeing up valuable space in your home. They’re an ideal choice for smaller spaces or homeowners looking to declutter."
        },
        {
            subtitle: "long-lasting & durable",
            content: "With proper maintenance, tankless water heaters can last up to 20 years or more, making them a significantly smarter long-term investment for your home."
        }
    ];

    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero enfocado en modernidad y eficiencia */}
            <ContactUsToday
                backgroundImage="/images/services/tankless-water-heater-hero.jpg"
            />

            <Accreditations />

            {/* Sección de Detalle: El cambio a tecnología On-Demand */}
            <ServiceDetailSection
                title={TANKLESS_DETAIL_CONTENT.title}
                imgSrc={TANKLESS_DETAIL_CONTENT.imgSrc}
                subtitle={TANKLESS_DETAIL_CONTENT.subtitle}
                content={TANKLESS_DETAIL_CONTENT.content}
            />

            {/* Sección Azul: Beneficios clave de la instalación sin tanque */}
            <ComprehensiveServicesSection
                title="OUR TANKLESS WATER HEATER INSTALLATION SERVICES:"
                items={TANKLESS_SERVICES_ITEMS}
            />

            {/* Sección Estática de Beneficios Generales */}
            <WhyChooseUs />

            {/* Cierre y Formulario */}
            <ContactBlue />
        </div>
    );
};