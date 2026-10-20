import { AnimatePresence, motion } from 'framer-motion'
import { Bell, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Viewer } from '../data'
import { Avatar } from './Avatar'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ viewer, onSwitch }: { viewer: Viewer; onSwitch: () => void }) {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState<null | 'bell' | 'profile'>(null)

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const toggle = (m: 'bell' | 'profile') => setMenu((cur) => (cur === m ? null : m))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-500 ${
        solid ? 'bg-flix-dark/95 shadow-lg backdrop-blur' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 items-center gap-6 px-4 sm:px-12">
        <a href="#top" className="font-display text-3xl tracking-wider text-flix-red sm:text-4xl">
          MOURYA
        </a>
        <ul className="hidden gap-5 text-sm text-neutral-200 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-neutral-400">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="relative ml-auto flex items-center gap-4">
          <button type="button" aria-label="Notifications" onClick={() => toggle('bell')} className="relative text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 grid h-4 w-4 place-items-center rounded-full bg-flix-red text-[10px] font-bold">1</span>
          </button>
          <button type="button" onClick={() => toggle('profile')} className="flex items-center gap-1.5" aria-label="Profile menu">
            <Avatar viewer={viewer} className="h-8 w-8 rounded" />
            <ChevronDown className={`h-4 w-4 text-white transition ${menu === 'profile' ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {menu && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="absolute right-0 top-11 w-72 rounded border border-white/10 bg-black/95 p-4 text-sm text-neutral-200 shadow-2xl"
              >
                {menu === 'bell' ? (
                  <a href="#contact" onClick={() => setMenu(null)} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-flix-red" />
                    <span>
                      <span className="block font-semibold text-white">New arrival</span>
                      Mourya is open to internships and full-time roles in AI, software and product. Tap to get in touch.
                    </span>
                  </a>
                ) : (
                  <>
                    <p className="mb-3 text-neutral-400">Watching as <span className="text-white">{viewer.label}</span></p>
                    <button
                      type="button"
                      onClick={() => { setMenu(null); onSwitch() }}
                      className="w-full rounded bg-white/10 px-3 py-2 text-left transition hover:bg-white/20"
                    >
                      Switch profile
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
