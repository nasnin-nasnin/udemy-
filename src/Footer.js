
import React from "react";
import "./Footer.css";

// Logos
import nasdaq from "./images/nasdaq-light-footer.svg";
import volkswagen from "./images/volkswagen-light-footer.svg";
import netapp from "./images/netapp-light-footer.svg";
import eventbrite from "./images/eventbrite-light-footer.svg";
import udemyLogo from "./images/logo-udemy.svg";   // ✅ NEW Udemy logo

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Banner */}
      <div className="footer-top">
        <p>
          Top companies choose <span className="link">Udemy Business</span> to build in-demand career skills.
        </p>
        <div className="footer-logos">
          <img src={nasdaq} alt="Nasdaq" />
          <img src={volkswagen} alt="Volkswagen" />
          <img src={netapp} alt="NetApp" />
          <img src={eventbrite} alt="Eventbrite" />
        </div>
      </div>

      {/* Link Sections (same as before) */}
      <div className="footer-links">
        {/* ... all the link columns exactly as before ... */}
         <div>
          <h4>In-demand Careers</h4>
          <ul>
            <li>Data Scientist</li>
            <li>Full Stack Web Developer</li>
            <li>Cloud Engineer</li>
            <li>Project Manager</li>
            <li>Game Developer</li>
            <li>All Career Accelerators</li>
          </ul>
        </div>
        <div>
          <h4>Web Development</h4>
          <ul>
            <li>Web Development</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Angular</li>
            <li>Java</li>
          </ul>
        </div>
        <div>
          <h4>IT Certifications</h4>
          <ul>
            <li>Amazon AWS</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AZ-900: Microsoft Azure Fundamentals</li>
            <li>AWS Certified Solutions Architect</li>
            <li>Kubernetes</li>
          </ul>
        </div>
        <div>
          <h4>Leadership</h4>
          <ul>
            <li>Leadership</li>
            <li>Management Skills</li>
            <li>Project Management</li>
            <li>Personal Productivity</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>
        <div>
          <h4>Certifications by Skill</h4>
          <ul>
            <li>Cybersecurity Certification</li>
            <li>Project Management Certification</li>
            <li>Cloud Certification</li>
            <li>Data Analytics Certification</li>
            <li>HR Management Certification</li>
            <li>See all Certifications</li>
          </ul>
        </div>
        <div>
          <h4>Data Science</h4>
          <ul>
            <li>Data Science</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>ChatGPT</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div>
          <h4>Communication</h4>
          <ul>
            <li>Communication Skills</li>
            <li>Presentation Skills</li>
            <li>Public Speaking</li>
            <li>Writing</li>
            <li>PowerPoint</li>
          </ul>
        </div>
        <div>
          <h4>Business Analytics & Intelligence</h4>
          <ul>
            <li>Microsoft Excel</li>
            <li>SQL</li>
            <li>Microsoft Power BI</li>
            <li>Data Analysis</li>
            <li>Business Analysis</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <div>
            <h4>About</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Blog</li>
              <li>Investors</li>
            </ul>
          </div>
          <div>
            <h4>Discover Udemy</h4>
            <ul>
              <li>Get the app</li>
              <li>Teach on Udemy</li>
              <li>Plans and Pricing</li>
              <li>Affiliate</li>
              <li>Help and Support</li>
            </ul>
          </div>
          <div>
            <h4>Udemy for Business</h4>
            <ul>
              <li>Udemy Business</li>
            </ul>
          </div>
          <div>
            <h4>Legal & Accessibility</h4>
            <ul>
              <li>Accessibility statement</li>
              <li>Privacy policy</li>
              <li>Sitemap</li>
              <li>Terms</li>
            </ul>
          </div>
          {/* ... About / Discover / Business / Legal columns ... */}
        </div>
        </div>

        {/* ✅ Logo + Copyright */}
        <div className="footer-copy">
          <div className="footer-left">
            <img src={udemyLogo} alt="Udemy" className="udemy-logo" />
            <p>© 2025 Udemy, Inc.</p>
          </div>
          {/* ✅ Center: Cookie Settings */}
  <button className="cookie-btn">Cookie Settings</button>
          <button className="lang-btn">🌐 English</button>
        </div>
    </footer>
  );
};

export default Footer;
