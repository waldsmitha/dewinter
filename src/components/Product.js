import React from "react";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import background from "../media/background.png";

const Product = () => {
  return (
    <StyledProduct>
      <div className="flex-container">
        <img src={background} alt="" />
        <img src={background} alt="" />
      </div>
      <div className="product-info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          repellendus minima dolores a vitae reprehenderit expedita aliquam
          error minus consequatur?
        </p>
        <p>-Designer Name</p>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled(motion.div)`
  margin-bottom: 5rem;

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    img {
      object-fit: cover;
      width: 100%;
      flex: 1 1 300px;
    }
  }

  .product-info {
    p:first-child {
      padding-bottom: 1rem;
      width: 75%;
    }
    p:last-child {
      text-align: right;
    }
  }
`;

export default Product;
