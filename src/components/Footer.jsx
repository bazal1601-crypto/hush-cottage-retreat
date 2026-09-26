import "./Footer.css";

function Footer() {
  return (
    <footer className="hush-footer">
      <div className="footer-cta">
        <p className="footer-label">A PLACE TO SLOW DOWN</p>

        <h2>
          Come away to
          <br />
          somewhere <em>quiet.</em>
        </h2>

        <p className="footer-text">
          Leave the noise behind and discover a place created for
          privacy, calm and meaningful time together.
        </p>

        <a href="#cottages" className="footer-button">
          Choose a Cottage <span>↗</span>
        </a>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <h3>HUSH</h3>

          <p>
            A place for those who truly value privacy,
            calm, and a sense of control.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#cottages">Cottages</a>
            <a href="#amenities">Wellness & SPA</a>
            <a href="#cottages">Restaurant</a>
          </div>

          <div>
            <h4>Information</h4>
            <a href="#cottages">About Us</a>
            <a href="#amenities">Contacts</a>
            <a href="#cottages">Book a Stay</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>hello@hushretreat.com</p>
            <p>+92 300 1234567</p>
            <p>Mountain Road, Pakistan</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 HUSH Cottage Retreat</span>
        <span>Privacy Policy</span>
        <span>Made for slow living.</span>
      </div>
    </footer>
  );
}

export default Footer;