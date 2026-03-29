import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectVideo from '../components/ProjectVideo.jsx'
import CinematicVideo from '../components/CinematicVideo.jsx'
import { categories, projects, projectsWithVideo, BAYT_MARYAM_VIDEO } from '../data/projects.js'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const list = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  const videosForFilter = useMemo(() => projectsWithVideo(list), [list])

  return (
    <>
      <header className="page-hero page-hero--video">
        <div className="page-hero__media">
          <CinematicVideo src={BAYT_MARYAM_VIDEO} poster="" />
        </div>
        <div className="page-hero__overlay" />
        <div className="wrap relative z-high">
          <p className="eyebrow">Portfolio</p>
          <h1 className="headline">Projects &amp; walkthroughs.</h1>
          <p className="lede">
            Explore films for select commissions, then browse the full gallery. Every frame is tuned for climate,
            culture, and how you actually live or work in the space.
          </p>
          <div className="filter-row" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter-btn ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      {videosForFilter.length > 0 ? (
        <section className="section section--video section--tight" aria-labelledby="films-heading">
          <div className="wrap">
            <Reveal>
              <h2 id="films-heading" className="headline headline--section">
                Project films
              </h2>
              <p className="lede lede--narrow">
                Short walkthrough clips — tap play on mobile or desktop. You can swap in your own project MP4s anytime.
              </p>
            </Reveal>
            <div className="project-video-grid">
              {videosForFilter.map((p, i) => (
                <Reveal key={`${p.id}-video`} delay={i * 60}>
                  <ProjectVideo title={p.title} location={p.location} poster={p.videoPoster} src={p.video} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <h2 className="headline headline--section">Still gallery</h2>
            <p className="lede lede--narrow">Photography and renders — consistent crops for fast loading on phones.</p>
          </Reveal>
          <div className="project-grid">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={i * 35}>
                <article className="project-card">
                  <div className="project-card__img">
                    {p.spotlight ? (
                      <span className="project-card__spotlight">Featured</span>
                    ) : null}
                    {p.video ? <span className="project-card__has-video">Film</span> : null}
                    <img src={p.image} alt="" loading="lazy" width={900} height={675} />
                  </div>
                  <div className="project-card__body">
                    <p className="project-card__tag">{p.category}</p>
                    <h2 className="project-card__title">{p.title}</h2>
                    <p className="project-card__meta">{p.location}</p>
                    <p className="project-card__meta project-card__meta--blurb">{p.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
