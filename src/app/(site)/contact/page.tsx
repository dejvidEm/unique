import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Studiova",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                headingKey="heroBannerContactHeading"
                descKey="heroBannerContactDesc" />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
