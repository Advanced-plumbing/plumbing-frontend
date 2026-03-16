import React from 'react';
import { TanklessWaterHeaterContainer } from "@/features/Services/TanklessWaterHeater/TanklessWaterHeaterContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const TanklessWaterHeaterPage = () => {
    return (
        <main>
            <Header />
            <TanklessWaterHeaterContainer />
            <Footer />
        </main>
    );
};

export default TanklessWaterHeaterPage;