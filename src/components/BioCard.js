import React from "react";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const BioCard = ({ data }) => {
  const { bio_description, bio_photo, bio_title, bio_name } = data.data;

  return (
    <StyledBioCard>
      <img src={bio_photo.url} alt={bio_photo.alt} />
      <h3>{bio_name[0].text}</h3>
      <h4>{bio_title[0].text}</h4>
      <p>{bio_description[0].text}</p>
    </StyledBioCard>
  );
};

const StyledBioCard = styled(motion.div)`
  width: 100%;
  h3 {
    text-transform: uppercase;
    margin-top: 1rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
  }
`;

export default BioCard;
