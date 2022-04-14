import React, { useState } from 'react';
import PostList from './components/PostList';

import PostForm from './components/PostForm';
import './styles/App.css';
import MySelect from './components/UI/seleect/MySelect';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Description' },
		{ id: 2, title: 'Javascript 2', body: 'Description' },
		{ id: 3, title: 'Javascript 3', body: 'Description' },
	]);

	const [selectedSort, setSelectedSort] = useState('');

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) =>{
		setSelectedSort(sort)
		console.log(selectedSort )
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />

			<hr style={{ margin: '15px 0' }} />

			<MySelect
				value={selectedSort}
				onChange={sortPosts}
				defaultValue='Сортировка'
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' },
				]}
			/>

			{posts.length ? (
				<PostList remove={removePost} posts={posts} title='Зоголовок 1' />
			) : (
				<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
			)}
		</div>
	);
}

export default App;
