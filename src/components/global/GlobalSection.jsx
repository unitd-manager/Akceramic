import React, { useEffect, useState } from "react";
import Globe from "./Globe";
import "./global.css";

export default function HomeBanner() {

  // ✍️ Typing animation
  const texts = [
    "Premium Tiles",
    "Luxury Sanitary",
    "Global Quality",
    "Modern Designs"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(texts[textIndex].slice(0, i));
      i++;
      if (i > texts[textIndex].length) {
        clearInterval(typing);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [textIndex]);

  // 🖱 Parallax
  useEffect(() => {
    const move = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;

      document.querySelector(".banner-content").style.transform =
        `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="home-banner">

      {/* 🌍 Globe */}
      <div className="globe-bg">
        <Globe />
      </div>

      {/* 💎 Content */}
      <div className="banner-content">

        <h1 className="gradient-text">
          AK CERAMIC WORLD
        </h1>

        <h2 className="typing">
          {displayText} <span>|</span>
        </h2>

        <p>
          Elevate your lifestyle with world-class tiles and sanitary solutions.
          Crafted for elegance, built for durability.
        </p>

        <div className="banner-buttons">
          <button className="btn-primary">Explore Tiles</button>
          <button className="btn-secondary">View Sanitary</button>
        </div>

      </div>

    </section>
  );
}