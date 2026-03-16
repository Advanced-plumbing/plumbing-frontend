"use client";
import React from 'react';
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {Accreditations} from "@/shared/components/Accreditations/Accreditations";
import {ServiceDetailSection} from "@/shared/components/ServiceDetailSection/ServiceDetailSection";
import {
    ComprehensiveServicesSection
} from "@/shared/components/ComprehensiveServicesSection/ComprehensiveServicesSection";
import {WhyChooseUs} from "@/shared/components/WhyChooseUs/WhyChooseUs";



export const DrainSewerContainer = () => {
    const COMPREHENSIVE_ITEMS = [
        {
            subtitle: "Thorough Drain Cleaning",
            content: "Whether you’re facing a blockage in your kitchen sink, shower drain, or basement drain, our skilled team is prepared to tackle any clog."
        },
        {
            subtitle: "Sewer Line Clearing",
            content: "Clogs in sewer lines can lead to unpleasant smells, backups, and potential health risks. Our technicians have the expertise to effectively clear sewer lines."
        },
        {
            subtitle: "Hydro Jetting Services",
            content: "When dealing with stubborn clogs, grease accumulation, or tree root intrusions, hydro jetting is an excellent solution."
        },
        {
            subtitle: "Video Inspection Services",
            content: "For effective repairs, accurate diagnosis is key. Our video camera inspections help us identify the precise location and cause of blockages."
        },
        {
            subtitle: "Customized Preventative Maintenance Plans",
            content: "Scheduling regular maintenance and cleaning can help you avoid future clogs and prolong the lifespan of your plumbing."
        }
    ];

    const DRAIN_SEWER_CONTENT = {
        title: "Professional Drain & Sewer Services",
        imgSrc: "/images/sections/drain-sewer-cleaning-services.jpg",
        subtitle: "Expert Drain and Sewer Cleaning for a Healthier Plumbing System",
        content: "Clogged drains and sewer lines can cause serious issues, ranging from slow drainage to significant backups. At Advanced Plumbing & HVAC, we specialize in providing professional drain and sewer cleaning services to maintain the efficiency of your plumbing system and to prevent disruptive clogs in your home or business. Equipped with advanced tools and extensive experience, our technicians are capable of addressing everything from minor blockages to comprehensive sewer line cleanings, ensuring reliable drainage."
    };

    return (
        <div style={{ paddingTop: '75px' }}>
            <ContactUsToday
                backgroundImage="/images/background-images/advance-plumbing-draining-services-scaled.jpeg"
            />
            <Accreditations/>
            <ServiceDetailSection
                title={DRAIN_SEWER_CONTENT.title}
                imgSrc={DRAIN_SEWER_CONTENT.imgSrc}
                subtitle={DRAIN_SEWER_CONTENT.subtitle}
                content={DRAIN_SEWER_CONTENT.content}
            />
            <ComprehensiveServicesSection
                title="OUR COMPREHENSIVE DRAIN & SEWER CLEANING SERVICES"
                items={COMPREHENSIVE_ITEMS}
            />
            <WhyChooseUs />
            <ContactBlue />
        </div>
    );
};