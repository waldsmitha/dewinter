import React from "react";

//Media
import video from "../media/video.mp4";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const VideoCard = ({ data }) => {
  const {
    process_video,
    process_title,
    process_description,
    process_upload_date,
  } = data.data;

  return (
    <StyledVideoCard>
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
      </div>
      <div className="date">
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

  video {
    width: 100%;
  }
`;

export default VideoCard;
