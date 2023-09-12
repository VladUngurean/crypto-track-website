// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down halfway through the page
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`flex justify-center items-center fixed bottom-5 right-5 w-10 h-10 bg-gradient-to-r from-[#2100fc] to-[#ff00ff] text-yellow-400 p-2 rounded-full cursor-pointer transition-opacity border ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp className="w-9 h-9" />
    </div>
  );
};

export default ScrollToTopButton;
