import React, { useEffect, useRef } from 'react';
// import Typed from 'typed';
// import './Typing.css'; // Optional: if you have styles



export const Typing = () => {
    const typingElement = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(typingElement.current, {
        strings: [
          "Explore Ethiopian Tourist Destinations",
          "The beutiful Destinations",
          "The Unblievable nature"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
  
      // Clean up on unmount
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="your-component">
        <h1 className="typing-element" ref={typingElement}></h1>
      </div>
    );
  };