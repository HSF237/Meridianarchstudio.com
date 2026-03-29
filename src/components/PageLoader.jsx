import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setTimeout(() => setDone(true), 700)
    })
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <div className={`page-loader ${done ? 'is-done' : ''}`} aria-hidden="true">
      <div className="page-loader__inner">
        <span className="page-loader__line" />
        <span className="page-loader__word">Meridian</span>
      </div>
    </div>
  )
}
