import { socialLinks } from "../data/portfolio";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

    window.location.href = `mailto:vermamansha75@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-panel section-panel--muted">
      <div className="section-container">
        <p className="section-kicker">Start a conversation</p>
        <h2 className="heading">
          Let&apos;s <span>Connect</span>
        </h2>
        <p className="section-intro">
          I&apos;m open to opportunities, thoughtful collaborations, and
          conversations with fellow developers.
        </p>

        <div className="contact-layout">
          <div className="contact-details">
            <h3>Contact information</h3>
            <p>
              Have an idea, opportunity, or question? Send a note and I&apos;ll
              get back to you.
            </p>
            <a className="contact-item" href="mailto:vermamansha75@gmail.com">
              <span className="icon-bubble">
                <i className="bx bx-envelope" aria-hidden="true" />
              </span>
              <span>
                <small>Email</small>
                <strong>vermamansha75@gmail.com</strong>
              </span>
            </a>

            <div className="social-media" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  href={social.href}
                  aria-label={social.label}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell me what you have in mind..."
              />
            </div>
            <button className="primary-link form-submit" type="submit">
              Send message
              <i className="bx bx-send" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
