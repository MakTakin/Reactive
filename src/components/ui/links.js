import {Link} from "react-router-dom"
import styled from 'styled-components'

export const PostLink = styled(Link)`
    border: 1px solid #0737bf;
    outline: none;
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    text-align: center;

    &:hover {
        background: #0737bf;
        color: #fff;
    }
`

export const BackLink = styled(Link)`
    border: none;
    outline: none;
    cursor: pointer;
    color: grey;
`