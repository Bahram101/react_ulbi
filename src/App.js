import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Description' },
		{ id: 2, title: 'Javascript 2', body: 'Description' },
		{ id: 3, title: 'Javascript 3', body: 'Description' },
	]);

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			title,
			body,
		};
		setPosts([...posts, newPost])
		setTitle('')
		setBody('')
	};



	return (
		<div className='App'>
			<form>
				<MyInput
					type='text'
					placeholder='Название поста'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<MyInput
					type='text'
					placeholder='Описание поста'
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				{/* <button onClick={(e)=>addNewPost(e)}>Создать пост</button> */}
				<MyButton onClick={(e)=>addNewPost(e)}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title='Зоголовок 1' />
		</div>
	);
}

export default App;
