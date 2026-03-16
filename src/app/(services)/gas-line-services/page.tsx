import React from 'react';
import { GasLineContainer } from "@/features/Services/GasLine/GasLineContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const GasLinePage = () => {
    return (
        <main>
            <Header />
            <GasLineContainer />
            <Footer />
        </main>
    );
};

export default GasLinePage;