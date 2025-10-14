import React from "react";
import "./Carousel.css";

export default function CarouselPage({ company, title, stats, image, buttonText }) {
  return (
    <div className="slide-container">
      {/* Left Content */}
      <div className="slide-text">
        <p className="company">{company}</p>
        <h2>{title}</h2>
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i}>
              <h3>{s.percent}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <button className="read-btn">{buttonText}</button>
      </div>

      {/* Right Image */}
      <div className="slide-image">
        <img src={image} alt={company} />
      </div>
    </div>
  );
}
