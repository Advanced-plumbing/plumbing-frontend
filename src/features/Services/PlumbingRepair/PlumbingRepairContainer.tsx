"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const PlumbingRepairContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de herramientas de plomería o reparación activa */}
            <ContactUsToday
                backgroundImage="/images/services/plumbing-repair-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    PLUMBING REPAIR
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Reliable repair services for leaks, drips, and all plumbing malfunctions.
                    We provide fast and effective solutions to keep your system running perfectly.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};