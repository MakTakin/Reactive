import styled from 'styled-components'

export const UserButton = styled.button`
    border: none;
    outline: none;
    margin: 0 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    background: #032c9e;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #0737bf;
    }
`

export const InvisibleButton = styled(UserButton)`
    visibility: hidden;
`

export const FormButton = styled(UserButton)`
    display: ${props => props.activateUser ? 'none' : 'inline-block'}
`

export const EditUserButton = styled(UserButton)`
    margin-left: auto;
    display: flex;
    visibility: ${props => props.activateUser ? 'visible' : 'hidden'}
`