import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Volunteerdisplay() {
  const location = useLocation();
  const { foodTitle, foodDescription, foodExpiry, foodLocation, foodPickDate } = location.state || {};

  return (
    <div>
      <h2>Volunteer Page</h2>
      <div className="food-card">
        <div>{foodTitle}</div>
        <div>{foodDescription}</div>
        <div>{foodExpiry}</div>
        <div>{foodLocation}</div>
        <div>{foodPickDate}</div>
   
      </div>
    </div>
  );
}

export default Volunteerdisplay;
