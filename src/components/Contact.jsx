import { personalInfo } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Contact() {
  const { contact } = personalInfo
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label anim" ref={labelRef}>Get in touch</p>
        <h2 className="section-title anim" ref={titleRef}>Let's create<br />something great</h2>
        <div className="contact-content anim" ref={contentRef}>
          <p className="contact-intro">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="contact-link">
              <span className="contact-icon">✉</span>
              <span className="contact-label">Email</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">⚙</span>
              <span className="contact-label">GitHub</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">🔗</span>
              <span className="contact-label">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}