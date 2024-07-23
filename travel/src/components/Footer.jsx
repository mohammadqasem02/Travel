import {
  FaArrowAltCircleUp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../footer.css"; // Ensure this CSS file is correctly imported

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <h2>Tripco</h2>
            <p>30 Great Peter St, WestMinster, Amman, Jordan</p>
            <div className="footer-socials">
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaYoutube className="social-icon" />
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-section">
              <h5>About</h5>
              <ul>
                <li>About us</li>
                <li>Features</li>
                <li>News</li>
                <li>Plans</li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h5>Company</h5>
              <ul>
                <li>Why Tripco</li>
                <li>Partner with us</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h5>Support</h5>
              <ul>
                <li>Account</li>
                <li>Support center</li>
                <li>Feedback</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="footer-newsletter">
            <h5>Newsletter</h5>
            <p>Subscribe to our Newsletter and get exciting offers</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>
                <FaArrowAltCircleUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
