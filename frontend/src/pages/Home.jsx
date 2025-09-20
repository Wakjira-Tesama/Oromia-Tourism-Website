import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import StarRating from "../Components/starRating.jsx";
import NewsletterSignup from "../Components/subscribePage.jsx"; // Corrected import path
import "../styles/Header.css";
import "../App.css";
import Bale from "../assets/images/Bale/sanettiPlateau.jpg";
import Awash from "../assets/images/Awash/awash2.jpg";
import Abijata from "../assets/images/Abijata/ostrich.jpg";
import Langano from "../assets/images/Langano/langano-sunset.jpg";
import Borena from "../assets/images/Borena/borena-hero.jpg";
import Haramaya from "../assets/images/Haramaya/haramaya-tips.jpg";
import Wenchi from "../assets/images/Wenchi/wenchi-hero.jpg";
import SofOmar from "../assets/images/SofOmar/sofomar-hero.jpg";
import Irreecha from "../assets/images/Irreecha/celebration.jpg";
import Gada from "../assets/images/GadaSystem/gada-assembly.jpg";

import MessiImage from "../assets/images/customers/messi.jpg";
import RonaldoImage from "../assets/images/customers/ronaldo.jpg";
import PutinImage from "../assets/images/customers/putin.jpg";
import SmithImage from "../assets/images/customers/messi2.jpg";
import DoeImage from "../assets/images/customers/ronaldo2.jpg";
import OdaaImage from "../assets/images/backgrounds/oda2.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [ratings, setRatings] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial subscriber count when the component mounts
    const fetchSubscriberCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/subscribers/count"
        );
        setSubscriberCount(response.data.count);
      } catch (err) {
        console.error("Failed to fetch subscriber count", err);
      }
    };

    fetchSubscriberCount();
  }, []);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const mockSearch = (query) => {
    const destinations = [
      "Bale ",
      "Abijata",
      "Langeno",
      "Borena",
      "Awash",
      "Wenchi",
      "Haramaya",
      "Sofomar",
      "Irreecha",
      "Gadaa",

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

  const handleRating = (name, rating) => {
    setRatings({ ...ratings, [name]: rating });
  };

  const featuredDestinations = [
    {
      name: "Bale Mountains",
      description: "Trek through the beautiful and biodiverse Bale Mountains.",
      imageUrl: Bale,
      link: "/destination/bale",
    },
    {
      name: "Awash National Park",
      description:
        "Discover the diverse wildlife and stunning landscapes of Awash National Park.",
      imageUrl: Awash,
      link: "/destination/awash",
    },
    {
      name: "Abijata",
      description:
        "Explore the breathtaking landscapes of the Simien Mountains.",
      imageUrl: Abijata,
      link: "/destination/abijata",
    },
    {
      name: "Borena",
      description: "Visit the ancient rock-hewn churches of Lalibela.",
      imageUrl: Borena,
      link: "/destination/borena",
    },
    {
      name: "Lake Langeno",
      description:
        "Experience the diverse cultures and tribes of the Omo Valley.",
      imageUrl: Langano,
      link: "/destination/langano",
    },
    {
      name: "Lake Haramaya",
      description: "Discover the ancient ruins and obelisks of Axum.",
      imageUrl: Haramaya,
      link: "/destination/haramaya",
    },
    {
      name: "Wenchi ",
      description: "Enjoy the beautiful landscapes and Lake Tana in Bahirdar.",
      imageUrl: Wenchi,
      link: "/destination/wenchi",
    },
    {
      name: "SofOmer Cave",
      description: "Explore the walled city and vibrant markets of Harar.",
      imageUrl: SofOmar,
      link: "/destination/sof-omar",
    },
    {
      name: "Irreacha",
      description:
        "Visit the rock-hewn churches and rugged landscapes of Tigray.",
      imageUrl: Irreecha,
      link: "/destination/irreecha",
    },
  ];

  const additionalFeaturedDestinations = [
    {
      name: "Gadaa System",
      description:
        "Experience one of the hottest places on Earth with unique landscapes in the Danakil Depression.",
      imageUrl: Gada,
      link: "/destination/gadaa",
    },
  ];

  const handleDiscoverMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(searchQuery);
    setSearchQuery("");
  };

  const featuredActivities = [
    {
      name: "Hiking",
      description: "Enjoy scenic hiking trails in the Ethiopian highlands.",
      icon: "🥾",
      link: "/todo/Hiking",
    },
    {
      name: "Wildlife Safaris",
      description: "Experience the rich wildlife in national parks.",
      icon: "🦁",
      link: "/todo/Wildlife",
    },
    {
      name: "Cultural Tours",
      description: "Engage with local tribes and their cultures.",
      icon: "🌍",
      link: "/todo/Cultural Tours",
    },
    {
      name: "Historical Sites",
      description: "Visit ancient ruins and historical landmarks.",
      icon: "🏛️",
      link: "/todo/Photography",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ethiopia offers an unforgettable experience with its rich history and stunning landscapes. A must-visit destination!",
      author: "John Doe",
      image: DoeImage,
    },
    {
      quote:
        "Ethiopia's landscapes are stunning, from the Simien Mountains to the Danakil Depression.",
      author: "Jane Smith",
      image: SmithImage,
    },
    {
      quote:
        "Exploring Ethiopia's ancient history and rich traditions is an unforgettable experience.",
      author: "Lionel Messi",
      image: MessiImage,
    },
    {
      quote:
        "The hospitality of the Ethiopian people is heartwarming and unforgettable.",
      author: "Cristiano Ronaldo",
      image: RonaldoImage,
    },
    {
      quote:
        "Ethiopia offers a unique blend of history, culture, and natural beauty.",
      author: "Vladimir Putin",
      image: PutinImage,
    },
  ];
  const videoData = [
    {
      title: "360 VR Addis Ababa",
      url: "https://www.youtube.com/embed/2xW9mTStyhM",
    },
    {
      title: "Dramatic Landscapes",
      url: "https://www.youtube.com/embed/nRf6hG3yLX4",
    },
    {
      title: "World Heritage Sites",
      url: "https://www.youtube.com/embed/_PZ5ywCCaSo",
    },
    {
      title: "New Tourist Sites",
      url: "https://www.youtube.com/embed/W13qGJKPiD8",
    },
  ];

  return (
    <div className="HomeBody">
      <Header />
      <main className="mainHomePage">
        <section
          className="container py-5"
          style={{ backgroundColor: "#f8f8f8" }} // Background fakkaataa
        >
          <div
            className="row align-items-center"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Suuraa bitaa - Logo */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <a href="#">
                <img
                  src={OdaaImage} // fakkeenya: "/images/oromia-logo.png"
                  alt="Oromia - Home of the Democratic Gadaa System"
                  className="img-fluid"
                  style={{ maxWidth: "250px" }}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>

            {/* Gulaallii barruu gidduu */}
            <div className="col-md-5">
              <h2 className="h3 text-dark mb-3 fw-bold">
                Welcome to Oromia, Home of Abba Gadaa
              </h2>
              <p className="text-muted mb-4 fs-5">
                Oromia invites you to discover the wisdom of the Gadaa system
                and the breathtaking nature, culture, and hospitality of its
                people.
              </p>
            </div>

            {/* Flipbook mirgaa - Suura Preview */}
            <div className="col-md-3 text-center text-md-end mt-4 mt-md-0">
              <a
                href="https://online.fliphtml5.com/wnzsu/msua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://online.fliphtml5.com/wnzsu/msua/files/shot.jpg"
                  alt="Oromia Flipbook Preview"
                  className="img-thumbnail shadow"
                  style={{
                    maxWidth: "220px",
                    border: "1px solid #ccc",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </a>
              <div className="registerBtnDiv">
                <button className="RegisterButton">
                  <a
                    href="http://localhost:5177"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-destinations-section">
          <h2 className="section-title">Featured Destinations</h2>
          <div className="destination-list">
            {(showMore
              ? featuredDestinations.concat(additionalFeaturedDestinations)
              : featuredDestinations.slice(0, 4)
            ).map((destination) => (
              <div key={destination.name} className="destination-card">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-description">
                  <h3 className="destination-title">{destination.name}</h3>
                  <p className="destination-text">{destination.description}</p>
                  <Link to={destination.link}>
                    <button className="read-more-btn">READ MORE →</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleDiscoverMore}
            className="discover-more-btn main-toggle-btn"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>

        <section className="featured-activities">
          <h2>Featured Activities</h2>
          <div className="activity-list">
            {featuredActivities.map((activity) => (
              <div key={activity.name} className="activity">
                <span>{activity.icon}</span>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <StarRating
                  rating={ratings[activity.name] || 0}
                  onRating={(rating) => handleRating(activity.name, rating)}
                />
                <Link to={activity.link}>
                  <button className="discover-more-btn">Learn More</button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="watch-videos-section">
          <h2 className="section-heading">
            Latest Videos - Visit Oromia — An Inside Story.
          </h2>
          <div className="video-list">
            {videoData.map((video, index) => (
              <div key={index} className="video-card">
                <iframe
                  width="100%"
                  height="350"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <p className="video-title">{video.title}</p>
              </div>
            ))}
          </div>
          <div className="see-more">
            <a
              href="https://www.youtube.com/@ethiopiatravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More -&gt; [YouTube]
            </a>
          </div>
        </section>
        <section className="customer-reviews">
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="testimonial">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-image"
                />

                <p>
                  <strong>- {testimonial.author}</strong>
                </p>
                <p>"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
