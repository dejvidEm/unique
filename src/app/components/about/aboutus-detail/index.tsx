"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const AboutusDetail = () => {
    const { t } = useLanguage();
    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className='container'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    <div className='max-w-xl w-full'>
                        <h2 className='text-56'>Studio32.</h2>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <p className="text-secondary dark:text-white">{t("aboutDetailPara1")}</p>
                        <p className='text-secondary dark:text-white'>{t("aboutDetailPara2")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail
