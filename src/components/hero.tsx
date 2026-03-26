import Link from "next/link";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(255,107,74,0.35),transparent),radial-gradient(ellipse_60%_50%_at_100%_20%,rgba(245,158,11,0.12),transparent),radial-gradient(ellipse_50%_40%_at_0%_60%,rgba(99,102,241,0.08),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#ff6b4a]/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[22rem] w-[22rem] rounded-full bg-indigo-500/15 blur-[90px]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {hero.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {hero.lead}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#oferta"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ea580c] px-8 text-sm font-semibold text-[#0a0a0c] shadow-[0_0_40px_rgba(255,107,74,0.35)] transition hover:brightness-110"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            {hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
