import React, { useState } from 'react';
import './login.css'; 
import { Link } from 'react-router-dom';


const Login= () => {
  const [formData, setFormData] = useState({ username:'', email: '',password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    /* Front-end validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    // Check if there are errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can proceed with further actions here
      console.log('Form submitted:', formData);
    }*/

    if(formData.username.length===0||formData.password.length===0||formData.email.length===0){
      alert("Kindly Enter All Details");
    }
  };




  return (
    <div className="login-form">
      <div className="glass">
      <h3 className='logtext'>Login</h3>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          
          <input
            type="text"
            id="username"
            name="username"
            placeholder='enter your username'
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder='enter your email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
       
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='enter your password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <Link to={"/dashboard"} ><button className="log">Login</button></Link>
        <br></br><br></br>
        <h6>
        <Link to={"/signup"} a href=''>Don't have an Account? SignUp</Link>
        </h6>
      </form>
    </div>
    </div>
  );
};

export default Login;