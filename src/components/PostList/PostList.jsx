import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, title, removePost}) => {

    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem removePost={removePost} post={post} number={index + 1} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;