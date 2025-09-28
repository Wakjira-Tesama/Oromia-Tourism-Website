import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/bale.css";
// Importing images
import ParkHeader from "../../assets/images/Langano/langano-hero.jpg";
import BirdWatching from "../../assets/images/Langano/langano-birds.jpg";
import Beach from "../../assets/images/Langano/langano-beach.jpg";
import Activities from "../../assets/images/Langano/langano-activities.jpg";
import Sunset from "../../assets/images/Langano/langano-sunset.jpg";
import TipsImage from "../../assets/images/Langano/langano-tips.jpg";
import FaqImage from "../../assets/images/Langano/langano-faq.jpg";
import wildlife1 from "../../assets/images/Langano/wildlife1.jpg";
import wildlife2 from "../../assets/images/Langano/wildlife2.jpg";   
import wildlife3 from "../../assets/images/Langano/wildlife3.jpg";
import acc1 from "../../assets/images/Langano/acc1.jpg";
import acc2 from "../../assets/images/Langano/acc2.jpg"; 
import acc3 from "../../assets/images/Langano/acc3.jpg";
// importing header
import Header from "./header.jsx";

const LanganoPage = () => {
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
      question: "Is Lake Langano safe for swimming?",
      answer:
        "Yes, Lake Langano is one of the few lakes in Ethiopia that's bilharzia-free, making it safe for swimming. The water is also relatively warm and clean, perfect for water activities.",
    },
    {
      question: "What is the best time to visit Lake Langano?",
      answer:
        "The ideal time to visit is during the dry season from October to May when the weather is pleasant and rainfall is minimal. The months of December to February are particularly good for birdwatching.",
    },
    {
      question: "Are there crocodiles or hippos in Lake Langano?",
      answer:
        "No, Lake Langano doesn't have large dangerous animals like crocodiles or hippos, which makes it safer for swimming and water sports compared to other Ethiopian lakes.",
    },
    {
      question: "What kind of accommodation is available?",
      answer:
        "There are several accommodation options ranging from budget campsites to luxury resorts. Popular choices include Sabana Beach Resort, Bishangari Lodge, and Hara Langano Lodge.",
    },
    {
      question: "What activities are available at Lake Langano?",
      answer:
        "Visitors can enjoy swimming, kayaking, paddle boating, birdwatching, hiking, mountain biking, and horseback riding. Many resorts also offer volleyball courts and other recreational facilities.",
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
          <h1>Lake Langano</h1>
          <h2>Ethiopia's Bilharzia-Free Paradise</h2>
          <div className="location-tag">
            <span>📍 Oromia Region, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        <section className="park-section">
          <h2>About Lake Langano</h2>
          <hr />
          <p>
            Lake Langano is a beautiful freshwater lake located in the Oromia Region of Ethiopia, 
            about 200 kilometers south of Addis Ababa. With its reddish-brown waters and scenic 
            surroundings, it's one of Ethiopia's most popular recreational destinations. The lake 
            covers approximately 230 square kilometers and is situated at an elevation of 1,585 meters 
            above sea level.
          </p>
          <p>
            What makes Langano particularly special is that it's free from bilharzia (schistosomiasis), 
            making it safe for swimming and water sports. The lake is surrounded by acacia woodlands 
            and offers stunning views of the nearby mountains, creating a perfect setting for relaxation 
            and adventure.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            Lake Langano was formed through tectonic activity in the East African Rift Valley system. 
            The area has been inhabited by the Oromo people for centuries, who traditionally used the 
            lake for fishing and as a water source for their livestock.
          </p>
          <p>
            In the 20th century, the lake gained popularity as a recreational destination, especially 
            after the construction of several resorts along its shores. Today, it serves as an important 
            ecotourism site and a weekend getaway for residents of Addis Ababa and other urban centers.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Lake Langano is easily accessible from Addis Ababa via the well-maintained Addis Ababa-Shashamane 
            highway. The drive takes approximately 3-4 hours by car. Public minibuses regularly travel from 
            Addis Ababa to the lake area, with drop-offs at various resorts. The nearest major town is Shashamane, 
            about 25 kilometers from the lake's northern shore.
          </p>
          <p>
            Many visitors combine a trip to Lake Langano with visits to nearby attractions like Abijatta-Shalla 
            National Park or the Senkele Wildlife Sanctuary, both within an hour's drive from the lake.
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Beach Activities</h3>
              <p>
                Enjoy the sandy beaches with swimming, sunbathing, and beach volleyball. 
                Several resorts have private beach areas with loungers and water sports equipment 
                available for rent.
              </p>
              <img src={Beach} alt="Beach Activities" />
            </div>
            <div className="card">
              <h3>Water Sports</h3>
              <p>
                Try kayaking, paddle boarding, or boating on the lake's calm waters. Some resorts 
                offer motorized water sports like jet skiing and banana boat rides.
              </p>
              <img src={Activities} alt="Water Sports" />
            </div>
            <div className="card">
              <h3>Bird Watching</h3>
              <p>
                The lake and surrounding forests are home to over 300 bird species including fish eagles, 
                kingfishers, and various waterfowl. The eastern shore is particularly good for birding.
              </p>
              <img src={BirdWatching} alt="Bird Watching" />
            </div>
            <div className="card">
              <h3>Sunset Views</h3>
              <p>
                Experience breathtaking sunsets over the lake, when the water turns golden and the 
                surrounding hills are silhouetted against colorful skies - a photographer's delight.
              </p>
              <img src={Sunset} alt="Sunset Views" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>Lake Langano and its surroundings host diverse wildlife:</p>
          <div className="grid">
            <div className="card">
              <h3>Fish Species</h3>
              <p>
                The lake is home to several fish species including tilapia and catfish, 
                supporting local fisheries. Fishing trips can be arranged through local guides.
              </p>
              <img src={wildlife1} alt="Fish Species" />
            </div>
            <div className="card">
              <h3>Birdlife</h3>
              <p>
                Common sightings include African fish eagles, malachite kingfishers, 
                hamerkops, and various herons and egrets. The adjacent forests host woodland species too.
              </p>
              <img src={wildlife2} alt="Birdlife" />
            </div>
            <div className="card">
              <h3>Mammals</h3>
              <p>
                While swimming is safe, the surrounding areas host monkeys, warthogs, 
                and occasionally antelopes. Night drives may reveal genets, civets, and other nocturnal creatures.
              </p>
              <img src={wildlife3} alt="Mammals" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            Lake Langano offers a range of accommodation options from luxury resorts to budget campsites:
          </p>
          <div className='grid'>
            <div className="card">
              <h3>Sabana Beach Resort</h3>  
              <img src={acc1} alt="Sabana Beach Resort" />
            </div>
            <div className='card'>
              <h3>Bishangari Lodge</h3>
              <img src={acc2} alt="Bishangari Lodge" />
            </div>
            <div className='card'>
              <h3>Hara Langano Lodge</h3>
              <img src={acc3} alt="Hara Langano Lodge" />
            </div>
          </div> 
        </section>

        <section className="park-section flex-section">
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The ideal time to visit Lake Langano depends on your preferences:
            </p>
            <ul>
              <li>October-May: Dry season with minimal rainfall</li>
              <li>December-February: Peak birdwatching season</li>
              <li>June-September: Green season with fewer crowds</li>
              <li>Weekdays: Less crowded than weekends</li>
            </ul>
            <p>
              Water temperatures remain pleasant year-round, averaging 22-25°C (72-77°F).
            </p>
          </div>
          <img src={Beach} alt="Best Time to Visit" />
        </section>

        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Lake Langano:
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.731132452287!2d38.71663631478488!3d7.600029994480595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b144f4c6e7580d%3A0x4c9aa9a5c4a7f1e5!2sLake%20Langano!5e0!3m2!1sen!2set!4v1717528734596!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lake Langano Location"
            ></iframe>
            <p>
              Lake Langano is located in the Oromia Region of Ethiopia, about 200km south of Addis Ababa. 
              It's situated along the main highway to Shashamane and Arba Minch, making it easily accessible. 
              The lake lies between two other Rift Valley lakes - Lake Abijatta to the north and Lake Shalla to the south.
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
                Bring water shoes as some beach areas have small rocks underfoot
              </li>
              <li>
                Pack sunscreen and hats - the equatorial sun can be intense even on cloudy days
              </li>
              <li>
                Carry cash (Ethiopian Birr) as some resorts don't accept credit cards
              </li>
              <li>
                Book accommodation in advance during peak seasons (December-January, Easter)
              </li>
              <li>
                Try the local fish dishes - freshly caught tilapia is a specialty
              </li>
              <li>
                Bring binoculars if you're interested in birdwatching
              </li>
              <li>
                Consider water purification tablets if you're camping or staying at basic lodges
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Experience the beauty and activities of Lake Langano through this video.
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
                title="Lake Langano Experience"
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

export default LanganoPage;