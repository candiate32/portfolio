import type { ProfileId, Viewer } from '../data'

// Each profile gets a little face in the spirit of Netflix's smiley avatars.
const faces: Record<ProfileId, React.ReactNode> = {
  recruiter: (
    <>
      <rect x="28" y="38" width="12" height="12" rx="2" />
      <rect x="60" y="38" width="12" height="12" rx="2" />
      <path d="M25 44h50" strokeWidth="3" fill="none" />
      <path d="M32 68q18 14 36 0" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),
  engineer: (
    <>
      <path d="M30 38l8 7-8 7" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 52h14" strokeWidth="5" strokeLinecap="round" />
      <path d="M34 70q16 10 32 0" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),
  founder: (
    <>
      <circle cx="35" cy="42" r="6" />
      <circle cx="65" cy="42" r="6" />
      <path d="M28 62q22 22 44 0z" />
    </>
  ),
  curious: (
    <>
      <circle cx="35" cy="42" r="9" fill="none" strokeWidth="4" />
      <circle cx="65" cy="42" r="9" fill="none" strokeWidth="4" />
      <circle cx="37" cy="44" r="3.5" />
      <circle cx="67" cy="44" r="3.5" />
      <ellipse cx="50" cy="70" rx="7" ry="6" fill="none" strokeWidth="4" />
    </>
  ),
}

export function Avatar({ viewer, className = '' }: { viewer: Viewer; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ background: viewer.color }}
      fill="white"
      stroke="white"
      aria-hidden
    >
      {faces[viewer.id]}
    </svg>
  )
}
