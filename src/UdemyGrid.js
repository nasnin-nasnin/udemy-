import React, { useState } from "react";
import "./UdemyGrid.css";

import img1 from "./images/img-1.png";
import img2 from "./images/img-2.png";
import img3 from "./images/img-4.png";

import { ReactComponent as VW } from "./images/1.svg";
import { ReactComponent as Samsung } from "./images/2.svg";
import { ReactComponent as Cisco } from "./images/3.svg";
import { ReactComponent as Vimeo } from "./images/4.svg";
import { ReactComponent as PG } from "./images/5.svg";
import { ReactComponent as HPE } from "./images/6.svg";
import { ReactComponent as Citi } from "./images/7.svg";
import { ReactComponent as Ericsson } from "./images/8.svg";

const categories = [
  { name: "Data Science" },
  { name: "IT Certifications" },
  { name: "Leadership" },
  { name: "Web Development" },
  { name: "Communication" },
  { name: "Business Analytics & Intelligence" },
];

const skillsTabs = [
  { name: "ChatGPT", learners: "5M+" },
  { name: "Data Science", learners: "8M+" },
  { name: "Python", learners: "49.9M+" },
  { name: "Machine Learning", learners: "9M+" },
  { name: "Deep Learning", learners: "2M+" },
  { name: "Artificial Intelligence", learners: "4M+" },
];

const courses = [
  {
    title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
    authors: "Julian Melanson, Benza Maman, Leap Year",
    rating: 4.5,
    reviews: "53,238",
    price: "₹2,489",
    badge: "Bestseller",
    image: img1,
  },
  {
    title: "ChatGPT: Complete ChatGPT Course For Work 2025 (Ethically)!",
    authors: "Steve Ballinger, MBA",
    rating: 4.5,
    reviews: "120,061",
    price: "₹3,949",
    badge: "Bestseller",
    image: img2,
  },
  {
    title: "ChatGPT & Generative AI - The Complete Guide",
    authors: "Academind by Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: "26,651",
    price: "₹859",
    badge: "Bestseller",
    image: img3,
  },
];

const SKILL_CAROUSEL_SIZE = 6;
const COURSE_CAROUSEL_SIZE = 3;

export default function UdemyGrid() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);
  const [skillStartIdx, setSkillStartIdx] = useState(0);
  const [courseStartIdx, setCourseStartIdx] = useState(0);
  

  const handleSkillNext = () => {
    if (skillStartIdx + SKILL_CAROUSEL_SIZE < skillsTabs.length) {
      setSkillStartIdx((prev) => prev + 1);
    }
  };
  const handleSkillPrev = () => {
    if (skillStartIdx > 0) setSkillStartIdx((prev) => prev - 1);
  };

  const handleCourseNext = () => {
    if (courseStartIdx + COURSE_CAROUSEL_SIZE < courses.length) {
      setCourseStartIdx((prev) => prev + 1);
    }
  };
  const handleCoursePrev = () => {
    if (courseStartIdx > 0) setCourseStartIdx((prev) => prev - 1);
  };

  return (
    <div className="udemy-grid-container">
      <h1>All the skills you need in one place</h1>
      <p className="subtitle">
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>

      {/* Categories */}
      <div className="category-tabs">
        {categories.map((cat, idx) => (
          <span
            key={cat.name}
            className={`category-tab${activeCategory === idx ? " active" : ""}`}
            onClick={() => setActiveCategory(idx)}
          >
            {cat.name}
          </span>
        ))}
      </div>

      {/* Skills Carousel */}
     <div className="skills-tab-row">
  {/* Left button */}
  {skillStartIdx > 0 && (
    <button className="carousel-arrow left" onClick={handleSkillPrev}></button>
  )}

  {/* Skills tabs */}
  {skillsTabs
    .slice(skillStartIdx, skillStartIdx + SKILL_CAROUSEL_SIZE)
    .map((tab, idx) => (
      <span
        key={tab.name}
        className={`skills-tab${activeSkill === skillStartIdx + idx ? " active" : ""}`}
        onClick={() => setActiveSkill(skillStartIdx + idx)}
      >
        {tab.name} <span className="learners">{tab.learners} learners</span>
      </span>
    ))}

  {/* Right button */}
  {skillStartIdx + SKILL_CAROUSEL_SIZE < skillsTabs.length && (
    <button className="carousel-arrow right" onClick={handleSkillNext}></button>
  )}
</div>



      {/* Courses Carousel */}
    <div className="courses-carousel-row">
  {courseStartIdx > 0 && (
    <button className="carousel-arrow left" onClick={handleCoursePrev}></button>
  )}

  <div style={{ display: "flex", gap: "24px" }}>
    {courses
      .slice(courseStartIdx, courseStartIdx + COURSE_CAROUSEL_SIZE)
      .map((course) => (
        <div key={course.title} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-details">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-authors">{course.authors}</p>
            <div className="course-rating">
              ⭐ {course.rating} <span className="review-count">({course.reviews})</span>
            </div>
            <div className="course-price">{course.price}</div>
            {course.badge && <div className="course-badge">{course.badge}</div>}
          </div>
        </div>
      ))}
  </div>

  {courseStartIdx + COURSE_CAROUSEL_SIZE < courses.length && (
    <button className="carousel-arrow right" onClick={handleCourseNext}></button>
  )}
</div>



      <button className="show-more-btn">Show all Data Science courses</button>

      {/* Trusted logos */}
      <div className="trusted-logos">
        <span>
          Trusted by over 17,000 companies and millions of learners around the
          world
        </span>
        <div className="logo-row">
          <VW className="trusted-logo" />
          <Samsung className="trusted-logo" />
          <Cisco className="trusted-logo" />
          <Vimeo className="trusted-logo" />
          <PG className="trusted-logo" />
          <HPE className="trusted-logo" />
          <Citi className="trusted-logo" />
          <Ericsson className="trusted-logo" />
        </div>
      </div>
    </div>
  );
}
