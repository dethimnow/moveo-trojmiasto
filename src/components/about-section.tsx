import { about } from "@/content/site";

export function AboutSection() {
  return (
    <section id="o-nas" className="scroll-mt-24 border-y border-navy/8 bg-gradient-to-b from-cream-dark/50 to-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {about.title}
          </h2>
          <blockquote className="mt-10 text-left text-lg leading-relaxed text-navy-muted sm:text-xl">
            <span className="font-display text-5xl font-bold leading-none text-brand/40" aria-hidden>
              “
            </span>
            <p className="-mt-6 border-l-4 border-brand pl-6 sm:pl-8">{about.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
