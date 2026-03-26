# Moveo Trójmiasto

Strona marketingowa dla [Moveo Trójmiasto](https://www.instagram.com/moveo_trojmiasto/) — Next.js (App Router), TypeScript, Tailwind CSS.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja: [http://localhost:3000](http://localhost:3000).

## Osadzanie postów z Instagrama

1. W aplikacji Instagram otwórz post lub reel → menu ⋮ → **Kopiuj link**.
2. Wklej adres URL do tablicy `instagramPostUrls` w pliku `src/content/instagram-posts.ts`.
3. Zapisz plik — sekcja „Z Instagrama” wyświetli oficjalne embedy (skrypt `instagram.com/embed.js`).

Bez dodanych linków sekcja kieruje użytkowników na profil z treścią zachęcającą do obserwowania.

## Produkcja

```bash
npm run build
npm start
```

## Konfiguracja treści

Teksty, linki i metadane: `src/content/site.ts`.
