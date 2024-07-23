import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="inner-container">
          <div className="brand">
            <h2 className="brand-name">Travel Now</h2>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#adventure">Adventure</a>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn-primary">Sign Up</button>
            <button className="btn-secondary">Sign In</button>
          </div>
          <div onClick={showDropdown} className="icon">
            {dropdown ? <MdClose /> : <HiMenuAlt3 />}
          </div>
        </div>
        <AnimatePresence>
          {dropdown && (
            <motion.div
              className="dropdown"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="dropdown-links">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#popular">Popular</a>
                </li>
                <li>
                  <a href="#explore">Explore</a>
                </li>
                <li>
                  <a href="#adventure">Adventure</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
