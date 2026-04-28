import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { contact, faqItems } from '../data/siteContent.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get('name')?.toString().trim() || ''
    const email = fd.get('email')?.toString().trim() || ''
    const phone = fd.get('phone')?.toString().trim() || ''
    const subject = fd.get('subject')?.toString().trim() || ''
    const message = fd.get('message')?.toString().trim() || ''

    const text = [
      '*New inquiry — Meridian Arch Studio*',
      '',
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Subject:* ${subject}`,
      '',
      '*Message:*',
      message,
    ].join('\n')

    const url = `https://wa.me/${contact.phoneWhatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1 className="headline">Get in touch.</h1>
          <p className="lede">
            Tell us about your site, budget band, and timeline. We typically reply within two business days — or message
            us on WhatsApp for a faster hello.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap contact-layout">
          <Reveal>
            <div className="contact-card">
              <h2>Send a message</h2>
              <p>We’ll open WhatsApp with your details so you can send in one tap.</p>
              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="phone">Phone (WhatsApp)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98958 76084"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message…" required />
                </div>
                <button type="submit" className="btn btn--primary">
                  Send via WhatsApp
                </button>
                {sent && (
                  <p className="form-status" role="status">
                    WhatsApp should open with your message. If it didn’t, call {contact.phoneDisplay}.
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <aside className="contact-aside">
              <h2>Office</h2>
              <dl>
                <dt>Address</dt>
                <dd>{contact.addressLine1}</dd>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                </dd>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
                <dt>Hours</dt>
                <dd>{contact.hours}</dd>
              </dl>
              <div className="map-container">
                <iframe
                  title={contact.mapLabel}
                  src={contact.mapIframeUrl}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="headline">Answers before we meet.</h2>
          </Reveal>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={item.q} className={`faq-item ${openFaq === i ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-item__a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
