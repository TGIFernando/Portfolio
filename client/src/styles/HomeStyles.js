import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #776885;
`;
const Name = styled.h1`
  font-size: 3.5rem;
  color: #f3e8ee;
  @media (min-width: 768px) {
    font-size: 10rem;
  }
  @media (min-width: 1440px) {
    font-size: 15rem;
  }
`;

const Hello = styled.h2`
  color: #a0afba;
  font-size: 4rem;
  @media (min-width: 768px) {
    font-size: 8rem;
  }
  @media (min-width: 1440px) {
    font-size: 10rem;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #f3e8ee;
  cursor: pointer;
`;

const Button = styled.h1`
  background-color: #3d7ba9;
  padding: 0.5rem;
  font-size: 3rem;
  border-radius: 20px;
  box-shadow: 2px 5px 5px;
  &:active {
    box-shadow: inset 2px 5px 5px;
  }
`;

const Hstar = styled.div`
  color: #f3e8ee;
  background-color: grey;
  border-radius: 10%;
  font-size: 2rem;
  height: 25rem;
  width: 15rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 71%;
  bottom: 27%;
  opacity: 80%;
  /* visibility: hidden; */
`;

const Star = styled.span`
  color: #4adaea;
  cursor: pointer;
`;

const Stack = styled.h2`
  color: #a0afba;
  font-size: 3.5rem;
  text-align: center;
  height: 20%;
  & ${Star}:hover + ${Hstar} {
    visibility: visible;
  }
  @media (min-width: 768px) {
    font-size: 8rem;
  }
  @media (min-width: 1440px) {
    font-size: 10rem;
  }
`;

export { MainDiv, Name, Hello, Stack, A, Button, Star, Hstar };
