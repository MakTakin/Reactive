import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Loader from '../ui/loader';
import ListPosts from './listPosts/listPosts';
import { SERVER_URL } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../ui/headers';
import { BackLink } from '../ui/links';
import { appLoad, appLoading, fetchPostsFailed, fetchPostsSuccess } from '../../redux/actions/actions';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InvisibleBlock = styled.div`
    visibility: hidden;
`

const Posts = (props) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.loading.loading)

    const getPosts = useCallback(async () => {
        dispatch(appLoading())
        try {
            const response = await fetch(`${SERVER_URL}posts?userId=${props.match.params.id}`)
            const posts = await response.json()
            dispatch(fetchPostsSuccess(posts))
            dispatch(appLoad())
        } catch (error) {
            dispatch(fetchPostsFailed(error))
        }
    }, [dispatch])

    useEffect(() => {
        getPosts()
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
                                <Header>{props.location.username} Posts</Header>
                                <InvisibleBlock>Back to users</InvisibleBlock>
                            </HeaderContainer>
                            <ListPosts
                                posts={posts}
                                username={props.location.username}
                            />
                        </>  :
                        <HeaderContainer>
                            <BackLink to='/'>Back to users</BackLink>
                            <Header>This user doesn't have any posts yet...</Header>
                            <InvisibleBlock>Back to users</InvisibleBlock>
                        </HeaderContainer>

                    }
                </>

            }
        </>
    )
}
export default Posts