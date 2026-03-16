import React from 'react';
import { PlumbingRepairContainer } from "@/features/Services/PlumbingRepair/PlumbingRepairContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const PlumbingRepairPage = () => {
    return (
        <main>
            <Header />
            <PlumbingRepairContainer />
            <Footer />
        </main>
    );
};

export default PlumbingRepairPage;