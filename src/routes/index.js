import About from '../pages/About';
import Post from '../pages/Post';
import Posts from '../pages/Posts';

export const routes = [
	{ path: '/posts', element: <Posts /> },
	{ path: '/posts/:id', element: <Post /> },
	{ path: '/about', element: <About /> },
];
