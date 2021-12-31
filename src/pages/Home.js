import React from "react";
import { Link } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import background from "../media/background.png";
import wmb from "../media/white_medium_badge.png";

//Animations
import { sliderContainer, slider, pageAnimation } from "../animations";

const Home = ({ navActive, setNavActive }) => {
  const navLinks = ["commissions", "originals", "process", "about", "contact"];

  return (
    <StyledHome
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <img className="mobile-logo" src={wmb} alt="" />
      <h1>De Winter Metalworks</h1>
      <ul>
        {navLinks.map((item) => (
          <Link key={item} to={item}>
            <li>{item}</li>
            <div className="line"></div>
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;

    h1 {
      /* font-size: 6rem; */
      text-align: center;
    }

    .mobile-logo {
      height: 100px;
      position: fixed;
      top: 1rem;
      left: 1rem;
    }

    ul {
      margin-top: 5rem;
      text-transform: uppercase;
      li {
        margin: 1rem;
        text-align: center;
        font-family: "bonvoyage", serif;
      }
    }
    span {
      display: none;
    }
    .line {
      height: 0.5rem;
      background: #ababab;
      width: 0%;
      margin: 0 1rem;
      transition: 0.2s;
    }

    a:hover {
      .line {
        width: 50%;
      }
    }

    .logo {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    @media screen and (min-width: 768px) {
      ul {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
      }
      .mobile-logo {
        display: none;
      }
    }
  `}
`;

export default Home;
