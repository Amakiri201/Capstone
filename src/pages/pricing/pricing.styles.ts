import styled from "styled-components";

export const Container = styled.div`
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 60px;
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #262139;
  font-family: "Ubuntu", sans-serif;

  h1 {
    margin-bottom: 20px;
  }
`;

export const CardWrapper = styled.div`
  gap: 50px;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 769px){
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 300px;
  transition: 1s;
  color: #262139;
  border: none;
  padding-top: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  p {
    margin: 10px;
    white-space: normal;
  }

  h2 {
    color: #4d3e7d;
  }
  h3 {
    color: black;
    margin-top: 0px;
    font-size: 30px;
    font-weight: bolder;
  }
`;

export const StartedBtn = styled.button`
  width: 100%;
  margin: none;
  border: none;
  padding: 14px;
  cursor: pointer;
  font-weight: 600;
  border-radius: set;
  border-radius: 0 0 10px 10px;
  transition: all 0.2s ease;
  background-color: transparent;

  &:hover {
    background: #4d3e7d;
    color: #fff;
  }
`;


export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const BtnMonthly = styled.button`
  color: #fff;
  border: none;
  background-color: #4d3e7d;
  padding: 10px 20px;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.8);
`;

export const BtnYearly = styled(BtnMonthly)`
  color: #4d3e7d;
  background-color: #fff;
  border-radius: 0px 10px 10px 0px;
`;
