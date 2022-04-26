import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import Post from '../pages/Post';
import { routes } from '../routes';

function AppRouter() {
	console.log('ROUTES', routes);

	return (
		<Routes>
			{/* {routes.map((route) => 
				<Route key={route.path} path={route.path} element={route.element} />
			)} */}

			<Route path='/' element={<Posts />} />
			<Route path='/about' element={<About />} />
			<Route path='/posts/:id' element={<Post />} />
			<Route path='/*' element={<Error />} />
		</Routes>
	);
}

export default AppRouter;
