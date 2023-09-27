import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav ${menuOpen ? 'active' : ''}`} id="myNavbar">
      <NavLink to='/contact' activeClassName="active" onClick={toggleMenu}>
        Contact
      </NavLink>
      <NavLink to="/feedback" activeClassName="active" onClick={toggleMenu}>
        Feedback
      </NavLink>
      <NavLink to="/privacy" activeClassName="active" onClick={toggleMenu}>
        Privacy Policy
      </NavLink>
      <NavLink to="/faq" activeClassName="active" onClick={toggleMenu}>
        FAQ
      </NavLink>
      <NavLink to="/terms-and-conditions" activeClassName="active" onClick={toggleMenu}>
        Terms and Conditions
      </NavLink>
      <button className="icon" onClick={toggleMenu}>
        &#9776;
      </button>
    </div>
  );
}

export default Footers