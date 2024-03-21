import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 60px;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;

  h1 {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 769px){
    h1 {
    font-size: 20px;
  }

  h1 strong{
    
  }
  }
`;

export const CardsWrapper = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  color: #262139;
  max-width: 300px;
  padding: 20px 20px;
  border: 2px solid #262139;
  transition: 1s;

  &:hover {
    color: #fff;
    background-color: #262139;
    transform: scale(1.1);
    z-index: 1;
  }

  p {
    white-space: normal;
  }
`;
