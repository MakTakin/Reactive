import styled from 'styled-components';

export const ModalWindow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    > div {
        background: #fff;
        width: 600px;
        border-radius: 8px;
        padding: 20px 20px 20px 20px;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.6);
    }
`