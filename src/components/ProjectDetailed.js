import React from "react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { pageAnimation, opacity } from "../animations/animations";

//Prismic
import {
  usePrismicDocumentsByType,
  usePrismicDocumentByUID,
  useSinglePrismicDocument,
} from "@prismicio/react";

import ScrollTop from "../components/ScrollTop";

const ProjectDetailed = ({ pathname }) => {
  const splitPathname = pathname.split("/")[2];
  const [documents] = usePrismicDocumentByUID(
    "project_detailed_gallery",
    `${splitPathname}`
  );
  const images = documents && documents.data.body[0].items;
  //   console.log(documents);
  //   console.log(pathname.split("/")[2]);

  return (
    <StyledProjectDetailed
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={opacity}>
        <motion.div className="intro">
          <h1>{documents && documents.data.detailed_title[0].text}</h1>
        </motion.div>
        <motion.div variants={opacity}>
          {images &&
            images.map((image) => (
              <img
                key={image.project_detailed_gallery_image.url}
                src={image.project_detailed_gallery_image.url}
                alt={image.project_detailed_gallery_image.alt}
              />
            ))}
        </motion.div>
      </motion.div>
      <ScrollTop />
      {/* <div className="spacer">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </StyledProjectDetailed>
  );
};

const StyledProjectDetailed = styled(motion.div)`
  ${({ theme }) => css`
    h1 {
      text-align: center;
      margin-bottom: 25px;
    }

    .intro {
      margin: 0 auto;
      margin-top: ${theme.spacing.sectionPaddingDesktop};
      max-width: 800px;
      text-transform: capitalize;
    }

    margin-bottom: 5rem;

    img {
      width: 100%;
      object-fit: cover;
      padding: 2.5rem 5rem;
    }

    h2 {
      font-size: 4rem;
    }
    .spacer {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        padding: 0.1rem 5rem;
        height: 0.1rem;
        margin: 0 1rem;
        background: white;
      }
      span:nth-child(2) {
        padding: 0.5rem;
        /* width: 5px; */
        /* height: 5px; */

        border-radius: 50%;
      }
    }
    .flex-container {
      // display: flex;
      flex-wrap: wrap;
      margin-bottom: 2rem;

      img {
        object-fit: cover;
        width: 100%;
        flex: 1 1 300px;
      }
    }

    @media screen and (max-width: 650px) {
      img {
        padding: 1rem 2rem;
      }
      .flex-container {
        img {
          &:nth-child(2) {
            padding-left: 0;
          }
          &:nth-child(1) {
            padding-right: 0;
          }
        }
      }
    }
  `}
`;

export default ProjectDetailed;
