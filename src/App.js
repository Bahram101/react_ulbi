import React, { useState, useMemo, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import { Loader } from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [isPostsLoading, postError, fetchPosts] = useFetching(async () => {
		const posts = await PostService.getAll();
		setPosts(posts);
	});

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
			{postError && <h1>Произашла ошибка ${postError} </h1>}
			{isPostsLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Loader />
				</div>
			) : (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title='Посты про JS'
				/>
			)}
		</div>
	);
}

export default App;
