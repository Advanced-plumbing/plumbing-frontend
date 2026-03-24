import {Accreditations} from "@/shared/components/Accreditations/Accreditations";
import {AboutUs} from "@/features/home/components/AboutUs/AboutUs";
import OurServices from "@/features/home/components/OurServices/OurServices";
import BlogSection from "@/features/home/components/BlogsSection/BlogSection";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {MainHero} from "@/features/home/components/MainHero/mainHero";

export const HomeContainer = () => {
    return (
        <main>
            <MainHero/>
            <Accreditations />
            <AboutUs/>
            <OurServices />
            <BlogSection/>
            <ContactBlue/>
        </main>
    );
};