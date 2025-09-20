import React from "react";
import { Link } from "react-router-dom";
import FixedHeader from "../Components/FIxedHeader";

import "../styles/headerMusics.css";

const HeaderMusic = () => {
  return (
    <div>
      <FixedHeader />
      <section className="music-hero">
        <h1>Oromo Music</h1>
        <p className="discoverPara">
          Discover the rich and diverse music culture of Oromo
        </p>
        <p className="headercontentP">
          Explore a selection of music that showcases the history, culture, and
          stories of Oromo. From traditional melodies to contemporary beats,
          immerse yourself in the auditory world of Oromo musicians and their
          unique sounds.
        </p>
      </section>
    </div>
  );
};

export default HeaderMusic;
