import { getAllProjects } from "@/lib/markdown";
import Link from "next/link";

const ProjectList = () => {
    type Project = {
        title: string;
        slug: string;
        ScopeOfWork: string[];
        industry?: string;
        coverImage: string;
    };

    const projects: Project[] = getAllProjects(["title", "slug", "ScopeOfWork", "industry", "coverImage"]);


    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project,index) => {
                            return (
                                <Link key={index} href={`/projects/${project.slug}`} className="group flex flex-col gap-5">
                                    <div className="relative">
                                        <img src={project.coverImage} alt={project.title} className="w-full" />
                                        <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 bg-black/0 backdrop-blur-0 transition-all duration-300 ease-out md:group-hover:opacity-100 md:group-hover:bg-black/70 md:group-hover:backdrop-blur-sm" aria-hidden>
                                            <span className="scale-90 opacity-0 transition-all duration-300 ease-out delay-75 md:group-hover:scale-100 md:group-hover:opacity-100">
                                                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.333374" width="64" height="64" rx="32" fill="#C1FF72" />
                                                    <path d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666" stroke="#1F2A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3>{project.title}</h3>
                                        <div className="flex gap-3 flex-wrap">
                                            {project.ScopeOfWork.map((value, idx) => (
                                                <span key={idx} className="text-base hover:bg-primary border border-secondary/12 dark:border-white/12 dark:hover:text-secondary w-fit py-1 px-4 rounded-full">{value}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProjectList;
