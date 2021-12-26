import React from "react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const MobileNavButton = ({ navActive, setNavActive }) => {
  const navToggle = () => {
    setNavActive(!navActive);
  };

  return <StyledMobileNavButton onClick={navToggle}>NAV</StyledMobileNavButton>;
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
`;
export default MobileNavButton;
