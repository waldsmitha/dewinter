import React from "react";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";

//Animations
import { opacity, scaleDown } from "../animations/aboutAnim";

//Components
import { useScroll } from "../components/useScroll";

const BioCard = ({ data }) => {
  const { bio_description, bio_photo, bio_title, bio_name } = data.data;
  const [element, controls] = useScroll();

  return (
    <StyledBioCard
      ref={element}
      initial="hidden"
      animate={controls}
      variants={opacity}
    >
      <div className="no-overflow">
        <motion.img
          variants={scaleDown}
          src={bio_photo.url}
          alt={bio_photo.alt}
        />
      </div>
      <div style={{ flexShrink: "1" }}>
        <h3>{bio_name[0].text}</h3>
        <h4>{bio_title[0].text}</h4>
      </div>
      {/* <p>{bio_description[0].text}</p> */}
    </StyledBioCard>
  );
};

const StyledBioCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;

  .no-overflow {
    overflow: hidden;
    flex-grow: 1;
  }

  h3 {
    text-transform: uppercase;
    margin-top: 1rem;
    font-size: clamp(2rem, 4vw, 3.5rem);
    white-space: nowrap;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default BioCard;
