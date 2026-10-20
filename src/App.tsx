import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { About, Footer, StillWatching } from './components/About'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Modal } from './components/Modal'
import { Navbar } from './components/Navbar'
import { ProfileGate } from './components/ProfileGate'
import { InterestsRow, Top10Row, TitleRow } from './components/Rows'
import { titles, viewers, type Title, type Viewer } from './data'

// Storage can throw (private mode, sandboxed previews), so every access is guarded.
const store = {
  get: (k: string) => { try { return sessionStorage.getItem(k) } catch { return null } },
  set: (k: string, v: string) => { try { sessionStorage.setItem(k, v) } catch { /* ignore */ } },
}

export default function App() {
  const [introDone, setIntroDone] = useState(() => store.get('intro') === '1')
  const [viewer, setViewer] = useState<Viewer | null>(() => viewers.find((v) => v.id === store.get('viewer')) ?? null)
  const [open, setOpen] = useState<Title | null>(null)

  const finishIntro = useCallback(() => { store.set('intro', '1'); setIntroDone(true) }, [])
  const pick = (v: Viewer) => { store.set('viewer', v.id); setViewer(v); window.scrollTo(0, 0) }
  const close = useCallback(() => setOpen(null), [])

  return (
    <div className="min-h-screen bg-flix-dark font-sans text-white">
      <AnimatePresence>{!introDone && <Intro key="intro" onDone={finishIntro} />}</AnimatePresence>
      <AnimatePresence>{introDone && !viewer && <ProfileGate key="gate" onPick={pick} />}</AnimatePresence>

      {viewer && (
        <>
          <Navbar viewer={viewer} onSwitch={() => setViewer(null)} />
          <Hero title={titles[viewer.hero]} onOpen={setOpen} />
          <main className="relative z-10 -mt-24 space-y-8 pb-8 sm:-mt-32 sm:space-y-10">
            {viewer.rows.map((r, i, rows) => {
              // The first rail of each kind gets the anchor the navbar links to.
              const first = rows.findIndex((x) => x.kind === r.kind) === i
              if (r.kind === 'top10') {
                const id = first ? 'skills' : undefined
                return <Top10Row key={r.label} label={r.label} onOpen={setOpen} id={id} />
              }
              if (r.kind === 'interests') return <InterestsRow key={r.label} label={r.label} />
              const id = first ? 'projects' : undefined
              return <TitleRow key={r.label} label={r.label} items={r.ids.map((t) => titles[t])} onOpen={setOpen} id={id} />
            })}
            <div className="pt-6">
              <About />
            </div>
          </main>
          <StillWatching />
          <Footer />
        </>
      )}

      <AnimatePresence>{open && <Modal key={open.id} title={open} onClose={close} />}</AnimatePresence>
    </div>
  )
}
