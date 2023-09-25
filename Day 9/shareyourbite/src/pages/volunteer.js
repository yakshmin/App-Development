import React ,{useState}from 'react';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';
import './volunteer.css'

function Volunteer({ imageUrl, foodName, restaurantName, pickupDelivery,location }) {
	const [isPopupOpen1, setIsPopupOpen1] = useState(false);
	const [isPopupOpen2, setIsPopupOpen2] = useState(false);
	const [isPopupOpen3, setIsPopupOpen3] = useState(false);
	const [isPopupOpen4, setIsPopupOpen4] = useState(false);
	const [isPopupOpen5, setIsPopupOpen5] = useState(false);
	const [isPopupOpen6, setIsPopupOpen6] = useState(false);
	const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  
  
	const openPopup1 = () => {
	  setIsPopupOpen1(true);
	};
  
	const closePopup1 = () => {
	  setIsPopupOpen1(false);
	};
  
	const openPopup2 = () => {
	  setIsPopupOpen2(true);
	};
  
	const closePopup2 = () => {
	  setIsPopupOpen2(false);
	};
  
	const openPopup3 = () => {
	  setIsPopupOpen3(true);
	};
  
	const closePopup3 = () => {
	  setIsPopupOpen3(false);
	};
	const openPopup4 = () => {
	  setIsPopupOpen3(true);
	};
  
	const closePopup4 = () => {
	  setIsPopupOpen3(false);
	};
	const openPopup5 = () => {
	  setIsPopupOpen3(true);
	};
  
	const closePopup5 = () => {
	  setIsPopupOpen3(false);
	};
	const openPopup6 = () => {
	  setIsPopupOpen3(true);
	};
  
	const closePopup6 = () => {
	  setIsPopupOpen3(false);
	};
   
	const openRegistrationForm = () => {
	  setIsRegistrationFormOpen(true);
	};
  
	const closeRegistrationForm = () => {
	  setIsRegistrationFormOpen(false);
	};
  
	const handleRegistrationSubmit = (e) => {
	  e.preventDefault();
	  setEmail('');
	  setPassword('');
	  closeRegistrationForm();
	};
	const backgroundImageUrl = 'url("D:\React\shareyourbite\src\pages\volunteer.jpg")'; 
	return (
	  <div>
	  <Navbar></Navbar>
	 
	  <div className="app-container" >
   
		{/* First Clickable Food Card */}
		<div className="slogan">
		Volunteers: The Magic Behind Food Sharing
		</div>
		<div className="Regs">
	<a href="#" onClick={openRegistrationForm}>
	  Register here
	</a>
  </div>
		<div className="food-cards" onClick={openPopup1} onTouchStart={openPopup1}>
		  <img src={"https://www.theleader.com.au/images/transform/v1/crop/frm/cmVmMQsbi2AtDjEpmZLhes/9cef6eac-2d08-4a13-96fc-fe069dd8cb3b.jpg/r0_0_3000_2000_w1200_h678_fmax.jpg"} alt="" className="food-image" />
		  <div className="food-details">
			<div className="food-name">Sophie</div>
			<div className="food-location">Vegtables</div>
			<div className="pickup-delivery">Quantity :5 kg of tomato</div>
			<div className="location">Location : coimbatore</div>
			<br></br>
		  </div>
		</div>
  
		{/* First Popup Card */}
		{isPopupOpen1 && (
		  <div className="food-card-popup">
			<div className="popup-content">
			  <span className="close" onClick={closePopup1}>
				&times;
			  </span>
			  <h2>Sophie!!</h2>
			  <p>pickup by:12 pm
				<br></br>
				contact number:8765678476
				<br></br>
				Availability:Between 6 pm-10 pm<br></br>
				Best before:23/09/2023
				<br></br>
  
			  </p>
			</div>
		  </div>
		)}
  
		{/* Second Clickable Food Card */}
		<div className="food-car" onClick={openPopup2} onTouchStart={openPopup2}>
		  <img src={"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"} alt="" className="food-image" />
		  <div className="food-details">
			<div className="food-name">Harini</div>
			<div className="food-location">Food: Apple</div>
			<div className="pickup-delivery">Quantity : 3 kg</div>
			<div className="location">Location: Ramanathapuram</div>
		  </div>
		</div>
  
		{/* Second Popup Card */}
		{isPopupOpen2 && (
		  <div className="food-card-popup">
			<div className="popup-content">
			  <span className="close" onClick={closePopup2}>
				&times;
			  </span>
			  <h2>Harini</h2>
			  <p>pickup by:12 pm
				<br></br>
				contact number:8765678476
				<br></br>
				Availability:Between 6 pm-10 pm<br></br>
				Best before:23/09/2023
				<br></br>
				</p>
			  
			</div>
		  </div>
		)}
  
		{/* Third Clickable Food Card */}
		<div className="food-ca" onClick={openPopup3} onTouchStart={openPopup3}>
		  <img src={"https://t4.ftcdn.net/jpg/04/95/70/55/360_F_495705544_ObX9gPTiuW7acVcqxP35OngV4s6oxeyL.jpg"} alt="" className="food-image" />
		  <div className="food-details">
			<div className="food-name">Yakshini</div>
			<div className="food-location">Food : Bisbellebath</div>
			<div className="pickup-delivery">Quantity: serves 4-5 peope</div>
			<div className="location">Location: Gandhipark</div>
		  </div>
		</div>
  
		{/* Third Popup Card */}
		{isPopupOpen3 && (
		  <div className="food-card-popup">
			<div className="popup-content">
			  <span className="close" onClick={closePopup3}>
				&times;
			  </span>
			  <h2>Yakshini</h2>
			  <p>pickup by:12 pm
				<br></br>
				contact number:8765678476
				<br></br>
				Availability:Between 6 pm-10 pm<br></br>
				Best before:23/09/2023
				<br></br>
				</p>
			</div>
		  </div>
		)}
		 {/* 4 Clickable Food Card */}
		 <div className="food-c" onClick={openPopup4} onTouchStart={openPopup4}>
		  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4FOaYwWrjDt3-oK2KTqvHousKIj4yE2W7g&usqp=CAU"} alt="" className="food-image" />
		  <div className="food-details">
			<div className="food-name">Henna</div>
			<div className="food-location">Food : Bread</div>
			<div className="pickup-delivery">Quantity : 5 packets</div>
			<div className="location">Location : Singanallur</div>
		  </div>
		</div>
  
		{/* Third Popup Card */}
		{isPopupOpen4 && (
		  <div className="food-card-popup">
			<div className="popup-content">
			  <span className="close" onClick={closePopup4}>
				&times;
			  </span>
		   
			</div>
		  </div>
		)}
		 {/* 5 Clickable Food Card */}
		 <div className="food-a" onClick={openPopup5} onTouchStart={openPopup5}>
		  <img src={"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR2FbY1WtvtA6XlQLQ4_0L6O5xbP9nafZNRylw0TiJnQRe_X8WbffV3wvGHcMf7KPN63t5KVXx61IuE2y4"} alt="" className="food-image" />
		  <div className="food-details">
			<div className="food-name">Andrea</div>
			<div className="food-location">Food : Rice</div>
			<div className="pickup-delivery">Quantity: serves 10-12 people</div>
			<div className="location">Location: Gandhipuram</div>
		  </div>
		</div>
  
		{/* Third Popup Card */}
		{isPopupOpen5 && (
		  <div className="food-card-popup">
			<div className="popup-content">
			  <span className="close" onClick={closePopup5}>
				&times;
			  </span>
			  <h2>Popup Card 19</h2>
			</div>
		  </div>
		)}
		
		 {/* Third Clickable Food Card */}
		 <div className="food-are" onClick={openPopup6} onTouchStart={openPopup6}>
		  <img src={"https://i.pinimg.com/564x/96/8c/78/968c78444ab21e1e69b7b80fc6c484b3.jpg"} alt="" className="food-image" />
		  <div className="food-details">
			<div className="food-name">Nancy</div>
			<div className="food-location"> Food: Biriyani</div>
			<div className="pickup-delivery">Quantity : 2 kg</div>
			<div className="location">Location : Ramnagar</div>
		  </div>
		</div>
  
		{/* Third Popup Card */}
		{isPopupOpen6 && (
		  <div className="food-card-popup">
			<div className="popup-content">
			  <span className="close" onClick={closePopup6}>
				&times;
			  </span>
			  <h2>Popup Card 9</h2>
			  <p>Details about the content of the third popup card go here.</p>
			</div>
		  </div>
		)}
		   {isRegistrationFormOpen && (
	<div className="registration-form-popup">
	  <div className="popup-content">
		<span className="close" onClick={closeRegistrationForm}>
		  &times;
		</span>
		<h2>Register</h2>
		<form onSubmit={handleRegistrationSubmit}>
		  <div>
			<label>Name:</label>
			<input
			  type="text"
			  value={name}
			  onChange={(e) => setName(e.target.value)}
			  required
			/>
		  </div>
		  <div>
			<label>Email:</label>
			<input
			  type="email"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			  required
			/>
		  </div>
		  <div>
			<label>Phone Number:</label>
			<input
			  type="tel"
			  value={phone}
			  onChange={(e) => setPhone(e.target.value)}
			  required
			/>
		  </div>
		  <div>
			<label>Date of Birth:</label>
			<input
			  type="date"
			  value={dob}
			  onChange={(e) => setDob(e.target.value)}
			  required
			/>
		  </div>
		  <div>
			<label>Address:</label>
			<input
			  type="text"
			  value={address}
			  onChange={(e) => setAddress(e.target.value)}
			  required
			/>
		  </div>
		  <div>
			<label>Pincode:</label>
			<input
			  type="text"
			  value={pincode}
			  onChange={(e) => setPincode(e.target.value)}
			  required
			/>
		  </div>
		  {/* Add more form fields as needed for your registration form */}
		  <div>
			<button type="submit">Register</button>
		  </div>
		</form>
	  </div>
	</div>
  
  
		  )}
	  </div>
	  </div>
	);
  }
  
  export default Volunteer;
