import React, { useState } from 'react';
import HeaderRegistration from './headerRegister.jsx';
import '../styles/RegistrationForm.css';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passport: '',
    dob: '',
    gender: '',
    country: '',
    address: '',
    zip: '',
    city: '',
    emergencyContact: '',
    emergencyPhone: '',
    allergies: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/register/registration', formData);
      console.log(response.data);
      if (response.status === 201) {
        alert('Registration successful!');
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(`Sorry, registration failed. Server responded with: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        alert('Sorry, registration failed. No response from server.');
      } else {
        alert('Sorry, registration failed. Error setting up the request.');
      }
    }
  };

  return (
    <div>
      <HeaderRegistration />
      <div className='mainRegistrationBody'>
        <h1>Welcome to the Registration Page</h1>
        <div className="registration-form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Tourist Registration Form</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="passport">Passport Number</label>
              <input type="text" id="passport" name="passport" value={formData.passport} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
            </div> 
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContact">Emergency Contact Name</label>
              <input type="text" id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
            < input type="tel" id="emergencyPhone" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
          
           <  input type="password"  placeholder='create your new password in wander ethio'  onChange={handleChange} required />
            </div>
            <div className="form-group">   
            <  input type="password" id="password" placeholder='confirm your your password'  name="password" value={formData.password} onChange={handleChange} required />
               
               </div>
       
      
            <div className="form-group">

              <label htmlFor="allergies">Allergies (if any)</label>
              <textarea id="allergies" name="allergies" value={formData.allergies} onChange={handleChange}></textarea>
            </div>
            <button className='registerBtn' type="submit">Register</button>
          </form>
        </div>
      </div>
      <div className='tempofooter'></div>
    </div>
  );
};

export default RegistrationForm;
