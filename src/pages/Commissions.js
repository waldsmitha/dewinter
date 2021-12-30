import React from "react";

//Prismic
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";

//Components
import Product from "../components/Product";
import ScrollTop from "../components/ScrollTop";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { sliderContainer, slider, pageAnimation, opacity } from "../animations";

const Commissions = () => {
  const [documents] = usePrismicDocumentsByType("comm-product");
  const [commIntro] = useSinglePrismicDocument("commissioned_designs");
  const data = commIntro && commIntro.data;
  const productInfo = documents && documents.results;

  return (
    <StyledCommissions
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <motion.div variants={opacity}>
        {data && (
          <motion.div>
            <h1>{data.title[0].text}</h1>
            <p>{data.description[0].text}</p>
          </motion.div>
        )}
        <section className="product-gallery">
          {productInfo &&
            productInfo.map((item) => <Product key={item.id} data={item} />)}
        </section>
      </motion.div>
      <ScrollTop />
    </StyledCommissions>
  );
};

const StyledCommissions = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 2rem;

    h1 {
      text-align: center;
      margin-bottom: 25px;
    }

    & > * {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;
    }

    @media screen and (max-width: 768px) {
      & > * {
        margin: ${theme.spacing.sectionPaddingMobile} 0;
      }
    }
  `}
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 15%;
  width: 100%;
  height: 100vh;
  background: #131313;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ababab;
`;
const Frame3 = styled(Frame1)`
  background: #131313;
`;
const Frame4 = styled(Frame1)`
  background: #ababab;
`;

export default Commissions;
