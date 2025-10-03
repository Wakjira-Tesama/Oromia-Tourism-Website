
import React, { useState, useEffect } from 'react';
import axios from '../Components/axios-instance.jsx';
import BookingHeader from '../Components/headerBooking.jsx';
import '../styles/BookingPage.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date: '',
    tickets: 1,
    destination: 'Addis Ababa',
    amount: 0,
    currency: 'ETB',
    tx_ref: `tx-${Date.now()}`,
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const ticketPrices = {
    'Addis Ababa': 8000,
    'Lalibela': 15530,
    'Gondar': 12335,
    'Axum': 10003,
    'Semen Mountains': 10822,
    'Bahidar': 13593,
    'Awash NP': 8643,
    'Omo': 8653,
    'Bale': 8434,
    'Harar': 4000,
    'Debre Libanos': 1000,
    'Debre Damo': 1000,
  };

  useEffect(() => {
    calculateTotal();
  }, [formData.tickets, formData.destination, discount]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      await checkRegistration(value);
    }
  };

  const checkRegistration = async (email) => {
    try {
      const response = await axios.post('http://localhost:4000/api/register/check', { email });
      if (response.data.registered) {
        setDiscount(response.data.discount);
      } else {
        setDiscount(0);
      }
    } catch (error) {
      console.error('Error checking registration:', error);
    }
  };

  const calculateTotal = () => {
    const price = ticketPrices[formData.destination] || 0;
    const discountedPrice = price * (1 - discount);
    setTotalAmount(discountedPrice * formData.tickets);
    setFormData({ ...formData, amount: discountedPrice * formData.tickets });
  };

  const validateForm = () => {
    const { first_name, last_name, email, date, tickets } = formData;
    const today = new Date().toISOString().split('T')[0];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!first_name || !last_name || !email || !date || !tickets) {
      console.error('All fields are required.');
      return false;
    }
    if (!emailPattern.test(email)) {
      console.error('Invalid email format.');
      return false;
    }
    if (date < today) {
      console.error('The date cannot be in the past.');
      return false;
    }
    if (tickets < 1 || tickets > 10) {
      console.error('You can book between 1 and 10 tickets.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    const { first_name, last_name, email, date, tickets, destination, amount, currency, tx_ref } = formData;

    try {
      // Save booking details to the database
      console.log('Sending booking data to backend:', {
        first_name,
        last_name,
        email,
        date,
        tickets,
        destination,
        amount,
        currency,
        tx_ref,
      });
      const bookingResponse = await axios.post('http://localhost:4000/api/bookings', {
        first_name,
        last_name,
        email,
        date,
        tickets,
        destination,
        amount,
        currency,
        tx_ref,
      });

      if (bookingResponse.status === 201) {
        console.log('Booking saved successfully!', bookingResponse.data);

        // Initialize payment with Chapa
        const paymentData = { amount, currency, email, first_name, last_name, tx_ref };
        console.log('Initializing payment with Chapa:', paymentData);
        const paymentResponse = await axios.post('http://localhost:4000/api/create-payment', paymentData);

        if (paymentResponse.data && paymentResponse.data.data && paymentResponse.data.data.checkout_url) {
          window.location.href = paymentResponse.data.data.checkout_url; // Redirect to Chapa's checkout page
        } else {
          console.error('Payment initialization failed:', paymentResponse.data);
          alert('Payment initialization failed. Please try again.');
        }
      } else {
        console.error('Booking response status is not 201:', bookingResponse.status, bookingResponse.data);
      }
    } catch (error) {
      console.error('Error during booking or payment initialization:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <BookingHeader />
      <div className='body-booking'>
        <div className="container-booking">
          <h1 className="heading-booking">Online Ticket Booking</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group-booking">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
            </div>
            <div className="form-group-booking">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
            </div>
            <div className="form-group-booking">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group-booking">
              <label htmlFor="date">Expire Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group-booking">
              <label htmlFor="tickets">Number of Tickets</label>
              <input type="number" id="tickets" name="tickets" value={formData.tickets} onChange={handleChange} min="1" max="10" required />
            </div>
            <div className="form-group-booking">
              <label htmlFor="destination">Destination</label>
              <select id="destination" name="destination" value={formData.destination} onChange={handleChange} required>
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Lalibela">Lalibela</option>
                <option value="Gondar">Gondar</option>
                <option value="Axum">Axum</option>
                <option value="Semen Mountains">Semen Mountains</option>
                <option value="Bahidar">Bahidar</option>
                <option value="Harar">Harar</option>
                <option value="Awash NP">Awash NP</option>
                <option value="Bale">Bale</option>
                <option value="Debre Libanos">Debre Libanos</option>
                <option value="Debre Damo">Debre Damo</option>
              </select>
            </div>
            <div className="form-group-booking">
              <label htmlFor="totalAmount">Total Amount</label>
              <input type="text" id="totalAmount" name="totalAmount" value={`ETB ${totalAmount}`} readOnly />
            </div>
            <button type="submit" className="button-booking">Proceed to Payment</button>
          </form>
        </div>
      </div>
      <div className='tempofooter'></div>
    </div>
  );
};

export default BookingForm;




