import React from 'react';
import { HVACContainer } from "@/features/Services/HVAC/HVACContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const HVACPage = () => {
    return (
        <main>
            <Header />
            <HVACContainer />
            <Footer />
        </main>
    );
};

export default HVACPage;