import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Studiova",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                headingKey="heroBannerProjectsHeading"
                descKey="heroBannerProjectsDesc" />
            <ProjectList />    
        </main>
    );
};
