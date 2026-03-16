import React from 'react';
import { SumpPumpsContainer } from "@/features/Services/SumpPumps/SumpPumpsContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const SumpPumpsPage = () => {
    return (
        <main>
            <Header />
            <SumpPumpsContainer />
            <Footer />
        </main>
    );
};

export default SumpPumpsPage;