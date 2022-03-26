import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 10px;
  margin: auto;
  width: 95vw;
  max-width: 980px;
  display: flex;
  align-items: center;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;

  img{
    width: 75%;
    max-width: 340px;
  }
`

export const InfoArea = styled.div`
  flex: 1;
  width: 100%;

  @media (max-width: 768px){
    margin-bottom: 50px;
  }
`

export const GameArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`