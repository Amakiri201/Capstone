import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding:50px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: 769px){
    gap: 50px;
    padding: 50px 10px;
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  width: 700px;
  text-align: left;

  @media screen and (max-width: 769px){
  width: 100%;
  }

  h4 {
    padding: 0px;
    margin: 0px;
    font-weight: 100;
  }

  h2 {
    padding: 0px;
    margin-bottom: 10px;
  }

  p {
    opacity: 0.7;
    margin-bottom: 10px;
  }

  

`;

export const InuputHolder = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0px 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid silver;
  background-color: #d2d1d4;

  &::placeholder {
  }
`;

export const InputPh = styled(Input)``;

export const InputEm = styled(Input)``;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 20px;
  resize: none;
  outline: none;
  height: 250px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #262139;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);


  &:hover{
  background-color: #262139;
  }
`;

//info container//

export const Info = styled.div`
  gap: 30px;
  color: white;
  width: 300px;
  padding: 20px;
  border-radius: 15px;
  background-color: #262139;
  font-family: "Ubuntu", sans-serif;

`;
export const Line = styled.div`
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #fff;
`;

export const Section = styled.div`
  gap: 30px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: left;

  div h3,
  p {
    text-align: left;
    margin: 0px;
    padding: 0px;
  }
`;

export const IconD = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #1e1b2d;


  &:hover {
    color: #262139;
    background-color: #fff;

  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  gap: 20px;
  margin-top: 40px;
`;
