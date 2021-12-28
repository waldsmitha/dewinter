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
      <span></span>
      <span></span>
      <span></span>
    </StyledMobileNavButton>
  );
};

const StyledMobileNavButton = styled(motion.button)`
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
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default MobileNavButton;
