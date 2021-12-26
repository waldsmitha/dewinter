import React from "react";

//Media
import video from "../media/video.mp4";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const VideoCard = () => {
  return (
    <StyledVideoCard>
      <div className="video">
        <video
          src={video}
          preload="metadata"
          controls="controls"
          type="video/mp4"
        ></video>
      </div>
      <div className="title">
        <p>Video Title</p>
      </div>
      <div className="date">
        <p>12/12/2021</p>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          obcaecati labore tempore aliquam ab adipisci ullam magni temporibus
          incidunt repellat, odio perferendis velit repudiandae necessitatibus
          debitis veniam nulla earum odit.
        </p>
      </div>
    </StyledVideoCard>
  );
};

const StyledVideoCard = styled(motion.div)`
  ${({ theme }) => css``}

  video {
    width: 100%;
  }
`;

export default VideoCard;
