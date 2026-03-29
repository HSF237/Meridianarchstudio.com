import Reveal from '../components/Reveal.jsx'
import { servicesFull, processSteps } from '../data/siteContent.js'

export default function Services() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1 className="headline">Transforming visions into architectural excellence.</h1>
          <p className="lede">
            From creative design and interiors to 3D visualization, project management, site planning, and renovation —
            one studio, one coherent thread of quality.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">What we offer</p>
            <h2 className="headline">Scope built around your project.</h2>
          </Reveal>
          <div className="service-list">
            {servicesFull.map((item, i) => (
              <Reveal key={item.title} delay={i * 35}>
                <div className="service-block">
                  <div className="service-block__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 21V10l8-6 8 6v11" />
                      <path d="M9 21v-6h6v6" />
                    </svg>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="service-features">
                      {item.features.map((f) => (
                        <span key={f}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h2 className="headline">How we move from brief to build.</h2>
            <p className="lede">Clear stages so you always know what comes next — and what we need from you.</p>
          </Reveal>
          <div className="process-rail">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 50}>
                <div className="process-step">
                  <span className="process-step__num">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
