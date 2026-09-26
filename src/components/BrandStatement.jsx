import "./BrandStatement.css";

// Owner: Bazal
// Matches design: left = bold brand statement, right = supporting paragraph

function BrandStatement() {
  return (
    <section className="brand-statement">
      <h2>
        <span className="highlight">HUSH</span> IS A PLACE FOR THOSE WHO
        TRULY VALUE PRIVACY, CALM, AND A SENSE OF CONTROL
      </h2>
      <p>
        A luxury retreat where nothing distracts you from rest, deep
        recovery, or focused work — a quiet space where everything is
        thoughtfully arranged so you can fully disconnect from the noise
        outside.
      </p>
    </section>
  );
}

export default BrandStatement;