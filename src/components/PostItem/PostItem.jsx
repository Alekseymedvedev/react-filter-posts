import React from 'react';
import Button from "../UI/Button/Button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <div className="">
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={()=>{props.removePost(props.post)}} >Удалить</Button>
            </div>
        </div>
    );
};

export default PostItem;