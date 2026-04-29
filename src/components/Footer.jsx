import { personalInfo } from '../data/portfolio.js'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <p className="footer-name">{personalInfo.name}</p>
            <p className="footer-title">{personalInfo.title}</p>
          </div>
          <div className="footer-divider" />
          <div className="footer-bottom">
            <p className="footer-copy">© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="footer-credit">Designed & built with React + CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}