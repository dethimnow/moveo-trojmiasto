import { whyMoveo } from "@/content/site";

export function WhyMoveoSection() {
  return (
    <section id="dlaczego" className="scroll-mt-24 border-t border-navy/8 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {whyMoveo.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-muted">{whyMoveo.intro}</p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {whyMoveo.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-navy/8 bg-cream/40 p-6 transition hover:border-brand/25 hover:bg-white hover:shadow-lg hover:shadow-navy/5 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute -right-4 -top-4 font-display text-7xl font-bold text-navy/[0.04] transition group-hover:text-brand/10"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-display text-lg font-bold text-navy">{item.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-navy-muted sm:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
