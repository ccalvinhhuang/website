"use client";

import { useState, useEffect } from "react";

const ScrollingText = () => {
  const phrases = ["Software Engineer", "ML Researcher", "Deep Learning Fan"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <span className="scrolling-text">
      {phrases[index]}
      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          position: relative;
          opacity: 1;
          transition: opacity 1s ease-in-out;
          color: white;
        }
      `}</style>
    </span>
  );
};

export default ScrollingText;
