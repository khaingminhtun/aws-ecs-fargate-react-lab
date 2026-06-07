import { Cloud, Code2, Server, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { skills } from "../data/portfolio"
import type { SkillCategory } from "../data/portfolio"

const themeMap: Record<
  SkillCategory["theme"],
  { icon: LucideIcon; text: string; border: string; dot: string }
> = {
  blue: { icon: Cloud, text: "text-code", border: "hover:border-code/50", dot: "bg-code" },
  amber: { icon: Code2, text: "text-amber", border: "hover:border-amber/50", dot: "bg-amber" },
  green: { icon: Server, text: "text-accent", border: "hover:border-accent/50", dot: "bg-accent" },
  red: { icon: Network, text: "text-[#ff6b6b]", border: "hover:border-[#ff6b6b]/50", dot: "bg-[#ff6b6b]" },
}

export function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" className="section-pad" aria-label="Skills and technology stack">
      <SectionHeader number="03" title="Skills & Technology Stack" />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} grid gap-5 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {skills.map((category) => {
          const theme = themeMap[category.theme]
          const Icon = theme.icon
          return (
            <div key={category.title} className={`card card-hover p-6 ${theme.border}`}>
              <div className="flex items-center gap-3">
                <Icon className={`h-6 w-6 ${theme.text}`} aria-hidden="true" />
                <h3 className="font-sans text-lg font-semibold text-text">{category.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:text-text"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} aria-hidden="true" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
