import { Github, Linkedin, Mail, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { contactLinks } from "../data/portfolio"
import type { ContactLink } from "../data/portfolio"

const iconMap: Record<ContactLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  file: FileText,
}

export function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="section-pad" aria-label="Contact">
      <SectionHeader number="08" title="Get In Touch" />

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} mx-auto max-w-2xl text-center`}>
        <p className="text-pretty font-sans text-base leading-relaxed text-muted sm:text-lg">
          {"I'm actively looking for junior roles and internships in DevOps and Cloud Engineering. Feel free to reach out — let's build something."}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon]
            const isExternal = !link.href.startsWith("mailto:")
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group card flex flex-col items-center gap-3 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(0,255,136,0.15)]"
              >
                <Icon className="h-6 w-6 text-muted transition-colors duration-300 group-hover:text-accent" aria-hidden="true" />
                <span className="font-mono text-sm text-text">{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
