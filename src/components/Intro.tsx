import { motion } from 'framer-motion'
import { useEffect } from 'react'

/** The "ta-dum": a red M punches in, its light streaks out, then we cut to profiles. */
export function Intro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.button
      type="button"
      onClick={onDone}
      aria-label="Skip intro"
      className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-hidden bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        <motion.span
          className="block font-display text-[42vw] leading-none text-flix-red sm:text-[22rem]"
          style={{ textShadow: '0 0 60px rgba(229,9,20,.55)' }}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: [0.4, 1, 1.02, 9], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, times: [0, 0.25, 0.65, 1], ease: 'easeInOut' }}
        >
          M
        </motion.span>
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute top-0 h-full w-[3%]"
            style={{
              left: `${8 + i * 6}%`,
              background: `linear-gradient(to bottom, transparent, ${i % 3 ? '#E50914' : '#ff6b6b'}, transparent)`,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [0, 1.6, 3], opacity: [0, 0.8, 0] }}
            transition={{ delay: 1.1 + (i % 5) * 0.05, duration: 1.1, ease: 'easeOut' }}
          />
        ))}
      </div>
      <span className="absolute bottom-6 text-xs uppercase tracking-[0.3em] text-white/30">Click to skip</span>
    </motion.button>
  )
}
