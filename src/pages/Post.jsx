import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { Loader } from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const Post = () => {
	const params = useParams();

	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchCommentsById, isComLoading, comError] = useFetching(
		async (id) => {
			const response = await PostService.getCommentsByPostId(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		fetchPostById(params.id);
		fetchCommentsById(params.id);
	}, []);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h3>
						{post.id}.{post.title}
					</h3>
					<div>{post.body}</div>
				</>
			)}

			<h1>Комментарии</h1>
			{isComLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map((com) => {
						return (
							<div key={com.id} style={{ marginTop: 15 }}>
								<h5>{com.email}</h5>
								<div>{com.body}</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default Post;