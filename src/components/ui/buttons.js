import styled from 'styled-components'

export const UserButton = styled.button`
    border: none;
    outline: none;
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background: #032c9e;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #0737bf;
    }
`

export const InfoButton = styled(UserButton)`
    border: 1px solid #0737bf;
    outline: none;
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background: transparent;
    color: #000;
    cursor: pointer;

    &:hover {
        background: #0737bf;
        color: #fff;
    }
`

export const FormButton = styled(UserButton)`
    display: ${props => props.activateUser ? 'none' : 'inline-block'};
    padding: 10px 50px;
`

export const EditUserButton = styled(UserButton)`
    display: ${props => props.activateUser ? 'inline-block' : 'none'};
    padding: 10px 50px;
`

export const CloseButton = styled.button`
    cursor: pointer;
    background: #fff;
    padding: 0;
    border: none;
    outline: none;
    display: block;
    margin-left: auto;
`