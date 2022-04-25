import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { useTheme } from "../hooks/useTheme";
import { getPageCount } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";
import "../styles/App.css";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const { theme, toggleTheme } = useTheme();

    const [isPostsLoading, postError, fetchPosts] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts(response.data);
            const totalCount = response.headers["x-total-count"];
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    useEffect(() => {
        fetchPosts(limit, page);
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

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <div className={`App ${theme}`}>
            <div className="content">
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <MyButton
                        style={{ marginTop: 30 }}
                        onClick={() => setModal(true)}
                    >
                        Создать пользователя
                    </MyButton>
                    <MyButton style={{ marginTop: 30 }} onClick={toggleTheme}>
                        {theme === "dark" ? "light" : "dark"}
                    </MyButton>
                </div>

                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost} />
                </MyModal>

                <hr style={{ margin: "15px 0" }} />
                <PostFilter filter={filter} setFilter={setFilter} />
                {postError && <h1>Произашла ошибка ${postError} </h1>}
                {isPostsLoading ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Loader />
                    </div>
                ) : (
                    <PostList
                        remove={removePost}
                        posts={sortedAndSearchedPosts}
                        title="Посты про JS"
                    />
                )}
                <Pagination
                    totalPages={totalPages}
                    changePage={changePage}
                    page={page}
                />
            </div>
        </div>
    );
}

export default Posts;
