import React from "react";

//Prismic
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";

//Components
import ProductOriginals from "../components/ProductOriginals";
import ScrollTop from "../components/ScrollTop";
import { Frame1, Frame2, Frame3, Frame4 } from "../components/StyledComponents";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import {
  sliderContainer,
  slider,
  pageAnimation,
  opacity,
} from "../animations/animations";

import {
  revealUp,
  revealDown,
  revealLeft,
  revealRight,
} from "../animations/originalsAnim";

const Originals = () => {
  const [documents] = usePrismicDocumentsByType("orig_product");
  const [origIntro] = useSinglePrismicDocument("original_designs");
  const data = origIntro && origIntro.data;
  const productInfo = documents && documents.results;

  return (
    <StyledOriginals
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
        )}
        <section className="product-gallery">
          {productInfo &&
            productInfo.map((item) => (
              <ProductOriginals key={item.id} data={item} />
            ))}
        </section>
      </motion.div>
      <ScrollTop />
    </StyledOriginals>
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
        padding: 0.1rem 3rem;
        height: 0.25rem;
        background: ${theme.color.secondary};
      }

      h3 {
        margin: 0 2rem;
      }
    }

    .intro {
      margin: 0 auto;
      margin-top: ${theme.spacing.sectionPaddingDesktop};
      max-width: 800px;
    }

    .product-gallery {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;

      & > * {
        margin: ${theme.spacing.sectionPaddingDesktop} 0;
      }
    }

    @media screen and (max-width: 768px) {
      & > * {
        margin: ${theme.spacing.sectionPaddingMobile} 0;
      }
    }
  `}
`;

export default Originals;
