import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faPlay } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/Irreecha.css";
// importing header
import Header from "./header.jsx";
// Image imports
import HeaderImage from "../../assets/images/Irreecha/irreecha-hero.jpg";
import RitualImage from "../../assets/images/Irreecha/ritual.jpg";
import Food from "../../assets/images/Irreecha/food.jpg";
import GatheringImage from "../../assets/images/Irreecha/gathering.jpg";
import PrayerImage from "../../assets/images/Irreecha/celebration.jpg";

import acc1 from "../../assets/images/Irreecha/acc1.jpg";
import acc2 from "../../assets/images/Irreecha/acc2.jpg";
import acc3 from "../../assets/images/Irreecha/acc3.jpg"; 
import TipsImage from "../../assets/images/Irreecha/irreecha-hero.jpg";

const IrreechaPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});

  const traditions = [
    {
      title: "Water Rituals",
      description: "Sprinkling water and carrying grass symbolizes purification and thanksgiving",
      image: RitualImage
    },
    {
      title: "Traditional Food",
      description: "Irreecha, the Oromo thanksgiving festival, involves sharing traditional Oromo foods as a symbol of unity and hospitality",
      image: Food
    },
    {
      title: "Communal Prayers",
      description: "Elders lead prayers of gratitude to Waaqa (God)",
      image: PrayerImage
    },
    {
      title: "Mass Gathering",
      description: "Millions gather at Lake Hora Arsadi for celebrations",
      image: GatheringImage
    }
  ];

  const accommodations = [
    {
      name: "Bishoftu Lodge",
      description: "Comfortable mid-range option close to festival site",
      image: acc1
    },
    {
      name: "Hora Arsadi Guesthouse",
      description: "Budget-friendly with traditional Oromo hospitality",
      image: acc2
    },
    {
      name: "Debre Zeit Hotel",
      description: "Modern amenities with easy festival access",
      image: acc3
    }
  ];

  const faqs = [
    {
      question: "Is Irreecha only for Oromo people?",
      answer: "No, visitors from all backgrounds are welcome to observe respectfully."
    },
    {
      question: "Can visitors participate in rituals?",
      answer: "Participation varies by activity - follow guidance from elders and local hosts."
    },
    {
      question: "What should I wear to Irreecha?",
      answer: "White clothing is preferred as it shows respect for the ceremony."
    },
    {
      question: "How do I get to the festival site?",
      answer: "From Addis Ababa, take a minibus to Bishoftu (1 hour), then local transport to Lake Hora Arsadi."
    }
  ];

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="destination-container">
      <Header/>
        {/* Hero Header */}
      <div className="destination-header" style={{ backgroundImage: `url(${HeaderImage})` }}>
        <div className="header-overlay">
          <h1>Irreecha Festival</h1>
          <h2>Oromo Thanksgiving Celebration</h2>
          <div className="location-tag">
            <span>📍 Lake Hora Arsadi, Bishoftu</span>
          </div>
        </div>
      </div>

      <div className="destination-content">
        {/* Overview Section */}
        <section className="destination-section">
          <h2>Overview</h2>
          <hr />
          <p>
            Irreecha is the annual thanksgiving festival of the Oromo people, celebrated with vibrant rituals that mark the end of the rainy season and the start of the harvest. It is a time of gratitude to Waaqa (God) for blessings of peace, health, and abundance.
          </p>
          <div className="flex-section">
            <div>
              <p>
                This UNESCO-recognized cultural heritage brings together millions of participants in colorful celebrations that showcase Oromo traditions, spirituality, and community values.
              </p>
              <img src={GatheringImage} alt="Irreecha Gathering" className="section-image" />
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="destination-section">
          <h2>Historical and Cultural Significance</h2>
          <hr />
          <p>
            With deep roots going back centuries, Irreecha reflects the Oromo's close relationship with nature and spirituality. It unites communities in thanksgiving and prayer for continued prosperity and harmony.
          </p>
          <p>
            The festival embodies key Oromo values from the Gadaa system - peace, democracy, environmental stewardship, and social cohesion. Each ritual carries symbolic meaning connecting the people to their creator and natural world.
          </p>
        </section>

        {/* When and Where */}
        <section className="destination-section">
          <h2>When and Where</h2>
          <hr />
          <div className="flex-section">
            <div>
              <p>
                Held in late September or early October (Ethiopian month of Meher), the largest celebrations occur at Lake Hora Arsadi near Bishoftu, about 50km from Addis Ababa.
              </p>
              <ul>
                <li><strong>Main Festival:</strong> Last Sunday of September</li>
                <li><strong>Location:</strong> Lake Hora Arsadi, Bishoftu</li>
                <li><strong>Duration:</strong> 1 day (with week-long cultural events)</li>
              </ul>
            </div>
            </div>
        </section>

        {/* Traditions Section */}
        <section className="destination-section">
          <h2>Key Traditions and Activities</h2>
          <hr />
          <div className="grid">
            {traditions.map((tradition, index) => (
              <div className="card" key={index}>
                <h3>{tradition.title}</h3>
                <p>{tradition.description}</p>
                <img src={tradition.image} alt={tradition.title} />
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation */}
        <section className="destination-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            During the festival period, Bishoftu offers several accommodation options ranging from budget guesthouses to mid-range hotels. It's advisable to book in advance as demand is high during Irreecha.
          </p>
          <div className="grid">
            {accommodations.map((hotel, index) => (
              <div className="card" key={index}>
                <h3>{hotel.name}</h3>
                <p>{hotel.description}</p>
                <img src={hotel.image} alt={hotel.name} />
              </div>
            ))}
          </div>
        </section>

        {/* Why Attend */}
        <section className="destination-section flex-section">
          <img src={HeaderImage} alt="Cultural Dance" />
          <div>
            <h2>Why Attend Irreecha?</h2>
            <hr />
            <p>
              Irreecha offers a unique cultural immersion into one of Ethiopia's most beautiful and joyful celebrations. Visitors can:
            </p>
            <ul className="tips-list">
              <li>Witness powerful traditional rituals</li>
              <li>Experience authentic Oromo music and dance</li>
              <li>Learn about indigenous spiritual practices</li>
              <li>Enjoy Oromo hospitality and cuisine</li>
              <li>See spectacular gatherings of colorfully dressed participants</li>
            </ul>
          </div>
        </section>

        {/* Video Section */}
        <section className="destination-section">
          <h2>Experience Irreecha</h2>
          <hr />
          <button className="watch-video-btn" onClick={() => setShowVideo(true)}>
            <FontAwesomeIcon icon={faPlay} /> Watch Festival Video
          </button>
          {showVideo && (
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/X2p14i8xorg"
                title="Irreecha Festival Celebration"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </section>

        {/* Practical Info */}
        <section className="destination-section">
          <h2>Practical Information</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Best Time to Visit</h3>
              <p>Late September to early October during the dry season</p>
            </div>
            <div className="card">
              <h3>What to Bring</h3>
              <p>Comfortable shoes, sun protection, white clothing</p>
            </div>
            <div className="card">
              <h3>Transportation</h3>
              <p>Minibuses from Addis to Bishoftu, then local transport</p>
            </div>
            <div className="card">
              <h3>Cultural Respect</h3>
              <p>Follow local customs and ask before taking photos</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="faq-section">
          <img src={RitualImage} alt="Cultural Tips" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <ul className="faq-list">
              {faqs.map((faq, index) => (
                <li key={index} className="faq-item">
                  <strong className="faq-question" onClick={() => toggleFaq(index)}>
                    {faq.question}
                    <FontAwesomeIcon icon={faqOpen[index] ? faChevronUp : faChevronDown} />
                  </strong>
                  {faqOpen[index] && <p className="faq-answer">{faq.answer}</p>}
                  <hr className="faq-divider" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrreechaPage;