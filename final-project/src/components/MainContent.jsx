import './MainContent.css'

export default function MainContent() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack web application built with React and Node.js'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task tracker with MongoDB and Express'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather app using third-party APIs'
    }
  ]

  const skills = ['React', 'Node.js', 'JavaScript', 'Docker', 'MongoDB', 'CSS', 'Git', 'REST APIs']

  return (
    <main className="main-content">
      <section id="about" className="section">
        <h3>About Me</h3>
        <p>
          I'm a passionate full-stack developer with experience building scalable web applications.
          I love working with modern technologies and creating user-friendly interfaces.
        </p>
      </section>

      <section id="projects" className="section">
        <h3>Featured Projects</h3>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
