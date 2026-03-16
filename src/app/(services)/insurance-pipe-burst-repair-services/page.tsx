import React from 'react';
import { InsuranceRepairContainer } from "@/features/Services/InsuranceRepair/InsuranceRepairContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const InsuranceRepairPage = () => {
    return (
        <main>
            <Header />
            <InsuranceRepairContainer />
            <Footer />
        </main>
    );
};

export default InsuranceRepairPage;