"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const WaterHeaterReplacementContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de calentadores de agua convencionales o eléctricos */}
            <ContactUsToday
                backgroundImage="/images/services/water-heater-replacement-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    WATER HEATER REPLACEMENT
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Efficient replacement for old or failing water heaters. We install reliable
                    units that provide consistent hot water while optimizing energy consumption.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};