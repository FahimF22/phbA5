import { Menu, X } from "lucide-react";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a href="#home" className="brand">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="brand-image"
          />
        </a>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="auth-links">
          <a href="#">Sign In</a>
          <a href="#" className="signup">Sign Up</a>
        </div>

      </div>
    </nav>
  );
}