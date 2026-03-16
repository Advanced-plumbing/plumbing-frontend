"use client";
import React from 'react';
import { ContactHero } from "./components/ContactHero/ContactHero";
import { GetInContact } from "./components/GetInContact/GetInContact";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {Accreditations} from "@/shared/components/Accreditations/Accreditations";

const ContactUsContainer = () => {
    return (
        <div>
            <ContactHero />
            <Accreditations/>
            <GetInContact />
            <ContactBlue />
        </div>
    );
};

export default ContactUsContainer;