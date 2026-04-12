import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Portfolio</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <Link to="/form">Form</Link>
        </nav>
      </div>
    </header>
  )
}
