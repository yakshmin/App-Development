import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';
import axios from 'axios';
import './carddetails.css';

function Carddetails({ onCloseDisplay }) {
  const { id } = useParams();
  const [selectedFood, setSelectedFood] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenvalue = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:9090/api/list/getFood/${id}`, {
          headers: {
            Authorization: `Bearer ${tokenvalue}`
          }
        });
        setSelectedFood(res.data);
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleNeedPartnerClick = () => {
    navigate({ state: selectedFood });
  };

  return (
    <div>
      <Navbar />
      <div className="boxs">
      <div className="card-display-con">
        {selectedFood ? (
          <div className="cards">
           <div className="card">{selectedFood.foodTitle}</div>
           <div  className="des">Description</div>
            <p>{selectedFood.foodDescription}</p>
            <p>{selectedFood.foodExpiry}</p>
            <p>{selectedFood.foodLocation}</p>
            <p>{selectedFood.foodPickDate}</p>
          </div>
          
        ) : (
          <p>Loading...</p>
        )}

        <button className="close-button" onClick={onCloseDisplay}>
          Close
        </button>
        <button className="need-volunteer" onClick={handleNeedPartnerClick}>
          Request Partner
        </button>
        </div>
      </div>
      <Footers />
    </div>
  );
}

export default Carddetails;