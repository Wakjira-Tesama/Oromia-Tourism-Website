import React from "react";
import { Link } from "react-router-dom";
import FixedHeader from "../Components/FIxedHeader";

import "../styles/headerFilms.css";

const HeaderFilms = () => {
  return (
    <div>
      <FixedHeader />
      <section className="films-hero">
        <h1> Oromo Film</h1>
        <p className="discoverPara">
          Discover the rich and diverse film culture of Oromo
        </p>
        <p className="headercontent">
          Explore a selection of films that showcase the history, culture, and
          stories of Oromo. From powerful dramas to engaging documentaries,
          immerse yourself in the cinematic world of Ethiopian filmmakers and
          their unique perspectives.
        </p>
      </section>
    </div>
  );
};

export default HeaderFilms;
