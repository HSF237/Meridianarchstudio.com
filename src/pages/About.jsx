import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { aboutPhilosophy, team, timeline, values } from '../data/siteContent.js'

const heroImg =
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85'

const philosophyImg =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82'

const VALUE_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 3l9 4.5v6c0 5-3.5 9.5-9 11-5.5-1.5-9-6-9-11v-6l9-4.5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 22c4.5-3 8-7 8-12a8 8 0 10-16 0c0 5 3.5 9 8 12z" />
    <circle cx="12" cy="10" r="2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 15l-2 5 2-2 2 2-2-5z" />
    <path d="M8 15h8M12 3v10" />
  </svg>,
]

export default function About() {
  const principal = team[0]

  return (
    <>
      <section className="about-hero" aria-label="About Meridian Arch Studio">
        <div className="about-hero__media">
          <img src={heroImg} alt="" width={1800} height={1000} fetchPriority="high" />
        </div>
        <div className="about-hero__overlay" />
        <div className="about-hero__grain" aria-hidden="true" />
        <div className="about-hero__content wrap">
          <p className="about-hero__eyebrow">Meridian Arch Studio</p>
          <h1 className="about-hero__title">Architecture rooted in place. Designed for people.</h1>
          <p className="about-hero__lede">
            From Payyannur to projects across South India — we combine Kerala’s craft sensibility with disciplined
            planning, visualization, and site delivery.
          </p>
          <ul className="about-hero__stats">
            <li>
              <strong>15+</strong>
              <span>Years of practice</span>
            </li>
            <li>
              <strong>120+</strong>
              <span>Completed works</span>
            </li>
            <li>
              <strong>KL · KA · TN</strong>
              <span>Regional footprint</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="about-philosophy section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Philosophy</p>
            <h2 className="headline about-philosophy__headline">Why we build the way we do.</h2>
          </Reveal>

          <div className="about-philosophy__layout">
            <Reveal>
              <blockquote className="about-pullquote">
                <span className="about-pullquote__mark" aria-hidden="true">
                  “
                </span>
                Architecture is more than structures — it is space that inspires, connects, and endures.
              </blockquote>
            </Reveal>

            <div className="about-philosophy__copy">
              {aboutPhilosophy.map((para, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <p className="about-philosophy__para">{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <figure className="about-philosophy__figure">
                <img src={philosophyImg} alt="Interior light and architectural detail" loading="lazy" />
                <figcaption>Light, material, and climate — three voices in every Meridian project.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-principal" aria-labelledby="principal-heading">
        <div className="about-principal__grid wrap">
          <Reveal>
            <div className="about-principal__visual">
              <img src={principal.image} alt={principal.name} loading="lazy" />
              <div className="about-principal__visual-caption">{principal.role}</div>
            </div>
          </Reveal>
          <div className="about-principal__text">
            <Reveal>
              <p className="eyebrow">Leadership</p>
              <h2 id="principal-heading" className="about-principal__title">
                {principal.name}
              </h2>
              <p className="about-principal__role">{principal.role}</p>
              <p className="about-principal__bio">
                Principal-led design means your project is never handed off to an anonymous desk. We stay in the room —
                from first sketch through contractor coordination — so intent survives all the way to the handrail and
                the shadow line.
              </p>
              <ul className="about-principal__list">
                <li>Design direction &amp; approvals</li>
                <li>3D visualization &amp; client walkthroughs</li>
                <li>Site reviews at critical milestones</li>
              </ul>
              <Link className="btn btn--primary about-principal__cta" to="/contact">
                Work with us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-journey section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Our journey</p>
            <h2 className="headline">Milestones, not marketing fluff.</h2>
            <p className="lede about-journey__lede">
              A concise history of how the studio evolved — from a Kerala-focused practice to a multidisciplinary team
              with visualization and commercial expertise.
            </p>
          </Reveal>

          <div className="about-milestones">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 70}>
                <article className="milestone-card">
                  <span className="milestone-card__year">{item.year}</span>
                  <h3 className="milestone-card__title">{item.title}</h3>
                  <p className="milestone-card__text">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values section section--tight">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="headline">What clients feel when they work with us.</h2>
          </Reveal>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 55}>
                <article className="about-value-card">
                  <span className="about-value-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="about-value-card__icon">{VALUE_ICONS[i]}</div>
                  <h3 className="about-value-card__title">{v.title}</h3>
                  <p className="about-value-card__text">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band about-cta">
              <p className="eyebrow" style={{ color: 'rgba(255,253,248,0.65)' }}>
                Next step
              </p>
              <h2 className="headline">See the work — then tell us about your site.</h2>
              <p className="lede">
                Browse projects, services, and reach out from Payyannur for a conversation that starts with listening.
              </p>
              <div className="btn-wrap about-cta__actions">
                <Link className="btn btn--primary" to="/projects">
                  View projects
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Contact studio
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
