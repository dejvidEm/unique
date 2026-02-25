"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitcher({ sticky = false }: { sticky?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "sk" : "en")}
      className={`flex h-11 w-11 items-center justify-center text-sm font-semibold uppercase tracking-wide cursor-pointer ${sticky ? "text-secondary dark:text-white" : "text-white"}`}
      title={t("language")}
      aria-label={t("language")}
    >
      {locale === "en" ? "SK" : "EN"}
    </button>
  );
}
