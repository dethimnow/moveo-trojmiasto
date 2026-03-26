"use client";

import Script from "next/script";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { instagramSection, site } from "@/content/site";
import { instagramPostUrls } from "@/content/instagram-posts";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processEmbeds() {
  window.instgrm?.Embeds?.process();
}

export function InstagramSection() {
  const onScriptLoad = useCallback(() => {
    processEmbeds();
  }, []);

  useEffect(() => {
    processEmbeds();
  }, []);

  const hasPosts = instagramPostUrls.length > 0;

  return (
    <section
      id="instagram"
      className="scroll-mt-24 border-t border-white/10 bg-[#060608] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {instagramSection.title}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">{instagramSection.subtitle}</p>
          </div>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] px-6 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            {instagramSection.emptyCta}
          </Link>
        </div>

        {hasPosts ? (
          <>
            <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {instagramPostUrls.map((url) => (
                <div key={url} className="mb-5 break-inside-avoid">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background: "#0c0c10",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                      margin: 0,
                      maxWidth: "540px",
                      minWidth: "260px",
                      padding: 0,
                      width: "calc(100% - 2px)",
                    }}
                  />
                </div>
              ))}
            </div>
            <Script
              src="https://www.instagram.com/embed.js"
              strategy="lazyOnload"
              onLoad={onScriptLoad}
            />
          </>
        ) : (
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1020] via-[#0c0c10] to-[#0c1018] p-8 sm:p-12">
              <div
                aria-hidden
                className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#f09433]/30 to-[#bc1888]/20 blur-3xl"
              />
              <p className="relative text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Na profilu{" "}
                <span className="font-medium text-white">{site.instagramHandle}</span>{" "}
                publikujemy zajęcia, zapowiedzi, kulisy sali i krótkie formy wideo — to
                najszybszy sposób, żeby być na bieżąco z grafikiem i wydarzeniami w
                Trójmieście.
              </p>
              <p className="relative mt-6 text-sm text-zinc-500">{instagramSection.emptyHint}</p>
            </div>
            <Link
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0c0c10] p-8 transition hover:border-[#ff6b4a]/40"
            >
              <div>
                <InstagramGlyph className="h-10 w-10 text-white" />
                <p className="mt-6 text-xl font-semibold text-white">Śledź nas na żywo</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Grafik, backstage, motywacja i społeczność — w jednym miejscu.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ff6b4a] group-hover:gap-3 transition-all">
                Przejdź do profilu
                <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
