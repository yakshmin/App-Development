import React from 'react';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';

const Donate = () => {
return (
	<div
	style={{
		
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '100px'
	}}
	>
		<Navbar></Navbar>
		<Footers></Footers>
	<h1 className='texts'>Donate Food Items</h1>
	</div>
);
};

export default Donate;
