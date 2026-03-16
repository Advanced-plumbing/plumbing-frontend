"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const InsuranceRepairContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de reparación de tuberías o daños por agua */}
            <ContactUsToday
                backgroundImage="/images/services/insurance-repair-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    INSURANCE PIPE BURST REPAIR
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    Specialized repair services for burst pipes covered by insurance.
                    We help you navigate the process while restoring your plumbing system.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};