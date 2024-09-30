
import React, { useState } from 'react';
import './Mininav.css';

const Mininav = () => {
  const [active, setActive] = useState('home');
  const toggle = () => {
    setActive(active === 'home' ? 'website' : 'home');
  }

  return (
    <div className="toggle-container">
      <div className={`toggle ${active === 'home' ? 'active-home' : 'active-website'}`} onClick={toggle}>
        <span className="toggle-btn" ></span>
      </div>
      {active === 'home' ? (
        <a href="/" className="nav-link">Home</a>
      ) : (
        <a href="https://yourcompanywebsite.com" target="_blank" rel="noopener noreferrer" className="nav-link">Visit Our Website</a>
      )}
    </div>
  );
};

export default Mininav