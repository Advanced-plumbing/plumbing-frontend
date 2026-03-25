"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";
import {ServicesHero} from "@/shared/components/ServicesHero/ServicesHero";

export const PlumbingRepairContainer = () => {
    const REPAIR_DETAIL_CONTENT = {
        title: "EXPERT PLUMBING REPAIR",
        imgSrc: "/images/sections/plumbing-repair-detail.jpeg",
        subtitle: "EXPERT PLUMBING REPAIR SERVICES YOU CAN TRUST",
        content: "When plumbing issues occur, Advanced Plumbing & HVAC is prepared to offer immediate and effective solutions tailored to your needs. Our technicians possess decades of combined experience and are trained to manage a broad array of plumbing repair tasks, ranging from common problems such as leaky faucets and clogged drains to more intricate pipe repairs and water line replacements. We strive to provide exceptional service, clear pricing, and enduring results."
    };

    const COMPREHENSIVE_REPAIR_ITEMS = [
        {
            subtitle: "LEAK DETECTION & REPAIR",
            content: "Even minor leaks can escalate into significant problems. Our technicians utilize modern tools to accurately identify and fix leaks, preventing water damage and expensive future repairs."
        },
        {
            subtitle: "DRAIN CLEANING & UNCLOGGING",
            content: "Blocked drains can create considerable inconveniences. Our team is equipped to quickly detect and eliminate blockages, ensuring the smooth flow of water within your system."
        },
        {
            subtitle: "PIPE REPAIR & REPLACEMENT",
            content: "Compromised or corroded pipes can cause serious water damage. We provide professional repair and replacement services, employing high-quality materials for guaranteed durability."
        },
        {
            subtitle: "WATER HEATER REPAIR",
            content: "Challenges with hot water supply can disrupt your daily life. Our skilled technicians are adept at repairing various types of water heaters, including tankless models."
        },
        {
            subtitle: "FIXTURE REPAIR & INSTALLATION",
            content: "Faucets, toilets, showers, and sinks are essential to your infrastructure. Our team offers meticulous repair services that restore functionality and enhance visual appeal."
        }
    ];

    return (
        <div>
            {/* Hero con imagen de acción/reparación */}
            <ServicesHero title={REPAIR_DETAIL_CONTENT.title} content={REPAIR_DETAIL_CONTENT.content}/>

            {/* Sección Azul: Catálogo de reparaciones comunes */}
            <ComprehensiveServicesSection
                title="OUR COMPREHENSIVE PLUMBING REPAIR SERVICES:"
                items={COMPREHENSIVE_REPAIR_ITEMS}
            />

            {/* Sección Estática de Beneficios Generales */}
            <WhyChooseUs />

            {/* Cierre con Formulario de contacto */}
            <ContactBlue />
        </div>
    );
};