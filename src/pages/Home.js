import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import background from "../media/background.png";
import wsb from "../media/white_small_badge.png";

const Home = ({ navActive, setNavActive }) => {
  const navLinks = ["commissions", "originals", "process", "about", "contact"];

  return (
    <StyledHome>
      <img className="logo" src={wsb} alt="" />
      <h1>De Winter Metalworks</h1>
      {/* <NavBar navLinks={navLinks} setNavLinks={setNavLinks} /> */}
      <ul>
        {navLinks.map((item) => (
          <Link key={item} to={item}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
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

    h1 {
      font-size: 6rem;
      text-align: center;
    }

    ul {
      margin-top: 5rem;
      text-transform: uppercase;
      li {
        margin: 1rem;
        text-align: center;
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
