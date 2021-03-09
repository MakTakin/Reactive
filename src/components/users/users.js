import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Loader from '../ui/loader';
import ListUsers from './listUsers/listUsers';
import { Header } from '../ui/headers';
import { InvisibleButton, UserButton } from '../ui/buttons';
import { SERVER_URL } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
    addFormUser,
    appLoad,
    appLoading,
    fetchUsersFailed,
    fetchUsersSuccess
} from '../../redux/actions/actions';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.loading.loading)

    const getUsers = useCallback(async () => {
        dispatch(appLoading())
        try {
            const response = await fetch(`${SERVER_URL}users`)
            const users = await response.json()
            dispatch(fetchUsersSuccess(users))
            dispatch(appLoad())
        } catch (error) {
            dispatch(fetchUsersFailed(error))
        }
    }, [])

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {loading ?
                <Loader/> :
                <>
                    <HeaderContainer>
                        <InvisibleButton>add user</InvisibleButton>
                        <Header>List of Users</Header>
                        <UserButton
                            onClick={() => dispatch(addFormUser(true))}
                        >
                            add user
                        </UserButton>
                    </HeaderContainer>
                    <ListUsers
                        users={users}
                    />
                </>
            }
        </>

    )
}
export default Users