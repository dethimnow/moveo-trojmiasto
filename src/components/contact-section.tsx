import Link from "next/link";
import { contact, site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-navy/8 bg-gradient-to-br from-cream via-white to-cream-dark/30 p-8 shadow-xl shadow-navy/10 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-4 text-lg text-navy-muted">{contact.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 flex-1 items-center justify-center rounded-2xl bg-brand text-base font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-hover"
              >
                {contact.primaryLabel}
              </Link>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 flex-1 items-center justify-center rounded-2xl border-2 border-navy/15 bg-white text-base font-bold text-navy transition hover:border-navy/25 hover:bg-cream/80"
              >
                {contact.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
