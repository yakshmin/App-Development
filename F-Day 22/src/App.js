import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Purchase from './pages/purhcase';
import Donate from './pages/donate';
import Volunteer from './pages/volunteer';
import Login from './pages/login';
import Privacy from './pages/privacy';
import Home from './pages/home';
import Termsconditions from './pages/terms';
import FeedbackForm from './pages/feedback';
import Faq from './pages/faq';
import Contact from './pages/contact';
import Admin from './pages/admindashboard';
import Volunteerlogin from './pages/volunteerlogin';
import Volunteersignup from './pages/volunteersignup';
import Carddetails from './pages/carddetails';
import Volunteerdisplay from './pages/volunteerdisplay';


function App() {
  const onSelectCard = (food) => {
    console.log('Selected Card:', food);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/purchase" element={<Purchase onSelectCard={onSelectCard} />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms" element={<Termsconditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vl" element={<Volunteerlogin />} />
        <Route path="/vs" element={<Volunteersignup />} />
        <Route path="/card/:id" element={<Carddetails />} />
        
        <Route path="/volunteerdisplay" element={<Volunteerdisplay />} />
      </Routes>
    </Router>
  );
}

export default App;

