import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experiences', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_rgba(59,130,246,0.15)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-400 to-blue-500 shadow-[0_0_30px_rgba(236,72,153,0.35)]" />
              <span className="font-semibold text-slate-800">Dahlia</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-white/60 border border-transparent hover:border-white/60 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/60 bg-white/60"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/60 px-2 pb-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/60 mt-2 text-slate-700"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
