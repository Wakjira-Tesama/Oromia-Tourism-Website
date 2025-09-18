import React from "react";
import Slider from "react-slick";
import "../styles/TestimonialSlider.css"; // Create a CSS file for custom styles

// Import images
import image1 from "../assets/images/customers/ronaldo.jpg";
import image2 from "../assets/images/customers/messi.jpg";
import image3 from "../assets/images/customers/putin.jpg";

const testimonials = [
  {
    image: image1,
    name: "Crstiano Ronaldo",
    title: "Foot Baller",
    quote:
      '"Oromia is a beautiful land whose Gadaa system teaches wisdom, unity, and respect.',
  },
  {
    image: image2,
    name: "Leonel Messi",
    title: "Foot Baller",
    quote:
      "Oromia is a truly beautiful land, and its Gadaa system is a timeless lesson in unity and respect.",
  },
  {
    image: image3,
    name: "viladmir Putin",
    title: "President Of USSR",
    quote:
      "Oromia is a magnificent land, and the Gadaa system is a profound model of democracy and wisdom.",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <h4 className="testimonial-title">{testimonial.title}</h4>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
