import "./Amenities.css";

const amenities = [
  {
    number: "01",
    title: "Balanced Breakfast",
    text: "Start your morning with a fresh and carefully prepared breakfast.",
  },
  {
    number: "02",
    title: "BBQ Area",
    text: "Enjoy relaxed evenings together around our private BBQ area.",
  },
  {
    number: "03",
    title: "Tub, Sauna & Pool",
    text: "Slow down and recharge with spaces designed for complete relaxation.",
  },
  {
    number: "04",
    title: "Private Transfer",
    text: "Travel comfortably with our convenient private transfer service.",
  },
  {
    number: "05",
    title: "Pet Friendly",
    text: "Your stay is better when your four-legged companions can join you.",
  },
];

function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="amenities-heading">
        <p className="amenities-label">THE HUSH EXPERIENCE</p>

        <h2>
          INCLUDED
          <br />
          <span>WITH YOUR COTTAGE</span>
        </h2>

        <p className="amenities-intro">
          Everything you need for a comfortable, peaceful and memorable stay.
        </p>
      </div>

      <div className="amenities-list">
        {amenities.map((amenity) => (
          <div className="amenity-item" key={amenity.number}>
            <span className="amenity-number">{amenity.number}</span>

            <div className="amenity-content">
              <h3>{amenity.title}</h3>
              <p>{amenity.text}</p>
            </div>

            <span className="amenity-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;