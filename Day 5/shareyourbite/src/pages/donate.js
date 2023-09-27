import { FaArrowLeft } from 'react-icons/fa';

import './donate.css';
import React, { useState } from 'react';
import Model from 'react-modal';
import Navbar from '../components/navbar/NavBar';




const Donate = () => {
	const [isHovered, setIsHovered] = useState(false);
	const[visible,setvisible]=useState(false)
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		pickUpTime: '',
		photo: null,
		location: '',
	  });
	
	  const handleInputChange = (e) => {
		const { name, value, type } = e.target;
	
		if (type === 'file') {
		  // Handle file input separately
		  const photo = e.target.files[0];
		  setFormData({ ...formData, photo });
		} else {
		  setFormData({ ...formData, [name]: value });
		}
	  };
	const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Read the selected file and convert it to a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedFileURL(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const [selectedFileURL, setSelectedFileURL] = useState(null);
	  const handleSubmit = (e) => {
		e.preventDefault();
		// You can handle form submission here (e.g., send data to an API).
		console.log(formData);
	  };

	const handleMouseEnter = () => {
	  setIsHovered(true);
	};
  
	const handleMouseLeave = () => {
	  setIsHovered(false);
	};
return (
	
	<div>
		<Navbar></Navbar>
    <div className='donat-bag'>
	<div className='text1'>ShareYourBite</div>
	<div className='text2'>From Kitchen <br></br>to Screen ! Add Your Food Magic !!!</div>
	<br></br>
	<button className={`blur-button ${isHovered ? 'blur' : ''}`} onClick={()=>setvisible(true)}
		onMouseEnter={handleMouseEnter}
	onMouseLeave={handleMouseLeave}
	 >Add listings</button>
    <Model isOpen={visible} onRequestClose={()=>setvisible(false)} style={{
	
		content:{
			
			borderColor:"blue",
			width:"500px",
			height:"500px",
			marginLeft:"190px",
			position: "fixed",
            top: "150px",
            right: "0px"
		}
	}}>
<FaArrowLeft onClick={()=>setvisible(false)} ></FaArrowLeft>
      <span className="ar1">"""""""""""""""</span>
      <span className="ar1">""""""""""</span>
      <span className="ar">Add free food</span>
      <form onSubmit={handleSubmit}>
	  
	  <div className="container">
      
      <label className="upload-button" htmlFor="fileInput">
        Choose Photo
      </label>
      <input
        type="file"
        id="fileInput"
        className="input-file"
        accept="image/*"
        onChange={handleFileChange}
      />
      

      {/* Display the selected image or a placeholder */}
      <div className="selected-image-container">
        {selectedFileURL ? (
          <img src={selectedFileURL} alt="Selected" className="selected-image" />
        ) : (
          <p className="placeholder">No photo selected</p>
        )}
      </div>
    </div>


		<div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
		<div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pickUpTime">Pick-up Time</label>
          <input
            type="text"
            id="pickUpTime"
            name="pickUpTime"
            value={formData.pickUpTime}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Add Your Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
		<div className="donate-sub">
        <button type="submit">Submit</button></div>
      </form>
    

	</Model>

    </div>
    </div>
);
};

export default Donate;