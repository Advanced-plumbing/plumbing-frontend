"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const SewerInspectionContainer = () => {
    return (
        <div style={{ paddingTop: '75px' }}>
            {/* Hero con imagen de cámara de inspección o monitor SeeSnake */}
            <ContactUsToday
                backgroundImage="/images/services/sewer-inspection-camera-hero.jpg"
            />

            {/* Contenido base */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ color: '#004393', fontSize: '3.5rem', fontWeight: 900 }}>
                    SEWER INSPECTION SEESNAKE CAMERA
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#444' }}>
                    High-definition video pipe inspections to identify blockages, leaks, or damage.
                    Get a clear view of your sewer line condition with our advanced SeeSnake technology.
                </p>
            </section>

            <ContactBlue />
        </div>
    );
};