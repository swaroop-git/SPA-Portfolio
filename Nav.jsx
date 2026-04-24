import { useTheme } from '../App.jsx'
import './Nav.css'

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">Alex<span>.</span></a>
        <ul className="nav-links">
          {['skills','experience','projects','contact'].map(id => (
            <li key={id}><a href={`#${id}`}>{id}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <span className="theme-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" />
        </div>
      </div>
    </nav>
  )
}