import { motion } from 'framer-motion'
import { viewers, type Viewer } from '../data'
import { Avatar } from './Avatar'

export function ProfileGate({ onPick }: { onPick: (v: Viewer) => void }) {
  return (
    <motion.main
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-flix-dark px-4"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45 }}
    >
      <h1 className="mb-2 text-center text-3xl font-medium text-white sm:text-5xl">Who&rsquo;s watching?</h1>
      <p className="mb-10 text-center text-sm text-neutral-400 sm:text-base">
        Pick a profile and the site reshuffles itself for you.
      </p>
      <ul className="grid grid-cols-2 gap-6 sm:flex sm:gap-8">
        {viewers.map((v, i) => (
          <motion.li
            key={v.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            <button
              type="button"
              onClick={() => onPick(v)}
              className="group flex flex-col items-center gap-3 outline-none"
            >
              <Avatar viewer={v} className="h-28 w-28 rounded-md ring-white transition group-hover:ring-4 group-focus-visible:ring-4 sm:h-36 sm:w-36" />
              <span className="text-sm text-neutral-400 transition group-hover:text-white sm:text-lg">{v.label}</span>
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.main>
  )
}
