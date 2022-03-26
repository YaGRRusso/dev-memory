import styled from "styled-components";

export const Container = styled.div<{ shown: boolean }>`
padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    border-radius: 15px;
    background-color: ${props => props.shown ? '#1550ff' : props.theme.cardBack};
    cursor: pointer;

    img {
        max-height: 95%;
        width: 60%;
        filter: ${props => props.shown ? '' : `invert(${props.theme.invert})`};
        opacity: ${props => props.shown ? '1' : '.15'};
    }
`