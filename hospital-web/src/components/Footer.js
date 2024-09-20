import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-title">Forever Care</h2>
        <div className="footer-contact">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>info@forevercare.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📌</span>
            <span>123 Health St., Wellness City</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>Call: +012 345 6789</span>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <h3 className="footer-subtitle">Quick Links</h3>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#blog-section">Our Blogs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-subtitle">Our Services</h3>
        <ul className="footer-links">
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Contact Support</a></li>
          <li><a href="/">Careers</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-subtitle">Follow Us..</h3>
        <div className="footer-social-box">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>

        {/* Search Bar and Newsletter Subscription */}
        <div className="footer-subscription">
            <div className="footer-search-box">
              <input type="text" placeholder="Search..." className="footer-search" />
              <button className="footer-search-button">Search</button>
            </div>
            <div className="newsletter-box">
              <input type="email" placeholder="Enter Email" className="newsletter-input" required />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </div>
          </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved @ ForeverCare 2024 | Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
