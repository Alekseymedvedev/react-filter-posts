import React,{useState} from 'react';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const PostForm = ({create}) => {


    const [post, setPost]= useState({title:'', body:''})

    const addNewPost = (e)=>{
        e.preventDefault()
        const newPost= {
            ...post, id: Date.now
        }
        create(newPost)
        setPost({title:'', body:''})

    }
    return (
        <div className="post">
            <form>
                <Input
                    value={post.title}
                    onChange={(e)=>{setPost({...post, title: e.target.value})}}
                    placeholder="Создать"
                    type="text"
                />
                <Input
                    value={post.body}
                    onChange={(e)=>{setPost({...post, body: e.target.value})}}
                    placeholder="Создать"
                    type="text"
                />
                <Button onClick={addNewPost} >Создать пост</Button>
            </form>
        </div>
    );
};

export default PostForm;