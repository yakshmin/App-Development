
import Navbar from '../components/navbar';
import './donate.css';
import React, { useState } from 'react';

const Donate = () => {

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
	  
		const handleSubmit = (e) => {
		  e.preventDefault();
		  // You can handle form submission here (e.g., send data to an API).
		  console.log(formData);
		};
return (
	<div>
		<Navbar></Navbar>
		<div className="input-form">
  <h2>Input Form</h2>
  <form onSubmit={handleSubmit}>
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
    
    {/* Group fields within a container box */}
    <div className="field-container">
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
          type="datetime-local"
          id="pickUpTime"
          name="pickUpTime"
          value={formData.pickUpTime}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
    
    <div className="form-group">
      <label htmlFor="photo">Add Photo</label>
      <input
        type="file"
        id="photo"
        name="photo"
        onChange={handleInputChange}
      />
      {formData.photo && (
        <p>Selected Photo: {formData.photo.name}</p>
      )}
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
    
    <button type="submit">Submit</button>
  </form>
</div>

    </div>
);
};

export default Donate;
