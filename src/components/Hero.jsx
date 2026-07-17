import astronautAvatar from "../assets/astronaut-avatar-v4.jpg";
import { roles } from "../data/portfolio";
import useTypewriter from "../hooks/useTypewriter";

function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="hero-portrait">
          <div className="portrait-ring">
            <img
              src={astronautAvatar}
              alt="Illustrated female astronaut avatar"
            />
          </div>
          <span className="availability-dot" aria-hidden="true" />
        </div>
        <div className="hero-meta">
          <span>
            <i className="bx bx-map" aria-hidden="true" />
            Based in India
          </span>
          <span>
            <i className="bx bx-world" aria-hidden="true" />
            Open to remote work
          </span>
        </div>
        <p className="eyebrow">
          <span aria-hidden="true">✦</span> Hello, I&apos;m
        </p>
        <h1>
          Mansha <span>Verma</span>
        </h1>
        <h2>
          A{" "}
          <span className="multiple-text" aria-live="polite">
            {role}
          </span>
          <span className="type-cursor" aria-hidden="true" />
        </h2>
        <p className="desc">
          I build thoughtful digital experiences and turn real-world problems
          into clean, useful software.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            View my work
            <i className="bx bx-right-arrow-alt" aria-hidden="true" />
          </a>
          <a className="secondary-link" href="#contact">
            Let&apos;s connect
          </a>
        </div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a
            href="https://github.com/manshavEI"
            target="_blank"
            rel="noreferrer"
            aria-label="Mansha on GitHub"
          >
            <i className="bx bxl-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/mansha-verma14/"
            target="_blank"
            rel="noreferrer"
            aria-label="Mansha on LinkedIn"
          >
            <i className="bx bxl-linkedin" aria-hidden="true" />
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll</span>
        <i className="bx bx-down-arrow-alt" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
