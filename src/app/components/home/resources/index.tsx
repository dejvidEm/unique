"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type Blog = {
    title: string;
    slug: string;
    date: string;
    coverImage: string;
};
const Resources = () => {
    const { locale, t } = useLanguage();
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch("/api/blog")
            .then((res) => res.json())
            .then((data) => setblogs(data.slice(0, 3)));
    }, [locale]);

    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex w-full max-w-xl items-center gap-4 py-3 md:gap-8">
                                    <span className="shrink-0 text-base font-semibold tabular-nums text-secondary/50 dark:text-white/70">
                                        [09]
                                    </span>
                                    <div className="h-px w-16 shrink-0 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge rounded-full py-1.5 px-4">{t("resourcesSectionBadge")}</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">{t("resourcesHeading")}</h2>
                                        <p className="max-w-2xl text-secondary/70 dark:text-white/70">{t("resourcesDescription")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7">
                                {blogs.map((value, index) => {
                                    const formattedDate = new Date(value.date).toLocaleDateString(locale === "sk" ? "sk-SK" : "en-US", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    });
                                    return (
                                        <Link href={`/blog/${value.slug}`} key={index} className={`group flex flex-col gap-5 ${index === 0 ? 'sm:col-span-2' : ''}`}>
                                            <div className="group flex flex-col gap-5">
                                                <div className="w-full h-450px overflow-hidden group">
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
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;
