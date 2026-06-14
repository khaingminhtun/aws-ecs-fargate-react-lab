import { useEffect, useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { navItems, profile } from "../data/portfolio"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
        <button
          onClick={() => handleClick("hero")}
          className="flex items-center gap-2 font-mono text-sm font-semibold text-text transition-colors hover:text-accent"
        >
          <Terminal className="h-5 w-5 text-accent" aria-hidden="true" />
          {profile.name}
        </button>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`rounded-md px-3 py-1.5 font-mono text-sm transition-colors duration-200 ${
                  active === item.id ? "text-accent" : "text-muted hover:text-text"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full rounded-md px-3 py-2.5 text-left font-mono text-sm transition-colors ${
                    active === item.id ? "text-accent" : "text-muted hover:text-text"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
