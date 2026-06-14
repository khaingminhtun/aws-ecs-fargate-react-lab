import { Award } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { certifications } from "../data/portfolio"
import type { Certification } from "../data/portfolio"

const statusStyle: Record<Certification["status"], string> = {
  Planned: "border-muted/40 bg-muted/10 text-muted",
  Learning: "border-amber/40 bg-amber/10 text-amber",
  Completed: "border-accent/40 bg-accent/10 text-accent",
}

export function Certifications() {
  const { ref, visible } = useReveal()

  return (
    <section id="certifications" className="section-pad" aria-label="Certifications">
      <SectionHeader number="06" title="Certifications" />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {certifications.map((cert) => (
          <div key={cert.title} className="card card-hover flex flex-col gap-4 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
              <Award className="h-6 w-6 text-accent" aria-hidden="true" />
            </div>
            <h3 className="font-sans text-base font-semibold leading-snug text-text">{cert.title}</h3>
            <span
              className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-xs ${statusStyle[cert.status]}`}
            >
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
