import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/bale.css";
// Importing images
import ParkHeader from "../../assets/images/Haramaya/haramaya-hero.jpg";
import BirdWatching from "../../assets/images/Haramaya/haramaya-birds.jpg";
import LakeView from "../../assets/images/Haramaya/haramaya-view.jpg";
import Activities from "../../assets/images/Haramaya/haramaya-activities.jpg";
import Sunset from "../../assets/images/Haramaya/haramaya-sunset.jpg";
import TipsImage from "../../assets/images/Haramaya/haramaya-tips.jpg";
import FaqImage from "../../assets/images/Haramaya/haramaya-faq.jpg";
import wildlife1 from "../../assets/images/Haramaya/wildlife1.jpg";
import wildlife2 from "../../assets/images/Haramaya/wildlife2.jpg";   
import wildlife3 from "../../assets/images/Haramaya/wildlife3.jpg";
import acc1 from "../../assets/images/Haramaya/acc1.jpg";
import acc2 from "../../assets/images/Haramaya/acc2.jpg"; 
import acc3 from "../../assets/images/Haramaya/acc2.jpg";
// importing header
import Header from "./header.jsx";

const HaramayaPage = () => {
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
      question: "What is special about Lake Haramaya?",
      answer:
        "Lake Haramaya is known for its scenic beauty and cultural significance in eastern Ethiopia. It's a freshwater lake that serves as an important water source for the surrounding communities and supports diverse birdlife.",
    },
    {
      question: "Can you swim in Lake Haramaya?",
      answer:
        "Swimming is possible but not commonly practiced due to cultural norms and the lake's primary use as a water source. Visitors should respect local customs regarding water use.",
    },
    {
      question: "What wildlife can be seen at Lake Haramaya?",
      answer:
        "The lake attracts numerous bird species including herons, kingfishers, and migratory birds. The surrounding area hosts small mammals and a variety of aquatic life.",
    },
    {
      question: "What is the best time to visit Lake Haramaya?",
      answer:
        "The ideal time is during the dry season from October to March when birdlife is abundant and the weather is pleasant for outdoor activities.",
    },
    {
      question: "Are there accommodation options near Lake Haramaya?",
      answer:
        "Yes, there are several options in Haramaya town and nearby Harar, ranging from budget guesthouses to mid-range hotels. The Haramaya University guesthouse is also available for visitors.",
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
          <h1>Lake Haramaya</h1>
          <h2>Eastern Ethiopia's Cultural Oasis</h2>
          <div className="location-tag">
            <span>📍 Oromia Region, Eastern Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="park-content">
        <section className="park-section">
          <h2>About Lake Haramaya</h2>
          <hr />
          <p>
            Lake Haramaya is a freshwater lake located in the East Hararghe Zone of the Oromia Region, 
            about 15 kilometers from Harar and 40 kilometers from Dire Dawa. The lake covers approximately 
            3.5 square kilometers and sits at an elevation of 1,900 meters above sea level. It's a vital 
            water source for local communities and supports diverse aquatic life.
          </p>
          <p>
            The lake holds significant cultural importance for the surrounding communities and is closely 
            associated with Haramaya University, one of Ethiopia's leading agricultural institutions located 
            nearby. The scenic beauty of the lake with its surrounding hills makes it a popular destination 
            for both locals and visitors to the region.
          </p>
        </section>

        <section className="park-section">
          <h2>History</h2>
          <hr />
          <p>
            Lake Haramaya has been an important water source for centuries, supporting agricultural 
            activities in the fertile Haramaya valley. The area was traditionally inhabited by the Oromo 
            people who practiced farming around the lake's shores.
          </p>
          <p>
            In the 20th century, the lake became associated with the establishment of Alemaya College of 
            Agriculture (now Haramaya University) in 1954. The lake has faced environmental challenges in 
            recent decades, including periods of drying, but remains an important ecological and cultural site.
          </p>
        </section>

        <section className="park-section">
          <h2>Getting There</h2>
          <hr />
          <p>
            Lake Haramaya is easily accessible from several major cities in eastern Ethiopia:
          </p>
          <ul>
            <li>From Harar: 15km via asphalt road (about 30 minutes drive)</li>
            <li>From Dire Dawa: 40km via the Harar road (about 1 hour drive)</li>
            <li>From Addis Ababa: 525km via the Addis-Dire Dawa highway (about 8-9 hours drive)</li>
          </ul>
          <p>
            Public minibuses regularly travel from Harar and Dire Dawa to Haramaya town. The lake is 
            just a short distance from the main road through Haramaya town.
          </p>
        </section>

        <section className="park-section">
          <h2>Top Attractions</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Scenic Views</h3>
              <p>
                Enjoy the peaceful atmosphere and beautiful views of the lake surrounded by rolling hills. 
                The contrast between the blue waters and green surroundings creates stunning landscapes.
              </p>
              <img src={LakeView} alt="Scenic Views" />
            </div>
            <div className="card">
              <h3>Bird Watching</h3>
              <p>
                Observe diverse bird species including herons, kingfishers, and migratory waterfowl. 
                The lake is particularly rewarding for birders during migration seasons.
              </p>
              <img src={BirdWatching} alt="Bird Watching" />
            </div>
            <div className="card">
              <h3>Cultural Experiences</h3>
              <p>
                Learn about the lake's importance to local communities and visit nearby Haramaya University 
                to understand the region's agricultural heritage.
              </p>
              <img src={Activities} alt="Cultural Experiences" />
            </div>
            <div className="card">
              <h3>Sunset Photography</h3>
              <p>
                Capture breathtaking sunsets when the lake's surface reflects the changing colors of the sky, 
                with the surrounding hills creating a dramatic backdrop.
              </p>
              <img src={Sunset} alt="Sunset Photography" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Wildlife</h2>
          <hr />
          <p>Lake Haramaya supports diverse flora and fauna:</p>
          <div className="grid">
            <div className="card">
              <h3>Bird Species</h3>
              <p>
                Common sightings include African fish eagles, malachite kingfishers, various herons and egrets, 
                and seasonal migratory birds from Europe and Asia.
              </p>
              <img src={wildlife1} alt="Bird Species" />
            </div>
            <div className="card">
              <h3>Aquatic Life</h3>
              <p>
                The lake hosts several fish species including tilapia and catfish, supporting local fisheries. 
                Frogs and other aquatic organisms are also present.
              </p>
              <img src={wildlife2} alt="Aquatic Life" />
            </div>
            <div className="card">
              <h3>Terrestrial Wildlife</h3>
              <p>
                The surrounding areas host small mammals like monkeys, warthogs, and various rodents. 
                The lake's edge vegetation supports insects and amphibians.
              </p>
              <img src={wildlife3} alt="Terrestrial Wildlife" />
            </div>
          </div>
        </section>

        <section className="park-section">
          <h2>Accommodation</h2>
          <hr />
          <p>
            While there are no accommodations directly on the lake, nearby options include:
          </p>
          <div className='grid'>
            <div className="card">
              <h3>Haramaya University Guesthouse</h3>  
              <img src={acc1} alt="Haramaya University Guesthouse" />
            </div>
            <div className='card'>
              <h3>Hotels in Haramaya Town</h3>
              <img src={acc2} alt="Hotels in Haramaya Town" />
            </div>
            <div className='card'>
              <h3>Harar City Hotels</h3>
              <img src={acc3} alt="Harar City Hotels" />
            </div>
          </div> 
        </section>

        <section className="park-section flex-section">
          <div>
            <h2>Best Time to Visit</h2>
            <hr />
            <p>
              The ideal time to visit Lake Haramaya depends on your interests:
            </p>
            <ul>
              <li>October-March: Dry season with pleasant temperatures</li>
              <li>November-February: Peak birdwatching season</li>
              <li>April-May: Green season with lush vegetation</li>
              <li>Early mornings: Best for bird activity and calm waters</li>
            </ul>
            <p>
              Avoid the heavy rains of July-August when some roads may become difficult.
            </p>
          </div>
          <img src={LakeView} alt="Best Time to Visit" />
        </section>

        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" />
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="faq-intro">
              Here are some frequently asked questions about visiting Lake Haramaya:
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.731132452287!2d38.71663631478488!3d7.600029994480595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b144f4c6e7580d%3A0x4c9aa9a5c4a7f1e5!2sLake%20Haramaya!5e0!3m2!1sen!2set!4v1717528734596!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lake Haramaya Location"
            ></iframe>
            <p>
              Lake Haramaya is located in the East Hararghe Zone of Oromia Region, about 15km west of Harar 
              and 40km from Dire Dawa. The lake lies near Haramaya town and is easily accessible from the 
              main Harar-Dire Dawa road. It's situated at coordinates 9°24′N 42°00′E and is part of the 
              larger Haramaya watershed that supports agriculture in this fertile region.
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
                Respect local customs regarding dress and behavior near the lake
              </li>
              <li>
                Bring binoculars for birdwatching and a camera for the scenic views
              </li>
              <li>
                Wear comfortable walking shoes for exploring the lake's perimeter
              </li>
              <li>
                Carry drinking water as facilities near the lake are limited
              </li>
              <li>
                Visit early in the day for the best light and bird activity
              </li>
              <li>
                Combine your visit with nearby attractions like Harar or Dire Dawa
              </li>
              <li>
                Check road conditions during rainy seasons as some paths may be muddy
              </li>
            </ul>
          </div>
        </section>

        <section className="park-section">
          <h2>Watch Video</h2>
          <p>
            Experience the beauty and cultural significance of Lake Haramaya through this video.
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
                title="Lake Haramaya Experience"
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

export default HaramayaPage;