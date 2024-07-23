import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";
import "../hero.css";

export default function Hero() {
  const [active, setActive] = useState("Hostelry");

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-title">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore the whole world and enjoy its beauty
          </motion.h1>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="hero-section__tabs">
            {["Hostelry", "Flights", "Bus & Shuttle", "Cars"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`hero-section__tab ${
                  active === tab ? "hero-section__tab--active" : ""
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="hero-section__tab">
              Last Searching <FaArrowRight />
            </button>
          </div>
          <div className="hero-section__search">
            <div className="hero-section__search-field">
              <FaLocationPin className="hero-section__search-icon" size={16} />
              <input type="text" placeholder="Bali, Indonesia" />
            </div>
            <div className="hero-section__search-field">
              <FaCalendar className="hero-section__search-icon" size={16} />
              <input type="date" placeholder="2024-08-12" />
            </div>
            <div className="hero-section__search-field">
              <FaCalendar className="hero-section__search-icon" size={16} />
              <input type="date" placeholder="2024-08-12" />
            </div>
            <div className="hero-section__search-field">
              <FaPerson className="hero-section__search-icon" size={16} />
              <input type="text" placeholder="1 Room, 2 Guests" />
            </div>
            <button className="hero-section__search-button">
              <FaSearch /> Search
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
