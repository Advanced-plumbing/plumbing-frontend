"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import { Accreditations } from "@/shared/components/Accreditations/Accreditations";
import { ServiceDetailSection } from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import { ComprehensiveServicesSection } from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import { WhyChooseUs } from "@/shared/components/WhyChooseUs/WhyChooseUs";
import {ServicesHero} from "@/shared/components/ServicesHero/ServicesHero";

export const FilterSystemContainer = () => {
    const FILTER_SYSTEM_CONTENT = {
        title: "FILTER system under sink installation Services",
        imgSrc: "/images/about/sink-installation.jpeg",
        subtitle: "Enjoy Clean, Fresh Water Straight from the Tap",
        content: "Say goodbye to bottled water and hello to convenient, purified water in your home! Advanced Plumbing & HVAC specializes in under-sink water filter system installations that deliver crisp, clean water directly from your faucet. Whether you’re looking to improve the taste, remove harmful contaminants, or protect your family’s health, we’ve got you covered."
    };

    const WHY_UNDER_SINK_ITEMS = [
        {
            subtitle: "Cleaner, healthier water",
            content: "Removes chlorine, heavy metals, pesticides, bacteria, and other common contaminants."
        },
        {
            subtitle: "better taste & smell",
            content: "Eliminates unpleasant odors and tastes caused by chemicals and minerals."
        },
        {
            subtitle: "space saving",
            content: "Installs discreetly under your sink, freeing up counter space while keeping the filter out of sight."
        },
        {
            subtitle: "cost-effective",
            content: "Reduces the need to buy bottled water, saving you money over time."
        },
        {
            subtitle: "convenience",
            content: "Provides purified water directly from your kitchen faucet, so you always have access to fresh, clean water for drinking, cooking, and more."
        }
    ];

    return (
        <div>
            {/* Hero */}
            <ServicesHero title={FILTER_SYSTEM_CONTENT.title} content={FILTER_SYSTEM_CONTENT.content}/>

            {/* Sección de Beneficios (Comprehensive) */}
            <ComprehensiveServicesSection
                title="Why Choose an Under-Sink Water Filter System?"
                content="An under-sink water filter system is a great investment in your home’s water quality. Unlike pitchers or faucet-mounted filters, an under-sink system provides a higher level of filtration, removing harmful impurities directly at the source. Here’s why it’s a smart choice:"
                items={WHY_UNDER_SINK_ITEMS}
            />

            {/* Sección Estática */}
            <WhyChooseUs />

            {/* Cierre */}
            <ContactBlue />
        </div>
    );
};