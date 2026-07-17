import { skillCarousel } from "../data/portfolio";

function About() {
  const strengths = [
    {
      icon: "bx bx-code-alt",
      title: "Web Development",
      description:
        "Responsive, accessible interfaces built with modern web technologies.",
    },
    {
      icon: "bx bx-line-chart",
      title: "Data Analytics",
      description:
        "Clear insights and visual stories shaped from real-world data.",
    },
    {
      icon: "bx bx-bulb",
      title: "Problem Solving",
      description:
        "Practical, thoughtful solutions guided by curiosity and clean code.",
    },
  ];

  return (
    <section id="about" className="section-panel">
      <div className="section-container">
        <p className="section-kicker">Get to know me</p>
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <div className="about-layout">
          <div className="about-copy">
            <h3>Curious developer. Thoughtful builder.</h3>
            <p>
              I&apos;m an aspiring Software Developer with hands-on experience as
              a Web Development Intern. I enjoy transforming ideas into
              practical applications through clean code and thoughtful design.
            </p>
            <p>
              I&apos;m currently expanding my skills in full-stack development,
              data analytics, and software engineering while building projects
              that solve meaningful problems.
            </p>
            <a className="primary-link" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="strength-list">
            {strengths.map((strength) => (
              <article className="strength-card" key={strength.title}>
                <span className="icon-bubble">
                  <i className={strength.icon} aria-hidden="true" />
                </span>
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skill-marquee">
          <div className="skill-marquee__heading">
            <span>Technologies & capabilities</span>
            <small>Built through projects, practice, and collaboration</small>
          </div>
          <div className="skill-marquee__viewport">
            <div className="skill-marquee__track">
              {[...skillCarousel, ...skillCarousel].map((skill, index) => (
                <span
                  className="skill-pill"
                  key={`${skill.name}-${index}`}
                  aria-hidden={index >= skillCarousel.length}
                >
                  <i className={skill.icon} aria-hidden="true" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
