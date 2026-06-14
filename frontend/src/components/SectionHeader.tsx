interface SectionHeaderProps {
  number: string
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-accent">[{number}]</span>
        <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-4 h-px w-full bg-border" />
    </div>
  )
}
