import React from "react";
import NavBar from "../components/NavBar";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import background from "../media/background.png";
import wsb from "../media/white_small_badge.png";

const Home = ({ navLinks, setNavLinks }) => {
  return (
    <StyledHome>
      <img className="logo" src={wsb} alt="" />
      <h1>De Winter Metalworks</h1>
      <NavBar navLinks={navLinks} setNavLinks={setNavLinks} />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  ${({ theme }) => css`
    overflow: hidden;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
    background-position: center;

    ul {
      img {
        display: none;
      }
    }
    span {
      display: none;
    }
    .logo {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  `}
`;

export default Home;
