import React, { useState } from 'react';
import './CourseCarousel.css';
import imgPython from './images/11.webp';
import imgAI from './images/13.webp';
import imgWeb from './images/react.webp';
import imgAWS from './images/14.webp';
import imgML from './images/15.webp';
import imgDSA from './images/11.webp';
import imgChatbot from './images/15.webp';

const courses = [
  {
    id: 1,
    title: '100 Days of Code: The Complete Python Pro…',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: '392,782',
    price: '₹479',
    oldPrice: '₹3,109',
    tag: 'Bestseller',
    image: imgPython,
  },
  {
    id: 2,
    title: 'The Complete Agentic AI Engineering Course (2025)',
    instructor: 'Ed Donner',
    rating: 4.7,
    reviews: '15,055',
    price: '₹479',
    oldPrice: '₹2,049',
    tag: 'Bestseller',
    image: imgAI,
  },
  {
    id: 3,
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: '453,102',
    price: '₹479',
    oldPrice: '₹3,109',
    tag: 'Bestseller',
    image: imgWeb,
  },
  {
    id: 4,
    title: '[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02',
    instructor: 'Stephane Maarek',
    rating: 4.7,
    reviews: '265,154',
    price: '₹509',
    oldPrice: '₹3,289',
    tag: 'Bestseller',
    image: imgAWS,
  },
  {
    id: 5,
    title: 'Mastering Machine Learning with Scikit-Learn',
    instructor: 'Jane Doe',
    rating: 4.6,
    reviews: '112,345',
    price: '₹479',
    oldPrice: '₹2,999',
    tag: 'Bestseller',
    image: imgML,
  },
  {
    id: 6,
    title: 'Data Structures & Algorithms Bootcamp',
    instructor: 'John Smith',
    rating: 4.8,
    reviews: '98,101',
    price: '₹479',
    oldPrice: '₹3,499',
    tag: 'Bestseller',
    image: imgDSA,
  },
  {
    id: 7,
    title: 'Build Chatbots with GPT & LangChain',
    instructor: 'AI Expert',
    rating: 4.7,
    reviews: '76,890',
    price: '₹479',
    oldPrice: '₹3,049',
    tag: 'Bestseller',
    image: imgChatbot,
  },
];

const CourseCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, courses.length - visibleCards)
    );
  };

  return (
    <div className="carousel-container">
      <h2>Trending courses</h2>

      <div className="carousel-box">
        <button
          className="carousel-btn left"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          &#x25C0;
        </button>

        <div className="carousel-track">
          {courses.slice(startIndex, startIndex + visibleCards).map((course) => (
            <div className="card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
              <p>⭐ {course.rating} ({course.reviews})</p>
              <p>
                <strong>{course.price}</strong> <s>{course.oldPrice}</s>
              </p>
              <span className="tag">{course.tag}</span>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={handleNext}
          disabled={startIndex >= courses.length - visibleCards}
        >
          &#x25B6;
        </button>
      </div>
    </div>
  );
};

export default CourseCarousel;
