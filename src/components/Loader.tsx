export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="animate-spin-loader h-10 w-10 rounded-full border-2 border-border border-t-accent" />
      <p className="mt-5 font-mono text-sm text-muted">
        <span className="text-accent">$ </span>
        initializing portfolio<span className="cursor-blink">_</span>
      </p>
    </div>
  )
}
