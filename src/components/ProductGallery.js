import React from "react";

//Components
import Product from "../components/Product";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ProductGallery = ({ productInfo }) => {
  return (
    <StyledProductGallery>
      {productInfo.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </StyledProductGallery>
  );
};

const StyledProductGallery = styled(motion.div)`
  ${({ theme }) => css`
    margin: ${theme.spacing.sectionPaddingDesktop} 0;

    & > * {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;
    }
  `}
`;

export default ProductGallery;
