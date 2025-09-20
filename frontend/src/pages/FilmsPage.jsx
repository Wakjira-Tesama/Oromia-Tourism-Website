import React from "react";
import "../styles/FilmsPage.css";

import FixedHeader from "../Components/FIxedHeader";

const Films = () => {
  const filmItems = [
    {
      id: 1,
      name: "Eelaa",
      description:
        "  touching and emotional Afaan Oromoo film that portrays a heartbreaking story.",
      videoId: "kFMbHa1jSm8",
    },
    {
      id: 2,
      name: "Siinan",
      description:
        "heartbreaking love story in Afaan Oromoo that captures deep emotion",
      videoId: "-sQlbu_mpiA",
    },
    {
      id: 3,
      name: "Gaadii Hiree",
      description:
        "touching Afaan Oromoo film about sacrifice, love, and the struggle for destiny.",
      videoId: "HnS9CstXhXY",
    },
    {
      id: 4,
      name: "Koodee",
      description:
        "A romantic comedy full of funny missteps, unexpected love, and the joy of being truly seen.",
      videoId: "WTz5aV0FIKs",
    },
    {
      id: 5,
      name: "Milkii",
      description:
        "heartfelt love story of perseverance, sacrifice, and triumph over hardship",
      videoId: "RD7uznXqsjA",
    },
    {
      id: 6,
      name: "Saabontu",
      description:
        "lighthearted Oromo comedy film filled with laughter, fun, and charming ",
      videoId: "0iJJ4_Do1yg",
    },
    {
      id: 7,
      name: "Ati Naaf 2",
      description:
        " heartfelt love story intertwined with the excitement of sports",
      videoId: "sgqIQHBDP2w",
    },
    {
      id: 8,
      name: "Abbaa Malaa",
      description:
        "Dcomedy film that entertains while teaching valuable life lesson",
      videoId: "k18E8_I4eRc",
    },
    {
      id: 9,
      name: "Miixuu",
      description:
        "a romantic film about two siblings who unknowingly fall in love with each other.",
      videoId: "dTVEyjwMzpk",
    },
    {
      id: 10,
      name: "Lubbuu",
      description:
        "comedy film that brings laughter through funny situations and memorable characters",
      videoId: "5LCzC4HCLno",
    },
  ];

  return (
    <div>
      <FixedHeader />
      <section className="films-hero">
        <h1>Oromo Films</h1>
        <p className="discoverPara">
          Discover the rich and diverse film culture of Oromo
        </p>
        <p className="headercontent">
          Explore a selection of films that showcase the history, culture, and
          stories of Oromo. From powerful dramas to engaging documentaries,
          immerse yourself in the cinematic world of Oromof ilmmakers and their
          unique perspectives.
        </p>
      </section>
      <div className="films-container">
        <h2>Oromo Films</h2>
        <div className="youtube-videos">
          {filmItems.map((item) => (
            <div className="youtube-video" key={item.id}>
              <iframe
                width="100%"
                height="280"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.name}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="video-description">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tempofooter"></div>
      </div>
    </div>
  );
};

export default Films;
