import React from 'react';
import Navbar from '../components/navbar/NavBar';
import './purchase.css'; 

function purchase({ foodName, location, pickupTime, deliveryTime, imageUrl }) {

return (
	<div>
		<Navbar></Navbar>
		<div className="search">
		<input type="text" placeholder="Search your food here..."></input>
		</div>
	<div className="row">	
    <div className="food-card">
      <img src={"https://www.theleader.com.au/images/transform/v1/crop/frm/cmVmMQsbi2AtDjEpmZLhes/9cef6eac-2d08-4a13-96fc-fe069dd8cb3b.jpg/r0_0_3000_2000_w1200_h678_fmax.jpg"} alt={foodName} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">pork swis</h3>
        <p className="food-location">Nikki</p>
        <p className="pickup-delivery">
         location:chennai | date:24 sept
        </p>
      </div>
    </div>
	
    <div className="food-card">
      <img src={"https://th.bing.com/th?id=ODL.2ac5cdd47411326de84cf9a5f829dbfb&w=197&h=112&c=7&rs=1&qlt=80&o=6&dpr=1.7&pid=RichNav"} alt={foodName} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">cassata</h3>
        <p className="food-location">_reem_</p>
        <p className="pickup-delivery">
		location:kochi | date:24 sept
        </p>
      </div>
    </div>
    <div className="food-card">
      <img src={"https://th.bing.com/th?id=ODL.2ac5cdd47411326de84cf9a5f829dbfb&w=197&h=112&c=7&rs=1&qlt=80&o=6&dpr=1.7&pid=RichNav"} alt={foodName} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">cassata</h3>
        <p className="food-location">_reem_</p>
        <p className="pickup-delivery">
		location:kochi | date:24 sept
        </p>
      </div>
    </div>
    <div className="food-card">
      <img src={"https://th.bing.com/th?id=ODL.2ac5cdd47411326de84cf9a5f829dbfb&w=197&h=112&c=7&rs=1&qlt=80&o=6&dpr=1.7&pid=RichNav"} alt={foodName} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">cassata</h3>
        <p className="food-location">_reem_</p>
        <p className="pickup-delivery">
		location:kochi | date:24 sept
        </p>
      </div>
    </div>
	

	<div className="food-card">
      <img src={"https://th.bing.com/th/id/OIP.1VAVU3C0vaq9HIMRget0gQHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"} alt={foodName} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">sausage crums roll</h3>
        <p className="food-location">jade</p>
        <p className="pickup-delivery">
		location:goa | date:23 sept
        </p>
      </div>
    </div>
   
	<div className="food-card">
      <img src={"https://th.bing.com/th?id=ODL.698b8f2ed125047cb7ed8698f0ea6e75&w=197&h=112&c=7&rs=1&qlt=80&o=6&dpr=1.7&pid=RichNav"} alt={foodName} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">fruits</h3>
        <p className="food-location">alen</p>
        <p className="pickup-delivery">
		location:chennai | date:20 sept
        </p>
      </div>
	  
    </div>
   </div>
   </div>
   

);
}

export default purchase;