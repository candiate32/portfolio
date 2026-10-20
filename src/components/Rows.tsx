import { motion } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight, Play, Plus } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { interests, skills, type Skill, type Title } from '../data'
import { Icon, Poster } from './Poster'

/** Horizontal rail with Netflix-style edge arrows on desktop and swipe on touch. */
function Rail({ label, id, children }: { label: string; id?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.85, behavior: 'smooth' })

  return (
    <motion.section
      id={id}
      className="group/rail relative scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="px-4 text-lg font-bold text-neutral-100 sm:px-12 sm:text-2xl">{label}</h2>
      <div
        ref={ref}
        className="no-scrollbar -my-8 flex snap-x gap-2 overflow-x-auto scroll-smooth px-4 py-10 sm:px-12"
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        className="absolute bottom-2 left-0 top-10 z-10 hidden w-12 place-items-center bg-black/50 text-white opacity-0 transition hover:bg-black/70 group-hover/rail:opacity-100 sm:grid"
      >
        <ChevronLeft className="h-9 w-9" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        className="absolute bottom-2 right-0 top-10 z-10 hidden w-12 place-items-center bg-black/50 text-white opacity-0 transition hover:bg-black/70 group-hover/rail:opacity-100 sm:grid"
      >
        <ChevronRight className="h-9 w-9" />
      </button>
    </motion.section>
  )
}

function TitleCard({ t, onOpen, first }: { t: Title; onOpen: (t: Title) => void; first: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(t)}
      className={`group relative aspect-video ${first ? 'origin-left' : ''} w-[72vw] shrink-0 snap-start rounded-md text-left outline-none transition duration-300 hover:z-20 focus-visible:z-20 sm:w-[300px] sm:hover:scale-[1.18] sm:focus-visible:scale-[1.18]`}
    >
      <div className="h-full overflow-hidden rounded-md ring-white/0 transition group-hover:shadow-2xl group-hover:shadow-black group-focus-visible:ring-2 group-focus-visible:ring-white">
        <Poster title={t.title} kicker={t.kind} icon={t.icon} palette={t.palette} />
      </div>
      {/* hover panel: slides up over the artwork (a drawer below the card would be clipped by the rail) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-2 rounded-b-md bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-neutral-950/0 px-3 pb-2.5 pt-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
        <p className="font-display text-2xl leading-none text-white">{t.title}</p>
        <div className="my-1.5 flex items-center gap-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-black"><Play className="h-3 w-3 fill-black" /></span>
          <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-neutral-500 text-white"><Plus className="h-3.5 w-3.5" /></span>
          <span className="text-[11px] font-semibold text-green-400">{t.badge}</span>
          <span className="ml-auto grid h-6 w-6 place-items-center rounded-full border-2 border-neutral-500 text-white"><ChevronDown className="h-3.5 w-3.5" /></span>
        </div>
        <p className="line-clamp-1 text-[11px] text-neutral-300">{t.genres.join(' • ')}</p>
      </div>
    </button>
  )
}

export function TitleRow({ label, items, onOpen, id }: { label: string; items: Title[]; onOpen: (t: Title) => void; id?: string }) {
  return (
    <Rail label={label} id={id}>
      {items.map((t, i) => <TitleCard key={t.id} t={t} onOpen={onOpen} first={i === 0} />)}
    </Rail>
  )
}

export function skillAsTitle(s: Skill, rank: number): Title {
  return {
    id: 'skill-' + s.name,
    title: s.name,
    kind: `#${rank} in ${s.group}`,
    tagline: s.items.join(' · '),
    genres: [s.group],
    stack: s.items,
    synopsis: `Part of the ${s.group} toolkit: ${s.items.join(', ')}.`,
    episodes: [],
    icon: s.icon,
    palette: s.palette,
  }
}

export function Top10Row({ label, onOpen, id }: { label: string; onOpen: (t: Title) => void; id?: string }) {
  return (
    <Rail label={label} id={id}>
      {skills.map((s, i) => (
        <button
          key={s.name}
          type="button"
          onClick={() => onOpen(skillAsTitle(s, i + 1))}
          className="group relative flex h-56 shrink-0 snap-start items-end outline-none sm:h-64"
        >
          <span
            className="font-display text-[12rem] leading-[0.78] text-flix-dark sm:text-[15rem]"
            style={{ WebkitTextStroke: '4px #595959' }}
            aria-hidden
          >
            {i + 1}
          </span>
          <span className="-ml-6 h-full w-36 overflow-hidden rounded-md shadow-xl transition duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white sm:-ml-8 sm:w-44">
            <Poster title={s.name} kicker={s.group} icon={s.icon} palette={s.palette} />
          </span>
        </button>
      ))}
    </Rail>
  )
}

export function InterestsRow({ label, id }: { label: string; id?: string }) {
  const tints = ['#E50914', '#2563eb', '#16a34a', '#a21caf', '#ea580c', '#0891b2']
  const icons = ['brain', 'cpu', 'cloud', 'sparkles', 'server', 'workflow'] as const
  return (
    <Rail label={label} id={id}>
      {interests.map((name, i) => (
        <div
          key={name}
          className="relative flex h-28 w-60 shrink-0 snap-start items-end overflow-hidden rounded-md p-4 sm:w-72"
          style={{ background: `linear-gradient(135deg, ${tints[i]}, #111 120%)` }}
        >
          <Icon name={icons[i]} className="absolute -right-3 -top-3 h-24 w-24 rotate-12 text-white/20" />
          <span className="relative text-lg font-bold leading-tight text-white">{name}</span>
        </div>
      ))}
    </Rail>
  )
}
