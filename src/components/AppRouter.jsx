import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

function AppRouter() {
	const { isAuth, loading } = useContext(AuthContext);

	if (loading) {
		return <Loader />;
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.element}
				/>
			))}
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.element}
				/>
			))}
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	);
}

export default AppRouter;
