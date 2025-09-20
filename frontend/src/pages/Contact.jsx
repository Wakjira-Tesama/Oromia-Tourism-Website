import React, { useState } from "react";
import "../styles/Contact.css";
import axios from "axios";
import HeaderContact from "../Components/headerContact";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/contact", {
        name,
        email,
        subject,
        message,
      });

      if (response.status === 201) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatusMessage({ type: "error", text: "Message submission failed." });
      }
    } catch (error) {
      if (error.response) {
        setStatusMessage({
          type: "error",
          text: `Server error: ${error.response.status} - ${error.response.data.message}`,
        });
      } else if (error.request) {
        setStatusMessage({ type: "error", text: "No response from server." });
      } else {
        setStatusMessage({
          type: "error",
          text: "Error setting up the request.",
        });
      }
    }
  };

  return (
    <div>
      <HeaderContact />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="section-title">Reaching our Office</h2>
            </div>
          </div>

          <div className="row">
            {/* Visit Our Office */}
            <div className="col-md-4">
              <a
                href="https://www.google.com/maps?q=Addis+Ababa+Yeka+Subcity+Woreda+10"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="ts-service-box-bg text-center h-100">
                  <span className="ts-service-icon icon-round">
                    <i className="fas fa-map-marker-alt mr-0"></i>
                  </span>
                  <div className="ts-service-box-content">
                    <h4>Visit Our Office</h4>
                    <p>Finfinne, Chafe Arara, , House Number: New</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Email Us */}
            <div className="col-md-4">
              <a
                href="mailto:hkbconstructionplc@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="ts-service-box-bg text-center h-100">
                  <span className="ts-service-icon icon-round">
                    <i className="fa fa-envelope mr-0"></i>
                  </span>
                  <div className="ts-service-box-content">
                    <h4>Email Us</h4>
                    <p>tourism@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Call Us */}
            <div className="col-md-4">
              <a
                href="tel:+251118667075"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="ts-service-box-bg text-center h-100">
                  <span className="ts-service-icon icon-round">
                    <i className="fa fa-phone-square mr-0"></i>
                  </span>
                  <div className="ts-service-box-content">
                    <h4>Call Us</h4>
                    <p>+251-10000000</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="gap-60"></div>

          {/* Google Map Embed */}
          <div className="google-map" style={{ marginTop: 30 }}>
            <iframe
              src="https://www.google.com/maps?q=Addis+Ababa+Yeka+Subcity+Woreda+10&output=embed"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Office Location"
            ></iframe>
          </div>

          <div className="gap-40"></div>

          <div className="row">
            <div className="col-md-12">
              <h3 className="column-title">Contact us</h3>

              {statusMessage && (
                <div
                  className={`alert ${
                    statusMessage.type === "success"
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} id="contact-form">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control form-control-name"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control form-control-email"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        className="form-control form-control-subject"
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control form-control-message"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    rows="10"
                    value={message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Optional anti-spam field - can be added if needed */}
                {/* <input type="text" name="_gotcha" style={{ display: 'none' }} /> */}

                <div className="text-right" style={{ marginTop: 20 }}>
                  <button className="btn btn-primary solid blank" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="tempofooter"></div>
    </div>
  );
}

export default ContactPage;
