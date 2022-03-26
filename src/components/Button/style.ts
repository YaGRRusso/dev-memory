import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 50px;
    color: #fff;
    background-color: #1550FF;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;

    :hover{
        opacity: .85;
    }

    img{
        padding: 0 15px;
    }

    div{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        border-left: 1px solid #ffffff30;
        padding: 0 15px;
    }
`