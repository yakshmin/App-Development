import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavLogo, NavBtnLink} from './NavbarElements';
import { Link } from 'react-router-dom';
import Logo from './logo.png'


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

        <NavLogo to='/login'>
		  <img src={Logo} alt="nav logo" />
		</NavLogo>
		<NavMenu className='navmenu'>
		<NavLink to='/dashboard' className='navlink'>
		 Dashboard
		</NavLink>
		<NavLink to='/donate' className='navlink'>
			Donate
		</NavLink>
		<NavLink to='/purchase' className='navlink'>
			Purchase
		</NavLink>
		<NavLink to='/volunteer' className='navlink'>
			Volunteer
		</NavLink>
		<NavLink to='/feedback' className='navlink'>
			Feedback
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn className='navbtn'>
		<NavBtnLink to={"/login"} >LogOut</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar
