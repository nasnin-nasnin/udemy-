import React from "react";
import "./ReportSection.css";
import reportImg from "./images/report.png"; // save your screenshot/cover image in src/

export default function ReportSection() {
  return (
    <section className="report-wrapper">
      <div className="report-content">
        <div className="report-text">
          <h2 className="report-title">
            Get the 2026 Global Learning & Skills Trends Report
          </h2>
          <p className="report-desc">
            If you or your organization are looking for help navigating change
            and AI transformation, you’ll find a roadmap for action in our
            popular annual report.
          </p>
          <a href="#" className="report-btn">Download now →</a>
        </div>

        <div className="report-image">
          <img src={reportImg} alt="Global Learning & Skills Trends Report" />
        </div>
      </div>
    </section>
  );
}
