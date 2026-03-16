"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const SumpPumpsContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de bomba de sumidero o sótano protegido */}
            <ContactUsToday
                backgroundImage="/images/services/sump-pumps-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    SUMP PUMPS
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Reliable sump pump installation, repair, and maintenance to keep your basement
                    dry and protected. Ensure your home is safe from flooding and water damage.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};