// src/Components/login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import HeaderLogin from "./headerLogin";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/register/login",
        loginData
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Store the token here
        alert("Login successful!");
        navigate("/booking-form");
      } else {
        alert("Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(
          `Sorry, login failed. Server responded with: ${error.response.status} - ${error.response.data.message}`
        );
      } else if (error.request) {
        alert("Sorry, login failed. No response from server.");
      } else {
        alert("Sorry, login failed. Error setting up the request.");
      }
    }
  };

  return (
    <div>
      <HeaderLogin />
      <div className="login-form-container">
        <h2>Login Form</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="loginBtn" type="submit">
            Login
          </button>
          <h2>Don't have an account?</h2>
          <div className="registerBtnDiv">
            <button className="RegisterButton">
              <Link to="/register">Register Now</Link>
            </button>
          </div>
        </form>
      </div>
      <div className="tempofooter"></div>
    </div>
  );
};

export default LoginForm;
