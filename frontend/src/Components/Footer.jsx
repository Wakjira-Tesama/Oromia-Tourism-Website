import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About */}
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">The Bureau</a>
            </li>
            <li>
              <a href="#">Our Management</a>
            </li>
            <li>
              <a href="#">Mandate and Responsibility</a>
            </li>
            <li>
              <a href="#">Archive (Publication)</a>
            </li>
          </ul>
          <h5>Follow us</h5>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact us</h4>
          <p>
            <FaPhoneAlt /> +251 111111000
          </p>
          <p>
            <FaPhoneAlt /> +251 88888800
          </p>
          <p>
            <FaFax /> +251 58000000
          </p>
          <p>
            <FaFax /> +251 33000000
          </p>
          <p>
            <FaEnvelope /> orotourism@ethionet.et
          </p>
          <p>
            <FaEnvelope /> tourism@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Finfinne, Oromia, Ethiopia
          </p>
        </div>

        {/* Destinations */}
        <div className="footer-column">
          <h4>Destinations</h4>
          <ul>
            <li>
              <a href="#">World Heritage Sites</a>
            </li>
            <li>
              <a href="#">National Parks and Community Protected Area</a>
            </li>
            <li>
              <a href="#">Lakes, Hot Springs and Water falls</a>
            </li>
            <li>
              <a href="#">Religious Sites</a>
            </li>
            <li>
              <a href="#">Historical Landmarks</a>
            </li>
          </ul>
        </div>

        {/* Things to do */}
        <div className="footer-column">
          <h4>Things to do</h4>
          <ul>
            <li>
              <a href="#">Hiking and Trekking</a>
            </li>
            <li>
              <a href="#">Bird Watching</a>
            </li>
            <li>
              <a href="#">Fishing</a>
            </li>
            <li>
              <a href="#">Biking</a>
            </li>
            <li>
              <a href="#">Horseback Riding</a>
            </li>
          </ul>
        </div>

        {/* Events */}
        <div className="footer-column">
          <h4>Events</h4>
          <ul>
            <li>
              <a href="#">Religious Events</a>
            </li>
            <li>
              <a href="#">Cultural Events</a>
            </li>
            <li>
              <a href="#">Corporate Events</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>
          &copy; 2021 Oromia Tourism – Powered by <a href="#">Oro of Tourism</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
