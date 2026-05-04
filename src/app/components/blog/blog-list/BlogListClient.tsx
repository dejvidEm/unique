"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

type Blog = {
    title: string;
    slug: string;
    date: string;
    coverImage: string;
};

export function BlogListClient({ blogs }: { blogs: Blog[] }) {
    const { locale } = useLanguage();
    const dateLocale = locale === "sk" ? "sk-SK" : "en-US";

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {blogs.map((value, index) => {
                            const formattedDate = new Date(value.date).toLocaleDateString(dateLocale, {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            });
                            return (
                                <Link href={`/blog/${value.slug}`} key={index} className="group flex flex-col gap-3">
                                    <div className="group flex flex-col gap-5">
                                        <div className="w-full h-35 overflow-hidden group">
                                            <Image
                                                src={value.coverImage}
                                                alt="image"
                                                width={805}
                                                height={450}
                                                className="w-full h-full object-cover transition-transform duration-[680ms] ease-soft group-hover:scale-[1.04]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-secondary/70 dark:text-white/70">{formattedDate}</span>
                                            <h4>{value.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
