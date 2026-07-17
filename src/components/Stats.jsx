import { featureStats } from "../data/portfolio";

function Stats() {
  return (
    <section id="highlights" className="section-panel section-panel--muted">
      <div className="section-container">
        <p className="section-kicker">At a glance</p>
        <h2 className="heading">
          Built with <span>Purpose</span>
        </h2>
        <p className="section-intro">
          A growing body of work shaped by technical curiosity, collaborative
          problem-solving, and a strong eye for usable design.
        </p>

        <div className="stats-grid">
          {featureStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span className="stat-card__icon">
                <i className={stat.icon} aria-hidden="true" />
              </span>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
