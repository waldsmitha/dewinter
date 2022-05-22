import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

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
  const [originalPathname, setOriginalPathname] = useState(false);

  useEffect(() => {
    pathname.split("/")[1] === "originalpieces"
      ? setOriginalPathname(true)
      : setOriginalPathname(false);
  }, [pathname]);

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
        <motion.div
          variants={opacity}
          className={cn("project-detailed-grid", {
            "project-detailed-grid-original": originalPathname,
          })}
        >
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
    max-width: ${theme.spacing.maxWidth};
    z-index: -1;

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
    margin: 0 auto;
    margin-bottom: 5rem;

    img {
      width: 100%;
      object-fit: cover;
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
    .project-detailed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 2rem;
    }
    .project-detailed-grid-original {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 650px) {
      .project-detailed-grid-original {
        grid-template-columns: 1fr;
      }
    }
  `}
`;

export default ProjectDetailed;
