"use client";

import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLanguage } from "@/app/context/LanguageContext";
import "swiper/css";
import Projectswiper from "./projectswiper";

function Portfolio() {
    const { t } = useLanguage();
    const swiperRef = useRef<SwiperInstance | null>(null);

    return (
        <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col items-start gap-8 xl:flex xl:flex-row">
                            <div className="flex w-full max-w-xl items-center gap-4 py-3 md:gap-8">
                                <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">02</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge rounded-full py-1.5 px-4">Portfolio</p>
                            </div>
                            <div className="flex w-full min-w-0 flex-1 flex-col gap-11">
                                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
                                    <div className="flex min-w-0 max-w-3xl flex-col gap-5">
                                        <h2>Featured projects</h2>
                                        <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                                            A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.
                                        </p>
                                    </div>
                                    <div className="flex shrink-0 gap-2 self-end md:self-start md:pt-1">
                                        <button
                                            type="button"
                                            onClick={() => swiperRef.current?.slidePrev()}
                                            aria-label={t("heroCarouselPrev")}
                                            className="inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-secondary/25 bg-white/80 text-secondary transition-colors hover:bg-secondary/10 dark:border-white/25 dark:bg-twilliteblack dark:text-white dark:hover:bg-white/10"
                                        >
                                            <Icon icon="lucide:chevron-left" className="size-6" aria-hidden />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => swiperRef.current?.slideNext()}
                                            aria-label={t("heroCarouselNext")}
                                            className="inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-secondary transition-colors hover:bg-secondary hover:text-white dark:text-secondary"
                                        >
                                            <Icon icon="lucide:chevron-right" className="size-6" aria-hidden />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3.5">
                    <Projectswiper swiperRef={swiperRef} />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
