import { about } from "@/content/site";

export function AboutSection() {
  return (
    <section id="o-nas" className="scroll-mt-24 border-t border-white/10 bg-[#08080b] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {about.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6"
              >
                <p className="text-3xl font-semibold tabular-nums text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-200">{s.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
