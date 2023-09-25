import React from 'react';
import './home.css'
import land from './land.webp'
import homeLogo from './logo.png'
import { Link } from 'react-router-dom';

const Home = () => {
return (
	<div className='homee'>	
	 
	 <div className='home-img'>
		<img src={land} alt='img'></img>
	 </div>

	<div className='home-text'>
			Share Your Bite<br/>
	</div>
	<div className='home-slogan'>
		We're hungry for donations<br/><br/>
	</div>
	<div className='home-down'>
		LET'S FIGHT food waste TOGETHER<br/><br/>
		Rescue unsold food at various spots from an untimely fate.
	</div>
	<div className='home-start'>
		GET STARTED !
	</div>
	<div>
	<Link to='/login'><button className='home-login'>Login</button></Link>
	<Link to='/signup'><button className='home-signup'>SignUp</button></Link>
	<Link to='/admin'><button className='admindash'>Admin</button></Link>
	</div>
	</div>
);
};

export default Home;
