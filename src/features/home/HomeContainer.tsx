import { Hero } from "./components/Hero/Hero";
import { ContactUsToday } from "@/shared/components/ContactUsToday/ContactUsToday";
import {Accreditations} from "@/shared/components/Accreditations/Accreditations";
import {AboutUs} from "@/features/home/components/AboutUs/AboutUs";
import OurServices from "@/features/home/components/OurServices/OurServices";
import BlogSection from "@/features/home/components/BlogsSection/BlogSection";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";

export const HomeContainer = () => {
    return (
        <main>
            <Hero />
            <ContactUsToday />
            <Accreditations />
            <AboutUs/>
            <OurServices />
            <BlogSection/>
            <ContactBlue/>
        </main>
    );
};