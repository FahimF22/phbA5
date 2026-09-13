export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <h1>
          Build Your
          <br />
          <span>Perfect Dev Stack</span>
        </h1>

        <p>
          Discover modern technologies and create a development
          stack that fits your projects, workflow, and goals.
        </p>

        <div className="hero-actions">
          <a href="#technologies" className="primary-btn">
            Explore Technologies
          </a>

          <a href="#about" className="secondary-btn">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-art">
        <img
          src="/assets/banner-stack.png"
          alt="Development technology stack"
        />
      </div>

    </section>
  );
}