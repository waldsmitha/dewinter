import React from "react";

//Prismic
import {
  useSinglePrismicDocument,
  usePrismicDocumentsByType,
} from "@prismicio/react";

//Components
import VideoCard from "../components/VideoCard";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { sliderContainer, slider, pageAnimation, opacity } from "../animations";

const Process = () => {
  const [documents] = usePrismicDocumentsByType("process_video");
  const [processIntro] = useSinglePrismicDocument("process_intro");
  const data = processIntro && processIntro.data;
  const processes = documents && documents.results;

  return (
    <StyledProcess
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
          <div>
            <h1>{data.title[0].text}</h1>
            <div className="description">
              <p>{data.description[0].text}</p>
              <p>{data.description[1].text}</p>
            </div>
          </div>
        )}
        <section className="gallery">
          {processes &&
            processes.map((item) => <VideoCard key={item.id} data={item} />)}
        </section>
      </motion.div>
    </StyledProcess>
  );
};

const StyledProcess = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 2rem;

    & > * {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;
    }
    .description {
      p:first-child {
        margin-bottom: 1rem;
      }
    }

    h1 {
      text-align: center;
      margin-bottom: 25px;
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

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 15%;
  width: 100%;
  height: 100vh;
  background: #131313;
  z-index: 10;
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

export default Process;
