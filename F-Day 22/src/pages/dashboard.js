/*import React from 'react';
import Navbar from '../components/navbar/NavBar';
import {useSelector} from 'react-redux'
import Footers from '../components/navbar/Footer';
import './dashboard.css'
import { useState,useRef } from 'react';
const Dashboard = () => {
	const user=useSelector(state => state.user.value)
	
return (
  <div>
		<div className="bg">
		<Navbar></Navbar>
	<div className='dash-welcome'>Welcome back {user.username}!!</div>
    </div>
	
	<Footers></Footers>
	</div>
);
};

export default Dashboard;*/



import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/NavBar';
import { useSelector } from 'react-redux';
import Footers from '../components/navbar/Footer';
import './dashboard.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);
  const [locationAccess, setLocationAccess] = useState(null);

  useEffect(() => {
    const requestLocationAccess = async () => {
      try {
        // Check if the browser supports geolocation
        if ('geolocation' in navigator) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              (position) => resolve(position),
              (error) => reject(error),
              { timeout: 10000 } // You can adjust the timeout as needed
            );
          });

          const { latitude, longitude } = position.coords;
          setLocationAccess({ latitude, longitude });
        } else {
          console.error('Geolocation is not supported.');
          setLocationAccess('unsupported');
        }
      } catch (error) {
        console.error('Error getting location:', error.message);
        setLocationAccess('denied');
      }
    };

    requestLocationAccess();
  }, []);

  const renderLocationInfo = () => {
    if (locationAccess === 'denied') {
      return <p>Location access denied. You may manually grant access in your browser settings.</p>;
    } else if (locationAccess === 'unsupported') {
      return <p>Geolocation is not supported in your browser.</p>;
    } else if (locationAccess) {
      return (
        <p>
          Location Access Granted - Latitude: {locationAccess.latitude}, Longitude: {locationAccess.longitude}
        </p>
      );
    }
  };

  return (
    <div>
      <div className="bg">
        <Navbar />
        <div className="dash-welcome">Welcome back {user.username}!!</div>
        {renderLocationInfo()}
      </div>

      <Footers />
    </div>
  );
};

export default Dashboard;

