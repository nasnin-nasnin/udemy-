// CustomArrows.js
import React from "react";

export const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev-arrow" onClick={onClick} aria-label="Previous">
    &#8592;
  </button>
);

export const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next-arrow" onClick={onClick} aria-label="Next">
    &#8594;
  </button>
);
