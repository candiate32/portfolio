import {
  Brain, Cloud, Code2, Cpu, Database, GraduationCap, Megaphone, Phone, Server, Sparkles, Warehouse, Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../data'

const icons: Record<IconName, LucideIcon> = {
  warehouse: Warehouse, database: Database, phone: Phone, cpu: Cpu, megaphone: Megaphone,
  graduation: GraduationCap, code: Code2, brain: Brain, cloud: Cloud, workflow: Workflow,
  server: Server, sparkles: Sparkles,
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const I = icons[name]
  return <I className={className} aria-hidden />
}

/** The "M" ribbon Netflix puts on its originals. */
export function OriginalBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display leading-none text-flix-red drop-shadow ${className}`} aria-hidden>
      M
    </span>
  )
}

type Props = {
  title: string
  kicker?: string
  icon: IconName
  palette: [string, string, string]
  big?: boolean
}

/** Generated artwork: layered gradients, grain, a giant icon and the title. No image files needed. */
export function Poster({ title, kicker, icon, palette: [a, b, c], big }: Props) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 85% 15%, ${c}cc 0%, transparent 55%),
                     radial-gradient(90% 80% at 0% 100%, ${a} 0%, transparent 70%),
                     linear-gradient(135deg, ${a} 0%, ${b} 60%, ${c} 130%)`,
      }}
    >
      <div className="grain absolute inset-0 opacity-30 mix-blend-overlay" />
      <Icon
        name={icon}
        className={`absolute text-white/15 ${big ? '-right-10 -top-6 h-80 w-80' : '-right-4 -top-3 h-28 w-28 sm:h-32 sm:w-32'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <OriginalBadge className={`absolute left-2 top-1.5 ${big ? 'text-4xl' : 'text-2xl'}`} />
      <div className="absolute inset-x-0 bottom-0 p-3">
        {kicker && (
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{kicker}</p>
        )}
        <h3 className={`font-display leading-[0.9] tracking-wide text-white drop-shadow-lg ${big ? 'text-6xl' : 'text-3xl'}`}>
          {title}
        </h3>
      </div>
    </div>
  )
}
