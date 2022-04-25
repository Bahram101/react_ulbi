import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__links'>
				<Link to='/'>Посты</Link>
				<Link to='/about'>About</Link>
			</div>
		</div>
	);
};
