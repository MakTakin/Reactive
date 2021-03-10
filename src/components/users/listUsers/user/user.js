import React from 'react'
import styled from 'styled-components'
import { showModal } from '../../../../redux/actions/actions';
import { InfoButton } from '../../../ui/buttons';
import { PostLink } from '../../../ui/links';
import { useDispatch } from 'react-redux';

const UserButtons = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
`

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: #ccdbf7;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    div, button {
        margin-bottom: 5px;
    }
    
    &:hover {
        ${UserButtons} {
            display: flex;
        }
    }
    
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-weight: bold;
`
const UserName = styled.div``

const Phone = styled.div``

const Email = styled.div``

const User = (props) => {
    const dispatch = useDispatch()

    return (
        <UserContainer>
            <UserInfo>
                <Name>
                    {props.user.name}
                </Name>
                <UserName>
                    username: <b>{props.user.username}</b>
                </UserName>
                <Phone>
                    phone: <b>{props.user.phone}</b>
                </Phone>
                <Email>
                    email: <b>{props.user.email}</b>
                </Email>
            </UserInfo>

            <UserButtons>
                <InfoButton
                    onClick={() => dispatch(showModal('UPDATE_USER', props.user))}
                >
                    More Information
                </InfoButton>
                <PostLink
                    to={`/posts/${props.user.id}`}
                >
                    Show User Posts
                </PostLink>
            </UserButtons>
        </UserContainer>
    )
}
export default User