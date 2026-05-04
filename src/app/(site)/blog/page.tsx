import BlogList from "@/app/components/blog/blog-list";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog | Studio32",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/blog/banner/blog_banner.png"
                headingKey="heroBannerBlogHeading"
                descKey="heroBannerBlogDesc" />    
                <BlogList/>
        </main>
    );
};
