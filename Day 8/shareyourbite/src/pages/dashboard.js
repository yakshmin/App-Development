import React from 'react';
import Navbar from '../components/navbar/NavBar';
import {useSelector} from 'react-redux'
import Footers from '../components/navbar/Footer';
import './dashboard.css'

const Dashboard = () => {
	const user=useSelector(state => state.user.value)


return (
	<div>
		<Navbar></Navbar>
		
	<div className='dash-welcome'>Welcome back {user.username}!!</div>

<div className='shadow-box-container'>
    <div className="shadow-box">
      <h1 className='dash-boxtext'>DONATIONS MADE</h1><br/>
	  <h2 className='dash-boxcount'>1</h2>
    </div>

    <div className="shadow-box">
      <h1 className='dash-boxtext'>DONATIONS UTILISED</h1><br/>
	  <h2 className='dash-boxcount'>1</h2>
    </div>
	
    <div className="shadow-box">
      <h1 className='dash-boxtext'>VOLUNTEERINGS DONE</h1><br/>
	  <h2 className='dash-boxcount'>2</h2>
    </div>
	
    <div className="shadow-box">
      <h1 className='dash-boxtext'>POINTS ACQUIRED</h1><br/>
	  <h2 className='dash-boxcount'>14</h2>
    </div>
	</div><br/><br/><br/><br/><br/>
	<div className='dash-text'>
		<h1 className='dash-head'>Connect with Share Your Bite for more services to the need</h1><br/><br/>
		<h2 className='dash-line1'>Opt any of our services </h2>
	</div>

	<Footers></Footers>
	</div>
);
};

export default Dashboard;
