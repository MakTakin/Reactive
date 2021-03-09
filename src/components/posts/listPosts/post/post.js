import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #ccdbf7;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    div {
        margin-bottom: 5px;
    }
`

const UserName = styled.div`
    font-size: 14px;
    color: grey;
    font-style: italic;
`

const Title = styled.div`
    font-weight: bold;
`

const PostText = styled.div``

const Post = (props) => {
    return (
        <PostContainer>
            <UserName>
                {props.username}
            </UserName>
            <Title>
               {props.post.title}
            </Title>
            <PostText>
                {props.post.body}
            </PostText>
        </PostContainer>
    )
}
export default Post