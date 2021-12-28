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
          <p>{data.description[0].text}</p>
        </>
      )}
      {processes &&
        processes.map((item) => <VideoCard key={item.id} data={item} />)}
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

    h1 {
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      & > * {
        margin: ${theme.spacing.sectionPaddingMobile} 0;
      }
    }
  `}
`;

export default Process;
