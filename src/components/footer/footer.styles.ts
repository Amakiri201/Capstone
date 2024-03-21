import styled from "styled-components";

export const Foot = styled.div`
  width: 100%;
  margin: 0px;
  color: #fff;
  padding: 0px 0px 20px 0px;
  background-color: #262139;
  font-family: "Ubuntu", sans-serif;
  position:absolute;
   bottom:0;

  p {
    letter-spacing: 1px;
    
  }
`;

export const Container = styled.div`
  color: #fff;
  display: flex;
  padding: 15px 0px;
  align-items: center;
  justify-content: space-around;

`;

export const Ul = styled.ul`
  width: 500px;
  display: flex;
  list-style: none;
  justify-content: space-between;

  a {
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  opacity: 0.6;
  border: 1px solid #fff;
`;
