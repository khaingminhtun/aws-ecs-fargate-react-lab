import { Github, ExternalLink, Folder } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { useReveal } from "../hooks/useReveal"
import { projects } from "../data/portfolio"

export function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" className="section-pad" aria-label="Featured projects">
      <SectionHeader number="04" title="Featured Projects" />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} grid gap-5 md:grid-cols-2`}
      >
        {projects.map((project) => (
          <article key={project.slug} className="card card-hover flex flex-col p-6">
            <div className="flex items-start justify-between">
              <Folder className="h-7 w-7 text-accent" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="text-muted transition-colors duration-200 hover:text-accent"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="text-muted transition-colors duration-200 hover:text-accent"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <h3 className="mt-4 font-sans text-xl font-semibold text-text">{project.name}</h3>
            <p className="mt-2 flex-1 text-pretty font-sans text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-code"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 font-mono text-xs font-medium text-text transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 font-mono text-xs font-medium text-text transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
