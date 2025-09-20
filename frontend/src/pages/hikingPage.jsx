import React from 'react';
// Importing the CSS file for styling
// Importing images - these paths should match your actual image files
import HeaderImage from "../assets/images/abijata/park-header.jpg";
import BaleImage from '../assets/images/bale/sanettiPlateau.jpg';
import ChilaloImage from '../assets/images/arsi/chilaloPlateau.jpg';
import KakaImage from '../assets/images/arsi/mountKaka.jpg';
import WenchiImage from '../assets/images/wenchi/wenchi-hiking.jpg';
import BorenaImage from '../assets/images/borena/borena-hero.jpg';
import AwashImage from '../assets/images/awash/fantale.jpg';
import LanganoImage from '../assets/images/langano/langano-beach.jpg';
import Header from './Destinations/header';
import '../styles/hinkngPage.css';
const HikingPage = () => {
    return (
        <div className="hiking-container">
          <Header/>
            {/* Main Header with Background Image */}
            <div 
                className="main-header" 
                style={{ backgroundImage: `url(${HeaderImage})` }}
            >
                <div className="header-overlay">
                    <h1>Hiking in Oromia</h1>
                    <h2>A Journey Through Diverse Landscapes</h2>
                    <p>Explore Ethiopia's breathtaking mountains, forests, and volcanic landscapes</p>
                </div>
            </div>

            <div className="hiking-content">
                {/* Bale Mountains National Park */}
                <div className="location-page">
                    <div className="location-image">
                        <img src={BaleImage} alt="Bale Mountains National Park" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Bale Mountains National Park</h2>
                        <p>
                            This is Oromia's premier destination for multi-day trekking. You can hike through a variety of ecosystems, including Afro-alpine moorlands, lush juniper and hagenia forests, and the vast Sanetti Plateau. Many of the treks are guided and can be customized to different fitness levels, from a day trip to a two-week expedition. Horseback riding is also a popular option.
                        </p>
                        <p>
                            The Bale Mountains are home to the endemic Ethiopian wolf, mountain nyala, Menelik's bushbuck, and many unique bird species. The stunning scenery includes alpine lakes and dramatic views from peaks like Tullu Dimtu, Ethiopia's second-highest mountain.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> Southeast Oromia</span>
                            <span><i className="fas fa-mountain"></i> Elevation: 3,000-4,377m</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Moderate to Challenging</span>
                        </div>
                    </div>
                </div>

                {/* Chilalo Mountain */}
                <div className="location-page reverse">
                    <div className="location-image">
                        <img src={ChilaloImage} alt="Chilalo Mountain" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Chilalo Mountain</h2>
                        <p>
                            Mount Chilalo offers a challenging and rewarding climb near the town of Asella. The hike involves a steep ascent from a starting elevation of around 2,800 meters to the summit at over 4,000 meters. The trail goes through forests of juniper and olive trees before reaching open, exposed ridges.
                        </p>
                        <p>
                            The primary reward for this hike is the majestic panoramic view from the summit, which stretches across the surrounding Arsi region and can even include the Bale Mountains on a clear day.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> Arsi Zone</span>
                            <span><i className="fas fa-mountain"></i> Elevation: 4,000m</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Challenging</span>
                        </div>
                    </div>
                </div>

                {/* Mount Kaka */}
                <div className="location-page">
                    <div className="location-image">
                        <img src={KakaImage} alt="Mount Kaka" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Mount Kaka</h2>
                        <p>
                            Mount Kaka is part of the Arsi Mountains National Park, a lesser-known but equally beautiful area for trekking. It's a great option for hikers looking for a more secluded and wild experience away from the more popular tourist routes.
                        </p>
                        <p>
                            The Arsi mountains have a unique natural highland vegetation and are a fantastic place for wilderness trekking. The area is rich in biodiversity and provides a chance to explore a part of the Ethiopian Highlands that remains beautifully untamed.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> Arsi Mountains</span>
                            <span><i className="fas fa-mountain"></i> Elevation: 4,200m</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Moderate</span>
                        </div>
                    </div>
                </div>

                {/* Wenchi Crater */}
                <div className="location-page reverse">
                    <div className="location-image">
                        <img src={WenchiImage} alt="Wenchi Crater" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Wenchi Crater</h2>
                        <p>
                            Wenchi is a beautiful extinct volcano with a stunning crater lake at its center. This is a great spot for a day trip from Addis Ababa. You can hike or ride a horse down to the lake, take a boat to one of the islands to visit a historic monastery, and explore the hot springs and waterfalls within the crater.
                        </p>
                        <p>
                            The main attraction is the serene beauty of the lake itself, surrounded by green hills and forests. It's an excellent place for birdwatching and enjoying a peaceful natural environment.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> West Shewa Zone</span>
                            <span><i className="fas fa-water"></i> Crater Lake</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Easy</span>
                        </div>
                    </div>
                </div>

                {/* Borena National Park */}
                <div className="location-page">
                    <div className="location-image">
                        <img src={BorenaImage} alt="Borena National Park" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Borena National Park</h2>
                        <p>
                            This national park is primarily a wildlife sanctuary and is not a typical hiking destination in the same way as the Bale Mountains. Activities here are more focused on wildlife viewing and guided nature walks rather than long-distance trekking.
                        </p>
                        <p>
                            The park is known for its savannah landscapes and is home to a variety of mammals like Grevy's and Burchell's zebras, cheetahs, and gazelles. It is particularly important for birdwatchers, with a huge number of species, including many endemic birds.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> Southern Oromia</span>
                            <span><i className="fas fa-paw"></i> Wildlife Sanctuary</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Easy</span>
                        </div>
                    </div>
                </div>

                {/* Awash National Park */}
                <div className="location-page reverse">
                    <div className="location-image">
                        <img src={AwashImage} alt="Awash National Park" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Awash National Park</h2>
                        <p>
                            Awash National Park offers a different kind of hiking experience, with its semi-arid savannah and volcanic landscapes. You can take guided walks to see the park's famous features, such as the dramatic Awash River Falls and the dormant volcano, Mount Fentale.
                        </p>
                        <p>
                            The park is known for its rich biodiversity, including beisa oryx, gazelles, and a variety of bird species. The landscapes are a highlight, with the spectacular Awash Falls and hot springs to explore.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> East Oromia</span>
                            <span><i className="fas fa-volcano"></i> Volcanic Landscape</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Moderate</span>
                        </div>
                    </div>
                </div>

                {/* Lake Langano */}
                <div className="location-page">
                    <div className="location-image">
                        <img src={LanganoImage} alt="Lake Langano" />
                    </div>
                    <div className="location-content">
                        <h2 className="location-title">Lake Langano</h2>
                        <p>
                            Lake Langano is a popular resort area and is not a traditional hiking destination. The activities here are more focused on leisure and water sports, such as swimming, boating, and sunbathing on the sandy beaches. However, you can enjoy relaxed walks along the shoreline and through the nearby forests.
                        </p>
                        <p>
                            The main draw is the lake itself, which has a distinct reddish-brown color from the minerals in the water. The surrounding area is great for birdwatching, and you can spot various bird species attracted to the lake and its nearby vegetation.
                        </p>
                        <div className="location-details">
                            <span><i className="fas fa-map-marker-alt"></i> Between Oromia and SNNP</span>
                            <span><i className="fas fa-swimmer"></i> Lakeside Walks</span>
                            <span><i className="fas fa-hiking"></i> Difficulty: Easy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HikingPage;

