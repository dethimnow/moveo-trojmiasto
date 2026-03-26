import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_70%_at_70%_-10%,rgba(255,122,26,0.18),transparent),radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(21,34,56,0.06),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-[22rem] w-[22rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-[18rem] w-[18rem] rounded-full bg-cream-dark blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-navy/10 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-muted shadow-sm">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-muted sm:text-lg">
            {hero.lead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#kontakt"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-hover"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#uslugi"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl border-2 border-navy/15 bg-white px-8 py-3.5 text-sm font-bold text-navy transition hover:border-navy/25 hover:bg-cream-dark/50"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-navy/10 pt-8 sm:max-w-lg sm:gap-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy-muted">Zasięg</dt>
              <dd className="mt-1 font-display text-lg font-bold text-navy">3 miasta</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy-muted">OCP</dt>
              <dd className="mt-1 font-display text-lg font-bold text-navy">Pełne</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy-muted">Tempo</dt>
              <dd className="mt-1 font-display text-lg font-bold text-navy">Dziś</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white via-cream to-cream-dark opacity-90 blur-sm"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-2xl shadow-navy/10 ring-1 ring-navy/5 sm:p-8">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand/15 blur-2xl" />
            <div className="relative flex flex-col items-center text-center">
              <div className="relative w-full max-w-[280px]">
                <Image
                  src="/logo.png"
                  alt="Moveo Trójmiasto — pies za kierownicą pomarańczowej busa"
                  width={560}
                  height={560}
                  className="h-auto w-full object-contain drop-shadow-md"
                  priority
                />
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-muted">
                Lokalna ekipa, która zna Trójmiasto jak własną kieszeń — od centrum po podjazd pod samą klatkę.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
