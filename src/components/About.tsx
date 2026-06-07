import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { aboutSummary, aboutStats } from "../data/portfolio"

export function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="section-pad" aria-label="About me">
      <SectionHeader number="02" title="About Me" />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} grid gap-8 md:grid-cols-5`}
      >
        <div className="md:col-span-3">
          <p className="text-pretty font-sans text-base leading-relaxed text-muted sm:text-lg">
            {aboutSummary}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="card card-hover p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{stat.label}</p>
              <p className="mt-2 font-sans text-base font-semibold text-text">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
