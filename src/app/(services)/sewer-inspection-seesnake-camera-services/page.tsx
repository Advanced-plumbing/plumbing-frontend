import React from 'react';
import { SewerInspectionContainer } from "@/features/Services/SewerInspection/SewerInspectionContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const SewerInspectionPage = () => {
    return (
        <main>
            <Header />
            <SewerInspectionContainer />
            <Footer />
        </main>
    );
};

export default SewerInspectionPage;