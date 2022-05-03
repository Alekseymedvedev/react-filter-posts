import React, {useState} from 'react';
import './App.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFiter from "./components/UI/PostFilter/PostFiter";
import Modal from "./components/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Javascript program"},
        {id: 2, title: "FRONTEND", body: "FRONTEND program"},
        {id: 3, title: "BACKEND", body: "FRONTEND program"},
        {id: 4, title: "wJavascript", body: "BACKEND program"},
    ])
    const [filter, setfilter] = useState({sort: '', query: ''})
    const [modal, setmodal] = useState(false)

    const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setmodal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const fetchPost = async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        console.log(response.data)
    }
    return (
        <div className="App">
            <Button onClick={()=>{setmodal(true)}}>
                Добавить пост
            </Button>
            <Button onClick={fetchPost}>
                Добавить
            </Button>
            <Modal visible={modal}
            setVisible={setmodal}
            >
                <PostForm create={createPost}/>
            </Modal>

            <PostFiter filter={filter} setfilter={setfilter}/>


            {
                sortedAndSearchPosts.length
                    ? <PostList removePost={removePost} posts={sortedAndSearchPosts} title="Список постов"/>
                    : <h1>Нет постов</h1>
            }

        </div>
    );
}

export default App;
