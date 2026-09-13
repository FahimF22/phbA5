export default function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-grid">

        <div className="footer-brand">
          <a href="#home" className="brand">
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
              className="brand-image"
            />
          </a>

          <p>
            Curated tools, technologies, and resources
            for developers building modern software.
          </p>

          <div className="socials">
            <a href="https://github.com">GitHub</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4>PRODUCT</h4>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div id="about">
          <h4>COMPANY</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>LEGAL</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Dev Stack. All rights reserved.
        </span>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

    </footer>
  );
}