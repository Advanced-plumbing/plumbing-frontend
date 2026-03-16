import { Hero } from "./components/Hero/Hero";
import { ContactUsToday } from "./components/ContactUsToday/ContactUsToday";
import {Accreditations} from "@/features/home/components/Accreditations/Accreditations";
import {AboutUs} from "@/features/home/components/AboutUs/AboutUs";

export const HomeContainer = () => {
    return (
        <main>
            <Hero />
            <ContactUsToday />
            <Accreditations />
            <AboutUs/>
        </main>
    );
};