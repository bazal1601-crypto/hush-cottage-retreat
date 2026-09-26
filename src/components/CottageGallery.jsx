import "./CottageGallery.css";

const cottages = [
  {
    name: "Pine Haven",
    location: "Forest Cottage",
    description:
      "A peaceful private retreat surrounded by trees, fresh air and quiet mornings.",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Cedar Grove",
    location: "Garden Cottage",
    description:
      "A warm and comfortable cottage created for slow evenings and meaningful moments.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Forest View",
    location: "Mountain Cottage",
    description:
      "Wake up surrounded by nature and enjoy beautiful views from your private stay.",
    image:
      "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=1600&q=85",
  },
];

function CottageGallery() {
  return (
    <section className="cottage-gallery" id="cottages">
      <div className="gallery-top">
        <div>
          <p className="gallery-label">DISCOVER YOUR STAY</p>

          <h2>
            OUR
            <br />
            <span>COTTAGES</span>
          </h2>
        </div>

        <p className="gallery-intro">
          Private spaces surrounded by nature, thoughtfully designed
          for those who value calm, comfort and privacy.
        </p>
      </div>

      <div className="cottage-grid">
        {cottages.map((cottage, index) => (
          <article className="cottage-card" key={cottage.name}>
            <div className="cottage-image">
              <img src={cottage.image} alt={cottage.name} />

              <span className="cottage-number">
                0{index + 1}
              </span>
            </div>

            <div className="cottage-info">
              <div>
                <p>{cottage.location}</p>
                <h3>{cottage.name}</h3>
              </div>

              <span className="cottage-arrow">↗</span>
            </div>

            <p className="cottage-description">
              {cottage.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CottageGallery;