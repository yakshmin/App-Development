import React, { useState, useEffect } from 'react';
import './admindashboard.css'
import donation from './donate-ratio.png';
import register from './register-ratio.png';
import volunteer from './volunteer-ratio.png';


function Admin() {
  const [registeredUsers, setRegisteredUsers] = useState(0);
  const [donatedUsers, setDonatedUsers] = useState(0);
  const [signedInVolunteers, setSignedInVolunteers] = useState(0);

  // Simulate fetching data from your API or database
  useEffect(() => {
    // Fetch the number of registered users
    // Replace with actual API call or database query
    const fetchRegisteredUsers = async () => {
      // Example: fetch data from an API
      const response = await fetch('https://api.example.com/registered-users');
      const data = await response.json();
      setRegisteredUsers(data.count);
    };

    // Fetch the number of users who donated food
    // Replace with actual API call or database query
    const fetchDonatedUsers = async () => {
      // Example: fetch data from an API
      const response = await fetch('https://api.example.com/donated-users');
      const data = await response.json();
      setDonatedUsers(data.count);
    };

    // Fetch the number of signed-in volunteers
    // Replace with actual API call or database query
    const fetchSignedInVolunteers = async () => {
      // Example: fetch data from an API
      const response = await fetch('https://api.example.com/signed-in-volunteers');
      const data = await response.json();
      setSignedInVolunteers(data.count);
    };

   /* fetchRegisteredUsers();
    fetchDonatedUsers();
    fetchSignedInVolunteers();*/
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className='adminh'>ADMIN DASHBOARD</h1>
      ----------------------------------------------------------
      <div className='admin-box'>
      <div className="stat-card">
        <h2>Registered Users</h2>
        <p>{registeredUsers}</p>
      </div>
      <div className="stat-card">
        <h2>Users Donated Food</h2>
        <p>{donatedUsers}</p>
      </div>
      <div className="stat-card">
        <h2>Volunteers Signed In</h2>
        <p>{signedInVolunteers}</p>
      </div>
      </div>
    
    </div>
    
  );
}

export default Admin;