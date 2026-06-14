import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { learning } from "../data/portfolio"

export function LearningProgress() {
  const { ref, visible } = useReveal()

  return (
    <section id="learning" className="section-pad" aria-label="Currently learning">
      <SectionHeader number="05" title="Currently Learning" />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} grid gap-x-10 gap-y-7 md:grid-cols-2`}
      >
        {learning.map((item, index) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-text">{item.label}</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Active
                </span>
              </div>
              <span className="font-mono text-sm text-accent">{item.percent}%</span>
            </div>

            <div
              className="h-2.5 w-full overflow-hidden rounded-full bg-background"
              role="progressbar"
              aria-valuenow={item.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={item.label}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-code transition-[width] duration-1000 ease-out"
                style={{
                  width: visible ? `${item.percent}%` : "0%",
                  transitionDelay: `${index * 120}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
