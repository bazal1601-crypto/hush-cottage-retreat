
import React from "react";
import "./CottageGallery.css";
const cottages = [
  {
    name: "Pine Haven",
    location: "Forest View",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Cedar Grove",
    location: "Mountain View",
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Oak Retreat",
    location: "Lake View",
    image:
      "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=1400&q=85",
  },
];

function CottageGallery() {
  return (
    <section className="cottage-gallery">
      <div className="cottage-gallery__container">
        <div className="cottage-gallery__top">
          <div>
            <span className="cottage-gallery__label">OUR COTTAGES</span>

            <h2 className="cottage-gallery__title">
              Explore Our
              <br />
              Cottages
            </h2>
          </div>

          <p className="cottage-gallery__description">
            Find your quiet place surrounded by nature. Every HUSH cottage is
            designed to give you privacy, comfort, and time to simply slow
            down.
          </p>
        </div>

        <div className="cottage-gallery__grid">
          {cottages.map((cottage) => (
            <article className="cottage-card" key={cottage.name}>
              <div className="cottage-card__image-box">
                <img
                  src={cottage.image}
                  alt={cottage.name}
                  className="cottage-card__image"
                />

                <span className="cottage-card__location">
                  {cottage.location}
                </span>
              </div>

              <div className="cottage-card__bottom">
                <h3>{cottage.name}</h3>

                <button
                  type="button"
                  className="cottage-card__button"
                  aria-label={`Explore ${cottage.name}`}
                >
                  Explore
                  <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CottageGallery;
