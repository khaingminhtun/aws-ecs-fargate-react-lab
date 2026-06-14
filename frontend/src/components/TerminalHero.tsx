import { useEffect, useRef, useState } from "react"
import { terminalLines } from "../data/portfolio"

type Segment =
  | { type: "prompt"; text: string }
  | { type: "output"; text: string; color: "accent" | "text" | "code" }

// Flatten the terminal lines into a sequence of typed/printed segments.
function buildSegments(): Segment[] {
  const segments: Segment[] = []
  terminalLines.forEach((line) => {
    segments.push({ type: "prompt", text: line.command })
    line.output.forEach((out) => {
      segments.push({ type: "output", text: out, color: line.outputColor })
    })
  })
  return segments
}

const outputColorClass: Record<string, string> = {
  accent: "text-accent",
  text: "text-text",
  code: "text-code",
}

export function TerminalHero() {
  const segments = buildSegments()
  const [rendered, setRendered] = useState<Segment[]>([])
  const [typing, setTyping] = useState("")
  const indexRef = useRef(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    function next() {
      const current = segments[indexRef.current]
      if (!current) return

      if (current.type === "prompt") {
        // type the command character by character
        let charIndex = 0
        const typeChar = () => {
          charIndex++
          setTyping(current.text.slice(0, charIndex))
          if (charIndex < current.text.length) {
            timeout = setTimeout(typeChar, 45)
          } else {
            timeout = setTimeout(() => {
              setRendered((prev) => [...prev, current])
              setTyping("")
              indexRef.current++
              next()
            }, 350)
          }
        }
        typeChar()
      } else {
        // print output instantly with a small delay
        timeout = setTimeout(() => {
          setRendered((prev) => [...prev, current])
          indexRef.current++
          next()
        }, 220)
      }
    }

    next()
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isTypingPrompt = segments[indexRef.current]?.type === "prompt"
  const finished = indexRef.current >= segments.length

  return (
    <section id="terminal" className="section-pad pt-28 md:pt-32" aria-label="Terminal introduction">
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-accent">[01]</span>
        <span className="font-mono text-sm text-muted">~/portfolio</span>
      </div>

      <div className="card mx-auto max-w-3xl overflow-hidden accent-glow">
        {/* terminal header */}
        <div className="flex items-center gap-2 border-b border-border bg-[#0d1117] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-muted">bash — 80×24</span>
        </div>

        {/* terminal body */}
        <div className="min-h-[280px] bg-[#0d1117] p-5 font-mono text-sm leading-relaxed sm:p-6 sm:text-[15px]">
          {rendered.map((seg, i) =>
            seg.type === "prompt" ? (
              <div key={i} className="flex flex-wrap gap-2">
                <span className="text-accent">$</span>
                <span className="text-text">{seg.text}</span>
              </div>
            ) : (
              <div key={i} className={`pl-4 ${outputColorClass[seg.color]}`}>
                {seg.text}
              </div>
            ),
          )}

          {!finished && (
            <div className={isTypingPrompt ? "flex flex-wrap gap-2" : "pl-4"}>
              {isTypingPrompt && <span className="text-accent">$</span>}
              <span className="text-text">
                {typing}
                <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
              </span>
            </div>
          )}

          {finished && (
            <div className="flex flex-wrap gap-2">
              <span className="text-accent">$</span>
              <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-accent" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
