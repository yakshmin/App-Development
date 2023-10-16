import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { login } from '../features/user';
import { useDispatch } from 'react-redux';
import axios from 'axios';


function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav=useNavigate();
  const dispatch=useDispatch();
  
  const validate=(e)=>{
    e.preventDefault();
    if(email.length===0||password.length===0){
      alert("Kindly Enter All Details");
    }
    else{
      axios.post('http://localhost:9090/api/validate/login', {
        email: email,
        password: password
    }).then((response) => {
        const token = response.data.token;
      console.log(token);
     
        localStorage.setItem('token',token); 
        localStorage.setItem('email', email); 
       
    
        if (token) {
          nav('/dashboard');
            console.log(`Token retrieved from cookie: ${token}`); 
        }
      

    }).catch((error) => {
        console.log(error);
    });
      dispatch(login(email))
        nav('/dashboard')
    }

   

  }
  return (
    <div class="login">
    <div class="outer-container">
    <div class="content-container">
    <br/>
    <br/>
    <br/>
    <br/>
      
      <h2 className='loginh2'>WELCOME  </h2>
      <form>
      <div>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
        </div>
        <div>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
        </div>
        <button onClick={validate} type="submit" className='Login'>Login</button>
      </form>
     
      <h2 className='loginh2'> New to FAC Store ? Register</h2>
      
      <h1 className='loginh1'><Link to="/signup"><button className='SIGNUP'>Sign up</button></Link></h1>
    </div>
    <div class="image-container"></div>
  </div></div>
  )
}

export default Login;



