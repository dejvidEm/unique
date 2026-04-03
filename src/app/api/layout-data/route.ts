import { NextResponse } from "next/server";

const MenuDataEn = [
  { id: 1, title: "Home", path: "/", newTab: false },
  { id: 2, title: "About", path: "/about", newTab: false },
  { id: 5, title: "Services", path: "/#services", newTab: false },
  { id: 3, title: "Projects", path: "/projects", newTab: false },
  { id: 4, title: "Blog", path: "/blog", newTab: false },
  { id: 6, title: "Contact", path: "/contact", newTab: false },
];

const MenuDataSk = [
  { id: 1, title: "Domov", path: "/", newTab: false },
  { id: 2, title: "O nás", path: "/about", newTab: false },
  { id: 5, title: "Služby", path: "/#services", newTab: false },
  { id: 3, title: "Projekty", path: "/projects", newTab: false },
  { id: 4, title: "Blog", path: "/blog", newTab: false },
  { id: 6, title: "Kontakt", path: "/contact", newTab: false },
];

const footerDataEn = {
  name: "Unique",
  tagline: "Build something together?",
  info: [
    { icon: "/images/footer/email-arrow.svg", link: "info@unique.sk", href: "mailto:info@unique.sk" },
    { icon: "/images/footer/Location.svg", link: "Zwolle Netherlands", href: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8" },
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/projects" },
    { name: "Terms", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Error 404", href: "/not-found" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" },
  ],
  copyright: "© Unique copyright 2025",
};

const footerDataSk = {
  name: "Unique",
  tagline: "Postavme niečo spoločne?",
  info: [
    { icon: "/images/footer/email-arrow.svg", link: "info@unique.sk", href: "mailto:info@unique.sk" },
    { icon: "/images/footer/Location.svg", link: "Zwolle Netherlands", href: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8" },
  ],
  links: [
    { name: "Domov", href: "/" },
    { name: "O nás", href: "/about" },
    { name: "Služby", href: "/#services" },
    { name: "Práca", href: "/projects" },
    { name: "Obchodné podmienky", href: "/terms-and-conditions" },
    { name: "Ochrana súkromia", href: "/privacy-policy" },
    { name: "Chyba 404", href: "/not-found" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" },
  ],
  copyright: "© Unique autorské práva 2025",
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") === "en" ? "en" : "sk";
  const MenuData = lang === "en" ? MenuDataEn : MenuDataSk;
  const footerData = lang === "en" ? footerDataEn : footerDataSk;
  return NextResponse.json({ footerData, MenuData });
};
