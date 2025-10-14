import React from 'react';
import CareerAcceleratorCard from './CareerAcceleratorCard';
import './CareerAccelerators.css';
import imgWeb from './images/se3-main-1.png';
import imgMarketer from './images/se-grul.png';
import imgData from './images/se-3-3.png';


function CareerAccelerators() {
 const accelerators = [
  { title: 'Full Stack Web Developer', image: imgWeb, rating: '4.7', reviews: '458K', hours: '87.8' },
  { title: 'Digital Marketer', image: imgMarketer, rating: '4.5', reviews: '3.6K', hours: '28.4' },
  { title: 'Data Scientist', image: imgData, rating: '4.6', reviews: '221K', hours: '47.1' },
];


  return (
    <div className="career-container">
      <h2>Ready to reimagine your career?</h2>
      <p>
        Get the skills and real-world experience employers want with Career
        Accelerators.
      </p>
      <div className="card-list">
        {accelerators.map((item, index) => (
          <CareerAcceleratorCard key={index} {...item} />
        ))}
      </div>
      <button className="all-careers-button">All Career Accelerators</button>
    </div>
  );
}

export default CareerAccelerators;
