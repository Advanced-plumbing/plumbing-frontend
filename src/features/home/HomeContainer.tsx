import { Hero } from "./components/Hero/Hero";
import { ContactUsToday } from "./components/ContactUsToday/ContactUsToday";
import {Accreditations} from "@/features/home/components/Accreditations/Accreditations";
import {AboutUs} from "@/features/home/components/AboutUs/AboutUs";
import OurServices from "@/features/home/components/OurServices/OurServices";
import BlogSection from "@/features/home/components/Blogs/BlogSection";
import ContactBlue from "@/features/home/components/ContactBlue/ContactBlue";

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