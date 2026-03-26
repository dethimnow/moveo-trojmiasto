"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";

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
          <Link
            href="#kontakt"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-4 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-hover"
          >
            Wycena
          </Link>
        </div>
      </div>
    </header>
  );
}
