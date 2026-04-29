import { projects } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Projects() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label anim" ref={labelRef}>Portfolio</p>
        <h2 className="section-title anim" ref={titleRef}>Featured<br />work</h2>
        <div className="projects-grid anim" ref={gridRef}>
          {projects.map(p => (
            <div className="project-card" key={p.title} data-color={p.color}>
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-tagline">{p.tagline}</p>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-footer">
                <div className="project-stats">
                  <span className="stat">{p.stats.stars} stars</span>
                  <span className="stat">{p.stats.users}</span>
                </div>
                <div className="project-links">
                  <a href={p.link} className="project-link">View</a>
                  <a href={p.github} className="project-github">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}