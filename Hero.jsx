export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-blob" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for new opportunities
          </div>
          <h1 className="hero-name">
            Alex<br /><em>Rivera</em>
          </h1>
          <p className="hero-sub">Full-Stack Engineer &amp; UI Architect · San Francisco, CA</p>
          <p className="hero-tagline">
            I build things that live on the web — fast, beautiful, and built to last.
            Seven years crafting products people actually love.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">↓ View my work</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
          <div className="hero-stats">
            {[
              { n: '7+', l: 'Years experience' },
              { n: '40+', l: 'Projects shipped' },
              { n: '6k', l: 'GitHub stars' },
              { n: '4', l: 'Companies' },
            ].map(s => (
              <div key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}