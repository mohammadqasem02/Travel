/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiFilter, HiLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "../explore.css";

export default function Explore() {
  const [active, setActive] = useState("Popular destination");

  const destinations = [
    {
      image: "/seoul.jpg",
      text: "SC , Mindanou",
      location: "Mindanou , Philippines",
      price: "148",
      category: "Islands",
      main: "Popular destination",
    },
    {
      image: "/Dieney.jpg",
      text: "SC , Mindanou",
      location: "Tokyo , Japan",
      price: "140",
      category: "Popular destination",
      main: "Popular destination",
    },
    {
      image: "/Island.jpg",
      text: "sand , Island",
      location: "Java , Indonesia",
      price: "145",
      category: "Islands",
      main: "Popular destination",
    },
    {
      image: "/italy.jpg",
      text: "Baslika , Santo",
      location: "Venice , Italy",
      price: "155",
      category: "Nation parks",
      main: "Popular destination",
    },
    {
      image: "/italy.jpg",
      text: "Baslika , Santo",
      location: "Venice , Italy",
      price: "162",
      category: "Beach",
      main: "Popular destination",
    },
    {
      image: "/italy.jpg",
      text: "Baslika , Santo",
      location: "Venice , Italy",
      price: "170",
      category: "Camp",
      main: "Popular destination",
    },
  ];

  const filteredDestinations =
    active === "Popular destination"
      ? destinations
      : destinations.filter((destination) => destination.category === active);

  const Card = ({ image, text, location, price }) => {
    return (
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="overflow-hidden relative">
          <img src={image} alt={text} />
          <p className="rating">
            <FaStar className="text-[#ffc103]" /> 4.9
          </p>
        </div>
        <div className="details">
          <h5>{text}</h5>
          <div className="flex items-center gap-2">
            <HiLocationMarker size={20} className="text-primary" />
            <p>{location}</p>
          </div>
          <p className="font-semibold">
            ${price}/ <span className="font-light">Pax</span>
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Explore more</h2>
            <p>Let&apos;s go on an adventure</p>
          </div>
          <p className="text-light text-center">
            All inclusive vacations and flights to the Caribbean , Indonesia and
            more than 1300 destinations worldwide. Let&apos;s explore now.
          </p>
          <div className="flex-container py-8">
            {[
              "Popular destination",
              "Islands",
              "Surfing",
              "Nation parks",
              "Lake",
              "Beach",
              "Camp",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={active === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
            <button className="filter-btn">
              <HiFilter />
            </button>
          </div>
          <div className="grid">
            {filteredDestinations.map((destination, index) => (
              <Card
                key={index}
                image={destination.image}
                text={destination.text}
                location={destination.location}
                price={destination.price}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="show-more-btn">Show More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
