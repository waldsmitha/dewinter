import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import wsb from "../media/white_small_badge.png";

//Animations
import { revealNavMobile } from "../animations";

const MobileNavMenu = ({ navActive, setNavActive }) => {
  const links = ["commissions", "originals", "process", "about", "contact"];
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname.split("/")[1] === "home") {
      console.log(pathname);
    }
  }, [pathname]);

  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <StyledMobileNavMenu
      variants={revealNavMobile}
      initial="hidden"
      animate={navActive ? "hidden" : "show"}
    >
      <Link to="/" onClick={() => navToggle()}>
        <img src={wsb} alt="" />
      </Link>
      <ul>
        {links.map((link) => (
          <Link to={link} key={link} onClick={() => navToggle()}>
            <li>{link}</li>
          </Link>
        ))}
      </ul>
    </StyledMobileNavMenu>
  );
};

const StyledMobileNavMenu = styled(motion.nav)`
  ${({ theme }) => css`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #131313;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    img,
    button {
      position: absolute;
    }
    img {
      top: 1rem;
      left: 1rem;
      height: 100px;
      left: 50%;
      transform: translateX(-50%);
    }
    button {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 0;
      background: none;
      color: #ababab;
      border: 1px solid #ababab;
      border-radius: 50%;
      height: 8rem;
      width: 8rem;
      text-transform: uppercase;
      font-family: "bonvoyage", serif;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      text-transform: uppercase;
      font-family: "bonvoyage", serif;
      text-align: center;
      padding: 1rem;
    }
  `}
`;
export default MobileNavMenu;
