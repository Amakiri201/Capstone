import styled from "styled-components";
import myImage from "../../assets/hero.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  font-family: "Ubuntu", sans-serif;
`;

export const HeroSession = styled.div`
  width: 80%;
  color: #fff;
  margin: auto;
  height: 500px;
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  padding: 100px 0px 200px 0px;
  background-image: url(${myImage});

  @media screen and (max-width: 769px) {
    width: 90%;

    h1 {
      font-size: xx-large;
    }

    h2 {
      font-size: 16px;
    }

    p {
      white-space: nowrap;
      font-size: 10px;
    }
  }

  h1,
  h2,
  p {
    margin: 7px;
    padding: 0px;
  }
`;
export const Session = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 769px) {
    width: 90%;
  }

`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px;
  border-radius: 10px 0px 0px 10px;

`;

export const ShortenBtn = styled.button`
  color: #fff;
  border: none;
  padding: 15px 30px;
  background-color: #4f4081;
  border-radius: 0px 10px 10px 0px;

  @media screen and (max-width: 769px) {
  padding: 10px 20px;
  }
`;
