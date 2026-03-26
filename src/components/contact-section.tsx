import Link from "next/link";
import { contact, site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12121a] to-[#0a0a0c] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-4 text-lg text-zinc-400">{contact.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff6b4a] to-[#ea580c] text-base font-semibold text-[#0a0a0c] transition hover:brightness-110"
              >
                {contact.primaryLabel}
              </Link>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-base font-semibold text-white transition hover:bg-white/10"
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
