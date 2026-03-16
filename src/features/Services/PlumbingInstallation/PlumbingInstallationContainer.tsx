"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const PlumbingInstallationContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de instalación de grifos, inodoros o tuberías nuevas */}
            <ContactUsToday
                backgroundImage="/images/services/plumbing-installation-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    PLUMBING INSTALLATION
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Expert installation services for fixtures, appliances, and complete plumbing systems.
                    Quality craftsmanship for your home or commercial space.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};