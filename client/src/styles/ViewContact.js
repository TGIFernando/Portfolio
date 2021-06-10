import styled from "styled-components";

const MainDiv = styled.div`
  height: 100vh;
  background-color: #7e216f;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ConDiv = styled.div`
  height: 30vh;
  width: 30vw;
  background-color: #38505a;
`;

const Name = styled.h1`
  font-size: 2rem;
`;

export { MainDiv, ConDiv, Name };
