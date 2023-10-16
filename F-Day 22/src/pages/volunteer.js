import React from 'react';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';

import { Link } from 'react-router-dom';
import centeredImage from '../pages/v2pic.JPG'
import './volunteer.css';
const Volunteer = () => {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component here */}
      <div className='v-img'>
		<img src={centeredImage} alt='img'></img>
	 </div>
      <div className="volunteer-text">
        <h2>
          <span className="be">Be a</span> <br /><span className="volunteer">Volunteer</span>
        </h2>
        <button className="get-started-button"><Link to={'/vs'}>Get Started</Link></button>
        <p className="already-part-text">Already a part of Share Your Bite ..?</p>
        <button className="log-button"><Link to={'/vl'}>Login</Link></button>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default Volunteer;
