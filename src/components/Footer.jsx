import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center sm:flex-row sm:justify-between sm:gap-3 sm:px-6 sm:text-left">

        <p className="font-display text-sm font-extrabold tracking-[0.3em] text-paper">
          NAZ <span className="text-brass">muhammad</span>
        </p>

        <p className="font-sans text-xs text-muted">
          &copy; {new Date().getFullYear()} — built as a learning project.
        </p>

      </div>
    </footer>
  )
}

export default Footer