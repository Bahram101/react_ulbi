import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Jasdf', body: 'asdff' },
		{ id: 2, title: 'asdf 2', body: 'qwerewq' },
		{ id: 3, title: 'bvxxcf 3', body: 'sdgsdfg' },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			);
		}
		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(filter.query)
		);
	}, [filter.query, filter.sort]);

	//Создание пост
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	//Удаление пост
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className='App'>
			<MyModal>
				<PostForm create={createPost} />
			</MyModal>

			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title='Зоголовок 1'
			/>
		</div>
	);
}

export default App;
