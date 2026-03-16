"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const HVACContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de aire acondicionado o calefacción */}
            <ContactUsToday
                backgroundImage="/images/services/hvac-services-hero.jpg"
            />

            {/* Placeholder para contenido detallado */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    HVAC SERVICES
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Heating, ventilation, and air conditioning solutions designed for
                    maximum comfort and energy efficiency.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};