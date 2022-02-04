import React from "react";

//Prismic
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";

//Components
import ProductGallery from "../components/ProductGallery";
import ScrollTop from "../components/ScrollTop";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { pageAnimation, opacity } from "../animations/animations";

const Commissions = () => {
  const [documents] = usePrismicDocumentsByType("comm-product");
  const [commIntro] = useSinglePrismicDocument("commissioned_designs");
  const data = commIntro && commIntro.data;
  const productInfo = documents && documents.results;

  return (
    <>
      {data && (
        <StyledCommissions
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={opacity}>
            <motion.div className="intro">
              <h1>{data.title[0].text}</h1>
              <p>{data.description[0].text}</p>
            </motion.div>
            {productInfo && <ProductGallery productInfo={productInfo} />}
          </motion.div>
          <ScrollTop />
        </StyledCommissions>
      )}
    </>
  );
};

const StyledCommissions = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;

    h1 {
      text-align: center;
      margin-bottom: 25px;
    }

    .intro {
      margin: 0 auto;
      margin-top: ${theme.spacing.sectionPaddingDesktop};
      max-width: 800px;
    }

    @media screen and (max-width: 768px) {
      & > * {
        margin: ${theme.spacing.sectionPaddingMobile} 0;
      }
    }
  `}
`;

export default Commissions;
