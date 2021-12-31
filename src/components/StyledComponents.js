//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Frame Animation
export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #131313;
  z-index: 10;
`;

export const Frame2 = styled(Frame1)`
  background: #ababab;
`;

export const Frame3 = styled(Frame1)`
  background: #131313;
`;

export const Frame4 = styled(Frame1)`
  background: #ababab;
`;
