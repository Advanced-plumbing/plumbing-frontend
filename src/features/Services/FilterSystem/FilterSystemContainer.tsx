"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const FilterSystemContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de sistema de filtrado */}
            <ContactUsToday
                backgroundImage="/images/services/filter-installation-hero.jpg"
            />
            {/* Formulario de contacto final */}
            <ContactBlue />
        </div>
    );
};