"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const GasLineContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de tuberías de gas o instalación */}
            <ContactUsToday
                backgroundImage="/images/services/gas-line-hero.jpg"
            />

            {/* Aquí irán las secciones de descripción más adelante */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    GAS LINE SERVICES
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Professional gas line installation, repair, and maintenance.
                    Safety is our priority for your home or business.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};