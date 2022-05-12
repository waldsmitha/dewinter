import React from "react";

import { Link } from "react-router-dom";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectSelection = ({ data }) => {
  //   console.log(data);

  return (
    <Link key={data.uid} to={data.uid}>
      <StyledProjectSelection>
        <h2>{data.data.product_type[0].text}</h2>
        <img
          src={data.data.product_image.url}
          alt={data.data.product_image.alt}
        />
        <div className="gradient-bg"></div>

        {/* <div className="spacer">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </StyledProjectSelection>
    </Link>
  );
};

const StyledProjectSelection = styled(motion.div)`
  cursor: pointer;
  display: flex;
  position: relative;
  height: 100%;

  .gradient-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75px;
    background: rgb(19, 19, 19);
    background: linear-gradient(
      0deg,
      rgba(19, 19, 19, 1) 0%,
      rgba(10, 10, 10, 1) 13%,
      rgba(0, 0, 0, 0) 85%
    );
  }
  img {
    object-fit: cover;
    width: 100%;
    flex: 1 1 300px;
    height: 100%;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 3rem);
    text-transform: uppercase;
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-shadow: 1px 1px 1px #000, -1px -1px 1px #000;
    z-index: 1;
    white-space: nowrap;
  }
  .spacer {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 0.1rem 5rem;
      height: 0.1rem;
      margin: 0 1rem;
      background: white;
    }
    span:nth-child(2) {
      padding: 0.5rem;
      /* width: 5px; */
      /* height: 5px; */

      border-radius: 50%;
    }
  }

  @media screen and (max-width: 650px) {
    .flex-container {
      img {
        &:nth-child(2) {
          padding-left: 0;
        }
        &:nth-child(1) {
          padding-right: 0;
        }
      }
    }
  }
`;

export default ProjectSelection;
