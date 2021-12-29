import React from "react";

//Prismic
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";

//Components
import Product from "../components/Product";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import background from "../media/background-blurred.png";

const Commissions = () => {
  const [documents] = usePrismicDocumentsByType("comm-product");
  const [commIntro] = useSinglePrismicDocument("commissioned_designs");
  const data = commIntro && commIntro.data;
  const productInfo = documents && documents.results;

  return (
    <StyledCommissions>
      {data && (
        <div>
          <h1>{data.title[0].text}</h1>
          <p>{data.description[0].text}</p>
        </div>
      )}
      <section className="product-gallery">
        {productInfo &&
          productInfo.map((item) => <Product key={item.id} data={item} />)}
      </section>
    </StyledCommissions>
  );
};

const StyledCommissions = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;
    /* background-image: url(${background});
    background-size: cover;
    background-position: center; */

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

export default Commissions;
