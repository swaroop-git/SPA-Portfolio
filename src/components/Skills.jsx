import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Skills() {
  const ref = useRef()
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        ref.current.querySelectorAll('.skill-bar').forEach((bar, i) => {
          setTimeout(() => {
            bar.style.transition = `transform 1.2s cubic-bezier(.4,0,.2,1)`
            bar.style.transform = 'scaleX(1)'
          }, i * 35)
        })
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label anim" ref={labelRef}>Expertise</p>
        <h2 className="section-title anim" ref={titleRef}>What I bring<br />to the table</h2>
        <div className="skills-grid anim" ref={gridRef}>
          {skills.map(s => (
            <div className="skill-card" key={s.cat}>
              <div className="skill-hdr">
                <span className={`s-icon ${s.color}`}>{s.icon}</span>
                <span className="skill-cat">{s.cat}</span>
              </div>
              {s.items.map(it => (
                <div className="skill-item" key={it.n}>
                  <div className="skill-meta">
                    <span className="skill-name">{it.n}</span>
                    <span className="skill-pct">{it.l}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className={`skill-bar ${s.color}`}
                      style={{ width: `${it.l}%`, transform: 'scaleX(0)', transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}