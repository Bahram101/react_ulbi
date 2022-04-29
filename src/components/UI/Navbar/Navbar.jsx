import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import classes from './Navbar.module.css';

export const Navbar = () => {
	const { setIsAuth } = useContext(AuthContext);

	const onSignOut = (e) => { 
		setIsAuth(false);
		localStorage.removeItem('ulbiAuth' )
	};

	return (
		<div className={classes.navbar}>
			<div className={classes.navbar__links}>
				<Link to='/' className={classes.navbar__link}>
					Посты
				</Link>
				<Link to='/about' className={classes.navbar__link}>
					About
				</Link>
				<MyButton onClick={onSignOut}>Выйти</MyButton>
			</div>
		</div>
	);
};
