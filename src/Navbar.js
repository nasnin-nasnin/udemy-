import { useState } from "react";
import { FaSearch, FaShoppingCart, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
       {/* Left - Logo */}
        <div className="navbar-left">
          <span className="logo">
            <span className="logo-highlight logo-u">u</span>demy
          </span>
          <a href="#" className="nav-link">Explore</a>
        </div>
        {/* Middle - Search */}
        <div className="navbar-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
        </div>

        {/* Right - Menu */}
        <div className="navbar-right">
          {/* Plans */}
          <div
            className="nav-item"
            onMouseEnter={() => setHoveredItem("plans")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="#" className="nav-link">Plans & Pricing</a>
            {hoveredItem === "plans" && (
              <div className="dropdown-box">
                <p>Check different plans for individuals & teams.</p>
              </div>
            )}
          </div>

          {/* Udemy Business */}
          <div
            className="nav-item"
            onMouseEnter={() => setHoveredItem("business")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="#" className="nav-link">Udemy Business</a>
            {hoveredItem === "business" && (
              <div className="dropdown-box">
                <h4>Udemy Business</h4>
                <p>
                  Get your team access to over 30,000 top Udemy courses,
                  anytime, anywhere.
                </p>
                <button className="btn btn-primary">Try Udemy Business</button>
              </div>
            )}
          </div>

          {/* Teach on Udemy */}
          <div
            className="nav-item"
            onMouseEnter={() => setHoveredItem("teach")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="#" className="nav-link">Teach on Udemy</a>
            {hoveredItem === "teach" && (
              <div className="dropdown-box">
                <p className="dropdown-text">
                  Turn what you know into an opportunity and reach millions
                  around the world.
                </p>
                <button className="btn btn-primary">Learn more</button>
              </div>
            )}
          </div>

          {/* Cart */}
          <div
            className="nav-item"
            onMouseEnter={() => setHoveredItem("cart")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <FaShoppingCart className="icon cart-icon" />
            {hoveredItem === "cart" && (
              <div className="dropdown-box">
                <p className="dropdown-text">Your cart is empty.</p>
                <button className="btn btn-link">Keep shopping</button>
              </div>
            )}
          </div>

          <button className="btn btn-outline">Log in</button>
          <button className="btn btn-primary">Sign up</button>
          
          <button className="btn btn-icon">
            <FaGlobe />
          </button>
        </div>
      </div>
    </nav>
  );
}
