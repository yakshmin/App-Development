import React, { useState } from 'react';
import './volunteersignup.css';

function validarLogin() {
  // Your validation logic here

  const email = document.querySelector('.field_class[name="email"]').value;
 
  const password = document.querySelector('.field_class[name="password"]').value;

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    alert('Enter a valid email address');
    return false;
  }

  

  
  if (password.length < 8) {
    alert('Password must be at least 8 characters');
    return false;
  }

  return true;
}

function VolunteerSignup() {
 
  const [email, setEmail] = useState('');
 
  const [password, setPassword] = useState('');

  return (
    <div>
      <header>
        <div className="reg">Volunteer hub Login</div>
      </header>
      <main>
        <form id="login_form" className="form_class" >
          <div className="form_div">
            <label>Register here...</label>
       
            <input className="field_class" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
            <input id="pass" className="field_class" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="submit_classsignup" type="submit" form="login_form" onClick={validarLogin}>Log In </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default VolunteerSignup;
