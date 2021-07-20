import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const OL = styled.ol`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  background-color: #687f90;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: 0.3s ease-in-out;
`;

const LI = styled.li`
  padding: 10px;
  font-size: 4rem;
  color: white;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
  @media (min-width: 768px) {
    font-size: 8rem;
  }
`;

function NavBar({ open, logg, setOpen }) {
  const { push } = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    push("/login");
  };

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <OL open={open}>
        <LI onClick={onClick}>
          <a href="#home">Home</a>
        </LI>
        {/* {logg ? <></> : <LI><Link to="/login">Login</Link></LI>} */}
        <LI onClick={onClick}>
          <a href="#projects">Projects</a>
        </LI>
        <LI onClick={onClick}>
          <a href="#contact">Contact</a>
        </LI>
        <LI onClick={onClick}>
          <Link to="/Resume.PDF" target="_blank" download>
            Download Resume
          </Link>
        </LI>
        {logg ? (
          <LI onClick={onClick}>
            <Link to="/" onClick={logOut}>
              Log Out
            </Link>
          </LI>
        ) : (
          <LI></LI>
        )}
        {logg ? (
          <LI onClick={onClick}>
            <Link to="/contactme">Contact</Link>
          </LI>
        ) : (
          <></>
        )}
      </OL>
    </nav>
  );
}

export default NavBar;
