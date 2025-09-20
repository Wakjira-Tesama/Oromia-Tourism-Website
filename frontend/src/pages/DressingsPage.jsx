import React from "react";
import FixedHeader from "../Components/FIxedHeader";

// import '../styles/headerDressing.css';
import "../styles/DressingsPage.css";

import arsii from "../assets/images/Dressing/arsi.jpg";
import balee from "../assets/images/Dressing/bale.jpg";
import walagaa from "../assets/images/Dressing/walaga.jpg";
import jimmaa from "../assets/images/Dressing/jimma.jpg";
import waloo from "../assets/images/Dressing/walo.jpg";
import gujii from "../assets/images/Dressing/guji.jpg";
import boranaa from "../assets/images/Dressing/borana.jpg";
import shewaa from "../assets/images/Dressing/shewa.jpg";
import harargee from "../assets/images/Dressing/hararge.jpg";

const dressings = [
  {
    id: 1,
    name: "Arsi Traditional Dress",
    description:
      " colorful and beautifully decorated attire, often featuring embroidered patterns and vibrant beadwork that reflect the rich culture of the Arsi Oromo people.",
    image: arsii,
  },
  {
    id: 1,
    name: "Bale Traditional Dress",
    description:
      "The Bale traditional dress for women is usually made from white or cream cotton fabric, adorned with colorful embroidery and bead designs that highlight the beauty of Bale Oromo culture.",
    image: balee,
  },
  {
    id: 1,
    name: "Wallaga Traditional Dress",
    description:
      "The Wallaga traditional dress is known for its vibrant colors and intricate designs, often featuring handwoven patterns that reflect the rich cultural heritage of the Wallaga Oromo people.",
    image: walagaa,
  },
  {
    id: 1,
    name: "Jimma Traditional Dress",
    description:
      "The Jimma traditional dress for women is often crafted from soft white cotton, decorated with vibrant woven borders and intricate embroidery that showcase the artistry of the Jimma Oromo culture.",
    image: jimmaa,
  },
  {
    id: 2,
    name: "Wallo Traditional Dress",
    description:
      "The Wallo traditional dress for women is typically made from finely woven cotton, decorated with colorful woven patterns and sometimes paired with a matching shawl or scarf.",
    image: waloo,
  },
  {
    id: 3,
    name: "Guji Traditional Dress",
    description:
      "The Guji traditional dress for women is often made from handwoven white cotton, beautifully decorated with colorful embroidery and beadwork that reflect the vibrant Guji Oromo cultur",
    image: gujii,
  },
  {
    id: 4,
    name: "Hararge Traditional Dress",
    description:
      "The Hararge traditional dress for women is usually made from soft white cotton, adorned with bright, intricate embroidery and colorful beadwork that represent the rich artistry of the Hararge Oromo culture.",
    image: harargee,
  },
  {
    id: 5,
    name: "Borana Traditional Dress",
    description:
      "The Borana traditional dress for women is often crafted from pure white or cream cotton fabric, decorated with bold, colorful embroidery and bead patterns that showcase the Borana Oromo’s cultural artistry.",
    image: boranaa,
  },
  {
    id: 6,
    name: "Shewa Traditional Dresses",
    description:
      "The Shewa traditional dress for women is typically made from fine white cotton, embellished with bright woven borders and detailed embroidery that highlight the beauty of Shewa Oromo culture.",
    image: shewaa,
  },
  // Add more dressing items as needed
];

const HeaderDressing = () => {
  return (
    <div>
      <FixedHeader />
      <section className="dressing-hero">
        <h1>Oromia Ways of Dressing</h1>
        <p className="discoverPara">
          Discover the rich and diverse dressing traditions of Oromia
        </p>
        <p className="headercontentP">
          Explore a variety of traditional and modern attire that showcase the
          unique cultural heritage of Oromia. From intricate woven dresses to
          contemporary fashion, immerse yourself in the beautiful world of
          Oromia dressing.
        </p>
      </section>
    </div>
  );
};

const Dressing = () => {
  return (
    <div>
      <HeaderDressing />
      <div className="dressing-container">
        <h2>Oromo Indigenous Wear</h2>
        <div className="dressing-items">
          {dressings.map((dress) => (
            <div className="dressing-item" key={dress.id}>
              <img
                src={dress.image}
                alt={dress.name}
                className="dressing-image"
              />
              <div className="dressing-description">
                <h3>{dress.name}</h3>
                <p>{dress.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tempofooter"></div>
      </div>
    </div>
  );
};

export default Dressing;
