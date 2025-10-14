import React from "react";
import "./LearningGoals.css";

import iconTraining from './images/21.webp';
import iconCertification from './images/22.webp';
import iconInsights from './images/23.webp';
import iconNewBox from './images/24.webp';

import illustration from './images/desktop-hands-on-learning-2x.webp';

const boxes = [
  {
    id: 1,
    title: "Hands-on training",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    icon: iconTraining,
    highlighted: true,
  },
  {
    id: 2,
    title: "Certification prep",
    description:
      "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
    icon: iconCertification,
    linkText: "Explore courses",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Insights and analytics",
    description:
      "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
    icon: iconInsights,
    planTag: "Enterprise Plan",
    linkText: "Find out more",
    linkUrl: "#",
  },
  {
    id: 4,
    title: "Customizable content ",
    description:
      "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    icon: iconNewBox,
    planTag: "Enterprise Plan",
    linkText: "Learn more",
    linkUrl: "#",
  },
];

const LearningGoals = () => {
  return (
    <div className="learning-goals-container">
      <h2>Learning focused on your goals</h2>
      <div className="content">
  <div className="left-boxes">
    {/* First three boxes */}
    {boxes.slice(0, 3).map((box) => (
      <div
        key={box.id}
        className={`info-box ${box.highlighted ? "highlighted" : ""}`}
      >
        <div className="icon">
          <img src={box.icon} alt={box.title} />
        </div>
        <div className="text-content">
          <h4>
            {box.title}{" "}
            {box.planTag && <span className="plan-tag">{box.planTag}</span>}
          </h4>
          <p>{box.description}</p>
          {box.linkText && (
            <a href={box.linkUrl} className="link">
              {box.linkText} <span className="arrow">→</span>
            </a>
          )}
        </div>
      </div>
    ))}

    {/* Fourth box positioned separately at bottom */}
    <div key={boxes[3].id} className="info-box personalized-coaching">
      <div className="icon">
        <img src={boxes[3].icon} alt={boxes[3].title} />
      </div>
      <div className="text-content">
        <h4>
          {boxes[3].title}{" "}
          {boxes[3].planTag && <span className="plan-tag">{boxes[3].planTag}</span>}
        </h4>
        <p>{boxes[3].description}</p>
        {boxes[3].linkText && (
          <a href={boxes[3].linkUrl} className="link">
            {boxes[3].linkText} <span className="arrow">→</span>
          </a>
        )}
      </div>
    </div>
  </div> {/* Close left-boxes */}

  <div className="right-image">
    <img src={illustration} alt="Learning Illustration" />
  </div>
</div>

    </div>
  );
};

export default LearningGoals;
