import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  padding: 100px 0px;
  align-items: center;
  background-color: #262139;
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;
`;

export const Info = styled.div`
  color: #fff;
  width: 300px;
  text-align: left;
  p{
    margin-bottom: 20px;
  }

h1{
  margin-bottom: 20px;

  }
 
`;
export const Session = styled.div`
  color: #fff;
  gap: 1rem;
  text-align: center;


video {
  max-width: 500px;
}
@media screen and (max-width: 769px) {
  video {
  max-width: 300px;
  margin-top: 40px;
}

}
`;

export const Link = styled.a`
  cursor: pointer;
  border-bottom: 2px solid orange;
`;
