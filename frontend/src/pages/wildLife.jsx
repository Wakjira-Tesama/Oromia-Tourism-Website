import React from "react";
import "../styles/wildLife.css";

// Import wildlife images
import EthiopianWolf from "../assets/images/wildlife/ethiopian-wolf.jpg";
import MountainNyala from "../assets/images/wildlife/mountain-nyala.jpg";
import BaleMonkey from "../assets/images/wildlife/bale-monkey.jpg";
import GeladaBaboon from "../assets/images/wildlife/gelada-baboon.jpg";
import MeneliksBushbuck from "../assets/images/wildlife/meneliks-bushbuck.jpg";
import AfricanElephant from "../assets/images/wildlife/african-elephant.jpg";
import Lions from "../assets/images/wildlife/lions.jpg";
import AfricanWildDog from "../assets/images/wildlife/african-wild-dog.jpg";
import Warthog from "../assets/images/wildlife/warthog.jpg";
import VervetMonkey from "../assets/images/wildlife/vervet-monkey.jpg";
import Hippopotamus from "../assets/images/wildlife/hippopotamus.jpg";
import Crocodile from "../assets/images/wildlife/crocodile.jpg";
import Ostrich from "../assets/images/wildlife/ostrich.jpg";
import SecretaryBird from "../assets/images/wildlife/secretary-bird.jpg";
import WattledCrane from "../assets/images/wildlife/wattled-crane.jpg";
// importing header
import Header from "../pages/Destinations/header.jsx";
const WildlifePage = () => {
  const wildlifeData = [
    {
      id: 1,
      name: "Ethiopian Wolf",
      image: EthiopianWolf,
      location: "Bale Mountains, Arsi Mountains",
      status: "Endangered",
      description:
        "The world's rarest canid species, found only in the Afro-alpine highlands of Ethiopia.",
    },
    {
      id: 2,
      name: "Mountain Nyala",
      image: MountainNyala,
      location: "Bale Mountains, Arsi Mountains",
      status: "Endangered",
      description:
        "A large antelope endemic to the Ethiopian highlands, known for its spiral horns.",
    },
    {
      id: 3,
      name: "Bale Monkey",
      image: BaleMonkey,
      location: "Bale Mountains, Harenna Forest",
      status: "Vulnerable",
      description:
        "A rare monkey species found only in the bamboo forests of the Bale Mountains.",
    },
    {
      id: 4,
      name: "Gelada Baboon",
      image: GeladaBaboon,
      location: "Simien Mountains, Guassa Plateau",
      status: "Least Concern",
      description:
        "Often called the 'bleeding-heart monkey' for its distinctive chest patch.",
    },
    {
      id: 5,
      name: "Menelik's Bushbuck",
      image: MeneliksBushbuck,
      location: "Bale Mountains, Harenna Forest",
      status: "Least Concern",
      description:
        "A subspecies of bushbuck endemic to the Ethiopian highlands.",
    },
    {
      id: 6,
      name: "African Elephant",
      image: AfricanElephant,
      location: "Babille Elephant Sanctuary, Awash National Park",
      status: "Endangered",
      description:
        "The largest land mammal, found in the savannah and forest areas of Oromia.",
    },
    {
      id: 7,
      name: "Lion",
      image: Lions,
      location: "Awash National Park, Omo Valley",
      status: "Vulnerable",
      description:
        "The majestic African lion, found in the savannah regions of Oromia.",
    },
    {
      id: 8,
      name: "African Wild Dog",
      image: AfricanWildDog,
      location: "Awash National Park, Omo Valley",
      status: "Endangered",
      description:
        "Also known as the painted wolf, one of Africa's most endangered carnivores.",
    },
    {
      id: 9,
      name: "Warthog",
      image: Warthog,
      location: "Awash National Park, Nechisar National Park",
      status: "Least Concern",
      description:
        "A wild member of the pig family, recognizable by its curved tusks and facial warts.",
    },
    {
      id: 10,
      name: "Vervet Monkey",
      image: VervetMonkey,
      location: "Riverine forests across Oromia",
      status: "Least Concern",
      description:
        "A common monkey species with distinctive black face and grey body.",
    },
    {
      id: 11,
      name: "Hippopotamus",
      image: Hippopotamus,
      location: "Awash River, Gibe River",
      status: "Vulnerable",
      description:
        "A large semi-aquatic mammal found in rivers and lakes throughout Oromia.",
    },
    {
      id: 12,
      name: "Nile Crocodile",
      image: Crocodile,
      location: "Awash River, Omo River",
      status: "Least Concern",
      description:
        "Africa's largest reptile, found in rivers and lakes across the region.",
    },
    {
      id: 13,
      name: "Ostrich",
      image: Ostrich,
      location: "Borena Lowlands, Awash National Park",
      status: "Least Concern",
      description:
        "The world's largest bird, found in the dry savannah areas of Oromia.",
    },
    {
      id: 14,
      name: "Secretary Bird",
      image: SecretaryBird,
      location: "Savannah areas across Oromia",
      status: "Endangered",
      description:
        "A distinctive bird of prey known for its snake-hunting abilities.",
    },
    {
      id: 15,
      name: "Wattled Crane",
      image: WattledCrane,
      location: "Wetlands of Bale Mountains, Guassa Plateau",
      status: "Vulnerable",
      description:
        "Africa's most endangered crane species, found in highland wetlands.",
    },
  ];

  return (
    <div className="wildlife-page">
      <Header />
      <div className="wildlife-header">
        <h1>Wildlife of Oromia</h1>
        <p>
          Discover the diverse and unique wildlife species found throughout the
          Oromia region
        </p>
      </div>

      <div className="wildlife-grid">
        {wildlifeData.map((animal) => (
          <div key={animal.id} className="animal-card">
            <div className="animal-image">
              <img src={animal.image} alt={animal.name} />
              <span
                className={`status-badge ${animal.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {animal.status}
              </span>
            </div>
            <div className="animal-info">
              <h3>{animal.name}</h3>
              <div className="animal-location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{animal.location}</span>
              </div>
              <p>{animal.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="wildlife-conservation">
        <h2>Conservation Efforts in Oromia</h2>
        <p>
          Oromia is committed to protecting its unique wildlife through various
          conservation initiatives, including national parks, wildlife
          sanctuaries, and community-based conservation programs. Visitors can
          support these efforts by following ethical wildlife viewing practices
          and supporting local conservation organizations.
        </p>
      </div>
    </div>
  );
};

export default WildlifePage;
