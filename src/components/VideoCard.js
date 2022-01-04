import React from "react";

//Components
import { useScroll } from "../components/useScroll";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { opacity } from "../animations/animations";

const VideoCard = ({ data }) => {
  const {
    process_video,
    process_title,
    process_description,
    process_upload_date,
  } = data.data;

  const [element, controls] = useScroll();

  return (
    <StyledVideoCard
      ref={element}
      initial="hidden"
      animate={controls}
      variants={opacity}
    >
      <div className="video">
        <video
          src={process_video.url}
          preload="metadata"
          controls="controls"
          type="video/mp4"
        ></video>
      </div>
      <div className="title">
        <p>{process_title[0].text}</p>
        <p>{process_upload_date[0].text}</p>
      </div>
      <div className="description">
        <p>{process_description[0].text}</p>
      </div>
    </StyledVideoCard>
  );
};

const StyledVideoCard = styled(motion.div)`
  ${({ theme }) => css``}

  .title {
    margin: 1rem 0;

    /* p:first-child {
      font-family: "bonvoyage", serif;
    } */
    p:last-child {
      font-size: 1.25rem;
    }
  }

  video {
    width: 100%;
    min-height: 300px;
    object-fit: cover;
  }
`;

export default VideoCard;
