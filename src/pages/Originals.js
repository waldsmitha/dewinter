import React from "react";

//Prismic
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";

//Components
import ProductGallery from "../components/ProductGallery";
import ScrollTop from "../components/ScrollTop";

//Hooks
import useWindowDimensions from "../components/useWindowDimensions";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
// import { pageAnimation, opacity } from "../animations/animations";
import { pageAnimation } from "../animations/originalsAnim";

import {
  revealUp,
  revealDown,
  revealLeft,
  revealRight,
} from "../animations/originalsAnim";
import { useEffect } from "react/cjs/react.development";

const Originals = () => {
  const [documents] = usePrismicDocumentsByType("orig_product");
  const [origIntro] = useSinglePrismicDocument("original_designs");
  const data = origIntro && origIntro.data;
  const productInfo = documents && documents.results;

  const { height } = useWindowDimensions();

  useEffect(() => {
    console.log(height);
  }, [height]);

  return (
    <>
      {data && (
        <StyledOriginals
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.div className="intro">
            <h1>{data.title[0].text}</h1>
            <div className="sub-header">
              <motion.span variants={revealLeft}></motion.span>
              <motion.div className="no-overflow">
                <motion.h3 variants={revealDown}>
                  Original Designs by Experienced Artisans
                </motion.h3>
              </motion.div>
              <motion.span variants={revealRight}></motion.span>
            </div>
            <motion.div className="no-overflow">
              <motion.p variants={revealUp}>
                {data.description[0].text}
              </motion.p>
            </motion.div>
          </motion.div>
          {productInfo && <ProductGallery productInfo={productInfo} />}
          <ScrollTop />
        </StyledOriginals>
      )}
    </>
  );
};

const StyledOriginals = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    min-height: 100vh;

    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    width: 100vw;
    color: ${theme.color.secondary};

    h1,
    h3 {
      text-align: center;
    }

    h1 {
      text-transform: uppercase;
    }

    h3 {
      margin-bottom: 25px;

      font-size: 2rem;
    }

    .no-overflow {
      overflow: hidden;
    }

    .sub-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      margin: 25px;

      span {
        padding: 0.1rem 2rem;
        height: 0.25rem;
        background: ${theme.color.secondary};
      }

      h3 {
        /* min-width: 250px; */
        margin: 0 2rem;
      }
    }
    .sub-header-mobile {
      margin-bottom: 25px;
      margin: 25px;

      & > * {
        display: inline-block;
      }

      span {
        padding: 0.05rem 5rem;
        height: 0.05rem;
        width: 100%;
        background: ${theme.color.secondary};
      }

      h3 {
        margin: 0 2rem;
        padding-top: 1rem;
        font-family: "Gothic A1", sans-serif;
        font-weight: 300;
      }
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

export default Originals;
