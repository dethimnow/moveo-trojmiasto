import { services } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="uslugi" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-navy-muted">{services.subtitle}</p>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.items.map((item) => (
            <li
              key={item.title}
              className="flex gap-5 rounded-2xl border border-navy/8 bg-white p-6 shadow-sm shadow-navy/5 transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream-dark text-2xl shadow-inner"
                aria-hidden
              >
                {item.icon}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted sm:text-base">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
