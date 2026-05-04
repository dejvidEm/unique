"use client";

import { useLanguage } from "@/app/context/LanguageContext";

/** Homepage-only: large figures + short captions on a white band below Portfolio. */
export default function MinimalFactsStrip() {
    const { t } = useLanguage();

    const rows = [
        { figure: t("minimalFactsStat1Value"), caption: t("minimalFactsStat1Caption") },
        { figure: t("minimalFactsStat2Value"), caption: t("minimalFactsStat2Caption") },
        { figure: t("minimalFactsStat3Value"), caption: t("minimalFactsStat3Caption") },
    ];

    return (
        <section className="bg-white py-24 md:py-32 lg:py-40 dark:bg-white" aria-label={t("minimalFactsAriaLabel")}>
            <div className="container">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-24">
                    {rows.map((row, index) => (
                        <div key={index} className="flex flex-col gap-3 md:gap-4">
                            <p className="font-light tabular-nums leading-[1.05] tracking-tight text-secondary text-[clamp(2.5rem,6.5vw,4.25rem)]">
                                {row.figure}
                            </p>
                            <p className="max-w-[20rem] text-sm font-normal leading-relaxed text-secondary/55 md:text-[0.9375rem]">
                                {row.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
