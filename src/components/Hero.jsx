import "./Hero.css";

// Owner: Bazal
// Matches design: full-bleed looping cottage/forest background VIDEO,
// headline animates in line-by-line (fade + slide up) on load, subtext, CTA button.
//
// Drop your looping background clip at: src/assets/hero-bg.mp4
// (a short, silent, seamless-loop clip works best — 10-20 sec is plenty)

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        src="/src/assets/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>
          <span className="hero__line hero__line--1">A QUIET PLACE</span>
          <br />
          <span className="hero__line hero__line--2">YOU CAN RELY ON</span>
        </h1>
        <p className="hero__line hero__line--3">
          Secluded cottages in nature, where everything is under control —
          even during blackouts.
        </p>
        <button className="hero__cta hero__line hero__line--4">
          Book from a Night
        </button>
      </div>
    </section>
  );
}

export default Hero;