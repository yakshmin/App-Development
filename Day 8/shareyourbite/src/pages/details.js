import React from 'react';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';


const Details = () => {
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
	<h1>Get the details you require</h1>
	</div>
);
};

export default Details;
