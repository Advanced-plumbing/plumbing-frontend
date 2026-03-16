"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const DrainSewerContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con la imagen específica del servicio */}
            <ContactUsToday
                backgroundImage="/images/services/drain-cleaning-hero.jpg"
            />


            {/* Sección de cierre con formulario azul */}
            <ContactBlue />
        </div>
    );
};