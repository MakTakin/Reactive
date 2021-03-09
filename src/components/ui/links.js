import {Link} from "react-router-dom"
import styled from 'styled-components'

export const PostLink = styled(Link)`
    border: none;
    outline: none;
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    background: #032c9e;
    color: #fff;
    text-decoration: none;

    &:hover {
        background: #0737bf;
    }
`

export const BackLink = styled(Link)`
    border: none;
    outline: none;
    cursor: pointer;
    color: grey;
`