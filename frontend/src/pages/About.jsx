import React from "react";
import HeaderAbout from "../Components/headerAbout.jsx";
import "../styles/About.css";
import AboutImage from "../assets/images/backgrounds/newBakcgrounds/locatoinOfETO.jpg";
import MissionImage from "../assets/images/team/addisEthio.jpg";
import TeamImage from "../assets/images/backgrounds/makeTrip.jpg";
import ServiceImage from "../assets/images/backgrounds/Flight.jpg";
import HistoryImage from "../assets/images/backgrounds/naturebg1.jpg";
import ValuesImage from "../assets/images/backgrounds/hiking3.jpg";
import AwardsImage from "../assets/images/backgrounds/Geter.jpg";
import PartnersImage from "../assets/images/backgrounds/helping2.jpg";
import ContactImage from "../assets/images/backgrounds/bg4.jpg";

const AboutPage = () => {
  return (
    <div>
      <HeaderAbout />

      <div className="about-page">
        <div className="about-section">
          <h2 className="section-title">About Us</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={AboutImage} alt="About Us" />
            </div>
            <div className="section-text">
              <p>
                We are a team passionate about promoting sustainable tourism in
                Oromia. Our mission is to showcase the beauty and diversity of
                Oromia's destinations while preserving their natural and
                cultural heritage.
              </p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={MissionImage} alt="Our Mission" />
            </div>
            <div className="section-text">
              <p>
                Our mission is to promote responsible and sustainable tourism in
                Oromia by offering eco-friendly travel experiences, supporting
                local communities, and preserving the region’s rich natural and
                cultural heritage. As the cradle of the Gadaa system and a land
                of deep-rooted traditions, breathtaking landscapes, and vibrant
                history, Oromia invites the world to explore, learn, and
                connect. We are committed to making Oromia a model destination
                where tourism benefits both visitors and local people while
                protecting the environment for future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={ServiceImage} alt="Our Services" />
            </div>
            <div className="section-text">
              <p>
                We provide a diverse range of services designed to showcase the
                beauty and culture of Oromia. Our offerings include: Guided
                Tours to historical, natural, and cultural sites Trekking
                Expeditions across stunning highlands, forests, and scenic
                routes Authentic Cultural Experiences that connect travelers
                with local communities Eco-Friendly Accommodations that respect
                the environment and support sustainability Our team of
                knowledgeable guides and travel professionals is dedicated to
                delivering unforgettable and responsible travel
                experiences—ensuring every journey is meaningful, safe, and
                respectful to the people and places we visit.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={TeamImage} alt="Our Team" />
            </div>
            <div className="section-text">
              <p>
                Get to know our passionate team of travel enthusiasts,
                environmental advocates, and cultural experts—each committed to
                promoting responsible tourism and sharing the very best of
                Oromia with the world. With deep local knowledge, a love for
                nature, and a strong respect for culture, our team works
                tirelessly to create meaningful travel experiences that inspire,
                educate, and connect.
              </p>
            </div>
          </div>
        </div>

        <div className="history-section">
          <h2 className="section-title">Our History</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={HistoryImage} alt="Our History" />
            </div>
            <div className="section-text">
              <p>
                The Oromia Tourism Organization was established in [Year] with
                the vision of positioning Oromia as one of the world’s leading
                travel destinations. Since our founding, we have continuously
                evolved—growing in scope and impact—while remaining firmly
                committed to our mission of promoting sustainable and
                responsible tourism. Through strategic partnerships, community
                engagement, and a deep respect for Oromia’s cultural and natural
                heritage, we’ve helped shine a global spotlight on Oromia as a
                land of unmatched history, diverse cultures, and breathtaking
                landscapes.
              </p>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={ValuesImage} alt="Our Values" />
            </div>
            <div className="section-text">
              <p>
                We are guided by core values that shape every aspect of our
                work: Sustainability – We prioritize eco-conscious practices to
                protect Ethiopia’s natural beauty for future generations.
                Cultural Respect – We honor and celebrate the rich traditions,
                histories, and identities of local communities. Excellence in
                Service – We are committed to delivering high-quality,
                meaningful, and memorable travel experiences. We believe that
                tourism should be a force for good—preserving the environment,
                empowering local communities, and creating lasting, positive
                impact wherever we go.
              </p>
            </div>
          </div>
        </div>

        <div className="awards-section">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={AwardsImage} alt="Awards & Recognition" />
            </div>
            <div className="section-text">
              <p>
                Our unwavering commitment to excellence in sustainable tourism
                has earned us numerous prestigious awards, including: [List of
                Awards] These honors reflect our dedication to positioning
                Ethiopia as a premier travel destination—while upholding the
                highest standards of environmental stewardship, cultural
                respect, and exceptional customer service. Every award
                strengthens our resolve to keep delivering meaningful and
                responsible travel experiences to the world.
              </p>
            </div>
          </div>
        </div>

        <div className="partners-section">
          <h2 className="section-title">Our Partners</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={PartnersImage} alt="Our Partners" />
            </div>
            <div className="section-text">
              <p>
                We work hand-in-hand with a diverse network of
                partners—including local businesses, international travel
                agencies, and conservation organizations. These collaborations
                are at the heart of our success, allowing us to deliver
                well-rounded, authentic, and sustainable travel experiences. By
                building strong relationships across sectors, we ensure that
                tourism benefits both travelers and the communities they
                visit—while protecting Ethiopia’s cultural and natural heritage.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={ContactImage} alt="Contact Us" />
            </div>
            <div className="section-text">
              <p>
                Have questions or want to learn more about our services? We’re
                here to help! Feel free to contact us at [Contact
                Information]—our friendly team is ready to assist you every step
                of the way and ensure your journey in Ethiopia is truly
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tempofooter"></div>
    </div>
  );
};

export default AboutPage;
