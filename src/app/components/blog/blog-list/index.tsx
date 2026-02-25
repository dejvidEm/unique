import { getAllBlogs } from "@/lib/blogmarkdown";
import { BlogListClient } from "./BlogListClient";

type Blog = {
    title: string;
    slug: string;
    date: string;
    coverImage: string;
};

const BlogList = () => {
    const Blogs: Blog[] = getAllBlogs(["title", "slug", "coverImage", "date"]);
    return <BlogListClient blogs={Blogs} />;
};

export default BlogList;
