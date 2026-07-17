import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="section-panel">
      <div className="section-container">
        <p className="section-kicker">Selected work</p>
        <h2 className="heading">
          Featured <span>Projects</span>
        </h2>
        <p className="section-intro">
          A selection of projects where research, data, and development come
          together to solve practical problems.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className="project-visual"
                style={{ "--project-accent": project.accent }}
              >
                <span className="project-number">{project.number}</span>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="project-content">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-heading">
                  <h3>{project.title}</h3>
                  {project.status && (
                    <span className="status">{project.status}</span>
                  )}
                </div>
                <p>{project.description}</p>

                {project.repository && (
                  <a
                    className="project-link github-button"
                    target="_blank"
                    rel="noreferrer"
                    href={project.repository}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <i className="bx bxl-github" aria-hidden="true" />
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <a
          className="secondary-link projects-cta"
          href="https://github.com/manshavEI"
          target="_blank"
          rel="noreferrer"
        >
          Explore my GitHub
          <i className="bx bx-right-arrow-alt" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
