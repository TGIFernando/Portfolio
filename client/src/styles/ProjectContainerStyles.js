import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
`;

const Img = styled.img``;
const ProjDiv = styled.div`
  background-color: #0f1e2f;
  padding-bottom: 0.2rem;
  margin: 0.4rem;
`;
const ProjDiv2 = styled.div`
  background-image: linear-gradient(
    90deg,
    rgb(144, 243, 179),
    rgb(144, 233, 243),
    rgb(144, 159, 243),
    rgb(204, 144, 243),
    rgb(243, 144, 209),
    rgb(243, 154, 144),
    rgb(243, 229, 144),
    rgb(184, 243, 144)
  );
  margin: 1rem;
  &:hover {
    opacity: 0.5;
    transition: 0.3s;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1440px) {
    width: 45%;
  }
`;
const Explain = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #f8c7cc;
  margin: 0.5rem;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 3rem;
  }
  @media (min-width: 1880px) {
    font-size: 3.2rem;
  }
`;

export { Img, ProjDiv, Explain, ProjDiv2, A };
