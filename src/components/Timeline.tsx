import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { timeline } from "../data/portfolio"
import type { TimelineItem } from "../data/portfolio"

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} relative pl-12 pb-10 last:pb-0`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* node dot */}
      <span className="absolute left-[11px] top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center">
        <span className="h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-accent" />
      </span>

      <span className="font-mono text-xs font-medium text-accent">{item.year}</span>
      <h3 className="mt-1 font-sans text-lg font-semibold text-text">{item.title}</h3>
      <p className="mt-1 text-pretty font-sans text-sm leading-relaxed text-muted">{item.description}</p>
    </li>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="section-pad" aria-label="Journey timeline">
      <SectionHeader number="07" title="Journey Timeline" />

      <ol className="relative ml-1">
        {/* vertical line */}
        <span className="absolute left-[11px] top-1 h-full w-px bg-border" aria-hidden="true" />
        {timeline.map((item, index) => (
          <TimelineRow key={`${item.year}-${item.title}`} item={item} index={index} />
        ))}
      </ol>
    </section>
  )
}
