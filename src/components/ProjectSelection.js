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
        <div className="flex-container">
          <h2>{data.data.product_type[0].text}</h2>
          <img
            src={data.data.product_image.url}
            alt={data.data.product_image.alt}
          />
        </div>
        <div className="spacer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </StyledProjectSelection>
    </Link>
  );
};

const StyledProjectSelection = styled(motion.div)`
  margin-bottom: 5rem;
  cursor: pointer;

  h2 {
    font-size: 4rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
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
  .flex-container {
    // display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    img {
      object-fit: cover;
      width: 100%;
      flex: 1 1 300px;
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
