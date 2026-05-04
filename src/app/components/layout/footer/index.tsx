import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import NavMark from "../logo/NavMark";

const Footer = () => {
    const { locale } = useLanguage();
    const [footerData, setFooterData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/layout-data?lang=${locale}`)
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFooterData(data?.footerData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [locale])

    return (
        <footer>
            <div className="bg-secondary pt-10 pb-6 md:pt-20 md:pb-8 xl:pt-40 xl:pb-10">
                <div className="container">
                    <div className="flex flex-col gap-12 md:gap-16 xl:gap-20">
                        <div className="flex flex-col gap-10 xl:flex-row xl:gap-0">
                            <div className="flex w-full flex-col gap-10 xl:max-w-2xl">
                                <Link
                                    href="/"
                                    className="inline-flex w-fit text-white transition-colors duration-[480ms] ease-soft hover:text-primary motion-reduce:transition-none"
                                >
                                    <span className="sr-only">Studio32</span>
                                    <NavMark className="h-12 w-auto shrink-0 sm:h-14 md:h-16 lg:h-[4.25rem] xl:h-20" />
                                </Link>
                                {footerData?.tagline && (
                                    <h2 className="font-light text-white xl:max-w-xl">{footerData?.tagline}</h2>
                                )}
                                <div className="flex flex-col gap-3 md:gap-4">
                                    {footerData &&
                                        footerData?.info?.map((value: any, index: any) => {
                                            return (
                                                <div key={index}>
                                                    <a href={value.href} className="flex items-center gap-4">
                                                        <Image
                                                            src={value.icon}
                                                            alt=""
                                                            width={36}
                                                            height={36}
                                                            className="h-8 w-8 shrink-0 md:h-9 md:w-9"
                                                        />
                                                        <span className="text-xl font-light leading-snug text-white hover:text-primary md:text-2xl lg:text-3xl">
                                                            {value.link}
                                                        </span>
                                                    </a>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-0 xl:max-w-xl xl:justify-self-end">
                                <ul className="flex flex-col gap-1.5">
                                    {footerData &&
                                        footerData?.links?.map((value: any, index: any) => {
                                            return (
                                                <li key={index}>
                                                    <a href={value.href} className="text-lg font-light text-white hover:text-primary">
                                                        {value.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                </ul>

                                <ul className="flex flex-col gap-1.5">
                                    {footerData &&
                                        footerData?.socialLinks?.map((value: any, index: any) => {
                                            return (
                                                <li key={index}>
                                                    <a href={value.href} className="text-lg font-light text-white hover:text-primary">
                                                        {value.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>

                        {footerData?.copyright && (
                            <p className="w-full text-center text-base font-light text-white/70">{footerData.copyright}</p>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer