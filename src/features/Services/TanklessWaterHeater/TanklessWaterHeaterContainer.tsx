"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const TanklessWaterHeaterContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de calentador de agua sin tanque de última generación */}
            <ContactUsToday
                backgroundImage="/images/services/tankless-water-heater-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    TANKLESS WATER HEATER INSTALLATION
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Upgrade to on-demand hot water with our professional tankless water heater
                    installations. Save space and energy while enjoying endless hot water.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};