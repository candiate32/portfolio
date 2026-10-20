import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { profile, skills } from '../data'

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  )
}

/** "About" styled like a title's detail page. */
export function About() {
  const groups = [...new Set(skills.map((s) => s.group))]
  return (
    <motion.section
      id="about"
      className="mx-4 scroll-mt-24 rounded-lg bg-gradient-to-br from-neutral-900 to-black p-6 ring-1 ring-white/10 sm:mx-12 sm:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-flix-red">Behind the scenes</p>
      <h2 className="mt-2 font-display text-5xl text-white sm:text-7xl">{profile.name}</h2>
      <p className="mt-1 text-sm text-neutral-400">{profile.headline}</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-lg leading-relaxed text-neutral-200">{profile.summary}</p>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Currently exploring LLM-powered workflows, predictive analytics, cloud infrastructure and CRM-led
            business automation, usually by building a prototype first and asking questions second.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-flix-red" /> {profile.location}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-flix-red" /> <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-flix-red" /> <a className="hover:underline" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
            <li className="flex items-center gap-2"><GitHubIcon className="h-4 w-4 text-flix-red" /> <a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">github.com/candiate32</a></li>
          </ul>
        </div>
        <dl className="space-y-4 text-sm">
          {groups.map((g) => (
            <div key={g}>
              <dt className="mb-1.5 text-neutral-500">{g}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {[...new Set(skills.filter((s) => s.group === g).flatMap((s) => s.items))].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-2.5 py-1 text-neutral-200">{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.section>
  )
}

/** "Are you still watching?" becomes the contact CTA. */
export function StillWatching() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 text-center sm:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white sm:text-5xl">Are you still hiring?</h2>
        <p className="mx-auto mt-3 max-w-lg text-neutral-400">
          The next episode is the one we build together. Mourya is looking for roles in applied AI, software and product.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Saw your portfolio')}`}
            className="w-64 rounded bg-white px-6 py-3 font-bold text-black transition hover:bg-white/80"
          >
            Continue to email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex w-64 items-center justify-center gap-2 rounded border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            <GitHubIcon className="h-5 w-5" /> Browse GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 pb-12 text-sm text-neutral-500 sm:px-12">
      <div className="mb-6 flex gap-5 text-neutral-300">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon className="h-6 w-6" /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail className="h-6 w-6" /></a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone"><Phone className="h-6 w-6" /></a>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {['Projects', 'Skills', 'About', 'Contact'].map((l) => (
          <li key={l}><a className="hover:underline" href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <p className="mt-8 text-xs">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind and Framer Motion. Not affiliated with Netflix, just inspired by it.
      </p>
    </footer>
  )
}
