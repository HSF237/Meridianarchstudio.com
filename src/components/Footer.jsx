import { Link } from 'react-router-dom'
import { contact, social, welcome } from '../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="Meridian Arch Studio" className="footer-logo-img" />
          <p className="footer-tagline">{welcome.body}</p>
        </div>
        <div>
          <p className="footer-heading">Studio</p>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Connect</p>
          <ul className="footer-links">
            <li>{contact.addressLine1}</li>
            <li>
              <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li className="footer-social">
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <span aria-hidden="true">·</span>
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <span aria-hidden="true">·</span>
              <a href={social.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p>© {new Date().getFullYear()} Meridian Arch Studio. All rights reserved.</p>
        <Link to="/staff" style={{ opacity: 0.5, fontSize: '0.75rem', textDecoration: 'none' }}>Staff Portal</Link>
      </div>
    </footer>
  )
}
