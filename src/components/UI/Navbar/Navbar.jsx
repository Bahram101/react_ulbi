import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

export const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.navbar__links}>
				<Link to='/' className={classes.navbar__link}>
					Посты
				</Link>
				<Link to='/about' className={classes.navbar__link}>
					About
				</Link>
			</div>
		</div>
	);
};
