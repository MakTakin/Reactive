import React, { useEffect } from 'react'
import styled from 'styled-components'
import Loader from '../ui/loader';
import ListPosts from './listPosts/listPosts';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../ui/headers';
import { BackLink } from '../ui/links';
import { getPosts } from '../../redux/actions/getPosts';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: justify-center;
    align-items: center;
    
    a {
        align-self: flex-start;
    }
`

const Posts = (props) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.app.loading)
    const user  =  useSelector(state => state.users.users.find( user => user.id === props.match.params.id ))

    useEffect(() => {
        dispatch(getPosts(props.match.params.id))
    }, [])

    return (
        <>
            {loading ?
                <Loader/> :
                <>
                    { posts.length > 0 ?
                        <>
                            <HeaderContainer>
                                <BackLink to='/'>Back to users</BackLink>
                                <Header>{user.username} Posts</Header>
                            </HeaderContainer>
                            <ListPosts
                                posts={posts}
                                username={user.username}
                            />
                        </>  :
                        <HeaderContainer>
                            <BackLink to='/'>Back to users</BackLink>
                            <Header>This user doesn't have any posts yet...</Header>
                        </HeaderContainer>

                    }
                </>

            }
        </>
    )
}
export default Posts