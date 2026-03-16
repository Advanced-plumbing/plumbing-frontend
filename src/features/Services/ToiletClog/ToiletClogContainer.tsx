"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const ToiletClogContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de reparación de baños o servicios de limpieza de drenajes */}
            <ContactUsToday
                backgroundImage="/images/services/toilet-clog-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    TOILET CLOG REMOVAL
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Fast and effective solutions for stubborn toilet clogs. Our professional plumbers
                    restore proper function to your bathroom fixtures with minimal disruption.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};