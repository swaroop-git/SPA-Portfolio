import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label anim">Career</p>
        <h2 className="section-title anim">Where I've<br />left my mark</h2>
        <div className="exp-list anim">
          {experience.map(e => (
            <div className="exp-item" key={e.role + e.co}>
              <div className="exp-meta">
                <div className="exp-dot" />
                <p className="exp-period">{e.period}</p>
                <div>
                  <span className="exp-dur">{e.dur}</span>
                  <span className="exp-type">{e.type}</span>
                </div>
              </div>
              <div className="exp-body">
                <h3 className="exp-role">{e.role}</h3>
                <div className="exp-company">
                  <span className="exp-co">{e.co}</span>
                  <span className="exp-sep" />
                  <span className="exp-loc">{e.loc}</span>
                </div>
                <ul className="exp-hl">
                  {e.hl.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}