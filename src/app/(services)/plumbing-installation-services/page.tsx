import React from 'react';
import { PlumbingInstallationContainer } from "@/features/Services/PlumbingInstallation/PlumbingInstallationContainer";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const PlumbingInstallationPage = () => {
    return (
        <main>
            <Header />
            <PlumbingInstallationContainer />
            <Footer />
        </main>
    );
};

export default PlumbingInstallationPage;