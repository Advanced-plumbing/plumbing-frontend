import React from 'react';
import { DrainSewerContainer } from "@/features/Services/DrainSewer/DrainSewerContainer";
import {Header} from "@/shared/components/Header/Header";
import {Footer} from "@/shared/components/Footer/Footer";

const DrainSewerPage = () => {
    return (
        <main>
            <Header/>
            <DrainSewerContainer />
            <Footer/>
        </main>
    );
};

export default DrainSewerPage;