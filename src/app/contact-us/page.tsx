import React from 'react';
import ContactUsContainer from "@/features/ContactUs/ContactUsContainer";
import {Header} from "@/shared/components/Header/Header";
import {Footer} from "@/shared/components/Footer/Footer";

const ContactUsPage = () => {
    return (
        <main>
            <Header/>
            <ContactUsContainer/>
            <Footer/>
        </main>
    );
};

export default ContactUsPage;