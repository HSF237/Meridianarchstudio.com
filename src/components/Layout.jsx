import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PageLoader from './PageLoader.jsx'
import FloatingSocial from './FloatingSocial.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <PageLoader />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="main-site">
        {children}
      </main>
      <Footer />
      <FloatingSocial />
    </>
  )
}
