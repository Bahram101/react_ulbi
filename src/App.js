import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';

import PostForm from './components/PostForm';
import './styles/App.css';
import MySelect from './components/UI/seleect/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Jasdf', body: 'asdff' },
		{ id: 2, title: 'asdf 2', body: 'qwerewq' },
		{ id: 3, title: 'bvxxcf 3', body: 'sdgsdfg' },
	]);

	const [selectedSort, setSelectedSort] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			);
		}
		return posts;
	}, [selectedSort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(searchQuery)
		);
	}, [searchQuery, sortedPosts]);

	//Создание пост
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	//Удаление пост
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	//Выбрать сортировку
	const sortPosts = (sort) => {
		setSelectedSort(sort);
	};

	return (
		<div className='App'>
			<PostForm create={createPost} />

			<hr style={{ margin: '15px 0' }} />

			<div>
				<MyInput
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder='Поиск...'
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue='Сортировка'
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
			</div>

			{sortedAndSearchedPosts.length ? (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title='Зоголовок 1'
				/>
			) : (
				<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
			)}
		</div>
	);
}

export default App;
