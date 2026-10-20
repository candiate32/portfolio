import { motion } from 'framer-motion'
import { CalendarDays, ExternalLink, Play, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { profile, type Title } from '../data'
import { Poster } from './Poster'

export function Modal({ title, onClose }: { title: Title; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const cta = title.link ?? { label: 'Ask Mourya about it', href: profile.booking }

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-2 py-6 backdrop-blur-sm sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-label={title.title}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-lg bg-[#181818] shadow-2xl"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 30 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#181818] text-white ring-white focus-visible:ring-2"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/8]">
          <Poster title="" icon={title.icon} palette={title.palette} big />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-300">{title.kind}</p>
            <h2 className="font-display text-5xl leading-[0.85] text-white sm:text-7xl">{title.title}</h2>
            <a
              href={cta.href}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded bg-white px-5 py-2 font-bold text-black transition hover:bg-white/75"
            >
              {title.link ? <ExternalLink className="h-5 w-5" /> : <CalendarDays className="h-5 w-5" />} {cta.label}
            </a>
          </div>
        </div>

        <div className="grid gap-6 px-6 pb-8 sm:grid-cols-[2fr_1fr] sm:px-10">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
              {title.badge && <span className="font-semibold text-green-400">{title.badge}</span>}
              {title.year && <span className="text-neutral-400">{title.year}</span>}
              <span className="rounded border border-white/40 px-1.5 text-xs text-neutral-300">HD</span>
            </div>
            <p className="mb-3 text-lg font-medium text-white">{title.tagline}</p>
            <p className="text-neutral-300">{title.synopsis}</p>
          </div>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="inline text-neutral-500">Cast: </dt>
              <dd className="inline text-neutral-200">{title.stack.join(', ')}</dd>
            </div>
            <div>
              <dt className="inline text-neutral-500">Genres: </dt>
              <dd className="inline text-neutral-200">{title.genres.join(', ')}</dd>
            </div>
            <div>
              <dt className="inline text-neutral-500">Director: </dt>
              <dd className="inline text-neutral-200">{profile.name}</dd>
            </div>
          </dl>
        </div>

        {title.episodes.length > 0 && (
          <div className="px-6 pb-10 sm:px-10">
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold text-white">Episodes</h3>
              <span className="text-sm text-neutral-400">{title.episodes.length} {title.episodes.length === 1 ? 'episode' : 'episodes'}</span>
            </div>
            <ol>
              {title.episodes.map((ep, i) => (
                <motion.li
                  key={ep.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="group relative flex cursor-default items-center gap-4 overflow-hidden rounded-md border-b border-neutral-800 p-4 transition-colors duration-300 hover:bg-neutral-800 sm:gap-6 sm:p-6"
                >
                  {/* red edge that grows in on hover */}
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-flix-red transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="w-6 shrink-0 text-center text-2xl text-neutral-400 transition-all duration-300 group-hover:scale-125 group-hover:text-white">{i + 1}</span>
                  <div className="relative hidden aspect-video w-32 shrink-0 overflow-hidden rounded sm:block">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
                      <Poster title="" icon={title.icon} palette={title.palette} />
                    </div>
                    <span className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-black/50 transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-4 w-4 fill-white text-white" />
                      </span>
                    </span>
                  </div>
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <p className="font-semibold text-white">{ep.title}</p>
                    <p className="mt-1 text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">{ep.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        )}
      </motion.article>
    </motion.div>
  )
}
