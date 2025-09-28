import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DestinationStyles/GadaSystem.css";
// importing header
import Header from "./header.jsx";
// Image imports
import HeaderImage from "../../assets/images/GadaSystem/gada-header.jpg";
import CouncilImage from "../../assets/images/GadaSystem/gada-council.jpg";
import AssemblyImage from "../../assets/images/GadaSystem/gada-assembly.jpg";
import RitualImage from "../../assets/images/GadaSystem/gada-ritual.jpg";
import StructureImage from "../../assets/images/GadaSystem/gada-structure.jpg";
import LocationImage from "../../assets/images/GadaSystem/gada-ritual.jpg";
import RecognitionImage from "../../assets/images/GadaSystem/unesco.jpg";
import FAQImage from "../../assets/images/GadaSystem/gada-elders.jpg";

const GadaSystemPage = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [showMap, setShowMap] = useState(false);

  const components = [
    {
      title: "Gadaa Council",
      description: "The ruling council of elected leaders serving 8-year terms",
      image: CouncilImage
    },
    {
      title: "General Assembly",
      description: "The Chaffee where all adult males participate in decision-making",
      image: AssemblyImage
    },
    {
      title: "Rituals & Ceremonies",
      description: "Transfer of power ceremonies every 8 years",
      image: RitualImage
    },
    {
      title: "Age Grades",
      description: "Structured progression through life stages with responsibilities",
      image: StructureImage
    }
  ];

  const faqs = [
    {
      question: "Is the Gada system still practiced today?",
      answer: "Yes, though modified, it remains influential in Oromo governance and cultural practices."
    },
    {
      question: "Can women participate in the Gada system?",
      answer: "Traditionally limited, but modern adaptations increasingly include women's participation."
    },
    {
      question: "How long is each Gada period?",
      answer: "Each Gada class rules for 8 years before passing power to the next generation."
    },
    {
      question: "Where can I witness Gada practices?",
      answer: "The Borana and Guji zones in southern Ethiopia maintain strong Gada traditions."
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
          <h1>Gada System</h1>
          <h2>Indigenous Democratic Governance</h2>
          <div className="location-tag">
            <span>📍 Oromia Region, Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="destination-content">
        {/* Overview Section */}
        <section className="destination-section">
          <h2>Overview</h2>
          <hr />
          <p>
            The Gada System is an indigenous democratic socio-political system of the Oromo people that has governed their society for centuries. This complex age-grade system organizes political, social, religious, and economic life through a carefully structured generational rotation of power.
          </p>
          <div className="flex-section">
            <div className="text-content">
              <p>
                Recognized by UNESCO as an Intangible Cultural Heritage of Humanity, the Gada system exemplifies principles of democracy, equality, and peaceful power transfer that predate Western democratic systems by centuries.
              </p>
            </div>
            <img src={RecognitionImage} alt="UNESCO Recognition" className="section-image" />
          </div>
        </section>

        {/* Historical Significance */}
        <section className="destination-section">
          <h2>Historical and Cultural Significance</h2>
          <hr />
          <p>
            Dating back to at least the 16th century, the Gada system has been the foundation of Oromo society, organizing everything from conflict resolution to resource management. It represents one of the oldest continuously functioning democratic systems in the world.
          </p>
          <p>
            The system's core principles include power limitation, accountability, gender balance (through the parallel Siqqee institution), and environmental protection. Its cyclical power transfer every eight years ensures no single group holds power indefinitely.
          </p>
        </section>

        {/* Location Section */}
        <section className="destination-section">
          <h2>Where to Experience the Gada System</h2>
          <hr />
          <div className="flex-section">
            <div className="text-content">
              <div className="location-header">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                <h3>Oromia Region, Ethiopia</h3>
              </div>
              <p>
                The Gada system is practiced throughout Oromia, but the strongest traditions are maintained in these areas:
              </p>
              
              <div className="location-details">
                <div className="location-card">
                  <h4>Borana Zone</h4>
                  <ul>
                    <li><strong>Center:</strong> Yabello district</li>
                    <li><strong>Key Sites:</strong> Dubluk ceremonial grounds</li>
                    <li><strong>Best Time:</strong> Power transfer ceremonies (every 8 years)</li>
                  </ul>
                </div>
                
                <div className="location-card">
                  <h4>Guji Zone</h4>
                  <ul>
                    <li><strong>Center:</strong> Negele town</li>
                    <li><strong>Key Sites:</strong> Melga Gada Center</li>
                    <li><strong>Activities:</strong> Council meetings, dispute resolutions</li>
                  </ul>
                </div>
              </div>
              
              <div className="location-info">
                <h4>Getting There</h4>
                <p>
                  Most Gada centers are accessible from Addis Ababa via the A4 highway. 
                  Regular buses travel to major towns like Yabello (12 hours) and Negele (10 hours). 
                  4WD vehicles are recommended for reaching remote ceremonial sites.
                </p>
              </div>
              
              
         
            </div>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="destination-section">
          <h2>Key Components of the Gada System</h2>
          <hr />
          <div className="grid">
            {components.map((component, index) => (
              <div className="card" key={index}>
                <h3>{component.title}</h3>
                <img src={component.image} alt={component.title} />
                <p>{component.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="destination-section flex-section">
          <div className="text-content">
            <h2>How the Gada System Works</h2>
            <hr />
            <p>
              The Gada system organizes Oromo society into 11 age-based classes that progress through life stages together:
            </p>
            <ol className="gada-stages">
              <li><strong>Infancy (0-8 years):</strong> Childhood education</li>
              <li><strong>Gamme Titiqaa (8-16):</strong> Formal training begins</li>
              <li><strong>Qondaala (16-24):</strong> Warrior training</li>
              <li><strong>Kuusa (24-32):</strong> Junior leadership</li>
              <li><strong>Raaba Doorii (32-40):</strong> Family establishment</li>
              <li><strong>Gadaa (40-48):</strong> National leadership</li>
              <li><strong>Yuba I (48-56):</strong> Advisor to Gadaa</li>
              <li><strong>Yuba II (56-64):</strong> Community elder</li>
              <li><strong>Yuba III (64-72):</strong> Ritual specialist</li>
              <li><strong>Gadamojjii (72-80):</strong> Retired counselor</li>
              <li><strong>Jaarsa (80+):</strong> Senior historian</li>
            </ol>
          </div>
          <img src={StructureImage} alt="Gada Structure" className="section-image" />
        </section>

        {/* Importance Section */}
        <section className="destination-section">
          <h2>Why the Gada System Matters</h2>
          <hr />
          <div className="grid">
            <div className="card">
              <h3>Democratic Model</h3>
              <p>One of the world's oldest functioning democracies with peaceful power transitions</p>
            </div>
            <div className="card">
              <h3>Conflict Resolution</h3>
              <p>Sophisticated justice system focused on reconciliation over punishment</p>
            </div>
            <div className="card">
              <h3>Environmental Protection</h3>
              <p>Sacred laws governing natural resource management</p>
            </div>
            <div className="card">
              <h3>Cultural Preservation</h3>
              <p>Maintains Oromo identity through oral history and rituals</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="destination-section faq-section">
          <div className="faq-image-container">
            <img src={FAQImage} alt="Gada Elders" className="faq-image" />
          </div>
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <hr />
            <ul className="faq-list">
              {faqs.map((faq, index) => (
                <li key={index} className="faq-item">
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    {faq.question}
                    <FontAwesomeIcon 
                      icon={faqOpen[index] ? faChevronUp : faChevronDown} 
                      className="faq-icon" 
                    />
                  </div>
                  {faqOpen[index] && <p className="faq-answer">{faq.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GadaSystemPage;