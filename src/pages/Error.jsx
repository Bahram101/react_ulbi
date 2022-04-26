import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<h1 style={{ color: 'red' }}>
			404
			<Link to='/'>Назад</Link>
		</h1>
	);
};

export default Error;
