import React from "react";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Product = ({ data }) => {
  const description = data.data.description[0].text;
  const img1 = data.data.img_one;
  const img2 = data.data.img_two;
  const designer = data.data.designer_name[0].text;

  return (
    <StyledProduct>
      <div className="flex-container">
        <img src={img1.url} alt={img1.alt} />
        <img src={img2.url} alt={img2.alt} />
      </div>
      <div className="product-info">
        <p>{description}</p>
        <p>Designed by {designer}</p>
      </div>
      <div className="spacer">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled(motion.div)`
  margin-bottom: 5rem;
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
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    img {
      object-fit: cover;
      width: 100%;
      flex: 1 1 300px;
      /* max-height: 500px; */

      /* &:last-child {
        padding-left: 2rem;
      } */
      &:nth-child(2) {
        padding-left: 1rem;
      }
      &:nth-child(1) {
        padding-right: 1rem;
      }
    }
  }

  .product-info {
    text-align: justify;
    margin: 0 auto;
    max-width: 800px;
    p:first-child {
      padding-bottom: 1rem;
    }
    /* p:last-child {
      text-align: right;
    } */
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

export default Product;
