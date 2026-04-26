"use client"

export function FooterMinimal() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative w-full px-4 pb-6 sm:px-6 sm:pb-8">
      <div className="mx-auto max-w-[1600px]">
        {/* Stripe */}
        <div className="term-border-2 grid grid-cols-12">
          <div className="col-span-3 h-2 bg-phos" />
          <div className="col-span-3 h-2 bg-amber" />
          <div className="col-span-3 h-2 bg-phos-300" />
          <div className="col-span-3 h-2 bg-term" />
        </div>

        {/* Footer bar */}
        <div className="term-border-2 mt-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-6 md:col-span-4 flex items-center gap-3 px-4 py-3">
            <span className="font-display text-xs text-phos glow leading-none">SB.exe</span>
            <span className="label-mono-sm text-phos-300">© {year}</span>
          </div>
          <div className="hidden md:flex md:col-span-3 items-center px-4 py-3 label-mono text-phos-300">
            BUILT NEXT · TS · TAILWIND
          </div>
          <div className="hidden md:flex md:col-span-3 items-center px-4 py-3 label-mono text-phos-300">
            34.02°N — 118.28°W
          </div>
          <a
            href="#top"
            data-cursor="UP"
            className="col-span-6 md:col-span-2 flex items-center justify-between bg-amber px-4 py-3 text-term transition-colors hover:bg-phos"
          >
            <span className="label-mono">$ scroll-top</span>
            <span className="font-display text-xs leading-none">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
