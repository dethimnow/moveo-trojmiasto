# Moveo Trójmiasto

Strona firmy przeprowadzkowej [Moveo Trójmiasto](https://www.instagram.com/moveo_trojmiasto/) — Next.js (App Router), TypeScript, Tailwind CSS. Jasny motyw premium (beż z logo, granat, pomarańczowy akcent), logo w `public/logo.png`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja: [http://localhost:3000](http://localhost:3000).

## Osadzanie postów z Instagrama

Wklej adresy URL postów/reels do tablicy `instagramPostUrls` w pliku `src/content/instagram-posts.ts` (Instagram → Udostępnij → Kopiuj link).

## Treści i marka

Kopię, sekcje i linki edytujesz w `src/content/site.ts`.

## Produkcja

```bash
npm run build
npm start
```
