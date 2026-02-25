"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Locale = "en" | "sk";

const STORAGE_KEY = "unique-locale";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Menu & layout
    menu: "Menu",
    signOut: "Sign Out",
    signIn: "Sign In",
    signUp: "Sign Up",
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    services: "Services",
    contact: "Contact",
    work: "Work",
    terms: "Terms",
    privacyPolicy: "Privacy Policy",
    error404: "Error 404",
    tagline: "Build something together?",
    copyright: "© Unique copyright 2025",
    // Hero
    heroSubtext: "We create high-performing digital designs that elevate brands and enhance conversions.",
    // Stats
    statsName: "Stats & facts",
    statsHeading: "High quality web design solutions you can trust.",
    statsDescription: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    whoWeAre: "Who we are",
    // Services
    servicesName: "Services",
    servicesHeading: "What we do",
    servicesDescription: "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
    seeOurWork: "See our Work",
    // Team
    theTeam: "The team",
    meetOurTeam: "Meet our team",
    teamDescription: "Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment.",
    // Testimonial
    testimonialLabel: "Testimonial",
    storiesFromClients: "Stories from clients",
    testimonialSubtext: "Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.",
    // Pricing
    pricingLabel: "Pricing",
    affordablePricing: "Affordable pricing",
    pricingDescription: "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
    subscribeNow: "Subscribe now",
    whatsIncluded: "What's Included:",
    trustedPartners: "More than 320 trusted partners & clients",
    month: "/month",
    mostPopular: "Most popular",
    // FAQ
    faqLabel: "FAQ",
    faqHeading: "Frequently asked questions",
    faqDescription: "Discover how we tailor our solutions to meet unique needs, delivering impactful strategies, personalized branding, and exceptional customer experiences.",
    // Contact
    contactUs: "Contact us",
    getInTouch: "Get in touch",
    contactSubtext: "Let's collaborate and create something amazing! Tell me about your project—I'm all ears.",
    submitMessage: "Submit message",
    submitting: "Submitting",
    successMessage: "Great!!! Email has been Successfully Sent. We will get in touch asap.",
    placeholderName: "Name",
    placeholderEmail: "Email",
    placeholderMessage: "Tell us about your project",
    // About
    aboutUs: "About us",
    whyChooseUs: "Why choose us",
    aboutUsDescription: "We blend creativity with strategy to craft unique digital experiences that make an impact. With a focus on innovation, attention to details.",
    // Navigation
    back: "Back",
    backToHome: "Back to Home",
    pageNotFound: "Oops! Page Not Found",
    // Language
    language: "Language",
    english: "English",
    slovak: "Slovenčina",
    // Page hero banners (desc uses <span>highlight</span> for middle part)
    heroBannerAboutHeading: "About us",
    heroBannerAboutDesc: "We craft <span>innovative digital</span> designs that amplify brand identity and drive meaningful results",
    heroBannerContactHeading: "Contact",
    heroBannerContactDesc: "Ready to <span>start something</span> great? Reach out—we'd love to hear from you.",
    heroBannerTermsHeading: "Terms & Conditions",
    heroBannerTermsDesc: "Understand the <span>Rules & Guidelines</span> Before Using Our Services",
    heroBannerPrivacyHeading: "Privacy Policy",
    heroBannerPrivacyDesc: "Understand the <span>Rules & Guidelines</span> Before Using Our Services",
    heroBannerBlogHeading: "Blog",
    heroBannerBlogDesc: "Excited to <span>begin something amazing?</span> Get in touch—we'd love to connect with you!",
    heroBannerProjectsHeading: "Projects",
    heroBannerProjectsDesc: "A <span>showcase of creativity</span>, strategy, and results—explore the projects that define us.",
    // About page detail section
    aboutDetailPara1: "It's a canvas for your creativity. It's your opportunity to transform bold ideas into dynamic, interactive experiences. Your work can shape identities, tell compelling stories, or spark meaningful change. As the digital landscape grows, so do the possibilities. And whether you thrive working remotely or in a buzzing agency space, the thrill of seeing your vision come to life is unmatched.",
    aboutDetailPara2: "At Unique, we bring ideas to life through a range of services: branding, web development, agency solutions, content creation, SaaS, and motion & 3D modeling. As a web designer, you merge artistry and technology to craft \"digital experiences\" that inform, captivate, and inspire. Every day brings something new—one moment you're sketching innovative concepts, the next you're turning them into seamless, responsive designs. Web design keeps you pushing boundaries and creating at every turn!",
  },
  sk: {
    menu: "Ponuka",
    signOut: "Odhlásiť sa",
    signIn: "Prihlásiť sa",
    signUp: "Registrovať sa",
    home: "Domov",
    about: "O nás",
    projects: "Projekty",
    blog: "Blog",
    services: "Služby",
    contact: "Kontakt",
    work: "Práca",
    terms: "Obchodné podmienky",
    privacyPolicy: "Ochrana súkromia",
    error404: "Chyba 404",
    tagline: "Postavme niečo spoločne?",
    copyright: "© Unique autorské práva 2025",
    heroSubtext: "Vytvárame vysoko výkonné digitálne dizajny, ktoré pozdvihujú značky a zvyšujú konverzie.",
    statsName: "Štatistiky a fakty",
    statsHeading: "Kvalitné webové dizajnové riešenia, ktorým môžete dôverovať.",
    statsDescription: "Pri výbere agentúry pre webový dizajn je dôležité zvážiť jej povesť, skúsenosti a špecifické potreby vášho projektu.",
    whoWeAre: "Kto sme",
    servicesName: "Služby",
    servicesHeading: "Čo robíme",
    servicesDescription: "Pohľad do našej tvorivosti—inovatívne dizajny, úspešné spolupráce a transformačné digitálne zážitky.",
    seeOurWork: "Pozrieť naše práce",
    theTeam: "Tím",
    meetOurTeam: "Zoznámte sa s naším tímom",
    teamDescription: "Náš tím sa zaväzuje predefinovať digitálne zážitky prostredníctvom inovatívnych webových riešení a zároveň podporovať rôznorodé a kolaboratívne prostredie.",
    testimonialLabel: "Referencie",
    storiesFromClients: "Príbehy od klientov",
    testimonialSubtext: "Skutočné skúsenosti, úprimná spätná väzba—zistite, ako naše kreatívne riešenia transformovali značky a pozdvihli podniky.",
    pricingLabel: "Cenník",
    affordablePricing: "Dostupné ceny",
    pricingDescription: "Pohľad do našej tvorivosti—inovatívne dizajny, úspešné spolupráce a transformačné digitálne zážitky.",
    subscribeNow: "Predplatiť teraz",
    whatsIncluded: "Čo je zahrnuté:",
    trustedPartners: "Viac ako 320 dôveryhodných partnerov a klientov",
    month: "/mesiac",
    mostPopular: "Najobľúbenejšie",
    faqLabel: "Často kladené otázky",
    faqHeading: "Často kladené otázky",
    faqDescription: "Zistite, ako prispôsobujeme naše riešenia jedinečným potrebám, poskytujúc efektívne stratégie, personalizovanú značku a výnimočné zákaznícke skúsenosti.",
    contactUs: "Kontaktujte nás",
    getInTouch: "Spojte sa s nami",
    contactSubtext: "Spolupracujme a vytvoríme niečo úžasné! Povedzte mi o vašom projekte—mám otvorené uši.",
    submitMessage: "Odoslať správu",
    submitting: "Odosielam",
    successMessage: "Skvelé!!! E-mail bol úspešne odoslaný. Čo najskôr sa ozveme.",
    placeholderName: "Meno",
    placeholderEmail: "E-mail",
    placeholderMessage: "Povedzte nám o vašom projekte",
    aboutUs: "O nás",
    whyChooseUs: "Prečo si vybrať nás",
    aboutUsDescription: "Spájame kreativitu so stratégiou a vytvárame jedinečné digitálne zážitky s dopadom. So zameraním na inovácie a dôraz na detaily.",
    back: "Späť",
    backToHome: "Späť na domov",
    pageNotFound: "Ups! Stránka nebola nájdená",
    language: "Jazyk",
    english: "English",
    slovak: "Slovenčina",
    heroBannerAboutHeading: "O nás",
    heroBannerAboutDesc: "Vytvárame <span>inovatívne digitálne</span> dizajny, ktoré umocňujú identitu značky a prinášajú zmysluplné výsledky",
    heroBannerContactHeading: "Kontakt",
    heroBannerContactDesc: "Pripravení <span>niečo začať?</span> Ozvite sa—radi vás počúvame.",
    heroBannerTermsHeading: "Obchodné podmienky",
    heroBannerTermsDesc: "Pozrite si <span>pravidlá a odporúčania</span> pred použitím našich služieb",
    heroBannerPrivacyHeading: "Ochrana súkromia",
    heroBannerPrivacyDesc: "Pozrite si <span>pravidlá a odporúčania</span> pred použitím našich služieb",
    heroBannerBlogHeading: "Blog",
    heroBannerBlogDesc: "Tešíte sa na <span>niečo úžasné?</span> Ozvite sa—radi sa s vami spojíme!",
    heroBannerProjectsHeading: "Projekty",
    heroBannerProjectsDesc: "<span>Prehliadka tvorivosti</span>, stratégie a výsledkov—preskúmajte projekty, ktoré nás definujú.",
    aboutDetailPara1: "Je to plátno pre vašu tvorivosť. Je to vaša príležitosť premeniť smelé nápady na dynamické, interaktívne zážitky. Vaša práca môže formovať identity, rozprávať presvedčivé príbehy alebo vyvolávať zmysluplné zmeny. Keď digitálna krajina rastie, rastú aj možnosti. A či už prosperujete pri práci na diaľku alebo v rušnom priestore agentúry, vzrušenie z toho, keď sa vaša vízia zhmotní, je neporovnateľné.",
    aboutDetailPara2: "V Unique dávame nápady do života prostredníctvom radu služieb: branding, vývoj webov, riešenia pre agentúry, tvorba obsahu, SaaS a motion & 3D modelovanie. Ako webový dizajnér spájate umenie a technológiu, aby ste vytvorili „digitálne zážitky“, ktoré informujú, fascinujú a inšpirujú. Každý deň prináša niečo nové—v jednom momente skicujete inovatívne koncepty, v ďalšom ich premieňate na bezproblémové, responzívne dizajny. Webový dizajn vás neustále posúva vpred a tvoríte na každom kroku!",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("sk");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "sk") setLocaleState(stored);
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale === "sk" ? "sk" : "en";
    }
  }, []);

  useEffect(() => {
    if (mounted) document.documentElement.lang = locale === "sk" ? "sk" : "en";
  }, [locale, mounted]);

  const t = useCallback(
    (key: string) => {
      return translations[locale][key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
