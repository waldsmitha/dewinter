import React from "react";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import background from "../media/background.png";

const BioCard = () => {
  return (
    <StyledBioCard>
      <img src={background} alt="" />
      <h2>Firstname Lastname</h2>
      <p>Person Title</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus
        maiores fugiat eius? Porro commodi repudiandae reprehenderit tempore
        numquam nostrum.
      </p>
    </StyledBioCard>
  );
};

const StyledBioCard = styled(motion.div)`
  width: 100%;
  img {
    width: 100%;
  }
`;

export default BioCard;
