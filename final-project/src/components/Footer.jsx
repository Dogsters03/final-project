import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h4>Portfolio</h4>
          <p>Building beautiful web experiences with modern technologies</p>
        </div>
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h5>Connect</h5>
          <ul>
            <li><a href="mailto:hello@example.com">Email</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}
