import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/dashboard' activeStyle>
		 Dashboard
		</NavLink>
		<NavLink to='/donate' activeStyle>
			Donate
		</NavLink>
		<NavLink to='/purchase' activeStyle>
			Purchase
		</NavLink>
		<NavLink to='/volunteer' activeStyle>
			Volunteer
		</NavLink>
		<NavLink to='/details' activeStyle>
			Details
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<Link to={"/login"}>LogOut</Link>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
