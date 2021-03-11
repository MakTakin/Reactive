import React, { useEffect } from 'react'
import styled from 'styled-components'
import Loader from '../ui/loader';
import ListUsers from './listUsers/listUsers';
import { Header } from '../ui/headers';
import { UserButton } from '../ui/buttons';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, } from '../../redux/actions/actions';
import { getUsers } from '../../redux/actions/getUsers';

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0;
`

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            {loading ?
                <Loader/> :
                <>
                    <Header>List of Users</Header>
                    <ListUsers
                        users={users}
                    />
                    <ButtonContainer>
                        <UserButton
                            onClick={() => dispatch(showModal('ADD_USER'))}
                        >
                            Add User
                        </UserButton>
                    </ButtonContainer>

                </>
            }
        </>
    )
}
export default Users