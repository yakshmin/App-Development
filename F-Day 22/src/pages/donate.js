/*import axios from 'axios';
import './donate.css';
import React, { useState } from 'react';
import Model from 'react-modal';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';

const Donate = () => {
  const [photo, setPhoto] = useState(null);
  const [foodTitle, setFoodTitle] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [foodPickDate, setFoodPickDate] = useState('');
  const [foodExpiry, setFoodExpiry] = useState('');
  const [foodLocation,setFoodLocation]=useState('');
  const [selectedFileURL, setSelectedFileURL] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setvisible] = useState(false);

  const userId=localStorage.getItem('uid');

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setPhoto(file);
      // Read the selected file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFileURL(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      switch (name) {
        case 'foodTitle':
          setFoodTitle(value);
          break;
        case 'foodDescription':
          setFoodDescription(value);
          break;
        case 'foodPickDate':
          setFoodPickDate(value);
          break;
        case 'foodExpiry':
          setFoodExpiry(value);
          break;
        case 'foodLocation':
          setFoodLocation(value);
          break;
        default:
          break;
      }
    }
  };

  const handleFileChange = (event) => {
    // Handle file input separately if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Prepare the data object to send to the backend
      const dataToSend = {};
      dataToSend['foodTitle']=foodTitle;
      dataToSend['foodDescription']=foodDescription;
      dataToSend['foodPickDate']=foodPickDate;
      dataToSend['foodExpiry']=foodExpiry;
      dataToSend['foodLocation']=foodLocation;
      dataToSend['foodLocation']=foodLocation;
      

     

        const res = axios.post("http://localhost:9090/api/list/addFood",dataToSend,{
          headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            
          }
        }).then(ans=>ans.data)
        console.log(localStorage.getItem("token"));
        res.then(data =>{
          if(data){
            alert("added sucessfully")
          }
          else{
            alert("something went wrong")
          }
        }
          
          )
      
     

      // Clear the form fields after successful submission
      setFoodTitle('');
      setFoodDescription('');
      setFoodPickDate('');
      setFoodExpiry('');
      setFoodLocation('');

      setvisible(false)
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDonate = (e) => {
    e.preventDefault();

   
  };

  return (
    <div>
      <Navbar />
      <div className='donat-bag'>
        <div className='text1'>ShareYourBite</div>
        <div className='text2'>From Kitchen <br />to Screen! Add Your Food Magic!!!</div>
        <br />
        <button className={`blur-button ${isHovered ? 'blur' : ''}`} onClick={() => setvisible(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Add listings</button>
        <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
          content: {
            borderColor: "blue",
            width: "550px",
            height: "600px",
            marginLeft: "450px",
            position: "fixed",
            top: "150px",
            right: "0px"
          }
        }}>

          <button onClick={() => setvisible(false)}>Close</button>
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
                onChange={handleInputChange}
              />

             
              <div className="selected-image-container">
                {selectedFileURL ? (
                  <img src={selectedFileURL} alt="Selected" className="selected-image" />
                ) : (
                  <p className="placeholder">No photo selected</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="foodTitle">Food Title</label>
              <textarea
                type="text"
                id="foodTitle"
                name="foodTitle"
                placeholder='foodTitle'
                value={foodTitle}
                onChange={(e) => setFoodTitle(e.target.value)}

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="foodDescription">Food Description</label>
              <textarea
                id="foodDescription"
                name="foodDescription"
                placeholder='foodDescription'
                value={foodDescription}
                onChange={(e) => setFoodDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
          <label htmlFor="foodPickDate">Pick-up Date</label>
          <textarea
            type="text"
            id="foodPickDate"
            name="foodPickDate"
            placeholder='foodPickDate'
            value={foodPickDate}
            onChange={(e) => setFoodPickDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="foodExpiry">Expiry</label>
          <textarea
            type="text"
            id="foodExpiry"
            name="foodExpiry"
            placeholder='foodExpiry'
            value={foodExpiry}
            onChange={(e) => setFoodExpiry(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodLocation">Location</label>
          <textarea
            type="text"
            id="foodLocation"
            name="foodLocation"
            placeholder='foodLocation'
            value={foodLocation}
            onChange={(e) => setFoodLocation(e.target.value)}
            required
          />
        </div>

            <div className="donate-sub">
              <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </Model>
        <Footers />
      </div>
    </div>
  );
};

export default Donate;*/


import axios from 'axios';
import './donate.css';
import React, { useState } from 'react';
import Model from 'react-modal';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';

const Donate = () => {
  const [photo, setPhoto] = useState(null);
  const [foodTitle, setFoodTitle] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [foodPickDate, setFoodPickDate] = useState('');
  const [foodExpiry, setFoodExpiry] = useState('');
  const [foodLocation,setFoodLocation]=useState('');
  const [selectedFileURL, setSelectedFileURL] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setvisible] = useState(false);

  const userId=localStorage.getItem('uid');

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setPhoto(file);
      // Read the selected file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFileURL(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      switch (name) {
        case 'foodTitle':
          setFoodTitle(value);
          break;
        case 'foodDescription':
          setFoodDescription(value);
          break;
        case 'foodPickDate':
          setFoodPickDate(value);
          break;
        case 'foodExpiry':
          setFoodExpiry(value);
          break;
        case 'foodLocation':
          setFoodLocation(value);
          break;
        default:
          break;
      }
    }
  };

  const handleFileChange = (event) => {
    // Handle file input separately if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Prepare the data object to send to the backend
      const dataToSend = {};
      dataToSend['foodTitle']=foodTitle;
      dataToSend['foodDescription']=foodDescription;
      dataToSend['foodPickDate']=foodPickDate;
      dataToSend['foodExpiry']=foodExpiry;
      dataToSend['foodLocation']=foodLocation;
      dataToSend['foodLocation']=foodLocation;
      dataToSend['userId']=userId;

     

        
      const res = axios.post("http://localhost:9090/api/list/addFood",dataToSend,{
        headers:{
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          
        }
      }).then(ans=>ans.data)
      console.log(localStorage.getItem("token"));
      res.then(data =>{
        if(data){
          alert("added sucessfully")
        }
        else{
          alert("something went wrong")
        }
      }
        
        )
      
     

      // Clear the form fields after successful submission
      setFoodTitle('');
      setFoodDescription('');
      setFoodPickDate('');
      setFoodExpiry('');
      setFoodLocation('');

      setvisible(false)
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDonate = (e) => {
    e.preventDefault();

   
  };

  return (
    <div>
      <Navbar />
      <div className='donat-bag'>
        <div className='text1'>ShareYourBite</div>
        <div className='text2'>From Kitchen <br />to Screen! Add Your Food Magic!!!</div>
        <br />
        <button className={`blur-button ${isHovered ? 'blur' : ''}`} onClick={() => setvisible(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Add listings</button>
        <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
          content: {
            borderColor: "blue",
            width: "550px",
            height: "600px",
            marginLeft: "450px",
            position: "fixed",
            top: "150px",
            right: "0px"
          }
        }}>

          <button onClick={() => setvisible(false)}>Close</button>
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
                onChange={handleInputChange}
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
              <label htmlFor="foodTitle">Food Title</label>
              <textarea
                type="text"
                id="foodTitle"
                name="foodTitle"
                placeholder='foodTitle'
                value={foodTitle}
                onChange={(e) => setFoodTitle(e.target.value)}

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="foodDescription">Food Description</label>
              <textarea
                id="foodDescription"
                name="foodDescription"
                placeholder='foodDescription'
                value={foodDescription}
                onChange={(e) => setFoodDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
          <label htmlFor="foodPickDate">Pick-up Date</label>
          <textarea
            type="text"
            id="foodPickDate"
            name="foodPickDate"
            placeholder='foodPickDate'
            value={foodPickDate}
            onChange={(e) => setFoodPickDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="foodExpiry">Expiry</label>
          <textarea
            type="text"
            id="foodExpiry"
            name="foodExpiry"
            placeholder='foodExpiry'
            value={foodExpiry}
            onChange={(e) => setFoodExpiry(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodLocation">Location</label>
          <textarea
            type="text"
            id="foodLocation"
            name="foodLocation"
            placeholder='foodLocation'
            value={foodLocation}
            onChange={(e) => setFoodLocation(e.target.value)}
            required
          />
        </div>

            <div className="donate-sub">
              <button className="submits" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </Model>
        <Footers />
      </div>
    </div>
  );
};

export default Donate;
