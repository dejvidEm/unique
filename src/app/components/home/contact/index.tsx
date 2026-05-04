
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const Contact = (props: { contactdataNumber: string }) => {
    const { contactdataNumber } = props;
    const { locale, t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [loader, setLoader] = useState(false);
    const [contactData, setContactData] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/page-data?lang=${locale}`)
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setContactData(data?.contactData)
            } catch (error) {
                console.error('Error fetching contact:', error)
            }
        }
        fetchData()
    }, [locale])
    const reset = () => {
        setFormData({ name: "", email: "", message: "" });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoader(true);

        fetch("https://formsubmit.co/ajax/niravjoshi87@gmail.com", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setSubmitted(data.success);
                setLoader(false);
                reset();
            })
            .catch((error) => {
                console.log(error.message);
                setLoader(false);
            });
    };
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <section className="py-20 md:py-40 dark:bg-darkblack">
            <div className="container">
                <div className="flex flex-col gap-8 md:gap-20">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex w-full max-w-xl items-center gap-4 py-3 md:gap-8">
                                <span className="shrink-0 text-base font-semibold tabular-nums text-secondary/50 dark:text-white/70">
                                    [{contactdataNumber ? String(contactdataNumber) : "10"}]
                                </span>
                                <div className="h-px w-16 shrink-0 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge rounded-full py-1.5 px-4">{t("contactUs")}</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5 ">
                                    <h2 className="max-w-3xl">{t("getInTouch")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex xl:flex-row gap-15 xl:gap-48">
                        <div className="max-w-md flex flex-col gap-9 md:gap-16">
                            <div className="flex flex-col gap-5 md:gap-8">
                                <p className="max-w-2xl text-secondary/70 dark:text-white/70">{t("contactSubtext")}</p>
                                <div>
                                    <ul className="flex flex-col gap-3">
                                        {contactData?.keypoint?.map((value:any, index:any) => {
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
                            <div className="flex items-center gap-5">
                                {contactData?.managerProfile?.image && 
                                <Image src={contactData?.managerProfile?.image} alt="image" width={64} height={64} className="rounded-full" />}
                                <div>
                                    <p>{contactData?.managerProfile?.name}</p>
                                    <span className="text-base text-secondary/70 dark:text-white/70">{contactData?.managerProfile?.position}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-8">
                                <div>
                                    <input
                                        required
                                        className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t("placeholderName")}
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t("placeholderEmail")}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t("placeholderMessage")}
                                        rows={4} />
                                </div>
                                {submitted && (
                                    <div className="flex gap-1.5">
                                        <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                                            <Image src={"/images/Icon/right-check.svg"} alt="right-icon" width={20} height={20} />
                                        </div>
                                        <p className="text-secondary">{t("successMessage")}</p>
                                    </div>
                                )}
                                <div>
                                    {!loader ? (
                                        <button
                                            type="submit"
                                            className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-primary transition-all duration-[520ms] ease-soft hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30"
                                        >
                                            <span className="transform pl-8 text-lg font-bold text-secondary transition-transform duration-[520ms] ease-soft group-hover:translate-x-10 group-hover:text-white">
                                                {t("submitMessage")}
                                            </span>
                                            <svg
                                                className="py-1 transition-all duration-[520ms] ease-soft group-hover:-translate-x-36 group-hover:rotate-45"
                                                width="58"
                                                height="58"
                                                viewBox="0 0 58 58"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden
                                            >
                                                <g filter="url(#filter0_d_contact_submit)">
                                                    <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                                                    <path
                                                        d="M24 23H34M34 23V33M34 23L24 33"
                                                        stroke="#1F2A2E"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_contact_submit"
                                                        x="0"
                                                        y="0"
                                                        width="58"
                                                        height="58"
                                                        filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB"
                                                    >
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="1" />
                                                        <feGaussianBlur stdDeviation="1.5" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_contact_submit" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_contact_submit" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            disabled
                                            className="flex w-full cursor-wait items-center justify-center gap-3 rounded-full bg-primary/25 py-4 dark:bg-white/10"
                                        >
                                            <div
                                                className="inline-block size-6 animate-spin rounded-full border-2 border-current border-t-transparent text-secondary dark:text-white"
                                                role="status"
                                                aria-label="loading"
                                            >
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <span className="text-lg font-bold text-secondary dark:text-white">{t("submitting")}</span>
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
