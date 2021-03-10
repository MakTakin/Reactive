import React from 'react'
import styled from 'styled-components'
import User from './user/user';

const Users = styled.div`
    height: 75vh;
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

const ListUsers = (props) => {
    const users = props.users.map(user => {
        return(
            <User
                key={user.id}
                user={user}
            />
        )
    })

    return (
        <Users>
            {users}
        </Users>
    )
}
export default ListUsers