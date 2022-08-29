import {
  MainDiv,
  Name,
  Hello,
  Stack,
  A,
  Button,
  Star,
  Hstar,
} from "../styles/HomeStyles";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const { push } = useHistory();
  const [count1, setCount1] = useState(0);

  const [hover, setHover] = useState(false);

  const onClick1 = () => {
    setCount1(count1 + 1);
  };

  const [count2, setCount2] = useState(0);

  const onClick2 = () => {
    setCount2(count2 + 1);
  };

  const onClick3 = () => {
    setHover(!hover);
  };

  useEffect(() => {
    if (count1 === 5 && count2 === 5) {
      push("/login");
    }
  }, [count2, count1, push]);

  return (
    <MainDiv className="snap" id="home">
      <Hello>
        <span onClick={onClick1}>🚀</span>Hello, I'm
        <span onClick={onClick2}>🚀</span>
      </Hello>
      <Name>
        Ferna
        <A href="https://www.youtube.com/watch?v=DLzxrzFCyOs" target="_blank">
          n
        </A>
        do Chavez
      </Name>
      <Stack>
        A Full Stack Web Developer
        <Star onClick={onClick3}>*</Star>
        {hover ? (
          <Hstar className="Hstar">
            <h3 className="Hstar">
              Front and Backend developer, Video/Photo Editor, Media Manager,
              Social Media strategist, Consultant, and so much more.
            </h3>
          </Hstar>
        ) : (
          <></>
        )}
      </Stack>
      <Button>
        <A href="#contact">Contact Me</A>
      </Button>
    </MainDiv>
  );
}

export default Home;
