import CarouselPage from "./CarouselPage";
import "./Carousel.css";
import React, { useRef } from "react";
import Slider from "react-slick";

// Example images (replace with real ones)
import img1 from "./images/Booz_Allen_image.webp";
import img2 from "./images/capitalone.webp";
import img3 from "./images/eventbrite.webp";
import img4 from "./images/toyota.webp";
import { PrevArrow, NextArrow } from "./CustomArrows";

// ...other imports...



export default function CarouselContainer() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div className="custom-dots-arrows">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <ul>{dots}</ul>
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    ),
    customPaging: i => <button />
  };
   const slides = [
    {
      company: "Booz | Allen | Hamilton",
      title: "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
      stats: [
        { percent: "93%", desc: "retention rate among participating employees" },
        { percent: "65%", desc: "of learners noted a positive impact on their productivity" }
      ],
      image: img1,
      buttonText: "Read full story"
    },
    // ✅ Slide 2 (NEW)
  {
    company: "Capital One",
    title:
      "Capital One Accelerates Transformational Learning through Udemy Business",
    stats: [
      { percent: "95%", desc: "of learners rated Udemy as “very helpful” to their success" },
      { percent: "65%", desc: "increase in retention for in-demand tech roles" }
    ],
    image: img2,        // <- replace with your Capital One image import
    buttonText: "Read full story"
  },
    {
  company: "Eventbrite",
  title: "Eventbrite Navigates Change Through Skill-Building and Leadership Development",
  stats: [
    { percent: "4,800+", desc: "increase in employee enrollments for professional development courses" },
    { percent: "65%", desc: "revenue growth supported by a business model backed by learning" }
  ],
  image: img3, // Replace img4 with your actual Eventbrite image, e.g., require('./images/eventbrite.jpg')
  buttonText: "Read full story"
}
,
    {
  company: "Toyota Tsusho",
  title: "Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes",
  stats: [
    { percent: "50%", desc: "training cost reduction per person" },
    { percent: "+7,000", desc: "hours of upskilling" }
  ],
  image: img4, // Replace img3 with your actual Toyota image, e.g., require('./images/toyota.jpg')
  buttonText: "Read full story"
}

  ];

  return (
    <div className="carousel-wrapper">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <CarouselPage key={idx} {...slide} />
        ))}
      </Slider>
    </div>
  );
}

 
