import React from "react";

const plans = [
  {
    id: 1,
    title: "Personal Plan",
    subtitle: "For you",
    iconText: "Individual",
    price: "₹500 per month",
    priceDesc: "Billed monthly or annually. Cancel anytime.",
    buttonText: "Start subscription",
    features: [
      "Access to 26,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
  },
  {
    id: 2,
    title: "Team Plan",
    subtitle: "For your team",
    iconText: "2 to 50 people",
    price: "₹2,000 a month per user",
    priceDesc: "Billed annually. Cancel anytime.",
    buttonText: "Start subscription",
    features: [
      "Access to 13,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    subtitle: "For your whole organization",
    iconText: "More than 20 people",
    price: "Contact sales for pricing",
    buttonText: "Request a demo",
    features: [
      "Access to 30,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
    ],
  },
];

const PlanCard = ({ plan, isLast }) => {
  return (
    <div
      className="plan-card"
      style={{
        borderTop: "4px solid #7c3aed",
        borderRadius: "8px 8px 0 0",
        backgroundColor: "#f9f9fb",
        borderRight: isLast ? "none" : "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        flex: 1,
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.5,
        fontSize: 15,
      }}
    >
      <div
        className="plan-header"
        style={{
          borderBottom: "1px solid #e4e4f2",
          paddingBottom: "20px",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            margin: "0 0 4px",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 1.2,
          }}
        >
          {plan.title}
        </h3>
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 14,
            color: "#666",
            fontWeight: "500",
            lineHeight: 1.3,
          }}
        >
          {plan.subtitle}
        </p>
        <div
          style={{
            fontSize: 14,
            color: "#888",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#888"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          {plan.iconText}
        </div>
      </div>
      <div className="plan-price" style={{ marginBottom: "20px" }}>
        <p
          style={{
            fontWeight: "700",
            margin: "0 0 6px",
            fontSize: 18,
            lineHeight: 1.3,
          }}
        >
          {plan.price}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "#888",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {plan.priceDesc}
        </p>
      </div>
      <button
        style={{
          backgroundColor: "#7c3aed",
          color: "#fff",
          border: "none",
          padding: "14px",
          borderRadius: "6px",
          fontWeight: "700",
          cursor: "pointer",
          marginBottom: "24px",
          fontSize: 15,
          lineHeight: 1.3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {plan.buttonText} <span style={{ fontSize: 18 }}>→</span>
      </button>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          color: "#555",
          fontSize: 15,
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          lineHeight: 1.4,
        }}
      >
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: 400,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                backgroundColor: "#dcfce7", // light green circle bg
                borderRadius: "50%",
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="#15803d" // green check
                viewBox="0 0 16 16"
              >
                <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06L6.75 10.784 3.454 7.488a.75.75 0 1 1 1.06-1.06L6.75 8.44l6.735-6.511z" />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingPlans = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "auto",
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif",
        color: "#222",
      }}
    >
      <h2
        style={{
          fontWeight: "700",
          marginBottom: 8,
          fontSize: 26,
          lineHeight: 1.2,
        }}
      >
        Accelerate growth — for you or your organization
      </h2>
      <p
        style={{
          color: "#666",
          marginBottom: 32,
          fontSize: 16,
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        Reach goals faster with one of our plans or programs. Try one free today
        or contact sales to learn more.
      </p>
      <div
        style={{
          display: "flex",
          gap: 20,
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {plans.map((plan, idx) => (
          <PlanCard key={plan.id} plan={plan} isLast={idx === plans.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
