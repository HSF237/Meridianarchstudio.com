import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import CinematicVideo from '../components/CinematicVideo.jsx'
import { useProjects } from '../hooks/useProjects.js'
import {
  homeHero,
  welcome,
  pillars,
  servicesHome,
  testimonials,
  marqueeItems,
} from '../data/siteContent.js'

const heroImg =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=82'

const introImg =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80'

export default function Home() {
  const { projects, featuredProjects: featured, loading } = useProjects()
  const spotlight = projects.find((p) => p.spotlight) || featured[0] || projects[0]

  return (
    <>
      <section className="home-hero" aria-label="Introduction">
        <div className="home-hero__media">
          <img src={heroImg} alt="" width={1600} height={900} fetchPriority="high" />
        </div>
        <div className="home-hero__overlay" />
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">{homeHero.eyebrow}</p>
          <h1 className="home-hero__title">{homeHero.title}</h1>
          <p className="home-hero__subtitle">{homeHero.subtitle}</p>
          <div className="home-hero__actions">
            <Link className="btn btn--primary" to="/projects">
              Explore projects
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Book a consultation
            </Link>
          </div>
          <div className="home-hero__meta">
            <div className="home-hero__stat">
              <strong>15+</strong>
              <span>Years of practice</span>
            </div>
            <div className="home-hero__stat">
              <strong>120+</strong>
              <span>Projects delivered</span>
            </div>
            <div className="home-hero__stat">
              <strong>3D</strong>
              <span>Visualization lab</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="section">
        <div className="wrap intro-split">
          <Reveal>
            <p className="eyebrow">Welcome</p>
            <h2 className="headline">{welcome.title}</h2>
            <p className="lede">{welcome.body}</p>
            <div className="pillar-grid">
              {pillars.map((p) => (
                <div key={p.title} className="pillar-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="intro-split__visual">
              <img src={introImg} alt="Architecture and interior detail" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="spotlight" aria-labelledby="spotlight-title">
        <div className="spotlight__media">
          {spotlight.video ? (
            <CinematicVideo
              src={spotlight.video}
              poster={spotlight.videoPoster || spotlight.image}
              className="spotlight__vid"
            />
          ) : (
            <img src={spotlight.image} alt="" loading="lazy" />
          )}
        </div>
        <div className="spotlight__overlay" />
        <div className="spotlight__content">
          <p className="spotlight__label">Featured project</p>
          <h2 id="spotlight-title" className="spotlight__title">
            {spotlight.title}
          </h2>
          <p className="spotlight__text">{spotlight.blurb}</p>
          <Link className="btn btn--primary" to="/projects">
            View portfolio
          </Link>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="headline">What we design &amp; deliver.</h2>
            <p className="lede">
              Explore our latest work — from tranquil homes to bold commercial spaces. Every project is a balance of
              light, flow, and modern comfort.
            </p>
          </Reveal>
          <div className="services-home-grid">
            {servicesHome.map((s) => (
              <Reveal key={s.title}>
                <div className="service-home-card">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-actions">
            <Link className="btn btn--dark" to="/services">
              Full service scope
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="headline">Built for place, not for trends.</h2>
            <p className="lede">A curated set of recent commissions — Bayt Maryam, villas, workplaces, and retreats.</p>
          </Reveal>

          <div className="bento">
            <article className="bento__item bento__item--lg">
              <img src={featured[0].image} alt="" loading="lazy" />
              <div className="bento__caption">
                <h3>{featured[0].title}</h3>
                <p>{featured[0].location}</p>
              </div>
            </article>
            <article className="bento__item bento__item--sm">
              <img src={featured[1].image} alt="" loading="lazy" />
              <div className="bento__caption">
                <h3>{featured[1].title}</h3>
                <p>{featured[1].location}</p>
              </div>
            </article>
            <article className="bento__item bento__item--sm">
              <img src={featured[2].image} alt="" loading="lazy" />
              <div className="bento__caption">
                <h3>{featured[2].title}</h3>
                <p>{featured[2].location}</p>
              </div>
            </article>
          </div>

          <Reveal className="center-actions">
            <Link className="btn btn--dark" to="/projects">
              View all projects
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Proof</p>
            <h2 className="headline">Trusted by homeowners &amp; businesses.</h2>
            <p className="lede">
              Real feedback from residential, commercial, and villa clients — the same care we bring to every new
              brief.
            </p>
          </Reveal>
          <div className="testimonial-wall">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <blockquote className="testimonial-card">
                  <p>“{t.quote}”</p>
                  <footer>
                    {t.name}
                    <span>{t.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <p className="eyebrow" style={{ color: 'rgba(255,253,248,0.65)' }}>
                Next step
              </p>
              <h2 className="headline">Ready to build your dream?</h2>
              <p className="lede">
                Share your site, timeline, and ambitions. We respond with a clear path from concept to construction
                drawings.
              </p>
              <div className="btn-wrap">
                <Link className="btn btn--primary" to="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
