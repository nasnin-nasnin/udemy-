import React from "react";
import "./TrendingNow.css";

const skills = {
  development: [
    { name: "Python", learners: "49,287,762" },
    { name: "Web Development", learners: "14,299,229" },
    { name: "Data Science", learners: "8,115,242" }
  ],
  design: [
    { name: "Blender", learners: "3,039,997" },
    { name: "Graphic Design", learners: "4,616,207" },
    { name: "User Experience (UX) Design", learners: "2,119,439" }
  ],
  business: [
    { name: "PMI Project Management Professional (PMP)", learners: "2,739,565" },
    { name: "Microsoft Power BI", learners: "4,952,006" },
    { name: "PMI Certified Associate in Project Management (CAPM)", learners: "457,948" }
  ]
};

export default function TrendingNow() {
  return (
    <section className="trending-wrapper">
      <h2 className="trending-title">Trending Now</h2>
      <hr className="trending-line" />

      <div className="trending-grid">
        {/* ChatGPT column */}
        <div className="trending-left">
          <h3 className="chatgpt-top">ChatGPT is a top skill</h3>
          <a href="#" className="chatgpt-link">
            See ChatGPT courses <span className="arrow">›</span>
          </a>
          <p className="learners-count">5,026,479 learners</p>
          <a href="#" className="trending-btn">
            Show all trending skills <span className="arrow">→</span>
          </a>
        </div>

        {/* Development */}
        <div className="trending-col">
          <h4 className="col-title">Development</h4>
          {skills.development.map((s, idx) => (
            <a key={idx} href="#" className="skill-link">
              {s.name} <span className="arrow">›</span>
              <span className="learners">{s.learners} learners</span>
            </a>
          ))}
        </div>

        {/* Design */}
        <div className="trending-col">
          <h4 className="col-title">Design</h4>
          {skills.design.map((s, idx) => (
            <a key={idx} href="#" className="skill-link">
              {s.name} <span className="arrow">›</span>
              <span className="learners">{s.learners} learners</span>
            </a>
          ))}
        </div>

        {/* Business */}
        <div className="trending-col">
          <h4 className="col-title">Business</h4>
          {skills.business.map((s, idx) => (
            <a key={idx} href="#" className="skill-link">
              {s.name} <span className="arrow">›</span>
              <span className="learners">{s.learners} learners</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
