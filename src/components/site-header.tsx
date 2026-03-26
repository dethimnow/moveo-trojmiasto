"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-white/85 shadow-sm shadow-navy/5 backdrop-blur-xl"
          : "border-b border-transparent bg-cream/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="#" className="group flex items-center gap-3 shrink-0">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md shadow-navy/10 ring-1 ring-navy/5 transition group-hover:shadow-lg">
            <Image
              src="/logo.png"
              alt={`${site.name} — logo`}
              width={44}
              height={44}
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-tight text-navy">MOVEO</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy-muted">
              Trójmiasto
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-2.5 py-2 text-sm font-medium text-navy-muted transition-colors hover:bg-navy/5 hover:text-navy xl:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-navy-muted transition hover:text-navy sm:inline"
          >
            Instagram
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand px-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-hover sm:px-4"
          >
            <PhoneIcon className="hidden h-4 w-4 opacity-95 sm:block" aria-hidden />
            <span className="tabular-nums tracking-tight">{site.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
