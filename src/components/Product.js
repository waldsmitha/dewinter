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
        <p>{designer}</p>
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
