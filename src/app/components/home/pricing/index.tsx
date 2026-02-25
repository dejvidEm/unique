
"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Logoslider from "./Logoslider";
import Slider from "react-infinite-logo-slider";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import NavigationLink from "../../shared/navigation-link";

function Pricing() {
    const { locale, t } = useLanguage();
    const [pricingData, setPricingData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/page-data?lang=${locale}`)
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setPricingData(data?.pricingData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [locale])
   

    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">07</span>
                                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge py-1.5 px-4 rounded-full">{t("pricingLabel")}</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">{t("affordablePricing")}</h2>
                                        <p className="max-w-2xl text-secondary/70 dark:text-white/70">{t("pricingDescription")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                                {pricingData?.data?.map((value:any, index:any) => {
                                    return (
                                        <div key={index} className="bg-white dark:bg-lightgray/10 p-3 sm:p-5 xl:p-12 flex flex-col gap-10">
                                            <div className="flex flex-col gap-5">
                                                <div className="flex items-center gap-4">
                                                    <p className="font-medium">{value?.planName}</p>

                                                    {value?.tag &&
                                                        <div className="flex items-center gap-2 bg-secondary w-fit py-1 px-3 rounded-full">
                                                            <Icon icon="fluent:fire-20-regular" width="20" height="20" style={{ color: "#fff" }} />
                                                            <span className="text-white text-base">{value?.tag}</span>
                                                        </div>
                                                    }
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        {value.cancelPrice &&
                                                            <h3 className="text-secondary/40 dark:text-white/40"><del>{value.cancelPrice}</del></h3>
                                                        }
                                                        <h3>{value.planPrice}</h3>
                                                        <span className="text-base text-secondary/70 dark:text-white/70">{t("month")}</span>
                                                    </div>
                                                </div>
                                                <p className="text-base text-secondary/70 dark:text-white/70">{value.planDescp}</p>
                                            </div>
                                            <div className="pt-10 border-t border-secondary/12 dark:border-white/12">
                                                <p className="text-base pb-5">{t("whatsIncluded")}</p>
                                                <div>
                                                    <ul className="flex flex-col gap-3">
                                                        {value?.planIncludes?.map((value:any, index:any) => {
                                                            return (
                                                                <li key={index} className="flex items-center gap-1.5 sm:gap-4">
                                                                    <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                                                                        <Image src={"/images/Icon/right-check.svg"} alt="right-icon" width={20} height={20} />
                                                                    </div>
                                                                    <span className="flex-1">{value}</span>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <NavigationLink navigationTitle={t("subscribeNow")} navigationLink="/" transform={true} fullWidth={true} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <p className="text-secondary dark:text-white text-center">{t("trustedPartners")}</p>
                            <Slider duration={20} pauseOnHover={true} blurBorders={false}>
                                {(pricingData?.partnerLogo || []).map((items: any, index: any) => (
                                    <Logoslider key={index} logo={items} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
