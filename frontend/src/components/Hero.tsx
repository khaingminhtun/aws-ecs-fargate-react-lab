import { ArrowRight, Download } from "lucide-react"
import { profile } from "../data/portfolio"

export function Hero() {
  return (
    <section
      id="hero"
      className="section-pad flex flex-col items-center pt-10 text-center md:pt-12"
      aria-label="Introduction"
    >
      <div className="animate-fade-in-up flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
          <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-xs text-muted">{profile.availabilityBadge}</span>
        </div>

        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-5 font-mono text-sm text-accent sm:text-base">
          <span className="text-muted">$ </span>
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm font-medium text-background transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,255,136,0.4)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-mono text-sm font-medium text-text transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
