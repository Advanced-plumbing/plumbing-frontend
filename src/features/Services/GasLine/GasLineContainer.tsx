"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";
import {ServicesHero} from "@/shared/components/ServicesHero/ServicesHero";

export const GasLineContainer = () => {
    const GAS_LINE_CONTENT = {
        title: "Professional Gas LINE Services",
        imgSrc: "/images/sections/gas-line-detail.jpeg",
        subtitle: "Safe and Reliable Gas Line Services",
        content: "Ensuring the proper installation and repair of gas lines is vital for the safety and efficiency of your residential or commercial property. At Advanced Plumbing & HVAC, we specialize in comprehensive gas line services, including installation, repairs, inspections, and maintenance, to guarantee your gas system functions safely and effectively. Our team of licensed professionals is committed to upholding rigorous safety standards, utilizing advanced tools and techniques to deliver reliable results."
    };

    const COMPREHENSIVE_GAS_ITEMS = [
        {
            subtitle: "Gas Line Installation",
            content: "Whether you are installing a new appliance or setting up an entire gas system, our technicians provide accurate gas line installations that comply with local regulations and your specific requirements."
        },
        {
            subtitle: "Gas Line Repair",
            content: "Damaged gas lines or leaks can pose significant dangers. Our trained professionals are equipped to swiftly diagnose and repair gas line issues, ensuring the safety of your property and those within it."
        },
        {
            subtitle: "Emergency Gas Leak Detection Services",
            content: "Gas leaks necessitate urgent action. Advanced Plumbing Team offers emergency detection and repair services for gas leaks, ensuring the safety of your residential or commercial space."
        },
        {
            subtitle: "Gas Line Inspection and Maintenance",
            content: "Regular maintenance and inspections are essential to prevent unexpected and costly repairs while ensuring your safety. We offer comprehensive gas line inspections and maintenance services."
        }
    ];

    return (
        <div >
            {/* Hero principal */}
            <ServicesHero title={GAS_LINE_CONTENT.title} content={GAS_LINE_CONTENT.content}/>

            {/* Sección Azul (Lista de servicios específicos de Gas) */}
            <ComprehensiveServicesSection
                title="Our Comprehensive Gas Line Services"
                items={COMPREHENSIVE_GAS_ITEMS}
                // Aquí no pasamos 'content' porque el título ya es descriptivo
            />

            {/* Por qué elegir a la empresa (Estático) */}
            <WhyChooseUs />

            {/* Cierre con Formulario */}
            <ContactBlue />
        </div>
    );
};