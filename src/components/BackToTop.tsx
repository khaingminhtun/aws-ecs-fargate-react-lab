import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-accent shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.25)]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
