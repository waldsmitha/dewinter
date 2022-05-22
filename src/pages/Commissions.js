import React from "react";

//Prismic
import {
  usePrismicDocumentByUID,
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";

//Components
import ProductGallery from "../components/ProductGallery";
import ScrollTop from "../components/ScrollTop";
import ProjectSelection from "../components/ProjectSelection";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { pageAnimation, opacity } from "../animations/animations";

const Commissions = () => {
  const [documents] = usePrismicDocumentsByType("products_selection");
  const [commIntro] = useSinglePrismicDocument("commissioned_designs");
  const data = commIntro && commIntro.data;
  const filteredData =
    documents &&
    documents.results.filter((item) => item.data.product_key === "project");

  const sortedProductInfo =
    filteredData &&
    filteredData.sort((a, b) => {
      if (a.slugs[0] < b.slugs[0]) return -1;
      if (a.slugs[0] > b.slugs[0]) return 1;
      return 0;
    });
  // console.log(sortedProductInfo && sortedProductInfo);

  // console.log(sortedProductInfo && sortedProductInfo);

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
            </motion.div>
            <div className="flex">
              {sortedProductInfo &&
                sortedProductInfo.map((product) => (
                  <ProjectSelection key={product.id} data={product} />
                ))}
            </div>
          </motion.div>
          <ScrollTop />
        </StyledCommissions>
      )}
    </>
  );
};

const StyledCommissions = styled(motion.div)`
  ${({ theme }) => css`
    z-index: -1;
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
      margin-bottom: 50px;
      max-width: 800px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
    }

    .flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;

      & > * {
        flex: 1 1 400px;
        max-width: 500px;
      }
    }

    @media screen and (max-width: 768px) {
      & > * {
        margin: ${theme.spacing.sectionPaddingMobile} 0;
      }

      .flex {
        flex: 1 1 300px;
      }
    }
  `}
`;

export default Commissions;
