export function Footer() {
  return (
    <footer className="border-t border-border" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-12 text-center sm:px-8">
        <p className="font-mono text-sm text-accent">{"<built with ambition />"}</p>
        <p className="font-mono text-sm text-text">Junior DevOps / Cloud Engineer</p>
        <p className="font-mono text-xs text-muted">Open to opportunities</p>
        <p className="mt-3 font-mono text-xs text-muted">
          {`© ${new Date().getFullYear()} YOUR_NAME`}
        </p>
      </div>
    </footer>
  )
}
