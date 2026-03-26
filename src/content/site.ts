export const site = {
  name: "Moveo Trójmiasto",
  tagline: "Twoja przeprowadzka w dobrych rękach",
  description:
    "Kompleksowy transport, bezpieczne przeprowadzki i profesjonalny montaż mebli w Gdańsku, Gdyni i Sopocie. Szybko, sprawnie i bez stresu.",
  instagram: "https://www.instagram.com/moveo_trojmiasto/",
  instagramHandle: "@moveo_trojmiasto",
  /** Wyświetlany numer (spacje dla czytelności). */
  phoneDisplay: "+48 533 562 062",
  /** Bez spacji — link tel: */
  phoneHref: "tel:+48533562062",
  locale: "pl_PL",
  url: "https://moveo-trojmiasto.vercel.app",
} as const;

export const nav = [
  { href: "#dlaczego", label: "Dlaczego my" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-nas", label: "O nas" },
  { href: "#faq", label: "FAQ" },
  { href: "#instagram", label: "Instagram" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const hero = {
  eyebrow: "Przeprowadzki · Transport · Montaż",
  title: "Moveo Trójmiasto: Twoja Przeprowadzka w Dobrych Rękach",
  lead:
    "Kompleksowy transport, bezpieczne przeprowadzki i profesjonalny montaż mebli w Gdańsku, Gdyni i Sopocie. Szybko, sprawnie i bez stresu.",
  ctaPrimary: "Wyceń przeprowadzkę",
  ctaSecondary: "Sprawdź nasze usługi",
};

export const whyMoveo = {
  title: "Dlaczego Moveo?",
  intro:
    "Wybierając Moveo, stawiasz na spokój ducha. Nie tylko przewozimy rzeczy – dbamy o Twój komfort na każdym etapie zmiany adresu.",
  items: [
    {
      title: "Lokalne doświadczenie",
      body: "Doskonale znamy topografię Trójmiasta. Omijamy korki i wiemy, jak podjechać pod najciaśniejsze klatki w Sopocie czy na Przymorzu.",
    },
    {
      title: "Bezpieczeństwo przede wszystkim",
      body: "Każdy ładunek jest odpowiednio zabezpieczony pasami, matami i folią. Posiadamy pełne ubezpieczenie OCP.",
    },
    {
      title: "Punktualność i rzetelność",
      body: "Szanujemy Twój czas. Jesteśmy na miejscu o umówionej godzinie, gotowi do działania.",
    },
    {
      title: "Pełne wsparcie",
      body: "Od zniesienia ciężkiej szafy, przez transport, aż po montaż biurek w nowym biurze.",
    },
  ],
};

export const services = {
  title: "Nasze usługi",
  subtitle: "Od mieszkania po biuro — logistyka, która naprawdę działa w Trójmieście.",
  items: [
    {
      icon: "📦",
      title: "Przeprowadzki (prywatne i firmowe)",
      body: "Niezależnie, czy przeprowadzasz się do nowej kawalerki, czy przenosisz całe biuro do Olivia Business Centre – zorganizujemy to logistycznie od A do Z.",
    },
    {
      icon: "🚛",
      title: "Transport i taxi bagażowe",
      body: "Kupiłeś nową kanapę lub lodówkę? Nie czekaj tydzień na dostawę ze sklepu. Zadzwoń po Moveo – odbierzemy i dostarczymy Twój towar jeszcze tego samego dnia.",
    },
    {
      icon: "🛠",
      title: "Montaż i demontaż mebli",
      body: "Nie trać czasu na instrukcje. Nasi specjaliści sprawnie skręcą meble z IKEA, Agata Meble czy zestawy biurowe, zostawiając po sobie porządek i gotowe do użytku wnętrze.",
    },
    {
      icon: "🗑",
      title: "Utylizacja i opróżnianie pomieszczeń",
      body: "Pomagamy w czyszczeniu piwnic, strychów i garaży. Stare meble i zbędne sprzęty wywieziemy tam, gdzie ich miejsce – do punktów legalnej utylizacji.",
    },
  ],
};

export const about = {
  title: "O nas",
  quote:
    "Moveo powstało z myślą o ludziach, dla których przeprowadzka to coś więcej niż przewożenie kartonów. Wiemy, że to nowy rozdział w życiu, dlatego wkładamy całe serce w to, by ten proces był dla naszych klientów jak najlżejszy. Działamy w całym Trójmieście i okolicach, budując markę opartą na zaufaniu i solidnej, fizycznej pracy.",
};

export const faq = {
  title: "Najczęściej zadawane pytania",
  subtitle: "Krótko i konkretnie — jeśli czegoś nie ma na liście, napisz do nas.",
  items: [
    {
      q: "Czy dostarczacie kartony?",
      a: "Tak, na życzenie dostarczamy materiały pakowe (kartony, folię bąbelkową, taśmy).",
    },
    {
      q: "Ile kosztuje godzina pracy?",
      a: "Ceny ustalamy indywidualnie zależnie od liczby pracowników i trasy. Skontaktuj się z nami po szybką wycenę!",
    },
    {
      q: "Czy wnosicie ciężkie przedmioty?",
      a: "Oczywiście. Pianina, sejfy czy ciężkie antyki to dla nas codzienność.",
    },
  ],
};

export const instagramSection = {
  title: "Z Instagrama",
  subtitle:
    "Realizacje, za kulisami i bieżące terminy — śledź profil Moveo Trójmiasto, żeby nic nie umknęło.",
  emptyCta: "Otwórz profil na Instagramie",
  emptyHint:
    "Relacje, posty i szybki kontakt — tam najczęściej odpowiadamy na zapytania o wolne terminy.",
};

export const contact = {
  title: "Wyceń przeprowadzkę",
  subtitle:
    "Napisz, skąd dokąd się przeprowadzasz i co trzeba przewieźć — wrócimy z propozycją i terminem.",
  primaryLabel: "Napisz na Instagramie",
  secondaryLabel: "Zobacz nasze realizacje",
};

export const footer = {
  rights: "Moveo Trójmiasto",
  note: "Przeprowadzki i transport w Gdańsku, Gdyni, Sopocie i okolicach.",
};
