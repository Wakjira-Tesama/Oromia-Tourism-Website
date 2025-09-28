import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/bale.css";
// Importing images
import ParkHeader from "../../assets/images/Wenchi/wenchi-hero.jpg";
import Hiking from "../../assets/images/Wenchi/wenchi-hiking.jpg";
import LakeView from "../../assets/images/Wenchi/wenchi-lake.jpg";
import HotSprings from "../../assets/images/Wenchi/wenchi-hotsprings.jpg";
import Waterfall from "../../assets/images/Wenchi/wenchi-waterfall.jpg";
import TipsImage from "../../assets/images/Wenchi/wenchi-tips.jpg";
import FaqImage from "../../assets/images/Wenchi/wenchi-faq.jpg";
import wildlife1 from "../../assets/images/Wenchi/wildlife1.jpg";
import wildlife2 from "../../assets/images/Wenchi/wildlife2.jpg";   
import wildlife3 from "../../assets/images/Wenchi/wildlife3.jpg";
import acc1 from "../../assets/images/Wenchi/acc1.jpg";
import acc2 from "../../assets/images/Wenchi/acc2.jpg"; 
import acc3 from "../../assets/images/Wenchi/acc3.jpg";
// importing header
import Header from "./header.jsx";

const WenchiPage = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [showVideo, setShowVideo] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const faqs = [
    {
      question: "How was Wenchi Crater Lake formed?",
      answer:
        "Wenchi Crater Lake was formed by a volcanic eruption millions of years ago. The collapse of the volcanic cone created the caldera that later filled with water, forming the stunning crater lake we see today.",
    },
    {
      question: "What activities can you do at Wenchi Crater Lake?",
      answer:
        "Popular activities include hiking around the crater rim, horseback riding, boat trips on the lake, visiting the island monastery, swimming in hot springs, and enjoying the spectacular waterfalls.",
    },
    {
      question: "Is Wenchi Crater Lake safe for swimming?",
      answer:
        "While the main lake is quite deep and cold, there are natural hot springs where swimming is possible and enjoyable. Always check with local guides about current conditions.",
    },
    {
      question: "What is the best time to visit Wenchi Crater Lake?",
      answer:
        "The dry season from October to May is ideal, with clear views and comfortable temperatures for hiking. The rainy season (June-September) can make trails muddy but enhances the waterfalls.",
    },
    {
      question: "How difficult is the hike around the crater?",
      answer:
        "The full crater rim hike is moderately challenging, taking 4-6 hours. There are shorter options available. The altitude (about 3,400m at the rim) can make breathing more difficult for some visitors.",
    },
  ];

  return (
    <div className="park-container">
      <Header />
      <div
        className="park-header"
        style={{ backgroundImage: `url(${ParkHeader})` }}
      >
        <div className="header-overlay">
          <h1>Wenchi Crater Lake</h1>
          <h2>Ethiopia's Volcanic Wonder</h2>
          <div className="location-tag">
            <span>📍 Oromia Region, Central Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        <section className="park-section">
          <h2>About Wenchi Crater Lake</h2>
          <hr />
          <p>
            Wenchi Crater Lake is a breathtaking volcanic crater lake located about 155km west of Addis Ababa 
            in the Oromia Region. Formed in a volcanic caldera at an altitude of 3,400 meters above sea level, 
            the lake is surrounded by steep crater walls and lush vegetation, creating one of Ethiopia's most 
            spectacular natural landscapes.
          </p>
          <p>
            The lake itself is about 5km wide and features several small islands, including one with a historic 
            monastery. The area around the lake is dotted with hot springs, waterfalls, and traditional Oromo 
            villages, offering visitors a unique combination of natural beauty and cultural experiences.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            The Wenchi volcano is estimated to have last erupted hundreds of thousands of years ago, creating 
            the massive caldera that now holds the lake. The area has been inhabited by the Oromo people for 
            centuries, who have traditionally used the fertile volcanic soils for agriculture.
          </p>
          <p>
            The lake's island monastery, Cherkos, was established in the 14th century and remains an important 
            religious site. In recent years, Wenchi has become increasingly popular with both domestic and 
            international tourists seeking its stunning scenery and outdoor activities.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Wenchi Crater Lake is accessible via a 3-4 hour drive from Addis Ababa:
          </p>
          <ul>
            <li>Take the Addis Ababa-Ambo road west through the town of Weliso</li>
            <li>Turn north at the Wenchi junction (well-marked)</li>
            <li>The final approach involves about 15km on a gravel road</li>
            <li>Public transport options include minibuses from Addis to Weliso, then local transport to Wenchi</li>
          </ul>
          <p>
            The nearest major town is Ambo, about 45km away. Many visitors choose to combine a trip to Wenchi 
            with visits to other attractions in the area like Mount Wenchi or the hot springs at Guder.
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Crater Rim Hike</h3>
              <p>
                Trek around the rim of the crater for breathtaking panoramic views of the lake below. 
                The full hike takes 4-6 hours with elevation changes, but shorter options are available.
              </p>
              <img src={Hiking} alt="Crater Rim Hike" />
            </div>
            <div className="card">
              <h3>Boat Trips</h3>
              <p>
                Take a traditional boat to the island monastery of Cherkos, where you can explore the 
                14th-century church and enjoy the peaceful surroundings.
              </p>
              <img src={LakeView} alt="Boat Trips" />
            </div>
            <div className="card">
              <h3>Hot Springs</h3>
              <p>
                Relax in natural hot springs along the lake shore, where mineral-rich waters provide 
                a soothing experience amidst stunning scenery.
              </p>
              <img src={HotSprings} alt="Hot Springs" />
            </div>
            <div className="card">
              <h3>Waterfalls</h3>
              <p>
                Discover several spectacular waterfalls cascading down the crater walls, particularly 
                impressive during and after the rainy season.
              </p>
              <img src={Waterfall} alt="Waterfalls" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>Wenchi Crater Lake and its surroundings host diverse flora and fauna:</p>
          <div className="grid">
            <div className="card">
              <h3>Bird Species</h3>
              <p>
                The lake area is home to numerous bird species including raptors, waterfowl, and endemic 
                highland species. The island monastery hosts a resident population of sacred ibises.
              </p>
              <img src={wildlife1} alt="Bird Species" />
            </div>
            <div className="card">
              <h3>Mammals</h3>
              <p>
                While large mammals are rare, visitors may spot colobus monkeys, hyraxes, and various small 
                mammals. The surrounding forests host diverse rodent and insect species.
              </p>
              <img src={wildlife2} alt="Mammals" />
            </div>
            <div className="card">
              <h3>Aquatic Life</h3>
              <p>
                The lake supports several fish species introduced for fishing. The hot springs host unique 
                microbial communities adapted to the warm, mineral-rich waters.
              </p>
              <img src={wildlife3} alt="Aquatic Life" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            Accommodation options near Wenchi Crater Lake include:
          </p>
          <div className='grid'>
            <div className="card">
              <h3>Wenchi Eco Lodge</h3>  
              <img src={acc1} alt="Wenchi Eco Lodge" />
            </div>
            <div className='card'>
              <h3>Local Guesthouses</h3>
              <img src={acc2} alt="Local Guesthouses" />
            </div>
            <div className='card'>
              <h3>Hotels in Ambo</h3>
              <img src={acc3} alt="Hotels in Ambo" />
            </div>
          </div> 
        </section>

        <section className="park-section flex-section">
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The ideal time to visit Wenchi Crater Lake depends on your preferences:
            </p>
            <ul>
              <li>October-February: Dry season with clear views and comfortable hiking temperatures</li>
              <li>March-May: Wildflowers bloom and waterfalls are at their strongest</li>
              <li>June-September: Rainy season brings lush greenery but muddy trails</li>
              <li>Early mornings: Best for clear views before afternoon clouds gather</li>
            </ul>
          </div>
          <img src={LakeView} alt="Best Time to Visit" />
        </section>

        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Wenchi Crater Lake:
            </p>
            <ul className="faq-list">
              {faqs.map((faq, index) => (
                <li key={index} className="faq-item">
                  <strong
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <FontAwesomeIcon
                      icon={faqOpen[index] ? faChevronUp : faChevronDown}
                      className="faq-icon"
                    />
                  </strong>
                  {faqOpen[index] && <p className="faq-answer">{faq.answer}</p>}
                  <hr className="faq-divider" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="park-section">
          <h2>Location</h2>
          <div className="div-out-hr">
            <hr />
          </div>
          <div className="location-container flex-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.731132452287!2d38.71663631478488!3d7.600029994480595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b144f4c6e7580d%3A0x4c9aa9a5c4a7f1e5!2sWenchi%20Crater%20Lake!5e0!3m2!1sen!2set!4v1717528734596!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Wenchi Crater Lake Location"
            ></iframe>
            <p>
              Wenchi Crater Lake is located in the Oromia Region of central Ethiopia, about 155km west of 
              Addis Ababa. The lake sits within the crater of Mount Wenchi at an elevation of approximately 
              3,400 meters above sea level. The nearest significant town is Weliso, about 30km to the southeast. 
              The lake's coordinates are approximately 8°45′N 37°55′E, making it easily accessible from both 
              Addis Ababa and the western tourist circuit.
            </p>
          </div>
        </section>

        <section className="park-section flex-section">
          <img src={TipsImage} alt="Special Tips" />
          <div>
            <h2>Special Tips</h2>
            <hr />
            <ul className="tips-list">
              <li>
                Bring warm clothing - temperatures can be cool due to the high altitude
              </li>
              <li>
                Wear sturdy hiking shoes with good traction for the crater rim trails
              </li>
              <li>
                Acclimate to the altitude before attempting strenuous hikes
              </li>
              <li>
                Carry plenty of water and sun protection - the high altitude sun is intense
              </li>
              <li>
                Hire a local guide for the best experience and to support the community
              </li>
              <li>
                Respect religious customs when visiting the island monastery
              </li>
              <li>
                Consider horseback riding as an alternative to hiking if you prefer
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Experience the stunning beauty of Wenchi Crater Lake through this video.
          </p>
          <button className="watch-video-btn" onClick={handleWatchVideo}>
            Watch Video
          </button>
          {showVideo && (
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Wenchi Crater Lake Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default WenchiPage;