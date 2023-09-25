import React from 'react';
import './App.css';
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



function App() {
return (
	<Router>
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/login' element={<Login/>} />
		<Route path='/dashboard' element={<Dashboard/>} />
		<Route path='/donate' element={<Donate/>} />
		<Route path='/purchase' element={<Purchase/>} />
		<Route path='/volunteer' element={<Volunteer/>} />
		<Route path='/feedback' element={<FeedbackForm/>} />
		<Route path='/signup' element={<SignUp/>}/>
		<Route path='/terms' element={<Termsconditions/>}/>
		<Route path='/privacy' element={<Privacy/>}/>
		<Route path='/faq' element={<Faq/>}/>
		<Route path='/contact' element={<Contact/>}/>
		<Route path='/admin' element={<Admin/>}/>
	</Routes>
	</Router>
);
}

export default App;
