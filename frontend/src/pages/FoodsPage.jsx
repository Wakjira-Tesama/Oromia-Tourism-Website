import React from "react";
import FixedHeader from "../Components/FIxedHeader";

import "../styles/headerFoods.css";
import "../styles/FoodsPage.css";

import InjeraImage from "../assets/images/Food/injera.jpg";
import DoroWatImage from "../assets/images/Food/doror-wat.jpg";
import KitfoImage from "../assets/images/Food/qorii.png";
import ShiroImage from "../assets/images/Food/cumboo.png";
import TibsImage from "../assets/images/Food/ancoote.png";
import Beyeaynet from "../assets/images/Food/marqaa.png";

const foods = [
  {
    id: 1,
    name: "Buddena",
    description:
      "A sourdough flatbread with a slightly spongy texture, traditionally made out of teff flour.",
    image: InjeraImage,
  },
  {
    id: 2,
    name: "Doro Wat",
    description:
      "A spicy chicken stew flavored with berbere, a spice mix that includes chili powder and fenugreek.",
    image: DoroWatImage,
  },
  {
    id: 3,
    name: "Kori",
    description:
      "A dish made from raw minced beef, marinated in mitmita (a chili powder-based spice mix) and niter kibbeh (a clarified butter infused with herbs and spices).",
    image: KitfoImage,
  },
  {
    id: 4,
    name: "Cumboo ",
    description:
      "A thick, chickpea flour-based stew, often seasoned with minced onions, garlic, and berbere.",
    image: ShiroImage,
  },
  {
    id: 5,
    name: "Ancoote",
    description:
      "Sautéed meat (either beef, lamb, or goat) with onions, garlic, and various spices.",
    image: TibsImage,
  },
  {
    id: 6,
    name: "Markaa",
    description:
      "A colorful combination of various vegetarian dishes served atop injera.",
    image: Beyeaynet,
  },
  // Add more food items as needed
];

const HeaderFoods = () => {
  return (
    <div>
      <FixedHeader />
      <section className="foods-hero">
        <h1>Oromo Cultural Food</h1>
        <p className="discoverPara">
          Discover the rich and diverse culinary traditions of Oromo
        </p>
        <p className="headercontentP">
          Explore a variety of dishes that showcase the unique flavors and
          ingredients of Oromo cuisine. From spicy stews to delicious bread,
          immerse yourself in the gastronomic delights of Oromo.
        </p>
        {/* <div className="bottom-header"></div> */}
      </section>
    </div>
  );
};

const Foods = () => {
  return (
    <div>
      <HeaderFoods />
      <div className="foods-container">
        <h2>Oromo Cultural Foods</h2>
        <div className="food-items">
          {foods.map((food) => (
            <div className="food-item" key={food.id}>
              <img src={food.image} alt={food.name} className="food-image" />
              <div className="food-description">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tempofooter"></div>
      </div>
    </div>
  );
};

export default Foods;
