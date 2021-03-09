import React from 'react'
import styled from 'styled-components'
import Post from './post/post';

const Posts = styled.div`
    height: 80vh;
    padding-right: 10px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background: #F2F2F2;
        border-radius: 2px;
        width: 8px; 
    }
    ::-webkit-scrollbar-thumb {
        background: #BDBDBD;
        border-radius: 2px;
    }
    scrollbar-color: #BDBDBD #F2F2F2;
`

const ListPosts = (props) => {
    const posts = props.posts.map(post => {
        return(
            <Post
                key={post.id}
                post={post}
                username={props.username}
            />
        )
    })

    return (
        <Posts>
            {posts}
        </Posts>
    )
}
export default ListPosts