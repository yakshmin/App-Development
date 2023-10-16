import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/NavBar';
import './purchase.css';
import Footers from '../components/navbar/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Purchase({ onSelectCard }) {
  const [list, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenvalue = localStorage.getItem('token');
        const res = await axios.get("http://localhost:9090/api/list/getFood", {
          headers: {
            Authorization: `Bearer ${tokenvalue}`
          }
        });
        setListings(res.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchData();
  }, []);

  const filteredList = list.filter((item) =>
    item.foodTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.foodLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="purchasecon">
        
        <div className="search">
          <input
            type="text"
            placeholder="Search your food here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
       
          
        <div className="foods">
          {filteredList.map((data, id) => (
            <Link to={`/card/${id +1}`} key={id}>
              <div className="food-card" onClick={() => onSelectCard(data)}>
                <tr key={id}>
                  <div className="foodtitle">{data.foodTitle}</div>
                 
                  <div className="fooddes">~ {data.foodDescription}</div>
                  <div className="foodlocation">{data.foodLocation}</div>
                  <div className="fooddate">{data.foodPickDate}</div>
                  <div className="foodexpiry">{data.foodExpiry}</div>
                  <button className="volunteers-button"></button>
                </tr>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footers />
    </div>
  );
}

export default Purchase;