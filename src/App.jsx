import CottageGallery from "./components/CottageGallery";
import Amenities from "./components/Amenities";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__logo">HUSH</div>

        <nav className="site-header__nav">
          <a href="#home">Home</a>
          <a href="#cottages">Cottages</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="site-header__button">
          Book a stay
        </button>
      </header>

      <main id="home">

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-section__content">
            <p className="hero-section__eyebrow">
              ESCAPE INTO NATURE
            </p>

            <h1>
              A quiet place
              <br />
              to <em>slow down.</em>
            </h1>

            <p className="hero-section__text">
              Beautiful cottages surrounded by nature, created for
              peaceful stays, fresh air and unforgettable moments.
            </p>

            <button className="hero-section__button">
              Explore cottages <span>↗</span>
            </button>
          </div>

          <div className="hero-section__image">
            <img
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1800&q=90"
              alt="Cottage surrounded by nature"
            />
          </div>
        </section>

        {/* COTTAGES */}
        <section id="cottages">
          <CottageGallery />
        </section>

        {/* AMENITIES */}
        <Amenities />

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-section__image">
            <img
              src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1400&q=85"
              alt="Peaceful cottage interior"
            />
          </div>

          <div className="about-section__content">
            <p className="about-section__eyebrow">
              THE HUSH EXPERIENCE
            </p>

            <h2>
              Space to breathe.
              <br />
              Time to <em>be.</em>
            </h2>

            <p>
              HUSH is a collection of quiet places designed for people
              who want to disconnect from everyday noise and reconnect
              with nature.
            </p>

            <p>
              Wake up slowly, spend your days outside, and enjoy
              evenings surrounded by calm. Every detail is made for a
              slower, simpler stay.
            </p>

            <button className="about-section__button">
              Discover HUSH <span>↗</span>
            </button>
          </div>
        </section>

        {/* BOOKING */}
        <section className="booking-section" id="contact">
          <div className="booking-section__content">
            <p className="booking-section__eyebrow">
              YOUR NEXT ESCAPE
            </p>

            <h2>
              Ready to find
              <br />
              your <em>quiet place?</em>
            </h2>

            <p>
              Choose your cottage, pack slowly, and leave the everyday
              behind.
            </p>

            <button className="booking-section__button">
              Book your stay <span>↗</span>
            </button>
          </div>
        </section>

       <footer className="site-footer">
  <div className="site-footer__top">
    <div className="site-footer__brand">
      <div className="site-footer__logo">HUSH</div>

      <p>
        A quiet collection of places
        <br />
        to slow down.
      </p>
    </div>

    <div className="site-footer__links">
      <a href="#home">Home</a>
      <a href="#cottages">Cottages</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </div>

  <div className="site-footer__bottom">
    <span>© 2026 HUSH Retreat</span>
    <span>Made for slow living</span>
  </div>
</footer>
      </main>
    </div>
  );
}

export default App;