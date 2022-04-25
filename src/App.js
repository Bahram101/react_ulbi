import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Posts />} />
				<Route path='/about' element={<About />} /> 
			</Routes>
		</Router>
	);
}

export default App;
