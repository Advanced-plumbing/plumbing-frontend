"use client";
import React from 'react';
import {ContactUsToday} from "@/shared/components/ContactUsToday/ContactUsToday";
import {Accreditations} from "@/shared/components/Accreditations/Accreditations";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {CompanyOverview} from "@/features/AboutUs/components/CompanyOverview/CompanyOverview";
import {CoreValues} from "@/features/AboutUs/components/CoreValues/CoreValues";

const AboutUsContainer = () => {
    return (
        <div>
            <ContactUsToday/>
            <Accreditations/>
            <CompanyOverview/>
            <CoreValues/>
            <ContactBlue/>
        </div>
    );
};

export default AboutUsContainer;