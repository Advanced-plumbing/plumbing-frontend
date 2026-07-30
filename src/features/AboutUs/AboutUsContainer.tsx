"use client";
import React from 'react';
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {CompanyOverview} from "@/features/AboutUs/components/CompanyOverview/CompanyOverview";
import {CoreValues} from "@/features/AboutUs/components/CoreValues/CoreValues";
import {AboutUsMain} from "@/features/AboutUs/components/AboutUsMain/AboutUsMain";
import {AppleScroll} from "@/features/home/components/AppleScroll/AppleScroll";

const AboutUsContainer = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <AppleScroll/>
            <AboutUsMain/>
            <CoreValues/>
            <CompanyOverview/>
            <ContactBlue/>
        </div>
    );
};

export default AboutUsContainer;