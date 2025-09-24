import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/bale.css";
// Importing images
import ParkHeader from "../../assets/images/Borena/borena-hero.jpg";
import BirdWatching from "../../assets/images/Borena/borena-birds.jpg";
import Savannah from "../../assets/images/Borena/borena-savannah.jpg";
import ElSod from "../../assets/images/Borena/el-sod.jpg";
import Wildlife from "../../assets/images/Borena/borena-wildlife.jpg";
import Culture from "../../assets/images/Borena/borena-culture.jpg";
import FaqImage from "../../assets/images/Borena/yabello.jpg";
import wildlife1 from "../../assets/images/Borena/wildlife1.jpg";
import wildlife2 from "../../assets/images/Borena/wildlife2.jpg";
import wildlife3 from "../../assets/images/Borena/wildlife3.jpg";
import acc1 from "../../assets/images/Borena/acc1.jpg";
import acc2 from "../../assets/images/Borena/acc2.jpg";
import acc3 from "../../assets/images/Borena/acc3.jpg";
// importing header
import Header from "./header.jsx";

const BorenaPage = () => {
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
      question: "What is the primary purpose of Borena National Park?",
      answer:
        "The park was established to protect the unique arid savannah ecosystem of the Borena zone and its endemic wildlife, including the Stresemann's Bushcrow and White-tailed Swallow. It also aims to preserve the cultural heritage of the Borena Oromo people.",
    },
    {
      question: "What is El-Sod and why is it important?",
      answer:
        "El-Sod, meaning 'house of salt', is a large volcanic crater with a highly saline black lake. For centuries, the Borena Oromo people have traditionally harvested salt from this lake for both human and animal consumption, making it a vital cultural and economic site.",
    },
    {
      question: "What endemic birds can I see in the park?",
      answer:
        "The park is famous for two globally endemic bird species: the Stresemann's Bushcrow and the White-tailed Swallow. It is a key birdwatching destination and is recognized as an Important Bird Area (IBA).",
    },
    {
      question: "Is a 4x4 vehicle necessary to visit?",
      answer:
        "Yes, a sturdy 4x4 vehicle is highly recommended. The roads within the park and surrounding areas are often unpaved and can be rough, especially during the rainy season.",
    },
    {
      question: "When is the best time to visit Borena National Park?",
      answer:
        "The ideal time to visit is during the dry season, from October to February. The weather is more predictable, and wildlife is easier to spot as they gather around limited water sources.",
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
          <h1>Borena National Park</h1>
          <h2>Ethiopia's Arid Savannah Gem</h2>
          <div className="location-tag">
            <span>📍 Southern Oromia Region, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        <section className="park-section">
          <h2>About Borena National Park</h2>
          <hr />
          <p>
            Borena National Park is located in the Borena Zone of the Oromia
            Region, in the southern part of Ethiopia. The park was established
            to protect a fragile ecosystem of arid savannah and acacia
            woodlands. It is a vital habitat for a variety of wildlife and is
            recognized as an Important Bird Area (IBA). Its creation was a
            collaborative effort to conserve the region's biodiversity while
            promoting the sustainable livelihood of the local Borena Oromo
            pastoralist community.
          </p>
          <p>
            The park is home to two globally endemic bird species: the
            Stresemann's Bushcrow and the White-tailed Swallow, making it a
            prime destination for birdwatchers.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            The area now designated as Borena National Park has been inhabited
            and managed by the Borena Oromo people for centuries, who have
            practiced a traditional semi-nomadic, pastoralist lifestyle. The
            park was officially designated to protect its unique biodiversity.
          </p>
          <p>
            The establishment of the park aimed to balance conservation needs
            with the traditional land use practices of the local community, a
            complex and ongoing effort that continues to this day.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Borena National Park is located approximately 570km south of Addis
            Ababa. The most common way to reach the park is by car, typically a
            4x4 vehicle, as roads can be challenging. The journey takes about
            10-12 hours from Addis Ababa, passing through Shashamene and Hagere
            Maryam. The main access point is through the town of Yabello, which
            serves as the park's gateway.
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Bird Watching</h3>
              <p>
                The park is a birdwatcher's paradise, home to over 300 species.
                Its most famous residents are the two globally endemic birds:
                the Stresemann's Bushcrow and the White-tailed Swallow.
              </p>
              <img src={BirdWatching} alt="Bird Watching" />
            </div>
            <div className="card">
              <h3>El-Sod Crater Lake</h3>
              <p>
                Explore the striking geological formation of the El-Sod Crater
                Lake, an inactive volcano with a deep black salt lake at its
                base. It's a place where the local Borena people have harvested
                salt for generations using traditional methods.
              </p>
              <img src={ElSod} alt="El-Sod Crater Lake" />
            </div>
            <div className="card">
              <h3>Wildlife Viewing</h3>
              <p>
                The park is home to a variety of animals adapted to the arid
                environment, offering excellent opportunities for game drives.
                You may spot species like Grant's gazelles, spotted hyenas, and
                various antelope species.
              </p>
              <img src={Wildlife} alt="Borena Wildlife" />
            </div>
            <div className="card">
              <h3>Cultural Experiences</h3>
              <p>
                Engage with the Borena Oromo people and learn about their
                traditional pastoralist lifestyle, unique governance system
                (Gada), and centuries-old traditions of cattle herding.
              </p>
              <img src={Culture} alt="Borena Culture" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>Borena hosts unique wildlife adapted to arid conditions:</p>
          <div className="grid">
            <div className="card">
              <h3>Stresemann's Bushcrow (endemic)</h3>
              <p>
                The Stresemann's Bushcrow (Zavattariornis stresemanni) is an
                endemic bird species found in the Borana Zone of southern
                Ethiopia, specifically within a small, distinct climate pocket
                characterized by specific temperature and rainfall patterns.
                This area is defined by the towns of Yabelo, Mega, and Arero.
                The species is considered endangered due to its restricted range
                and habitat loss.{" "}
              </p>
              <img src={wildlife1} alt="image" />
            </div>
            <div className="card">
              <h3>White-tailed Swallow (endemic)</h3>
              <p>
                The White-tailed Swallow (Hirundo megaensis), a vulnerable and
                endemic bird species, is found in the Yabelo-Mega region of
                southern Ethiopia, specifically within the Borana Zone. This
                swallow is restricted to this specific area and is known for its
                preference for open thornbush savanna habitats, often near
                termite mounds and sometimes in villages and farmland.{" "}
              </p>
              <img src={wildlife2} alt="image" />
            </div>
            <div className="card">
              <h3>Grant's gazelle</h3>
              <p>
                Grant's gazelles are found in the Borena Zone of Ethiopia,
                specifically within the Nechisar National Park and surrounding
                areas. They inhabit various habitats including semi-desert, open
                savannahs, plains, and lightly wooded areas. These gazelles are
                well-adapted to arid environments and are known for their
                ability to regulate their body temperature.{" "}
              </p>
              <img src={wildlife3} alt="image" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            Direct lodging within the park is minimal, but the nearby town of
            Yabello serves as the main hub for visitors, offering a variety of
            options:
          </p>
          <div className="grid">
            <div className="card">
              <h3>Yabello Motel</h3>
              <img src={acc1} alt="" />
            </div>
            <div className="card">
              <h3>Borena Safari Lodge</h3>
              <img src={acc2} alt="" />
            </div>
            <div className="card">
              <h3>Borena Safari Lodge</h3>
              <img src={acc3} alt="" />
            </div>
          </div>
        </section>

        <section className="park-section flex-section">
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The ideal time to visit Borena National Park is during the dry
              season from October to February:
            </p>
            <ul>
              <li>Low rainfall and pleasant weather</li>
              <li>Wildlife gathers around water sources</li>
              <li>Roads are more accessible</li>
              <li>Optimal birdwatching conditions</li>
            </ul>
          </div>
          <img src={Savannah} alt="Best Time to Visit" />
        </section>

        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Borena
              National Park:
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.354181961622!2d38.286950300000005!3d4.6713987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b1d61d15f3e7a1%3A0xcf95c52b7e1b5f7e!2sYabelo%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1717527332926!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Borena National Park Location"
            ></iframe>
            <p>
              Borena National Park is located in the southern part of the Oromia
              Region. The main access point is through the town of Yabello,
              approximately 570km south of Addis Ababa. The park covers an
              extensive area of arid savannah in Ethiopia's southern lowlands.
            </p>
          </div>
        </section>

        <section className="park-section flex-section">
          <img src={Culture} alt="Special Tips" />
          <div>
            <h2>Special Tips</h2>
            <hr />
            <ul className="tips-list">
              <li>
                Bring high-quality binoculars for optimal birdwatching - the
                park hosts two endemic species
              </li>
              <li>
                Wear sturdy footwear and light, breathable clothing for the arid
                climate
              </li>
              <li>
                Carry ample water and sun protection - temperatures can be high
              </li>
              <li>
                Hire a local guide familiar with the park's unique ecosystem
              </li>
              <li>
                Respect cultural traditions when interacting with Borena
                communities
              </li>
              <li>
                Visit during October-February for the best wildlife viewing
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Experience the unique culture and landscapes of Borena National Park
            and its people.
          </p>
          <button className="watch-video-btn" onClick={handleWatchVideo}>
            Watch Video
          </button>
          {showVideo && (
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/j_H8yF_tqU0"
                title="Borena People and El Sod"
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

export default BorenaPage;
