import React, { useState, useMemo, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	useEffect(() => {
		fetchPosts();
	}, []);

	//Создание пост
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	//Удаление пост
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	async function fetchPosts() {
		const posts = await PostService.getAll();
		setPosts(posts);
	}

	return (
		<div className='App'>
			<MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
				Создать пользователя
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title='Посты про JS'
			/>
		</div>
	);
}

export default App;
