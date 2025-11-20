import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function SmoothHeader() {
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 32)
      setHidden(y > lastY.current && y > 140)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const items = [
    { href: '#services', label: 'Leistungen' },
    { href: '#why', label: 'Warum wir' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Kontakt', button: true },
  ]

  return (
    <>
      {/* Floating, glassy pill centered top — no klassische Kopfzeile */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
      >
        <div className={`group flex items-center gap-2 rounded-full border ${solid ? 'border-slate-200/70' : 'border-white/20'} shadow-lg shadow-slate-900/5 px-2 sm:px-3 py-2 backdrop-blur-md ${solid ? 'bg-white/80' : 'bg-white/40'} transition-colors`}> 
          <a href="#" className="flex items-center gap-2 pl-1 pr-2">
            <span className="h-7 w-7 rounded-xl bg-slate-900 shadow-sm" />
            <span className="hidden sm:block text-sm font-medium tracking-tight text-slate-900">Broker</span>
          </a>
          <nav className="hidden md:flex items-center">
            {items.map((it, i) => (
              <a
                key={it.href}
                href={it.href}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${it.button ? 'bg-slate-900 text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900'}`}
              >
                {it.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Menü"
            onClick={() => setOpen(true)}
            className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-white/60"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="mx-auto mt-16 w-[92%] max-w-md rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-xl bg-slate-900" />
                  <span className="text-sm font-medium tracking-tight text-slate-900">Broker</span>
                </div>
                <button onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-white">
                  <X size={18} />
                </button>
              </div>
              <div className="mt-2 divide-y divide-slate-200/60">
                {items.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 text-sm ${it.button ? 'font-medium text-white bg-slate-900 rounded-xl px-3 mt-2' : 'text-slate-800'} `}
                  >
                    <span>{it.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
