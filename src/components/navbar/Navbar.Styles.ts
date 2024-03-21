import styled from "styled-components";
import { Link } from "react-router-dom";



export const LinkDesign = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #6a6f87;

  &:hover {
    color: #628bec;
  }
`;




export const Nav = styled.div`
  display: flex;
  margin: auto;
  font-family: "Ubuntu", sans-serif;
`;

export const Child = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #4f4081;
    cursor: pointer;
  }
`;

export const Second = styled.div`
  display: flex;
  border: 1px solid blue;
  justify-content: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;

  a {
    color: #0d0a1e;
    padding: 0 20px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    position: relative;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #4f4081;
      @media screen and (max-width: 769px) {
        color: #fff;
      }
    }

    &:hover::after {
      content: "";
      width: 30%;
      height: 2px;
      background: #4f4081;
      position: absolute;
      bottom: -4px;
      left: 20px;
    }
  }

  @media screen and (max-width: 769px) {
    display: none;
    /* gap: 30px;
    top: 37px;
    right: 0px;
    width: 300px;
    height: 100vh;
    display: flex;
    align-items: center;
    background: #4f4081;
    padding: 40px 0 0 10px;
    flex-direction: column;
    justify-content: flex-start;
    transition: 0.3s ease-in-out;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1); */
  }
`;

// export const Mobile = styled.div`
//   @media screen and (max-width: 769px) {
//     top: 0;
//     z-index: 60;
//     height: 100%;
//     display: flex;
//     position: fixed;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
//     background-color: #4f4081;
//     transition: right 0.3s ease-in-out;
//     right: ${({ isMenuToggled }) => (isMenuToggled ? "0" : "-100%")};
//   }
// `;

// export const MenuButton = styled.button`
//   @media screen and (min-width: 769px) {
//     display: none;
//   }
// `;

// export const MenuCloseButton = styled.button`
//   @media screen and (min-width: 769px) {
//     display: none;
//   }
// `;

export const BtnContainer = styled.div``;

export const Pricing = styled.button`
  color: #0d0a1e;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #0d0a1e;

  &:hover {
    color: #fff;
    background: #4f4081;
  }
`;

export const Login = styled(Pricing)``;

export const SignUp = styled(Pricing)``;
