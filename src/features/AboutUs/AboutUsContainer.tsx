"use client";
import React from 'react';
import {ContactUsToday} from "@/shared/components/ContactUsToday/ContactUsToday";
import {Accreditations} from "@/shared/components/Accreditations/Accreditations";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {CompanyOverview} from "@/features/AboutUs/components/CompanyOverview/CompanyOverview";
import {CoreValues} from "@/features/AboutUs/components/CoreValues/CoreValues";
import {AboutUsMain} from "@/features/AboutUs/components/AboutUsMain/AboutUsMain";

const AboutUsContainer = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <AboutUsMain/>
            <ContactUsToday backgroundImage={"/images/about/about-us-banner.jpeg"}/>
            <Accreditations/>
            <CompanyOverview/>
            <CoreValues/>
            <ContactBlue/>
        </div>
    );
};

export default AboutUsContainer;