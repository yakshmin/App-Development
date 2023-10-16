import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [Conpassword,setconPassword]=useState('');
  const [isChecked,setIsChecked]=useState(false);
  const nav=useNavigate();
  const check=()=>{
        setIsChecked(!isChecked);
  }
  const validate=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/api/validate/register',{
        name:name,
        email:email,
        password:password,
        role:'USER'
        }).then((response) => {
            
            console.log(response);
            console.log("successful");
            nav('/login')
        }).catch((error) => {
            console.log(error);

        })
    if(email.length===0||password.length===0||name.length===0){
      alert("Kindly Enter All Details");
    }
    else if(password!==Conpassword){
      alert("Enter check Password correctly");
    }
    else if(password.length<8){
      alert("Password must be minimum of 8 charcters");
    }
    else if(!isChecked)
    {
        alert("Please Verify Terms and Conditions")
    }
    else
    {
        nav('/login')
    }
  }
  return (
    <div class="student-reg">
    <div class="outer-container">
    <div class="content-container">
      <br/><br/>
      <h2 className='signh2'>REGISTER NOW </h2>
      <form >
      <div>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
        </div>
      <div>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
        </div>
        <div>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
        </div>
        <div>
          <input onChange={(e)=>setconPassword(e.target.value)} type="text" placeholder="Confirm Password"/>
        </div>
        <div class="checkbox">
          <input onClick={check} type="checkbox" id="remember"/>
          <label for="remember">I agree to the Terms and Conditions</label>
        </div>
        <button onClick={validate} type="submit" className='signup'>Register</button>
      </form>
     
      <h3 className='signh3'>Already have an account? </h3><h1 id="log" className='signh1'><Link id="register" to="/login">Login </Link></h1>
    </div>
    <br/>
    <div class="image-container"></div>
  </div></div>
  )
}

export default Signup


