import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// Importing the CSS file for Abijata page
// Importing images from assets/abijata folder

import "../../styles/DestinationStyles/bale.css";
import ParkHeader from "../../assets/images/abijata/park-header.jpg";
import LakeAbijata from "../../assets/images/abijata/lake-abijata.jpg";
import LakeShalla from "../../assets/images/abijata/lake-shalla.jpg";
import HotSprings from "../../assets/images/abijata/hot-springs.jpg";

import Flamingos from "../../assets/images/abijata/flamingos.jpg";
import Lodge1 from "../../assets/images/abijata/lodge1.jpg";
import Lodge2 from "../../assets/images/abijata/lodge2.jpg";
import Lodge3 from "../../assets/images/abijata/lodge3.jpg";
//import Culture from '../../assets/images/abijata/culture.jpg';
import TipsImage from "../../assets/images/abijata/tips.jpg";
import FaqImage from "../../assets/images/abijata/faq.jpg";
import Wildlife1 from "../../assets/images/abijata/Wildlife1.jpg";
import Wildlife2 from "../../assets/images/abijata/Wildlife2.jpg";
import Wildlife3 from "../../assets/images/abijata/Wildlife3.jpg";
import Wildlife4 from "../../assets/images/abijata/Wildlife4.jpg";
import Wildlife5 from "../../assets/images/abijata/Wildlife5.jpg";
import Wildlife6 from "../../assets/images/abijata/Wildlife6.jpg";
import Hiking from "../../assets/images/abijata/hiking.jpg";
import Ostrich from "../../assets/images/abijata/ostrich.jpg";
import Header from "./header.jsx";
const AbijataPage = () => {
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
      question: "What is the size of Abijata-Shalla Lakes National Park?",
      answer:
        "The park covers 887 square kilometers, with 482 square kilometers being water.",
    },
    {
      question: "What are the main attractions in the park?",
      answer:
        "The main attractions are the two lakes (Abijata and Shalla), their abundant birdlife (especially flamingos and pelicans), the hot springs near Lake Shalla, and the scenic volcanic landscapes.",
    },
    {
      question: "Is swimming allowed in the lakes?",
      answer:
        "Swimming is generally considered safe in Lake Shalla, although the water has a high concentration of salts and a unique color. Vehicles should avoid venturing too close to Lake Abijata due to unstable and saline beaches.",
    },
    {
      question: "What wildlife can be seen in the park besides birds?",
      answer:
        "Mammals like Grant's gazelles, spotted hyenas, golden and black jackals, olive baboons, warthogs, and oribi can be spotted, though large mammals are less common due to past human activity.",
    },
    {
      question: "Can I camp within the park?",
      answer:
        "Overnight stays are generally prohibited in most park areas, but private camping sites are available in and around the park. Fires are permitted only in designated grills.",
    },
  ];

  return (
    <div className="bale-page-container">
      <Header />
      <div
        className="park-header"
        style={{ backgroundImage: `url(${ParkHeader})` }}
      >
        <div className="header-overlay">
          <h1>Abijata-Shalla Lakes National Park</h1>
          <h2>Ethiopia's Birdwatcher's Paradise</h2>
          <div className="location-tag">
            <span>📍 Great Rift Valley, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        <section className="park-section">
          <h2>About Abijata-Shalla Lakes National Park</h2>
          <hr />
          <p>
            Abijata-Shalla Lakes National Park, established in 1974, is located
            in the Great Rift Valley of Ethiopia, approximately 200-215
            kilometers south of Addis Ababa. It covers an area of 887 square
            kilometers, with 482 square kilometers covered by water. The park is
            named after its two prominent alkaline lakes, Lake Abijata and Lake
            Shalla, which are separated by about three kilometers of hilly land.
          </p>
          <p>
            The park was primarily created to conserve its abundant aquatic
            birdlife, especially those that feed and breed on the lakes in large
            numbers. It is home to about 31 species of mammals and over 400 bird
            species, almost half the number recorded for the entire country.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            Before its designation as a national park, the area was used for
            farming by local inhabitants. In the 1960s, the region was
            identified for its ecological significance, particularly its bird
            populations. Consequently, it was designated as a proposed national
            park in 1970 and officially established in 1974 with the primary aim
            of conserving its diverse bird species, especially waterbirds.
          </p>
          <p>
            Despite its ecological importance, the park has faced challenges due
            to human activities like overgrazing, deforestation, and illegal
            fishing, leading to some degradation of its biodiversity.
            Conservation efforts are ongoing to address these issues.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Abijata-Shalla Lakes National Park is located approximately 200-215
            kilometers south of Addis Ababa. The most common way to get there is
            by car, typically a 4x4 vehicle, as some roads within and around the
            park may be unpaved. The journey from Addis Ababa takes around 3
            hours, passing through towns like Mojo and Nazret. Many visitors use
            Lake Langano as a base, as it's an easy trip from there to the park.
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <p>
            The park is a birdwatcher's paradise, hosting over 400 species. Lake
            Abijata is famous for its massive flocks of flamingos (both greater
            and lesser), pelicans, and other waterbirds. Lake Shalla's islands
            are crucial breeding sites for many species.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Flamingo</h3>
              <p>
                Lake Abijatta, part of Abijatta-Shalla National Park, is a
                popular destination for flamingo viewing.
              </p>
              <img src={Flamingos} alt="Flamingos" />
            </div>

            <div className="card">
              <h3>Lake Abijata</h3>
              <p>
                A shallow, alkaline lake (14m deep) known for its vast numbers
                of flamingos and other feeding waterbirds. It has fluctuating
                water levels and is surrounded by gentle, grass-covered slopes
                and acacia woodlands.
              </p>
              <img src={LakeAbijata} alt="Lake Abijata" />
            </div>

            <div className="card">
              <h3>Lake Shalla</h3>
              <p>
                Ethiopia's deepest Rift Valley lake (260m deep) that fills the
                center of a collapsed volcano. Its shores feature hot sulfurous
                springs, and its four islands are vital nesting and breeding
                grounds for a variety of birds, including great white pelicans.
              </p>
              <img src={LakeShalla} alt="Lake Shalla" />
            </div>
            <div className="card">
              <h3>Hot Springs</h3>
              <p>
                Located near Lake Shalla, these natural hot springs are a unique
                geothermal feature, where hot, sulfurous water bubbles up. They
                are popular for relaxation and offer a distinctive photographic
                opportunity.
              </p>
              <img src={HotSprings} alt="Hot Springs" />
            </div>

            <div className="card">
              <h3>Mount Fike</h3>
              <p>
                The highest peak in the park, situated on the isthmus between
                Lake Abijata and Lake Shalla, offering panoramic views of the
                Rift Valley.
              </p>
              <img src={Hiking} alt="Mount Fike" />
            </div>

            <div className="card">
              <h3>Ostrich Farm</h3>
              <p>
                A small enclosure at the park's headquarters that hosts a group
                of ostriches and some Grant's Gazelles.
              </p>
              <img src={Ostrich} alt="Ostrich Farm" />
            </div>
          </div>
        </section>
        {/*Wildlife Section */}
        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <h2>Birds</h2>
          <p>
            The park is renowned for its birdlife, hosting over 400 species
            including:
          </p>
          <div className="grid">
            <div className="card">
              <h3>Greater & lesser flamingos</h3>
              <img src={Wildlife1} alt="" />
            </div>
            <div className="card">
              <h3>Great white pelicans</h3>
              <img src={Wildlife2} alt="" />
            </div>
            <div className="card">
              <h3>African fish eagles</h3>
              <img src={Wildlife3} alt="" />
            </div>
          </div>
          <h2>Mammals</h2>
          <p>Mammals in the park include:</p>
          <div className="grid">
            <div className="card">
              <h3>Grant's gazelle</h3>
              <img src={Wildlife4} alt="" />
            </div>
            <div className="card">
              <h3>Spotted hyena</h3>
              <img src={Wildlife5} alt="" />
            </div>
            <div className="card">
              <h3>Olive baboon</h3>
              <img src={Wildlife6} alt="" />
            </div>
          </div>
        </section>
        {/* Accommodation Section */}
        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            While there aren't many direct accommodations within the national
            park itself, several lodges and resorts are available in the
            surrounding areas, particularly around Lake Langano:
          </p>
          <div className="grid">
            <div className="card">
              <h3>Bishangari Lodge</h3>
              <img src={Lodge1} alt="" />
            </div>
            <div className="card">
              <h3>African Vacation Club</h3>
              <img src={Lodge2} alt="" />
            </div>
            <div className="card">
              <h3>Private Camping sites</h3>
              <img src={Lodge3} alt="" />
            </div>
          </div>
        </section>

        <section className="park-section flex-section">
          <img
            src={Flamingos}
            alt="Best Time to Visit"
            className="section-image"
          />
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The best time to visit Abijata-Shalla Lakes National Park,
              especially for birdwatching, is during the dry season, from
              October to February. During these months:
            </p>
            <ul>
              <li>Large flocks of flamingos congregate in Lake Abijata</li>
              <li>Palearctic migratory birds arrive</li>
              <li>Weather is pleasant with very low rainfall</li>
              <li>
                Ideal for outdoor activities like game driving and nature walks
              </li>
            </ul>
          </div>
        </section>

        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting
              Abijata-Shalla Lakes National Park:
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.65436101179!2d38.584749999999996!3d7.616389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b144e1b3c4e4b9%3A0x8d6d9d0f6e9f4e1d!2sAbijata-Shalla%20Lakes%20National%20Park!5e0!3m2!1sen!2set!4v1717527332926!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Abijata-Shalla Lakes National Park Location"
            ></iframe>
            <p>
              Abijata-Shalla Lakes National Park is located in the Great Rift
              Valley of Ethiopia, approximately 200-215 kilometers south of
              Addis Ababa. The park covers an area of 887 square kilometers with
              two prominent alkaline lakes - Lake Abijata and Lake Shalla. The
              map shows the park's location relative to nearby towns and
              attractions.
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
                Bring binoculars for optimal birdwatching - the park hosts over
                400 bird species
              </li>
              <li>
                Wear comfortable walking shoes for exploring the park's trails
                and lake shores
              </li>
              <li>
                Carry sufficient water and sun protection - the Rift Valley can
                get quite hot
              </li>
              <li>
                Respect wildlife viewing distances and never feed the animals
              </li>
              <li>
                Hire a local guide to enhance your experience and support the
                community
              </li>
              <li>
                Visit during October-February for the best birdwatching
                opportunities
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Get a glimpse of the stunning landscapes and abundant wildlife of
            Abijata-Shalla Lakes National Park.
          </p>
          <button className="watch-video-btn" onClick={handleWatchVideo}>
            Watch Video
          </button>
          {showVideo && (
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/3AuYjdZ3KqU"
                title="Abijata-Shalla Lakes National Park"
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

export default AbijataPage;
