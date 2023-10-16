import React, { useState } from 'react';
import './volunteersignup.css';

function validarLogin() {
  // Your validation logic here
  const name = document.querySelector('.field_class[name="name"]').value;
  const email = document.querySelector('.field_class[name="email"]').value;
  const mobile = document.querySelector('.field_class[name="mobile"]').value;
  const age = document.querySelector('.field_class[name="age"]').value;
  const location = document.querySelector('.field_class[name="location"]').value;
  const password = document.querySelector('.field_class[name="password"]').value;

  if (name === '') {
    alert('Name is required');
    return false;
  }

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    alert('Enter a valid email address');
    return false;
  }

  if (mobile === '' || isNaN(mobile)) {
    alert('Mobile must be a number');
    return false;
  }

  if (age === '' || isNaN(age)) {
    alert('Age must be a number');
    return false;
  }

  if (location === '') {
    alert('Location is required');
    return false;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters');
    return false;
  }

  return true;
}

function VolunteerSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <header>
        <div className="reg">Volunteer hub registration</div>
      </header>
      <main>
        <form id="login_form" className="form_class" action="login/login-access.php" method="post">
          <div className="form_div">
            <label>Register here...</label>
            <input className="field_class" name="name" type="text" placeholder="Name" autoFocus value={name} onChange={(e) => setName(e.target.value)} />
            <input className="field_class" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="field_class" name="mobile" type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input className="field_class" name="age" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input className="field_class" name="location" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input id="pass" className="field_class" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="submit_classsignup" type="submit" form="login_form" onClick={validarLogin}>Register</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default VolunteerSignup;
