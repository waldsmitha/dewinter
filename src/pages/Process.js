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

const Process = () => {
  const [documents] = usePrismicDocumentsByType("process_video");
  const [processIntro] = useSinglePrismicDocument("process_intro");
  const data = processIntro && processIntro.data;
  const processes = documents && documents.results;

  return (
    <StyledProcess>
      {data && (
        <>
          <h1>{data.title[0].text}</h1>
          <div className="description">
            <p>{data.description[0].text}</p>
            <p>{data.description[1].text}</p>
          </div>
        </>
      )}
      <section className="gallery">
        {processes &&
          processes.map((item) => <VideoCard key={item.id} data={item} />)}
      </section>
    </StyledProcess>
  );
};

const StyledProcess = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
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
