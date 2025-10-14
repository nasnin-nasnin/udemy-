import React from "react";

// Images
import img1 from "./images/img-1.png";
import img2 from "./images/img-2.png";
import img3 from "./images/img-4.png";

// SVG Logos imported with ?url to get URLs for img src
import { ReactComponent as VW } from "./images/1.svg";
import { ReactComponent as Samsung } from "./images/2.svg";
import { ReactComponent as Cisco } from "./images/3.svg";
import { ReactComponent as Vimeo } from "./images/4.svg";
import { ReactComponent as PG } from "./images/5.svg";
import { ReactComponent as HPE } from "./images/6.svg";
import { ReactComponent as Citi } from "./images/7.svg";
import { ReactComponent as Ericsson } from "./images/8.svg";
// Course Data
const courses = [
  {
    id: 1,
    title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
    instructors: "Julian Melanson, Benza Maman, Leap Year Learning",
    rating: 4.5,
    reviews: "53,056",
    price: 509,
    oldPrice: 2559,
    tag: "Bestseller",
    image: img1,
  },
  {
    id: 2,
    title: "ChatGPT: Complete ChatGPT Course For Work 2025 (Ethically)!",
    instructors: "Steve Ballinger, MBA",
    rating: 4.5,
    reviews: "119,711",
    price: 689,
    oldPrice: 4029,
    tag: "Bestseller",
    image: img2,
  },
  {
    id: 3,
    title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
    instructors: "Anton Voroniuk",
    rating: 4.3,
    reviews: "901",
    price: 589,
    oldPrice: 8399,
    tag: "Premium",
    image: img3,
  },
];

const categories = [
  "ChatGPT",
  "Data Science",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
];

const companyLogos = [
  { Component: VW, alt: "Volkswagen" },
  { Component: Samsung, alt: "Samsung" },
  { Component: Cisco, alt: "Cisco" },
  { Component: Vimeo, alt: "Vimeo" },
  { Component: PG, alt: "P&G" },
  { Component: HPE, alt: "HPE" },
  { Component: Citi, alt: "Citi" },
  { Component: Ericsson, alt: "Ericsson" },
];


// Styles extracted for readability
const styles = {
  container: { fontFamily: "Arial, sans-serif", padding: "20px" },
  heading: { fontSize: "26px", fontWeight: "bold", marginBottom: "8px" },
  subheading: { color: "#555", marginBottom: "20px" },
  categoryTabs: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  categoryTab: (active) => ({
    padding: "10px 20px",
    backgroundColor: active ? "#000" : "#eee",
    color: active ? "#fff" : "#000",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  }),
  coursesGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  courseCard: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  },
  courseImage: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
  },
  courseContent: {
    padding: "15px",
  },
  courseTitle: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  instructors: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "5px",
  },
  rating: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "5px",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#888",
    fontSize: "14px",
    marginLeft: "8px",
  },
  tag: (premium) => ({
    backgroundColor: premium ? "#6c5ce7" : "#27ae60",
    color: "#fff",
    padding: "3px 8px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  }),
  showAllButtonWrapper: { marginTop: "50px", textAlign: "center" },
  showAllButton: {
    padding: "12px 24px",
    border: "2px solid #a435f0",
    color: "#a435f0",
    backgroundColor: "#f9f9f9",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
  },
  trustedSection: {
    textAlign: "center",
    marginTop: "60px",
  },
  trustedText: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "30px",
  },
  logosWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
  },
  logoImage: {
    height: "40px",
    objectFit: "contain",
  },
};

export default function UdemyStyleCourses() {
  return (
    <div style={styles.container}>
      {/* Heading */}
      <h2 style={styles.heading}>All the skills you need in one place</h2>
      <p style={styles.subheading}>
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      {/* Category Tabs */}
      <div style={styles.categoryTabs}>
        {categories.map((cat, idx) => (
          <div key={idx} style={styles.categoryTab(idx === 0)}>
            {cat}
          </div>
        ))}
      </div>

      {/* Course Cards */}
      <div style={styles.coursesGrid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.courseCard}>
            <img
              src={course.image}
              alt={course.title}
              style={styles.courseImage}
            />
            <div style={styles.courseContent}>
              <h4 style={styles.courseTitle}>{course.title}</h4>
              <p style={styles.instructors}>{course.instructors}</p>
              <p style={styles.rating}>
                ⭐ {course.rating} ({course.reviews})
              </p>
              <p style={styles.price}>
                ₹{course.price}{" "}
                <span style={styles.oldPrice}>₹{course.oldPrice}</span>
              </p>
              <span style={styles.tag(course.tag === "Premium")}>{course.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div style={styles.showAllButtonWrapper}>
        <button style={styles.showAllButton}>
          Show all Data Science courses
        </button>
      </div>

      {/* Trusted by Companies Section */}
      <div style={styles.trustedSection}>
        <p style={styles.trustedText}>
          Trusted by over <strong>17,000 companies</strong> and millions of learners around the world
        </p>
        <div style={styles.logosWrapper}>
  {companyLogos.map(({ Component, alt }, index) => (
    <Component key={index} title={alt} aria-label={alt} style={styles.logoImage} />
  ))}
</div>

      </div>
    </div>
  );
}
