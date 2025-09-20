// src/components/Services.js

import React from "react";
import HeaderServices from "../Components/headerServices.jsx";
import "../styles/Service.css";
import tourGuidesImage from "../assets/images/Bale/weather.jpg";
import travelPackagesImage from "../assets/images/Wenchi/acc2.jpg";
import hotelBookingsImage from "../assets/images/Wenchi/acc3.jpg";
import transportationImage from "../assets/images/backgrounds/EthioFlight.jpg";
import culturalToursImage from "../assets/images/backgrounds/culture1.jpg";
import adventureToursImage from "../assets/images/Wenchi/acc1.jpg";

const Services = () => {
  <div></div>;
  return (
    <div className="services-container">
      <HeaderServices />
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <img
            src={tourGuidesImage}
            alt="Tour Guides"
            className="service-img"
          />
          <h2 className="service-title">Professional Tour Guides</h2>
          <p className="service-description">
            Our knowledgeable and friendly tour guides ensure you have an
            enriching and informative experience.
          </p>
        </div>
        <div className="service-item">
          <img
            src={travelPackagesImage}
            alt="Travel Packages"
            className="service-img"
          />
          <h2 className="service-title">Custom Travel Packages</h2>
          <p className="service-description">
            We offer tailor-made travel packages to suit your preferences and
            budget, ensuring a hassle-free vacation.
          </p>
        </div>
        <div className="service-item">
          <img
            src={hotelBookingsImage}
            alt="Hotel Bookings"
            className="service-img"
          />
          <h2 className="service-title">Hotel Bookings</h2>
          <p className="service-description">
            We handle all your accommodation needs, from luxury hotels to
            budget-friendly lodgings.
          </p>
        </div>
        <div className="service-item">
          <img
            src={transportationImage}
            alt="Transportation Services"
            className="service-img"
          />
          <h2 className="service-title">Transportation Services</h2>
          <p className="service-description">
            Reliable and comfortable transportation options to get you to your
            destinations safely and on time.
          </p>
        </div>
        <div className="service-item">
          <img
            src={culturalToursImage}
            alt="Cultural Tours"
            className="service-img"
          />
          <h2 className="service-title">Cultural Tours</h2>
          <p className="service-description">
            Experience the rich culture and heritage of Ethiopia through our
            immersive cultural tours.
          </p>
        </div>
        <div className="service-item">
          <img
            src={adventureToursImage}
            alt="Adventure Tours"
            className="service-img"
          />
          <h2 className="service-title">Adventure Tours</h2>
          <p className="service-description">
            For thrill-seekers, we offer a variety of adventure tours including
            trekking, wildlife safaris, and more.
          </p>
        </div>
      </div>
      <div className="tempofooter"></div>
    </div>
  );
};

export default Services;
