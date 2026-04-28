import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const mq = window.matchMedia('(max-width: 960px)')
    if (!open || !mq.matches) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="site-header site-header--solid">
      <div className="site-header__inner">
        <Link to="/" className="site-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Meridian" className="site-logo__img" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className={`nav-toggle__bar ${open ? 'is-open' : ''}`} />
        </button>

        <nav id="primary-nav" className={`site-nav ${open ? 'is-open' : ''}`}>
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? 'is-active' : ''}`
              }
              onClick={() => setOpen(false)}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary site-nav__cta">
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}
