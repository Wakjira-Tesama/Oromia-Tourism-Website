import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Header from "./header.jsx";

import "../../styles/DestinationStyles/bale.css";
// Importing images
import ParkHeader from "../../assets/images/Bale/harennaForest.jpg";
import HarennaForestImage from "../../assets/images/Bale/harennaForest.jpg";
import SanettiPlateauImage from "../../assets/images/Bale/sanettiPlateau.jpg";
import SofOmarCaveImage from "../../assets/images/Bale/sofOmarCave.jpg";
import MarketImage from "../../assets/images/Bale/market.jpg";
import AccommodationImage1 from "../../assets/images/Bale/accommodation1.jpg";
import AccommodationImage2 from "../../assets/images/Bale/accommodation2.jpg";
import AccommodationImage3 from "../../assets/images/Bale/accommodation3.jpg";
import WeatherImage2 from "../../assets/images/Bale/weather2.jpg";
import RestaurantImage1 from "../../assets/images/Bale/restaurant1.jpg";
import RestaurantImage2 from "../../assets/images/Bale/restaurant2.jpg";
import FaqImage from "../../assets/images/Bale/harennaForest2.jpg";
import SpecialImage from "../../assets/images/Bale/sofOmarCave.jpg";
import WildlifeImage from "../../assets/images/Bale/wildlife.jpg";
import WildlifeImage2 from "../../assets/images/Bale/wildlife2.jpg";
import WildlifeImage3 from "../../assets/images/Bale/wildlife3.jpg";
const BaleMountainsPage = () => {
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
      question: "Is Bale Mountains National Park safe for tourists?",
      answer:
        "Yes, Bale Mountains National Park is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings. The park is well-patrolled, and guided tours are available for added safety.",
    },
    {
      question: "What currency is used in the Bale Mountains?",
      answer:
        "The Ethiopian Birr (ETB) is the currency used. It's recommended to carry some cash, as not all establishments accept credit cards. ATMs may not be readily available in remote areas.",
    },
    {
      question: "What languages are spoken in the Bale Mountains area?",
      answer:
        "Amharic is the official language, but English is widely spoken in tourist areas. The local language in the Bale Mountains region is Oromo. Many guides and service providers can communicate in English.",
    },
  ];

  return (
    <div className="bale-page-container">
      <Header />

      {/* Hero Section with Header Spacing */}
      <div
        className="park-header"
        style={{ backgroundImage: `url(${ParkHeader})` }}
      >
        <div className="header-overlay">
          <h1>Bale Mountains National Park</h1>
          <h2>Ethiopia's Highland Wonderland</h2>
          <div className="location-tag">
            <span>📍 Oromia Region, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        {/* About Section */}
        <section className="park-section">
          <h2>About Bale Mountains</h2>
          <hr />
          <p>
            Bale Mountains National Park is located in southeastern Ethiopia and
            is renowned for its stunning landscapes, diverse wildlife, and
            unique ecosystems. The park covers an area of approximately 2,200
            square kilometers and features a range of habitats, including alpine
            meadows, lush forests, and high-altitude plateaus. It is home to
            several endemic species, such as the Ethiopian wolf and the mountain
            nyala.
          </p>
        </section>

        {/* History Section */}
        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            Bale Mountains National Park was established in 1970 to protect the
            unique flora and fauna of the region. The park's diverse ecosystems
            have been shaped by millions of years of geological activity,
            resulting in a landscape that is both beautiful and ecologically
            significant. The area has been inhabited by various ethnic groups
            for centuries, and their traditional practices have helped preserve
            the natural environment.
          </p>
        </section>

        {/* Getting There Section */}
        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Bale Mountains National Park can be accessed by road from Addis
            Ababa, which is approximately 400 kilometers away. The journey takes
            about 8-10 hours by car or bus. For those who prefer to fly, there
            are domestic flights from Addis Ababa to the nearby town of Goba,
            followed by a short drive to the park. Once in the area, visitors
            can hire local guides and vehicles to explore the park's
            attractions.
          </p>
        </section>

        {/* Top Attractions Section */}
        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Harenna Forest</h3>
              <p>
                The Harenna Forest is one of the few remaining tropical cloud
                forests in Ethiopia. It is a biodiversity hotspot, home to many
                endemic species of plants and animals. Visitors can explore the
                forest's lush vegetation, spot rare wildlife, and enjoy the
                serene atmosphere.
              </p>
              <img src={HarennaForestImage} alt="Harenna Forest" />
            </div>

            <div className="card">
              <h3>Sanetti Plateau</h3>
              <p>
                The Sanetti Plateau is a high-altitude area that offers stunning
                views and unique wildlife sightings. It is the best place to see
                the Ethiopian wolf, the world's rarest canid. The plateau is
                also home to many bird species, making it a popular destination
                for birdwatchers.
              </p>
              <img src={SanettiPlateauImage} alt="Sanetti Plateau" />
            </div>

            <div className="card">
              <h3>Sof Omar Cave</h3>
              <p>
                Sof Omar Cave is one of the largest and most spectacular cave
                systems in Africa. It features an extensive network of
                underground passages and chambers carved by the Web River. The
                cave is named after Sheikh Sof Omar, a Muslim holy man who used
                it as a place of refuge.
              </p>
              <img src={SofOmarCaveImage} alt="Sof Omar Cave" />
            </div>
          </div>
        </section>

        {/* Culture & Traditions Section */}
        <section className="park-section flex-section">
          <img src={MarketImage} alt="Culture" className="section-image" />
          <div>
            <h2>Culture & Traditions</h2>
            <hr />
            <p>
              The Bale Mountains region is rich in culture and traditions, with
              numerous ethnic groups living in the area. The Oromo people, who
              are the predominant ethnic group, have a rich cultural heritage
              that includes traditional music, dance, and crafts.
            </p>
            <p>
              Visitors can experience the local culture by attending festivals,
              visiting markets, and interacting with the friendly locals. The
              annual Gada System ceremonies are a significant cultural event,
              showcasing the Oromo people's unique social and political system.
            </p>
          </div>
        </section>

        {/* Wildlife Section */}
        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>The park is renowned for its unique wildlife, including:</p>
          <div className="grid">
            <div className="card">
              <h3>Ethiopian Wolf</h3>
              <p>
                The Ethiopian wolf is the world's rarest canid and is endemic to
                the Ethiopian highlands It is known for its striking red fur and
                is primarily found in the Sanetti Plateau area of the park.
              </p>
              <img src={WildlifeImage} alt="" />
            </div>
            <div className="card">
              <h3>Mountain Nyala</h3>
              <p>
                The mountain nyala or balbok, is a large antelope found in high
                altitude woodlands in a small part of central Ethiopia. It is a
                monotypic species first described by English naturalist Richard
                Lydekker in 1910. The males are typically 120–135 cm tall while
                females stand 90–100 cm at the shoulder.
              </p>
              <img src={WildlifeImage2} alt="" />
            </div>
            <div className="card">
              <h3>Bale Monkey</h3>
              <p>
                The Bale Mountains vervet is a terrestrial Old World monkey
                endemic to Ethiopia, found in the bamboo forests of the Bale
                Mountains. All species in Chlorocebus were formerly in the genus
                Cercopithecus. The Bale Mountains vervet is one of the
                least-known primates in Africa.
              </p>
              <img src={WildlifeImage3} alt="" />
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            There are several accommodation options available for visitors to
            Bale Mountains National Park:
          </p>
          <div className="grid">
            <div className="card">
              <h3>Bale Mountain Lodge</h3>
              <img src={AccommodationImage1} alt="" />
            </div>
            <div className="card">
              <h3>Wabe Shebelle Hotel</h3>
              <img src={AccommodationImage2} alt="" />
            </div>
            <div className="card">
              <h3>Dinsho Londge</h3>
              <img src={AccommodationImage3} alt="" />
            </div>
          </div>
        </section>

        {/* Dining Section */}
        <section className="park-section">
          <h2>Restaurants & Dining</h2>
          <hr />
          <p>
            Dining options in the Bale Mountains area offer a taste of local
            cuisine:
          </p>

          <div className="grid">
            <div className="card">
              <h3>Goba Restaurant</h3>
              <p>
                Offers traditional Ethiopian dishes like injera with various
                stews
              </p>
              <img src={RestaurantImage1} alt="Goba Restaurant" />
            </div>
            <div className="card">
              <h3>Bale Mountain Lodge Dining</h3>
              <p>
                Serves meals made from locally sourced ingredients with mountain
                views
              </p>
              <img src={RestaurantImage2} alt="Bale Mountain Lodge" />
            </div>
          </div>
        </section>

        {/* Best Time to Visit Section */}
        <section className="park-section flex-section">
          <img
            src={WeatherImage2}
            alt="Best Time to Visit"
            className="section-image"
          />
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The best time to visit Bale Mountains National Park is during the
              dry season, from November to February. During these months:
            </p>
            <ul>
              <li>Weather is more predictable</li>
              <li>Ideal for hiking and wildlife viewing</li>
              <li>Clearer skies for photography</li>
              <li>Better road conditions</li>
              <li>Optimal wildlife sightings</li>
            </ul>
          </div>
        </section>
        {/* FAQ Section */}
        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" className="faq-image" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Bale
              Mountains:
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

        {/* Location Section */}
        <section className="park-section">
          <h2>Location</h2>
          <div className="div-out-hr">
            <hr />
          </div>
          <div className="location-container flex-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4710.497722094884!2d39.73208961007989!3d6.885734649217627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b638c226fa3a17%3A0x398e4e107fc41cec!2sBale%20Mountains%20National%20Park!5e0!3m2!1sen!2set!4v1718535528067!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Bale Mountains National Park Location"
            ></iframe>
            <p>
              Bale Mountains National Park is located in the southeastern part
              of Ethiopia, within the Oromia Region. The park is situated in the
              Bale Zone of the Ethiopian Highlands, approximately 400 kilometers
              southeast of Addis Ababa. The park encompasses a variety of
              landscapes, including high-altitude plateaus, alpine meadows,
              dense forests, and deep gorges.
            </p>
          </div>
        </section>

        {/* Special Experiences Section */}
        <section className="park-section">
          <h2>Special Experiences</h2>
          <hr />
          <div className="flex-section">
            <img
              src={SpecialImage}
              alt="Special Experiences"
              className="section-image"
            />
            <div>
              <p>
                Visitors can enjoy a range of special experiences in the Bale
                Mountains:
              </p>
              <ul>
                <li>Guided treks through diverse ecosystems</li>
                <li>Bird watching tours (over 280 species)</li>
                <li>Ethiopian wolf tracking expeditions</li>
                <li>Cultural interactions with local communities</li>
                <li>Photography tours of stunning landscapes</li>
                <li>Horseback riding through alpine meadows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="park-section">
          <h2>Discover More</h2>
          <p>
            Get a glimpse of the stunning landscapes and wildlife of Bale
            Mountains National Park.
          </p>
          <button className="watch-video-btn" onClick={handleWatchVideo}>
            Watch Video
          </button>
          {showVideo && (
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/B5ih-cLSk4U"
                title="Bale Mountains National Park"
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

export default BaleMountainsPage;
