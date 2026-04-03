"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useCallback, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { heroCarouselSlides } from "@/data/heroCarouselSlides";

function HeroSection() {
    const { t, locale } = useLanguage();
    const slideCount = heroCarouselSlides.length;
    const [index, setIndex] = useState(0);

    const goPrev = useCallback(() => {
        setIndex((i) => (i - 1 + slideCount) % slideCount);
    }, [slideCount]);

    const goNext = useCallback(() => {
        setIndex((i) => (i + 1) % slideCount);
    }, [slideCount]);

    const trackWidthPercent = slideCount * 100;
    const translateXPercent = (100 / slideCount) * index;

    const caption = heroCarouselSlides[index][locale === "sk" ? "sk" : "en"];

    return (
        <ParallaxProvider>
            <Parallax speed={-25}>
                <section className="relative flex items-end text-white bg-black h-full min-h-screen">
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="/video/new.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay to improve text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 container text-left">
                        {/* Glass panel: carousel image left, caption + chevrons right */}
                        <div
                            className="pointer-events-none absolute bottom-6 right-4 z-30 hidden h-[14rem] w-[min(100%,24rem)] items-stretch gap-3 rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl backdrop-saturate-150 sm:bottom-8 sm:right-8 sm:h-[16.5rem] sm:w-[min(100%,31rem)] sm:gap-4 sm:p-4 md:flex lg:bottom-10 lg:right-10 lg:h-[18rem] lg:w-[min(100%,36rem)]"
                        >
                            <div className="relative aspect-square h-full min-h-0 w-auto shrink-0 overflow-hidden rounded-2xl bg-white">
                                <div
                                    className="flex h-full ease-out transition-transform duration-500 motion-reduce:transition-none"
                                    style={{
                                        width: `${trackWidthPercent}%`,
                                        transform: `translateX(-${translateXPercent}%)`,
                                    }}
                                >
                                    {heroCarouselSlides.map((slide, i) => (
                                        <div
                                            key={slide.image}
                                            className="relative h-full shrink-0"
                                            style={{ flex: `0 0 calc(100% / ${slideCount})` }}
                                        >
                                            <Image
                                                src={slide.image}
                                                alt=""
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 40vw, 200px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-3 pointer-events-auto">
                                <div
                                    key={`${index}-${locale}`}
                                    className="text-right text-sm leading-snug text-white/90 transition-opacity duration-300 motion-reduce:transition-none sm:text-base"
                                >
                                    <p className="m-0 font-semibold text-white">{caption.title}</p>
                                    <p className="mt-1.5 m-0 text-white/85">{caption.body}</p>
                                </div>
                                <div className="flex flex-row flex-wrap items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            goPrev();
                                        }}
                                        aria-label={t("heroCarouselPrev")}
                                        className="inline-flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:size-16"
                                    >
                                        <Icon icon="lucide:chevron-left" width={28} height={28} aria-hidden />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            goNext();
                                        }}
                                        aria-label={t("heroCarouselNext")}
                                        className="inline-flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-secondary transition-colors hover:bg-white sm:size-16"
                                    >
                                        <Icon icon="lucide:chevron-right" width={28} height={28} aria-hidden />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col gap-6 Xxl:pb-20 pb-10">
                            <div className="flex items-start gap-2 md:gap-6">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <Image
                                        src={"/images/Icon/primary-leaf.svg"}
                                        alt="icon"
                                        width={44}
                                        height={44}
                                        className="animate-spin-slow"
                                    />
                                </div>
                                <p className="text-white/70 max-w-md">
                                    {t("heroSubtext").includes("high-performing") ? (
                                        <>We create <span className="text-primary">high-performing</span> digital designs that elevate brands and enhance conversions.</>
                                    ) : (
                                        t("heroSubtext")
                                    )}
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
                                <h1 className="large-heading">Unique</h1>
                                <div>
                                    <div className="bg-primary rounded-full p-1.5 pl-8">
                                        <Image src={"/images/Icon/arrow-icon.svg"} alt="icon" height={52} width={52} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>
        </ParallaxProvider>
    );
}

export default HeroSection;
