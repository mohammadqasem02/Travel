import { FaPlane, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "../advanture.css";

export default function Adventure() {
  // eslint-disable-next-line react/prop-types
  const Card = ({ image, city }) => {
    return (
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className="image-container">
          <img src={image} alt={city} className="card-image" />
        </div>
        <p className="card-text">{city}</p>
        <button className="card-button">
          <FaPlane />
        </button>
      </motion.div>
    );
  };

  return (
    <div className="container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Lets go on an adventure</h2>
          <p>Find and book a great experience</p>
        </div>
        <div className="cards-container">
          <Card city="PARIS" image="/paries.jpg" />
          <Card city="NEW YORK" image="/newyork.jpg" />
          <Card city="SEOUL" image="/seoul.jpg" />
          <Card city="BALI" image="/bali.jpg" />
        </div>
        <div className="navigation-buttons">
          <button className="nav-button prev">
            <FaArrowLeft />
          </button>
          <button className="nav-button next">
            <FaArrowRight />
          </button>
        </div>
      </section>
      <section className="booking-section">
        <div className="booking-header">
          <h2>Book tickets and go now!</h2>
          <button className="book-now-button">Book Now</button>
        </div>
        <div className="video-container">
          <video loop controls muted autoPlay>
            <source src="/motion-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
