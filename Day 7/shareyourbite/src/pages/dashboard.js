import React from 'react';
import Navbar from '../components/navbar';
import {useSelector} from 'react-redux'

const Dashboard = () => {
	const user=useSelector(state => state.user.value)


return (
	<div
	style={{
		
		justifyContent: 'center',
		alignItems: 'center',
		height: '100px'
	}}
	>
		<Navbar></Navbar>
	<h1>Hello {user.username}!!</h1>
	</div>
);
};

export default Dashboard;
