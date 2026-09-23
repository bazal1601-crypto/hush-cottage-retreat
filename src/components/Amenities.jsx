import React from "react";
import "./Amenities.css";

const amenities = [
  {
    number: "01",
    title: "Private Stay",
    text: "A peaceful private space designed for a comfortable escape.",
  },
  {
    number: "02",
    title: "Nature Views",
    text: "Wake up to beautiful surroundings, fresh air and quiet moments.",
  },
  {
    number: "03",
    title: "Cozy Interiors",
    text: "Warm, thoughtful interiors made for relaxing and slowing down.",
  },
  {
    number: "04",
    title: "Outdoor Space",
    text: "Enjoy your own space to sit, breathe and reconnect with nature.",
  },
];

function Amenities() {
  return (
    <section className="amenities-section">
      <div className="amenities-section__header">
        <p>WHAT'S INCLUDED</p>

        <h2>
          Everything you need
          <br />
          for a <em>quiet stay.</em>
        </h2>
      </div>

      <div className="amenities-section__list">
        {amenities.map((item) => (
          <article className="amenity-item" key={item.number}>
            <span className="amenity-item__number">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <span className="amenity-item__arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Amenities;