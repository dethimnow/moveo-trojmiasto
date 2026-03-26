import { faq } from "@/content/site";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-navy-muted">{faq.subtitle}</p>
        </div>
        <div className="mt-12 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-navy/8 bg-cream/30 transition open:border-brand/20 open:bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold text-navy sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm ring-1 ring-navy/10 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="border-t border-navy/8 px-5 pb-5 pt-0 text-navy-muted sm:px-6 sm:pb-6">
                <p className="pt-4 text-sm leading-relaxed sm:text-base">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
