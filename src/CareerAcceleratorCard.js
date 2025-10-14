import React from 'react';
import './CareerAcceleratorCard.css';

function CareerAcceleratorCard({ image, title, rating, reviews, hours }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <div className="rating">
        <span>⭐ {rating}</span>
        <span>{reviews} ratings</span>
        <span>{hours} total hours</span>
      </div>
    </div>
  );
}

export default CareerAcceleratorCard;
