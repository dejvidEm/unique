import { NextResponse } from "next/server";

function getAvatarList() {
  return [
    { image: "https://placehold.co/400x400", title: "Sarah Johnson" },
    { image: "https://placehold.co/400x400", title: "Olivia Miller" },
    { image: "https://placehold.co/400x400", title: "Sophia Roberts" },
    { image: "https://placehold.co/400x400", title: "Isabella Clark" },
  ];
}

function getStatsFactData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  return {
    number: "01",
    name: isSk ? "Štatistiky a fakty" : "Stats & facts",
    heading: isSk
      ? "Kvalitné webové dizajnové riešenia, ktorým môžete dôverovať."
      : "High quality web design solutions you can trust.",
    description: isSk
      ? "Pri výbere agentúry pre webový dizajn je dôležité zvážiť jej povesť, skúsenosti a špecifické potreby vášho projektu."
      : "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    scoreData: [
      { number: 40, numberValue: "K", scoreDescp: isSk ? "Ľudia, ktorí spustili svoje weby" : "People who have launched their websites" },
      { number: 238, scoreDescp: isSk ? "Skúsení profesionáli pripravení pomôcť" : "Experienced professionals ready to assist" },
      { number: 3, numberValue: "M", scoreDescp: isSk ? "Podpora cez správy a živé konzultácie" : "Support through messages and live consultations" },
    ],
  };
}

const serviceDescpEn = "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.";
const serviceDescpSk = "Pri výbere agentúry pre webový dizajn je dôležité zvážiť jej povesť, skúsenosti a špecifické potreby vášho projektu.";

function getServicesData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  const descp = isSk ? serviceDescpSk : serviceDescpEn;
  return {
    number: "03",
    name: isSk ? "Služby" : "Services",
    heading: isSk ? "Čo robíme" : "What we do",
    description: isSk
      ? "Pohľad do našej tvorivosti—inovatívne dizajny, úspešné spolupráce a transformačné digitálne zážitky."
      : "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
    data: [
      { id: 1, image: "https://placehold.co/400x250", heading: isSk ? "Brandová identita" : "Brand identity", descp },
      { id: 2, image: "https://placehold.co/400x250", heading: isSk ? "Vývoj webov" : "Web development", descp },
      { id: 3, image: "https://placehold.co/400x250", heading: isSk ? "Tvorba obsahu" : "Content creation", descp },
      { id: 4, image: "https://placehold.co/400x250", heading: isSk ? "Animácie a 3D modelovanie" : "Motion & 3d modeling", descp },
    ],
  };
}

function getTestimonialData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  return {
    data_1: {
      preTitle: isSk ? "Počúvajte ich" : "Hear from them",
      title: isSk ? "Redesign nášho webu bol bezchybný. Perfektne pochopili našu víziu!" : "Our website redesign was flawless. They understood our vision perfectly!",
      author: "Albert Flores",
      company: "MasterCard",
    },
    data_2: {
      preTitle: isSk ? "Počúvajte ich" : "Hear from them",
      title: isSk ? "Od konceptu po realizáciu dodali vynikajúce výsledky. Vrelo odporúčam!" : "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
      author: "Robert Fox",
      company: "Mitsubishi",
    },
    data_3: {
      preTitle: isSk ? "Počúvajte ich" : "Hear from them",
      title: isSk ? "Veľmi plynulý proces s úžasnými výsledkami. Vrelo odporúčam!" : "Super smooth process with incredible results. highly recommend!",
      author: "Jenny Wilson",
      company: "Pizza Hut",
    },
  };
}

function getTeamData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  return {
    number: "06",
    data: [
      {
        image: "https://placehold.co/390x470",
        name: "Martha Finley",
        position: isSk ? "Kreatívna riaditeľka" : "Creative Director",
        socialLinks: [
          { icon: "https://placehold.co/20x20", link: "https://twitter.com" },
          { icon: "https://placehold.co/20x20", link: "https://www.behance.net/" },
          { icon: "https://placehold.co/20x20", link: "https://linkedin.com" },
        ],
      },
      {
        image: "https://placehold.co/390x470",
        name: "Floyd Miles",
        position: isSk ? "Marketingový stratég" : "Marketing Strategist",
        socialLinks: [
          { icon: "https://placehold.co/20x20", link: "https://twitter.com" },
          { icon: "https://placehold.co/20x20", link: "https://www.behance.net/" },
          { icon: "https://placehold.co/20x20", link: "https://linkedin.com" },
        ],
      },
    ],
  };
}

function getPricingData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  return {
    data: [
      {
        planName: "Launch",
        planPrice: "699 €",
        planDescp: isSk ? "Ideálne pre startupy a malé firmy robiace prvé kroky online." : "Ideal for startups and small businesses taking their first steps online.",
        planIncludes: isSk
          ? ["Konkurenčný prieskum a analýzy", "Wireframy a prototypy", "Základné sledovanie (Google Analytics atď.)", "Štandardný kontaktný formulár"]
          : ["Competitive research & insights", "Wireframing and prototyping", "Basic tracking setup (Google Analytics, etc.)", "Standard contact form integration"],
      },
      {
        planName: "Scale",
        tag: isSk ? "Najobľúbenejšie" : "Most popular",
        planPrice: "1 699 €",
        cancelPrice: "2 199 €",
        planDescp: isSk ? "Pre rastúce značky potrebujúce viac prispôsobenia a flexibility." : "Perfect for growing brands needing more customization and flexibility.",
        planIncludes: isSk
          ? ["Všetko z plánu Launch", "Vlastný dizajn až 10 stránok", "Integrácia sociálnych médií", "SEO vylepšenia kľúčových stránok"]
          : ["Everything in the Launch Plan", "Custom design for up to 10 pages", "Seamless social media integration", "SEO enhancements for key pages"],
      },
      {
        planName: "Elevate",
        planPrice: "3 499 €",
        planDescp: isSk ? "Pre zavedené firmy chcúce plne na mieru riešenie." : "Best suited for established businesses wanting a fully tailored experience.",
        planIncludes: isSk
          ? ["Všetko z plánu Scale", "E-commerce funkcie (ak treba)", "Dizajn e-mailových šablón", "Prioritná podpora 6 mesiacov po spustení"]
          : ["Everything in the Scale Plan", "E-commerce functionality (if needed)", "Branded email template design", "Priority support for six months after launch"],
      },
    ],
    partnerLogo: [
      { light: "https://placehold.co/150x60", dark: "https://placehold.co/150x60" },
      { light: "https://placehold.co/150x60", dark: "https://placehold.co/150x60" },
      { light: "https://placehold.co/150x60", dark: "https://placehold.co/150x60" },
      { light: "https://placehold.co/150x60", dark: "https://placehold.co/150x60" },
      { light: "https://placehold.co/150x60", dark: "https://placehold.co/150x60" },
    ],
  };
}

function getFaqData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  const ans = isSk
    ? "Áno, poskytujeme podporu po spustení a balíčky údržby pre klientov potrebujúcich pravidelné aktualizácie."
    : "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.";
  return {
    data: [
      { faq_que: isSk ? "Aké služby vaša agentúra ponúka?" : "What services does your agency offer?", faq_ans: ans },
      { faq_que: isSk ? "Ako dlho zvyčajne trvá projekt?" : "How long does a typical project take?", faq_ans: ans },
      { faq_que: isSk ? "Ponúkate vlastné dizajny?" : "Do you offer custom designs?", faq_ans: ans },
      { faq_que: isSk ? "Aká je cena projektu?" : "What's the cost of a project?", faq_ans: ans },
      { faq_que: isSk ? "Poskytujete podporu po dokončení projektu?" : "Do you provide ongoing support after project completion?", faq_ans: ans },
    ],
  };
}

function getContactData(lang: "en" | "sk") {
  const isSk = lang === "sk";
  return {
    keypoint: isSk ? ["Neustála zákaznícka podpora", "Služby po celom svete"] : ["Always-On Customer Support", "Service Across the Globe"],
    managerProfile: {
      image: "https://placehold.co/64x64",
      name: "Courtney Henry",
      position: isSk ? "Manažérka onboardingu a úspechu" : "Onboarding & Success Manager",
    },
  };
}

function getAboutusStats(lang: "en" | "sk") {
  const isSk = lang === "sk";
  return [
    { number: 45, postfix: "+", title: isSk ? "Prítomnosť na globálnych trhoch" : "Presence in global markets", descp: isSk ? "Rozširujeme dosah s lokalizovanou expertízou a celosvetovým dopadom." : "Expanding reach across international regions with localized expertise and worldwide impact." },
    { number: 15, prefix: "$", postfix: "M", title: isSk ? "Strategické investície" : "In strategic investments", descp: isSk ? "Poháňame rast s kurátorovanými partnerstvami a výkonnými iniciatívami." : "Driving growth with curated partnerships and high-performing, audience-driven initiatives." },
    { number: 158, postfix: "+", title: isSk ? "Dôveryhodné spolupráce značiek" : "Trusted brand collaborations", descp: isSk ? "Formujeme priemyselné diskusie cez inovácie, tvorivosť a trvalý vplyv." : "Shaping industry conversations through innovation, creativity, and lasting influence." },
  ];
}

function getServicesSliderData(lang: "en" | "sk") {
  return lang === "sk"
    ? ["Branding", "Vývoj webov", "Agentúra", "Tvorba obsahu", "SaaS", "Animácie a 3D", "Fotografia"]
    : ["Branding", "Web development", "Agency", "Content creation", "SaaS", "Motion & 3d modeling", "Photography"];
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") === "en" ? "en" : "sk";

  return NextResponse.json({
    avatarList: getAvatarList(),
    statsFactData: getStatsFactData(lang),
    servicesData: getServicesData(lang),
    testimonialData: getTestimonialData(lang),
    teamData: getTeamData(lang),
    pricingData: getPricingData(lang),
    faqData: getFaqData(lang),
    contactData: getContactData(lang),
    aboutusStats: getAboutusStats(lang),
    servicesSliderData: getServicesSliderData(lang),
  });
};
