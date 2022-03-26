import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;

    label{
        color: ${props => props.theme.secondaryColor};
    }
    div{
        font-size: 3rem;
        font-weight: bold;
    }
`