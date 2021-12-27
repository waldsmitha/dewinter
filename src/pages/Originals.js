import React from "react";

//Prismic
import { PrismicRichText, usePrismicDocumentsByType } from "@prismicio/react";

//Components
import Product from "../components/Product";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Originals = () => {
  const [documents] = usePrismicDocumentsByType("orig_product");
  const productInfo = documents && documents.results;

  return (
    <StyledOriginals>
      <h1>Originals</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        dolores deserunt repudiandae sit dicta error incidunt inventore natus,
        illum quasi nemo repellat cupiditate quia dolorem ipsam cumque
        laboriosam quaerat nesciunt iusto ad! Inventore, fugit ad? Optio iste
        quae inventore velit a, culpa aperiam tempora quidem incidunt
        praesentium aspernatur, nam in!
      </p>
      <section className="product-gallery">
        {productInfo &&
          productInfo.map((item) => <Product key={item.id} data={item} />)}
      </section>
    </StyledOriginals>
  );
};

const StyledOriginals = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;

    h1 {
      text-align: center;
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

export default Originals;
