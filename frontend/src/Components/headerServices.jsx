import React, { useState } from "react";
import { Link } from "react-router-dom";
import FixedHeader from "./FIxedHeader";

import "../styles/headerServices.css";

export default function HeaderAbout() {
  return (
    <div>
      <FixedHeader />
      <section className="service-hero">
        <h1>Services in Oromia Tourism Organization</h1>
        <p className="discoverPara">
          Oromia: Where Beauty Meets Diversity in Every Horizon
        </p>
        <p className="additionalText">
          Explore Oromia’s rich cultural heritage, breathtaking landscapes,
          vibrant cities, and unique wildlife encounters. Immerse yourself in
          ancient history, colorful traditions, and the warmth of genuine
          hospitality. Experience unforgettable adventures and create lifelong
        </p>
      </section>
    </div>
  );
}
