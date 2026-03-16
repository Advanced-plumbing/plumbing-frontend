import React from 'react';
import { ToiletClogContainer } from "@/features/Services/ToiletClog/ToiletClogContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const ToiletClogPage = () => {
    return (
        <main>
            <Header />
            <ToiletClogContainer />
            <Footer />
        </main>
    );
};

export default ToiletClogPage;