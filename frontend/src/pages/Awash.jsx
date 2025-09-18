import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// Importing images

import AwashFalls from "../../assets/images/Awash/awashFalls.jpg";

import TipsImage from "../../assets/images/Awash/weather.jpg";
import awash2 from "../../assets/images/Awash/awash2.jpg";
import awash1 from "../../assets/images/Awash/awash1.jpg";
import Culture from "../../assets/images/Awash/market.jpg";

import fantale from "../../assets/images/Awash/fantale.jpg";
import hotspring from "../../assets/images/Awash/hotspring.jpg";
import kudu from "../../assets/images/Awash/kudu.jpg";
import babon from "../../assets/images/Awash/babon.jpg";
import warthog from "../../assets/images/Awash/warthog.jpg";
import hyena from "../../assets/images/Awash/hyena.jpg";
import bird1 from "../../assets/images/Awash/bird1.jpg";
import bird2 from "../../assets/images/Awash/bird2.jpg";
import bird3 from "../../assets/images/Awash/bird3.jpg";
import acc1 from "../../assets/images/Awash/acc1.jpg";
import acc2 from "../../assets/images/Awash/acc2.jpg";
import acc3 from "../../assets/images/Awash/acc3.jpg";
//importing header
import Header from "./header.jsx";
// importing css
import "../../styles/DestinationStyles/bale.css";

const AwashPage = () => {
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
      question: "What is the best time to visit Awash National Park?",
      answer:
        "The dry season from October to March offers the best wildlife viewing opportunities with pleasant temperatures.",
    },
    {
      question: "What wildlife can I see in Awash National Park?",
      answer:
        "The park is home to Beisa oryx, Soemmerring's gazelle, kudu, baboons, warthogs, and over 450 bird species including ostriches and secretary birds.",
    },
    {
      question: "Are there accommodation options inside the park?",
      answer:
        "Yes, Awash Falls Lodge offers comfortable accommodations within the park. There are also campsites and lodges near the park entrance.",
    },
    {
      question: "How far is Awash from Addis Ababa?",
      answer:
        "Awash National Park is approximately 225km east of Addis Ababa, about a 3-4 hour drive via the Addis Ababa-Djibouti highway.",
    },
    {
      question: "Do I need a guide to visit the park?",
      answer:
        "While not mandatory, hiring a local guide is highly recommended to enhance your wildlife viewing and learn about the park's ecology.",
    },
  ];

  return (
    <div className="park-container">
      <Header />
      {/* Hero Section with Header Spacing */}
      <div
        className="park-header"
        style={{ backgroundImage: `url(${AwashFalls})` }}
      >
        <div className="header-overlay">
          <h1>Awash National Park</h1>
          <h2>Ethiopia's Oldest Wildlife Sanctuary</h2>
          <div className="location-tag">
            <span>📍 Afar Region, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        {/* About Section */}
        <section className="park-section">
          <h2>About Awash National Park</h2>
          <hr />
          <p>
            Established in 1966, Awash National Park is Ethiopia's first
            national park, located in the Rift Valley approximately 225km east
            of Addis Ababa. Covering 756 square kilometers, it protects a
            diverse landscape of acacia woodlands, savanna grasslands, and
            volcanic formations. The park is bisected by the Awash River which
            cascades over volcanic rocks to create stunning waterfalls.
          </p>
          <p>
            As Ethiopia's most accessible national park, Awash offers visitors a
            chance to experience East African wildlife without traveling far
            from the capital. The park was created to protect its diverse
            ecosystems and the wildlife that depends on them, particularly the
            endangered Beisa oryx.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            The area that is now Awash National Park has been inhabited for
            millennia, with archaeological sites revealing evidence of early
            human settlement. In the 1960s, the Ethiopian government recognized
            the need to protect the unique ecosystems along the Awash River and
            designated it as Ethiopia's first national park.
          </p>
          <p>
            The park gained international significance when the famous hominid
            fossil "Lucy" (Australopithecus afarensis) was discovered just
            outside its boundaries in 1974. Today, the park faces challenges
            from human encroachment and climate change, but remains an important
            conservation area.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Awash National Park is easily accessible by road from Addis Ababa
            via the Addis Ababa-Djibouti highway. The journey takes
            approximately 3-4 hours. The park entrance is clearly signposted
            from the main highway.
          </p>
          <p>
            Most visitors arrive by private vehicle or hired 4x4. Public
            transportation is available to the town of Awash, from where you can
            hire local transport to the park entrance. The nearest major airport
            is in Addis Ababa.
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Awash Falls</h3>
              <p>
                The spectacular waterfall where the Awash River plunges 250
                meters into a dramatic gorge. The viewpoint offers breathtaking
                vistas and excellent photo opportunities, especially during the
                rainy season when the falls are at their most powerful.
              </p>
              <img src={AwashFalls} alt="awashfalls.jpg" />
            </div>
            <div className="card">
              <h3>Fantalle Volcano</h3>
              <p>
                The dormant volcano that dominates the park's landscape. A
                challenging hike to the crater rim rewards visitors with
                panoramic views of the entire park and the surrounding Rift
                Valley. The volcano last erupted in 1820.
              </p>
              <img src={fantale} alt="fantale.jpg" />
            </div>
            <div className="card">
              <h3>Wildlife Viewing</h3>
              <p>
                Game drives through the acacia woodlands and savanna grasslands
                offer opportunities to spot Beisa oryx, Soemmerring's gazelle,
                greater kudu, olive baboons, and over 450 bird species including
                the rare secretary bird and Abyssinian roller.
              </p>
              <img src={awash1} alt="picture of gazalle" />
            </div>
            <div className="card">
              <h3>Hot Springs</h3>
              <p>
                Natural hot springs located near the Awash River, where
                mineral-rich waters bubble up from geothermal sources. These
                therapeutic waters are popular for relaxation and offer a unique
                experience in the wilderness.
              </p>
              <img src={hotspring} alt="Hotspring imgage" />
            </div>
            <div className="card">
              <h3>Kudu Valley</h3>
              <p>
                A scenic valley known for its population of greater kudu, where
                these majestic antelopes can often be spotted grazing in the
                early morning or late afternoon. The valley also offers
                excellent birdwatching opportunities.
              </p>
              <img src={kudu} alt="Kudu.img" />
            </div>
          </div>
        </section>
        {/* Wildlife Section */}
        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>Awash National Park is home to diverse wildlife, including:</p>
          <div className="grid">
            <div className="card">
              <h3>Beisa oryx (the park's signature antelope)</h3>
              <p>
                The Beisa oryx, also known as the East African oryx, is a
                signature antelope species in several East African parks, known
                for its distinctive black and white facial markings, long,
                straight horns, and ability to thrive in arid environments.{" "}
              </p>
              <img src={awash2} alt="orxy image" />
            </div>
            <div className="card">
              <h3>Soemmerring's gazelle</h3>
              <p>
                Soemmerring's gazelles (Nanger soemmerringii) are indeed found
                in Awash National Park in Ethiopia. They are also found in the
                nearby Alledeghi Wildlife Reserve. Studies have examined their
                population status, group size, and habitat preferences within
                these areas.{" "}
              </p>
              <img src={awash1} alt="gazalle image" />
            </div>
            <div className="card">
              <h3>Greater kudu</h3>
              <p>
                Greater kudus are indeed found in Awash National Park, Ethiopia,
                alongside other wildlife like oryx, gazelles, and various bird
                species. Awash National Park is known for its diverse ecosystem,
                including dry-country antelope like the greater kudu.{" "}
              </p>
              <img src={kudu} alt="" />
            </div>
            <div className="card">
              <h3>Olive baboon</h3>
              <p>
                Olive baboons, scientifically known as Papio anubis, are found
                in Awash National Park in Ethiopia. These baboons are known for
                their greenish-grey coat and are also called Anubis baboons.
                Awash National Park is a location where olive baboons, along
                with hamadryas baboons, hybridize, creating a unique zone of
                interbreeding.{" "}
              </p>
              <img src={babon} alt="Babon image" />
            </div>
            <div className="card">
              <h3>Warthog</h3>
              <p>
                Warthogs can be found in Awash National Park in Ethiopia. The
                park is known for its diverse wildlife, including warthogs,
                along with other animals like oryx, dik-diks, and baboons. Awash
                National Park offers a variety of habitats, from acacia and palm
                savanna to grasslands and riverbeds, making it suitable for
                these animals.{" "}
              </p>
              <img src={warthog} alt="warthog image" />
            </div>
            <div className="card">
              <h3>Spotted hyena</h3>
              <p>
                spotted hyenas are found in Awash National Park in Ethiopia.
                They are one of the many animal species that inhabit the park.
                In fact, a specific area within the park, known as "Hyena Hill,"
                is known for its large spotted hyena den, according to
                Travel2Unlimited. Visitors to Awash National Park may have the
                opportunity to observe these fascinating creatures, especially
                during dusk as they emerge from their dens.{" "}
              </p>
              <img src={hyena} alt="hyena image" />
            </div>
          </div>
          <h2>Birds</h2>
          <p>
            The park is particularly renowned for its birdlife with over 450
            species recorded:
          </p>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Ostrich</h3>
              <p>
                ostriches can be found in Awash National Park in Ethiopia. The
                park is known for its diverse birdlife, including the ostrich,
                and other animals like oryx, baboons, and dik-diks. While some
                ostriches live near the Awash River campsite, they are gradually
                being reintroduced into the natural habitat. Awash National Park
                is a popular destination for wildlife viewing and birdwatching.{" "}
              </p>
              <img src={bird1} alt="Ostrich image" />
            </div>
            <div className="card">
              <h3>Secretary bird</h3>
              <p>
                secretary bird is a known resident of Awash National Park in
                Ethiopia. Birdwatchers visiting Awash have a good chance of
                spotting secretary birds, often walking across the open plains
                as they hunt. They are considered one of the "giant birds" to
                look for in the area, along with species like the Somali Ostrich
                and Kori Bustard.{" "}
              </p>
              <img src={bird2} alt="Secretary bird image" />
            </div>
            <div className="card">
              <h3>Carmine bee-eater</h3>
              <p>
                The Northern Carmine Bee-eater (Merops nubicus) is a bird
                species found in Awash National Park in Ethiopia. These striking
                birds, with their predominantly carmine-pink bodies and
                blue-green heads, are known to add vibrant splashes of color to
                the park's landscape, particularly in the southern section. They
                are often seen foraging over grasslands and can be spotted near
                river valleys and floodplains.{" "}
              </p>
              <img src={bird3} alt="Carmine bee-eater image" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            Awash offers several accommodation options both within and near the
            park:
          </p>
          <div className="grid">
            <div className="card">
              <h3>Awash Falls Lodge (inside the park)</h3>
              <img src={acc1} alt="" />
            </div>
            <div className="card">
              <h3>Genale Lodge (near the park entrance)</h3>
              <img src={acc2} alt="" />
            </div>
            <div className="card">
              <h3>Designated campsites</h3>
              <img src={acc3} alt="" />
            </div>
          </div>
        </section>

        <section className="park-section flex-section">
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The best time to visit Awash National Park is during the dry
              season from October to March:
            </p>
            <ul>
              <li>
                Optimal wildlife viewing as animals gather near water sources
              </li>
              <li>Pleasant daytime temperatures (25-30°C)</li>
              <li>Accessible roads and trails</li>
              <li>Minimal mosquito activity</li>
              <li>Excellent birdwatching with migratory species present</li>
            </ul>
            <p>
              The rainy season (June-September) offers lush landscapes but some
              areas may be inaccessible.
            </p>
          </div>
          <img src={TipsImage} alt="Best Time to Visit" />
        </section>

        <div className="faq-section">
          <img src={awash1} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Awash
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.9462716184853!2d39.999356269515935!3d9.083333299436266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164a756356c51cf1%3A0xae9bde25595552f8!2sAwash%20National%20Park!5e0!3m2!1sen!2set!4v1717404684422!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Awash National Park Location"
            ></iframe>
            <p>
              Awash National Park is located in the Afar Region of Ethiopia,
              approximately 225km east of Addis Ababa. The park spans both the
              Oromia and Afar regional states along the Addis Ababa-Djibouti
              highway. It covers an area of 756 square kilometers at the
              southern end of the Afar Depression, where the Awash River flows
              through dramatic gorges and waterfalls before disappearing into
              the desert.
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
                Bring high-quality binoculars for optimal wildlife and bird
                viewing
              </li>
              <li>
                Wear neutral-colored clothing to blend with the environment
              </li>
              <li>
                Carry at least 3 liters of water per person per day - it gets
                very hot
              </li>
              <li>
                Hire an official park guide at the entrance for better wildlife
                spotting
              </li>
              <li>
                Start game drives early in the morning when animals are most
                active
              </li>
              <li>
                Respect wildlife by maintaining a safe distance and never
                feeding animals
              </li>
              <li>
                Bring sunscreen, hat, and sunglasses - the sun can be intense
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Experience the breathtaking landscapes and wildlife of Awash
            National Park:
          </p>
          <button className="watch-video-btn" onClick={handleWatchVideo}>
            Watch Video
          </button>
          {showVideo && (
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/jX_7tpFF7ug"
                title="Awash National Park"
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

export default AwashPage;
