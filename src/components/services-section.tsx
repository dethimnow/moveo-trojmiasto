import { services } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="oferta" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{services.subtitle}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] p-6 transition hover:border-[#ff6b4a]/30 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#ff6b4a]/10 blur-2xl transition group-hover:bg-[#ff6b4a]/20"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6b4a]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
