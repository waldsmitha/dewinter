import React from "react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const MobileNavButton = ({ navActive, setNavActive }) => {
  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <StyledMobileNavButton onClick={navToggle}>
      <span className={navActive ? "" : "transform-1"}></span>
      <span className={navActive ? "" : "transform-2"}></span>
      <span className={navActive ? "" : "transform-3"}></span>
    </StyledMobileNavButton>
  );
};

const StyledMobileNavButton = styled(motion.button)`
  ${({ theme }) => css`
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    background: none;
    height: 7rem;
    width: 7rem;
    background: #131313;
    border: 2px solid white;
    color: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;

    span {
      padding: 0.1rem 2rem;
      margin: 0.5rem;
      background: white;
      transition: 0.3s;
    }

    .transform-1 {
      transform: translateY(1.2rem) rotate(45deg);
    }
    .transform-2 {
      transform: rotate(-45deg);
    }
    .transform-3 {
      transform: translateY(1rem);
      opacity: 0;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  `}
`;
export default MobileNavButton;
