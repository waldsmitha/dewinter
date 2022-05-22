import React from "react";

//Prismic
import {
  useSinglePrismicDocument,
  usePrismicDocumentsByType,
} from "@prismicio/react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Components
import BioCard from "../components/BioCard";
import ScrollTop from "../components/ScrollTop";
import { NoOverflow } from "../components/StyledComponents";

//Animations
import {
  stagger,
  pageAnimation,
  opacity,
  revealUp,
} from "../animations/animations";

const About = () => {
  const [documents] = usePrismicDocumentsByType("bio_card");
  const [aboutIntro] = useSinglePrismicDocument("about_intro");
  const data = aboutIntro && aboutIntro.data;
  const bios = documents && documents.results;
  const sortedBios =
    bios &&
    bios.sort((a, b) =>
      a.data.bio_name[0].text < b.data.bio_name[0].text ? 1 : -1
    );

  console.log(data && data);

  return (
    <>
      {data && (
        <StyledAbout
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.header
            style={{
              margin: "100px auto 50px auto",
              display: "flex",
              justifyContent: "center",
            }}
            variants={stagger}
          >
            <NoOverflow>
              <motion.h1 variants={revealUp}>DEWINTERMETALWORKS</motion.h1>
            </NoOverflow>
          </motion.header>
          {data &&
            data.main_description.map((paragraph) => (
              <NoOverflow>
                <motion.p className="company-info" variants={revealUp}>
                  {paragraph.text}
                </motion.p>
              </NoOverflow>
            ))}
          <motion.div style={{ marginTop: "50px" }} variants={opacity}>
            <motion.section className="gallery">
              {sortedBios &&
                sortedBios.map((item) => <BioCard key={item.id} data={item} />)}
            </motion.section>
          </motion.div>
          <ScrollTop />
        </StyledAbout>
      )}
    </>
  );
};

const StyledAbout = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: -1;

    & > * {
      margin: ${theme.spacing.sectionPaddingDesktop} 0;
    }

    .no-overflow {
      overflow: hidden;
    }

    header {
      width: 100%;
      max-width: 800px;
      margin: ${theme.spacing.sectionPaddingDesktop} auto;

      img {
        margin-top: 2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      h1 {
        text-align: center;
        font-size: clamp(2.25rem, 5vw, 6rem);
      }
    }

    .company-info {
      max-width: 800px;
      margin: 0 auto;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
      grid-column-gap: 5rem;
      grid-row-gap: 10rem;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }

    @media screen and (min-width: 740px) {
      header {
        flex-direction: row;
        img {
          margin-top: 0;
        }
      }
      .gallery {
        grid-template-columns: repeat(2, minmax(325px, 1fr));
      }
      .company-info {
        img {
          padding-left: 5rem;
          margin-top: 0;
        }
        p:last-child {
          margin-bottom: 0;
        }
      }
    }
  `}
`;

export default About;
