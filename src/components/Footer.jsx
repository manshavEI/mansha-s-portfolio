function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Mansha Verma. All rights reserved.</p>
      <a href="#home" aria-label="Back to top">
        <i className="bx bx-up-arrow-alt" aria-hidden="true" />
      </a>
    </footer>
  );
}

export default Footer;
