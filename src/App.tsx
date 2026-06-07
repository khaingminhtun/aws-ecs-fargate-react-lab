import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { TerminalHero } from "./components/TerminalHero"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { LearningProgress } from "./components/LearningProgress"
import { Certifications } from "./components/Certifications"
import { Timeline } from "./components/Timeline"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { BackToTop } from "./components/BackToTop"
import { Loader } from "./components/Loader"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <TerminalHero />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningProgress />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
