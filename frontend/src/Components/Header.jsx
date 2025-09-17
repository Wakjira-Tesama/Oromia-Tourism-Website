import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../styles/FIxedheader.css";
import FixedHeader from "./FIxedHeader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import oromiaVideo from "../assets/images/backgrounds/oro.mp4";

export function BottomHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = mockSearch(searchQuery);
    setSearchResult(results);
    setSearchQuery("");
  };

  const mockSearch = (query) => {
    const destinations = [
      "Addis Ababa",
      "Lalibela",
      "Gondar",
      "Axum",
      "Semen Mountains",
      "Bahirdar",
      "Awash NP",
      "Omo",
      "Bale",
      "Harar",
      "Debre Libanos",
      "Debre Damo",
      "Cultural Tours",
      "Wildlife Safaris",
      "Photography",
      "Films",
      "Foods",
      "Dressings",
      "Music",
    ];
    return destinations.filter((destination) =>
      destination.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getLink = (destination) => {
    const routes = {
      "cultural tours": "/todo/Cultural-Tours",
      "wildlife safaris": "/todo/Wildlife",
      photography: "/todo/Photography",
      films: "/additionals/films",
      foods: "/additionals/foods",
      dressings: "/additionals/dressings",
      music: "/additionals/musics",
    };
    const key = destination.toLowerCase().replace(/\s+/g, "-");
    return routes[key] || `/destination/${key}`;
  };

  return (
    <div className="topHeader">
      <div>
        <section className="search-bar flex">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search destinations, activities, tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </section>
        {searchResult.length > 0 && (
          <div className="search-results">
            <h4 style={{ color: "black" }}>Search Results:</h4>
            <div className="result-buttons">
              {searchResult.map((result, index) => (
                <Link to={getLink(result)} key={index}>
                  <button className="result-button">{result}</button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="registerBtnDiv">
        <button className="RegisterButton">
          <Link to="/register">Register Now</Link>
        </button>
      </div>
    </div>
  );
}
const slides = [
  {
    title: "🌄 Explore the majestic landscapes of Oromia",
    subtitle: "From the Bale Mountains to the Great Rift Valley",
    buttons: [
      { label: "Register Now", link: "/services", type: "primary" },
      { label: "Contact Now", link: "/contact", type: "secondary" },
    ],
    align: "center",
  },
  {
    title: "🏞️ Discover the ancient Gadaa system",
    subtitle: "A symbol of Oromo democracy and indigenous governance",
    buttons: [{ label: "Learn More", link: "/about", type: "primary" }],
    align: "left",
  },
  {
    title: "🎉 Celebrate Irreecha",
    subtitle:
      "The thanksgiving festival that connects the Oromo people to Waaqa (God) and nature",
    buttons: [
      { label: "Get Free Quote", link: "/contact", type: "primary" },
      { label: "Learn More", link: "/about", type: "secondary" },
    ],
    align: "right",
  },
  {
    title: "🏛️ Visit historical sites like Odaa Bultum",
    subtitle: "Odaa Bisil, and Sof Omar Caves rooted deep in Oromo heritage",
    buttons: [{ label: "Explore More", link: "/heritage", type: "primary" }],
    align: "center",
  },
  {
    title: "🕊️ Learn about the rich Oromo culture",
    subtitle: "Language, music, values, and the resilience of the people",
    buttons: [{ label: "Discover", link: "/culture", type: "secondary" }],
    align: "left",
  },
  {
    title: "📸 Capture unforgettable moments",
    subtitle:
      "Across Oromia’s vibrant traditions, scenic beauty, and warm hospitality",
    buttons: [{ label: "Gallery", link: "/gallery", type: "primary" }],
    align: "right",
  },
  {
    title: "🗺️ WanderEthio takes you through Oromia",
    subtitle: "Untouched nature, sacred rituals, and legendary stories",
    buttons: [{ label: "Start Journey", link: "/services", type: "primary" }],
    align: "center",
  },
  {
    title: "🌾 Travel through Oromia’s fertile lands",
    subtitle: "Home to Ethiopia’s coffee origin – the land of Jimma and Harar",
    buttons: [{ label: "Taste Coffee", link: "/coffee", type: "secondary" }],
    align: "left",
  },
  {
    title: "🛕 Discover ancient worship sites",
    subtitle: "Sacred trees where Oromo practiced Waaqeffannaa",
    buttons: [{ label: "See Sites", link: "/waaqeffannaa", type: "primary" }],
    align: "right",
  },
  {
    title: "⛰️ Hike through Bale Mountains National Park",
    subtitle: "Home to rare species like the Ethiopian wolf and mountain nyala",
    buttons: [
      { label: "Visit Park", link: "/parks", type: "primary" },
      { label: "Plan Trip", link: "/contact", type: "secondary" },
    ],
    align: "center",
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <FixedHeader />
      <div className="home-hero">
        <div className="video-wrapper">
          <div className="video-background">
            <video autoPlay muted loop playsInline>
              <source src={oromiaVideo} type="video/mp4" />
            </video>
          </div>

          {/* Main content here */}
        </div>
        <div className="slide-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentSlide ? "active" : ""
              } align-${slide.align}`}
            >
              <h1 className="slide-title animate">{slide.title}</h1>
              <p className="slide-subtitle animate">{slide.subtitle}</p>
              <div className="slide-buttons animate">
                {slide.buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.link}
                    className={btn.type === "primary" ? "primary" : "secondary"}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          {/* <BottomHeader /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
