import React from 'react';
import { FilterSystemContainer } from "@/features/Services/FilterSystem/FilterSystemContainer";
import {Header} from "@/shared/components/Header/Header";
import {Footer} from "@/shared/components/Footer/Footer";

const FilterSystemPage = () => {
    return (
        <main>
            <Header/>
            <FilterSystemContainer />;
            <Footer/>
        </main>
    );
};

export default FilterSystemPage;