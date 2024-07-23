import { HiLocationMarker } from "react-icons/hi";
import "../popular.css";

export default function Popular() {
  // eslint-disable-next-line react/prop-types
  const Card = ({ image, text, location }) => {
    return (
      <div className="card">
        <div className="card-image-container">
          <img src={image} alt={text} className="card-image" />
          <p className="discount">20% off</p>
        </div>
        <div className="card-content">
          <h5>{text}</h5>
          <div className="location">
            <HiLocationMarker size={20} />
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <section className="popular-section">
        <div className="popular-header">
          <h2>Popular Place</h2>
          <p>Lets enjoy this heaven on earth</p>
        </div>
        <p className="popular-description">
          Many places are very famous, beautiful, clean, and will give a very
          deep impression to visitors and make them come back
        </p>
        <div className="grid">
          <Card
            image="/motion-img.jpg"
            location="Mindanou, Philippines"
            text="SC, Mindanou"
          />
          <Card
            image="/Dieney.jpg"
            location="Tokyo, Japan"
            text="DisneyLand Tokyo"
          />
          <Card
            image="/Island.jpg"
            location="Java, Indonesia"
            text="Tousand Island"
          />
          <Card
            image="/italy.jpg"
            location="Venice, Italy"
            text="Baslike Santo"
          />
        </div>
      </section>
      <section className="travel-section">
        <div className="section-content">
          <h2>Travel to make sweet memories</h2>
          <p>Find trips that fit a flexible lifestyle</p>
        </div>
        <div className="section-cards">
          <div className="card-group">
            <div className="card-detail">
              <span className="number">01</span>
              <h2>Find trips that fit your freedom</h2>
              <p>
                Traveling offers freedom and flexibility, solitude and
                spontaneity and privacy, purpose
              </p>
            </div>
            <div className="card-detail">
              <span className="number">02</span>
              <h2>Get back to natural by travel</h2>
              <p>
                The world is a playground and you can finally explore Mother
                Naturals inimitable canvas
              </p>
            </div>
            <div className="card-detail">
              <span className="number">03</span>
              <h2>Reignite those travel tastebuds</h2>
              <p>
                There are infinite reasons to love travel, one of them being the
                food, glorious food
              </p>
            </div>
            <button className="explore-button">Start your explore</button>
          </div>
          <div className="img-container">
            <img src="/motion-img.jpg" alt="travel" />
          </div>
        </div>
      </section>
    </div>
  );
}
