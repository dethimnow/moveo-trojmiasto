export const site = {
  name: "Moveo Trójmiasto",
  tagline: "Ruch, który ma sens w mieście",
  description:
    "Moveo Trójmiasto to przestrzeń treningu i ruchu w aglomeracji Gdańsk · Gdynia · Sopot. Łączymy technikę, energię grupy i indywidualne tempo — bez presji i bez pustych haseł.",
  instagram: "https://www.instagram.com/moveo_trojmiasto/",
  instagramHandle: "@moveo_trojmiasto",
  locale: "pl_PL",
  url: "https://moveo-trojmiasto.pl",
} as const;

export const nav = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#instagram", label: "Z Instagrama" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const hero = {
  eyebrow: "Trójmiasto",
  title: "Trening i ruch,\nktóre pasują\ndo Twojego dnia",
  lead:
    "Zajęcia grupowe, wsparcie przy starcie i trening układany pod Twój cel — od pierwszej wizyty po regularną praktykę.",
  ctaPrimary: "Zobacz ofertę",
  ctaSecondary: "Obserwuj na Instagramie",
};

export const about = {
  title: "Kim jesteśmy",
  paragraphs: [
    "Moveo Trójmiasto powstało z potrzeby normalnego, mądrego podejścia do ruchu w dużym mieście: masz mało czasu, czasem bolą plecy od biurka, a czasem po prostu chcesz wrócić do formy bez presji „bycia na siłowni siedem dni w tygodniu”.",
    "Na sali liczy się technika, bezpieczeństwo i atmosfera, w której da się zostać na dłużej. Uczymy się nawyków, które da się przenieść poza trening — do pracy, rodziny i codziennych spraw.",
  ],
  stats: [
    { value: "3", label: "miasta w jednym miejscu", sub: "Gdańsk · Gdynia · Sopot" },
    { value: "100%", label: "focus na jakości ruchu", sub: "bez pośpiechu i bez chaosu" },
    { value: "∞", label: "poziomów zaawansowania", sub: "startujesz tam, gdzie jesteś" },
  ],
};

export const services = {
  title: "Co oferujemy",
  subtitle:
    "Wszystko, czego potrzebujesz, żeby wejść w rytm — bez zobowiązań, których nie rozumiesz.",
  items: [
    {
      title: "Zajęcia grupowe",
      body: "Energia grupy, stały plan i trener, który pilnuje techniki. Dobierasz intensywność i częstotliwość pod siebie.",
    },
    {
      title: "Trening personalny",
      body: "Indywidualny plan, tempo i feedback w czasie rzeczywistym. Dla osób po przerwie, przed wydarzeniem albo z konkretnym celem.",
    },
    {
      title: "Mobilność i regeneracja",
      body: "Praca nad zakresem ruchu, stabilizacją i „ściągnięciem” napięcia po mieście i biurku.",
    },
    {
      title: "Wydarzenia i firmy",
      body: "Warsztaty ruchu dla zespołów — krótkie, konkretne sesje, które da się wcisnąć w dzień pracy.",
    },
  ],
};

export const instagramSection = {
  title: "Z Instagrama",
  subtitle:
    "Najświeższe kadry, zapowiedzi zajęć i kulisy sali — wszystko na bieżąco na profilu Moveo Trójmiasto.",
  emptyCta: "Otwórz profil na Instagramie",
  emptyHint:
    "Najnowsze treści zawsze na profilu — zapisz się na relacje, żeby nie przegapić terminów i wolnych miejsc.",
};

export const contact = {
  title: "Kontakt",
  subtitle:
    "Najszybciej odpowiadamy na Instagramie — tam też znajdziesz aktualny grafik i zapowiedzi zajęć.",
  primaryLabel: "Napisz na Instagramie",
  secondaryLabel: "Śledź aktualności",
};

export const footer = {
  rights: "Moveo Trójmiasto",
  note: "Ruch zaczyna się od pierwszego kroku.",
};
