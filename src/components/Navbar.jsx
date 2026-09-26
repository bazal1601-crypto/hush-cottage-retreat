import "./Navbar.css";

// Owner: Bazal
// Matches design: logo left, nav links center, "Choose a Cottage" button right

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">HUSH</div>
      <ul className="navbar__links">
        <li>Cottages</li>
        <li>Restaurant</li>
        <li>Wellness &amp; SPA</li>
        <li>About Us</li>
        <li>Contacts</li>
      </ul>
      <button className="navbar__cta">Choose a Cottage</button>
    </nav>
  );
}

export default Navbar;