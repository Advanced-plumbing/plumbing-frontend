import React from 'react';
import { PipeReplacementContainer } from "@/features/Services/PipeReplacement/PipeReplacementContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const PipeReplacementPage = () => {
    return (
        <main>
            <Header />
            <PipeReplacementContainer />
            <Footer />
        </main>
    );
};

export default PipeReplacementPage;