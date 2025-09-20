import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { BottomHeader } from '../Components/Header';
import '../styles/headerWildLife.css';

const HeaderWildlifeSafari = () => {
  return (
    <div>
        <FixedHeader />

      <section className="wildlife-safari-hero">
     
   
        <h1>About Wildlife Safaris in Ethiopia</h1> 
        <p className='discoverPara'>Discover the beauty and adventure of wildlife safaris in Ethiopia</p> 
        <p className='headercontent'>Explore Ethiopia's diverse landscapes, from savannas to highlands, and encounter unique wildlife species. Immerse yourself in the natural beauty of Ethiopia's national parks and reserves. </p>
 <BottomHeader/> 
      </section>
    </div>
  );
};

export default HeaderWildlifeSafari;
