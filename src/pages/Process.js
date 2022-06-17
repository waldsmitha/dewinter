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
              <NoOverflow>
                <motion.div variants={revealUp}>
                  <motion.h2>Custom Fabrication</motion.h2>
                  <motion.p>
                    Our workshop offers expert custom fabrication for design
                    professionals and individual clients. Although our expertise
                    lies in metal fabrication, we do work with other materials
                    and with specialized vendors to bring any project to life.
                    In addition to fabrication, we also offer design
                    consultation and drafting services. Our mission is to
                    provide a full-service experience in which our clients can
                    rely on our knowledge for the development of their projects
                    from inception to completion.
                  </motion.p>
                </motion.div>
              </NoOverflow>
              <NoOverflow>
                <motion.div variants={revealUp}>
                  <motion.h2>
                    <em>As Bold As Brass</em> Design Studio
                  </motion.h2>
                  <motion.p>
                    ABAB is DeWinterMetalWorks’s very own design studio
                    specialized in furniture design. With a unique esthetic
                    grounded in organic shapes and raw materials, our pieces are
                    designed to blend functionality and art. ABAB’s line of
                    made-to-order furniture will be launched in the Fall of 2022
                    – stay tuned.
                  </motion.p>
                </motion.div>
              </NoOverflow>
              <NoOverflow>
                <motion.p variants={revealUp}>
                  For all inquiries, please contact info@dewintermetalworks.com
                </motion.p>
              </NoOverflow>
            </div>
          </div>
          {/* 
          <section className="gallery">
            {processes &&
              processes.map((item) => <VideoCard key={item.id} data={item} />)}
          </section> */}

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
      & > * {
        margin: 5rem 0;
      }
    }

    h1 {
      text-align: center;
      margin-bottom: 25px;
      text-transform: uppercase;
    }

    h2 {
      padding-bottom: 1rem;
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
