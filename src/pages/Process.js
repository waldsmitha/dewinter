import React from "react";

//Components
import VideoCard from "../components/VideoCard";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Process = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <StyledProcess>
      <div>
        <h1>Process</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          voluptatibus est. Obcaecati, facilis porro corporis doloribus
          architecto aperiam incidunt assumenda?
        </p>
      </div>
      {arr.map((item) => (
        <VideoCard />
      ))}
    </StyledProcess>
  );
};

const StyledProcess = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;

    & > * {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;
    }

    h1 {
      text-align: center;
    }
  `}
`;

export default Process;
