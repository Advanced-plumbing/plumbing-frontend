import React from 'react';
import { WaterHeaterReplacementContainer } from "@/features/Services/WaterHeaterReplacement/WaterHeaterReplacementContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const WaterHeaterReplacementPage = () => {
    return (
        <main>
            <Header />
            <WaterHeaterReplacementContainer />
            <Footer />
        </main>
    );
};

export default WaterHeaterReplacementPage;