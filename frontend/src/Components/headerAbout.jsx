import React, { useState } from "react";
import { Link } from "react-router-dom";
import FixedHeader from "./FIxedHeader";

import "../styles/headerAbout.css";

export default function HeaderAbout() {
  return (
    <div>
      <FixedHeader />
      <div>
        <section className="about-hero">
          <h1>About Oromia Tourism Organization</h1>
          <p className="discoverPara">
            Discover the beauty and diversity of Oromia
          </p>
          <p className="additionalText">
            Explore rich cultural heritage, breathtaking landscapes, vibrant
            cities, and unique wildlife encounters. Immerse yourself in ancient
            history, colorful traditions, and warm hospitality. Experience
            unforgettable adventures and create lifelong memories in Oromia.
          </p>
        </section>
      </div>
    </div>
  );
}
