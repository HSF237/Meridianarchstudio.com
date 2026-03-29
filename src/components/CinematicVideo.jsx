import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

/**
 * Background-style video: muted, loop, inline playback for mobile Safari.
 * Falls back to poster image when prefers-reduced-motion is on.
 */
export default function CinematicVideo({ src, poster, className = '', imgClassName = '' }) {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    return <img src={poster} alt="" className={`${className} ${imgClassName}`.trim()} loading="lazy" />
  }

  return (
    <video
      className={`${className}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
