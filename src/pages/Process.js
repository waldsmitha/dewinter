import React from "react";

//Prismic
import {
  useSinglePrismicDocument,
  usePrismicDocumentsByType,
} from "@prismicio/react";

//Components
import VideoCard from "../components/VideoCard";
import ScrollTop from "../components/ScrollTop";
import { NoOverflow } from "../components/StyledComponents";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { pageAnimation } from "../animations/animations";
import { revealUp } from "../animations/processAnim";

const Process = () => {
  const [documents] = usePrismicDocumentsByType("process_video");
  const [processIntro] = useSinglePrismicDocument("process_intro");
  const data = processIntro && processIntro.data;
  const processes = documents && documents.results;
  const descriptionArr = data && data.description;

  return (
    <>
      {data && (
        <StyledProcess
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <div className="intro">
            <h1>{data.title[0].text}</h1>
            <div className="description">
              {descriptionArr.map((item, i) => (
                <NoOverflow key={`${item.type}${i}`}>
                  <motion.p variants={revealUp}>{item.text}</motion.p>
                </NoOverflow>
              ))}
            </div>
          </div>

          <section className="gallery">
            {processes &&
              processes.map((item) => <VideoCard key={item.id} data={item} />)}
          </section>

          <ScrollTop />
        </StyledProcess>
      )}
    </>
  );
};

const StyledProcess = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    /* overflow: hidden; */

    & > * {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;
    }

    .description {
      max-width: 800px;
      margin: 0 auto;
      p:first-child {
        padding-bottom: 1rem;
      }
    }

    h1 {
      text-align: center;
      margin-bottom: 25px;
    }

    .intro {
      margin-bottom: ${theme.spacing.sectionPaddingDesktop};
    }

    .gallery {
      display: grid;
      grid-row-gap: 5rem;
    }

    @media screen and (max-width: 768px) {
      & > * {
        margin: ${theme.spacing.sectionPaddingMobile} 0;
      }
    }
    @media screen and (min-width: 768px) {
      .gallery {
        grid-template-columns: repeat(2, minmax(350px, 1fr));
        grid-column-gap: 2rem;
        grid-row-gap: 10rem;
        width: 100%;
      }
    }
    @media screen and (min-width: 1000px) {
      .gallery {
        grid-column-gap: 5rem;
      }
    }
  `}
`;

export default Process;
