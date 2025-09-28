import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/bale.css";
// Importing images
import ParkHeader from "../../assets/images/SofOmar/sofomar-hero.jpg";
import CaveEntrance from "../../assets/images/SofOmar/sofomar-entrance.jpg";
import CaveInterior from "../../assets/images/SofOmar/sofomar-interior.jpg";
import RiverPassage from "../../assets/images/SofOmar/sofomar-river.jpg";
import RockFormations from "../../assets/images/SofOmar/sofomar-formations.jpg";
import CulturalSite from "../../assets/images/SofOmar/sofomar-cultural.jpg";
import TipsImage from "../../assets/images/SofOmar/sofomar-hero.jpg";
import FaqImage from "../../assets/images/SofOmar/sofomar-interior.jpg";
import wildlife1 from "../../assets/images/SofOmar/sofomar-wildlife1.jpg";
import wildlife2 from "../../assets/images/SofOmar/sofomar-wildlife2.jpg";   
import wildlife3 from "../../assets/images/SofOmar/sofomar-wildlife3.jpg";
import acc1 from "../../assets/images/SofOmar/acc1.jpg";
import acc2 from "../../assets/images/SofOmar/acc2.jpg"; 
import acc3 from "../../assets/images/SofOmar/acc3.jpg";
// importing header
import Header from "./header.jsx";

const SofOmarPage = () => {
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
      question: "How long is Sof Omar Cave?",
      answer:
        "The Sof Omar cave system extends for about 15.1 kilometers, making it the longest cave system in Ethiopia and one of the most extensive in Africa. The Web River runs through the caves for about 1.5 kilometers of this length.",
    },
    {
      question: "Is it safe to visit Sof Omar Cave?",
      answer:
        "Visiting with an experienced guide is safe, especially during the dry season when water levels are lower. Some passages can be narrow and slippery, so proper footwear and caution are necessary. Flashlights and helmets are recommended.",
    },
    {
      question: "What is the religious significance of Sof Omar?",
      answer:
        "The caves are named after Sheikh Sof Omar, a Muslim holy man who took refuge here in the 12th century. The site remains an important Islamic pilgrimage destination, with prayer sites within the caves.",
    },
    {
      question: "What should I bring for a cave visit?",
      answer:
        "Essential items include sturdy shoes with good grip, a headlamp or flashlight, spare batteries, water, and a camera. During rainy season, waterproof gear is recommended as some passages may have water.",
    },
    {
      question: "Are there accommodations near Sof Omar?",
      answer:
        "Basic guesthouses are available in nearby Goba and Robe towns. For closer options, there are simple lodges in the small town of Sof Omar itself, about 2km from the cave entrance.",
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
          <h1>Sof Omar Cave</h1>
          <h2>Ethiopia's Subterranean Wonder</h2>
          <div className="location-tag">
            <span>📍 Bale Zone, Oromia Region, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        <section className="park-section">
          <h2>About Sof Omar Cave</h2>
          <hr />
          <p>
            Sof Omar Cave is one of Ethiopia's most spectacular natural wonders and the longest cave system in the country. 
            Located in the Bale Zone of the Oromia Region, this immense network of limestone caves was carved by the Web River 
            over millions of years. The caves stretch for approximately 15.1 kilometers, with the river flowing through 
            about 1.5 kilometers of the system.
          </p>
          <p>
            The caves are not only a geological marvel but also hold great cultural and religious significance as an 
            important Islamic pilgrimage site. Named after Sheikh Sof Omar who took refuge here in the 12th century, 
            the caves feature stunning rock formations, vast chambers, and the constantly flowing Web River that adds 
            to the mystical atmosphere.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            The Sof Omar caves have been known to local people for centuries, serving as both a natural fortress and 
            a spiritual site. The caves are named after Sheikh Sof Omar, a Muslim holy man who used the caves as a 
            refuge during his religious missions in the 12th century. Since then, the caves have become an important 
            Islamic pilgrimage site.
          </p>
          <p>
            Scientifically, the caves were first documented by European explorers in the late 19th century. The first 
            complete mapping was done in the 1970s by a British expedition. Today, Sof Omar is recognized as one of 
            Africa's most significant cave systems and an important tourist destination in Ethiopia.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Sof Omar Cave is located about 460km southeast of Addis Ababa. The journey typically takes 8-10 hours by road:
          </p>
          <ul>
            <li>From Addis Ababa: Take the Addis-Bale highway through Asela and Robe</li>
            <li>From Bale Mountains National Park: About 120km (2.5 hours) southeast via Goba</li>
            <li>Public transport: Buses run from Addis to Robe, then local transport to Sof Omar village</li>
          </ul>
          <p>
            The last 2km from Sof Omar village to the cave entrance is on a rough track best navigated with a 4x4 vehicle 
            or on foot. The nearest major towns with full services are Goba (60km) and Robe (100km).
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Chamber of Columns</h3>
              <p>
                Marvel at the spectacular main chamber with its towering limestone pillars, some reaching 20 meters high. 
                This vast space is large enough to hold several buildings and is the most photographed spot in the caves.
              </p>
              <img src={CaveInterior} alt="Chamber of Columns" />
            </div>
            <div className="card">
              <h3>Web River Passage</h3>
              <p>
                Follow the path of the Web River as it flows through the caves, creating dramatic water-carved passages 
                and occasional small waterfalls. The river adds both beauty and challenge to exploration.
              </p>
              <img src={RiverPassage} alt="Web River Passage" />
            </div>
            <div className="card">
              <h3>Islamic Prayer Sites</h3>
              <p>
                Visit the sacred prayer sites within the caves, including the prayer niche (mihrab) that marks where 
                Sheikh Sof Omar worshipped. These areas remain important pilgrimage destinations.
              </p>
              <img src={CulturalSite} alt="Islamic Prayer Sites" />
            </div>
            <div className="card">
              <h3>Rock Formations</h3>
              <p>
                Discover stunning stalactites, stalagmites, and other limestone formations throughout the cave system. 
                Some resemble animals, curtains, or even religious figures to imaginative viewers.
              </p>
              <img src={RockFormations} alt="Rock Formations" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>Sof Omar Cave and its surroundings host unique ecosystems:</p>
          <div className="grid">
            <div className="card">
              <h3>Bat Colonies</h3>
              <p>
                The caves are home to several species of bats that roost in the darker chambers. These nocturnal 
                creatures play a crucial role in the cave ecosystem and emerge at dusk in spectacular numbers.
              </p>
              <img src={wildlife1} alt="Bat Colonies" />
            </div>
            <div className="card">
              <h3>Cave-Adapted Species</h3>
              <p>
                Specialized invertebrates including blind fish, crustaceans, and insects have adapted to the permanent 
                darkness of the deeper cave sections, some found nowhere else.
              </p>
              <img src={wildlife2} alt="Cave-Adapted Species" />
            </div>
            <div className="card">
              <h3>Surface Wildlife</h3>
              <p>
                The surrounding area hosts typical Bale Highlands wildlife including colobus monkeys, various bird 
                species, and small mammals attracted to the riverine habitat.
              </p>
              <img src={wildlife3} alt="Surface Wildlife" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            Accommodation options near Sof Omar Cave include:
          </p>
          <div className='grid'>
            <div className="card">
              <h3>Sof Omar Lodge</h3>  
              <img src={acc1} alt="Sof Omar Lodge" />
            </div>
            <div className='card'>
              <h3>Goba Hotels</h3>
              <img src={acc2} alt="Goba Hotels" />
            </div>
            <div className='card'>
              <h3>Robe Guesthouses</h3>
              <img src={acc3} alt="Robe Guesthouses" />
            </div>
          </div> 
        </section>

        <section className="park-section flex-section">
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The ideal time to visit Sof Omar Cave depends on your interests:
            </p>
            <ul>
              <li>October-February: Dry season allows full cave exploration</li>
              <li>March-May: Pre-rainy season with lush surroundings</li>
              <li>June-September: Rainy season may limit access to some passages</li>
              <li>Early morning: Best lighting for photography at the entrance</li>
            </ul>
            <p>
              For the most comfortable exploration, visit during the cooler morning hours regardless of season.
            </p>
          </div>
          <img src={CaveEntrance} alt="Best Time to Visit" />
        </section>

        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Sof Omar Cave:
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.731132452287!2d38.71663631478488!3d7.600029994480595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b144f4c6e7580d%3A0x4c9aa9a5c4a7f1e5!2sSof%20Omar%20Cave!5e0!3m2!1sen!2set!4v1717528734596!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Sof Omar Cave Location"
            ></iframe>
            <p>
              Sof Omar Cave is located in the Bale Zone of the Oromia Region in southeastern Ethiopia, approximately 
              460km from Addis Ababa. The caves are situated near the small town of Sof Omar, about 60km northeast 
              of Goba and 100km northeast of Robe. The coordinates are approximately 6°54′N 40°50′E. The cave entrance 
              lies at an elevation of about 1,300 meters above sea level, where the Web River disappears underground 
              into the limestone formations.
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
                Always hire a local guide who knows the cave system well
              </li>
              <li>
                Wear sturdy, non-slip footwear as surfaces can be wet and slippery
              </li>
              <li>
                Bring multiple light sources (headlamp plus backup flashlight)
              </li>
              <li>
                Carry drinking water as the cave environment can be dehydrating
              </li>
              <li>
                Dress in layers - temperatures inside are cooler than outside
              </li>
              <li>
                Respect religious sites within the caves
              </li>
              <li>
                Check water levels during rainy season as some passages may flood
              </li>
              <li>
                Consider waterproof bags for cameras and other sensitive equipment
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Experience the awe-inspiring beauty of Sof Omar Cave through this video.
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
                title="Sof Omar Cave Experience"
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

export default SofOmarPage;