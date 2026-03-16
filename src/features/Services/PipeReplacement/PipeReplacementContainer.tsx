"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const PipeReplacementContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de tuberías nuevas o proceso de repiping */}
            <ContactUsToday
                backgroundImage="/images/services/pipe-replacement-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    PIPE REPLACEMENT
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Complete repiping and targeted pipe replacement services.
                    Upgrade your plumbing infrastructure for better pressure and water quality.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};