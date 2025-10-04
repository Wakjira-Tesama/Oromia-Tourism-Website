import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBooking from './headerBooking';
import '../styles/CheckForBooking.css';
import BookCheckImage from '../assets/images/backgrounds/checkregister1.jpg';

const CheckForBooking = () => {
  return (
    <div>
      <HeaderBooking />
      <div className="check-booking-page">
        <h1>Welcome to Our Booking System</h1>
        <div className='allcontents'>
          <div className="content">
            <h2>Please Register and Login to Book</h2>
            <h3>Please register to create an account.</h3>
    
           
              <Link to='/register' className="button-link"> <button className="register-button">Register    </button></Link>
        
            <h3 style={{ "marginLeft": "50px" }}>Already registered?</h3>
       
            <Link to='/login' className="button-link">  <button className="login-button">Login
            </button></Link>
          
          </div>
          <div className="image-container">
            <img src={BookCheckImage} alt="Booking" />
          </div>
        </div>
      </div>
      <div className='tempofooter'></div>
    </div>
  );
};

export default CheckForBooking;
