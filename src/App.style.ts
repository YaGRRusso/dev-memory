import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 10px;
  margin: auto;
  width: 92vw;
  max-width: 980px;
  display: flex;
  align-items: center;
  min-height: 100vh;

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
  flex: 2;
  width: 100%;
  margin-right: 20px;

  @media (max-width: 768px){
    margin: 0;
    margin-bottom: 50px;
  }
`

export const GridArea = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  box-sizing: content-box;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px){
    width: 92vw;
  }

  @media (max-width: 425px){
    grid-template-columns: repeat(3, 1fr);
  }
`