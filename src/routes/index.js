import Posts from '../pages/Posts';
import Post from '../pages/Post';
import About from '../pages/About';
import Error from '../pages/Error';
import { Login } from '../pages/Login';

export const privateRoutes = [
	{ path: '/', element: <Posts /> },
	{ path: '/posts', element: <Posts /> },
	{ path: '/posts/:id', element: <Post /> },
	{ path: '/about', element: <About /> }, 
];

export const publicRoutes = [
	{ path: '/login', element: <Login /> },
];