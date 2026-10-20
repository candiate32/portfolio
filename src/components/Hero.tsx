import { motion } from 'framer-motion'
import { Info, Play } from 'lucide-react'
import { profile, type Title } from '../data'
import { Icon, OriginalBadge } from './Poster'

export function Hero({ title, onOpen }: { title: Title; onOpen: (t: Title) => void }) {
  const [a, b, c] = title.palette
  return (
    <section id="top" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* backdrop */}
      <motion.div
        key={title.id}
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          background: `radial-gradient(70% 90% at 80% 30%, ${c}aa 0%, transparent 60%),
                       radial-gradient(60% 70% at 100% 100%, ${b} 0%, transparent 70%),
                       linear-gradient(110deg, #0b0b0b 25%, ${a} 70%, ${b} 110%)`,
        }}
      >
        <div className="grain absolute inset-0 opacity-25 mix-blend-overlay" />
        <motion.div
          className="absolute -right-24 top-10 text-white/10 sm:right-10"
          animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon name={title.icon} className="h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem]" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-flix-dark to-transparent" />

      {/* copy */}
      <div className="relative flex h-full max-w-3xl flex-col justify-end px-4 pb-28 sm:px-12 sm:pb-40">
        <motion.p
          className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <OriginalBadge className="text-3xl tracking-normal" /> {title.kind}
        </motion.p>
        <motion.h1
          key={title.id + '-h'}
          className="font-display text-7xl leading-[0.85] text-white drop-shadow-2xl sm:text-[9rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {title.title}
        </motion.h1>
        <motion.div
          className="mt-4 flex flex-wrap items-center gap-3 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="rounded-sm bg-flix-red px-1.5 py-0.5 text-xs font-bold uppercase text-white">Featured</span>
          {title.badge && <span className="font-semibold text-green-400">{title.badge}</span>}
          {title.year && <span className="text-neutral-300">{title.year}</span>}
          <span className="rounded border border-white/40 px-1.5 text-xs text-neutral-200">HD</span>
        </motion.div>
        <motion.p
          className="mt-4 max-w-xl text-base text-neutral-100 drop-shadow sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {title.tagline}
        </motion.p>
        <motion.p
          className="mt-2 max-w-xl text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Starring <span className="text-neutral-200">{profile.name}</span> · {profile.headline}
        </motion.p>
        <motion.div
          className="mt-6 flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            type="button"
            onClick={() => onOpen(title)}
            className="flex items-center gap-2 rounded bg-white px-6 py-2.5 text-base font-bold text-black transition hover:bg-white/75 sm:px-8 sm:text-lg"
          >
            <Play className="h-6 w-6 fill-black" /> Play
          </button>
          <a
            href="#about"
            className="flex items-center gap-2 rounded bg-neutral-500/60 px-6 py-2.5 text-base font-bold text-white transition hover:bg-neutral-500/40 sm:px-8 sm:text-lg"
          >
            <Info className="h-6 w-6" /> About Mourya
          </a>
        </motion.div>
      </div>

      {/* maturity-rating strip */}
      <div className="absolute bottom-40 right-0 hidden items-center border-l-4 border-white/70 bg-neutral-700/50 py-1.5 pl-3 pr-14 text-sm text-white sm:flex">
        Rated: HIRE+
      </div>
    </section>
  )
}
