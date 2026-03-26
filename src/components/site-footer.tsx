import Image from "next/image";
import Link from "next/link";
import { footer, nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/8 bg-navy py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md">
            <Image
              src="/logo.png"
              alt={`${site.name} — logo`}
              width={48}
              height={48}
              className="object-contain p-1"
            />
          </span>
          <div>
            <p className="font-display text-lg font-bold">{footer.rights}</p>
            <p className="mt-1 text-sm text-white/65">{footer.note}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Profil na IG
          </Link>
        </nav>
      </div>
    </footer>
  );
}
