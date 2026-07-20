import {Accreditations} from "@/shared/components/Accreditations/Accreditations";
import {AboutUs} from "@/features/home/components/AboutUs/AboutUs";
import OurServices from "@/features/home/components/OurServices/OurServices";
import BlogSection from "@/features/home/components/BlogsSection/BlogSection";
import ContactBlue from "@/shared/components/ContactBlue/ContactBlue";
import {AppleScroll} from "@/features/home/components/AppleScroll/AppleScroll";
import {HeroVideo} from "@/features/home/components/Hero/HeroVideo";

export const HomeContainer = () => {
    return (
        <main style={{ margin: 0, padding: 0 }}>
            <HeroVideo/>
            <Accreditations/>
            <AboutUs/>
            <OurServices/>
            <BlogSection />
            <ContactBlue />
        </main>
    );
};