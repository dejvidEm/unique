/**
 * Home hero glass carousel — edit this file only. Not tied to projects.
 * Swap `image` paths for your own files under public/ (e.g. /images/hero-carousel/photo-1.jpg).
 */
export type HeroCarouselLocaleCopy = {
  title: string;
  body: string;
};

export type HeroCarouselSlide = {
  /** Path under public/, e.g. "/images/hero-carousel/slide-1.jpg" */
  image: string;
  en: HeroCarouselLocaleCopy;
  sk: HeroCarouselLocaleCopy;
};

export const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    image: "/images/hero-carousel/slide-1.svg",
    en: {
      title: "Studio focus",
      body: "We pair strategy with craft—so every interface, story, and launch moment feels intentional, not templated.",
    },
    sk: {
      title: "Zameranie štúdia",
      body: "Spájame stratégiu s remeslom—aby každé rozhranie, príbeh a moment spustenia pôsobili zámerne, nie ako šablóna.",
    },
  },
  {
    image: "/images/hero-carousel/slide-2.svg",
    en: {
      title: "Design systems",
      body: "Tokens, components, and documentation your team can ship with—consistent today, easy to evolve tomorrow.",
    },
    sk: {
      title: "Dizajnové systémy",
      body: "Tokeny, komponenty a dokumentácia, s ktorými váš tím reálne dodáva—konzistentné dnes, jednoducho rozšíriteľné zajtra.",
    },
  },
  {
    image: "/images/hero-carousel/slide-3.svg",
    en: {
      title: "Motion & depth",
      body: "Subtle animation and spatial hierarchy that guide attention—without slowing the experience down.",
    },
    sk: {
      title: "Pohyb a hĺbka",
      body: "Jemná animácia a priestorová hierarchia, ktorá vedie pozornosť—bez spomaľovania zážitku.",
    },
  },
  {
    image: "/images/hero-carousel/slide-4.svg",
    en: {
      title: "Partnership",
      body: "Embedded with your team from discovery to handoff—clear rituals, async-friendly updates, and honest timelines.",
    },
    sk: {
      title: "Partnerstvo",
      body: "Súčasť vášho tímu od objavu po odovzdanie—jasné rituály, async-friendly aktualizácie a úprimné termíny.",
    },
  },
];
