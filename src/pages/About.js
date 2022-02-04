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

import { scaleDown } from "../animations/aboutAnim";

const About = () => {
  const [documents] = usePrismicDocumentsByType("bio_card");
  const [aboutIntro] = useSinglePrismicDocument("about_intro");
  const data = aboutIntro && aboutIntro.data;
  const bios = documents && documents.results;
  const sortedBios =
    bios &&
    bios.sort((a, b) =>
      a.data.bio_name[0].text > b.data.bio_name[0].text ? 1 : -1
    );

  return (
    <>
      {data && (
        <StyledAbout
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={opacity}>
            <motion.header>
              <NoOverflow>
                <motion.img
                  variants={scaleDown}
                  src={data.title_image.url}
                  alt=""
                />
              </NoOverflow>
              <motion.div variants={stagger} className="about-header">
                <NoOverflow>
                  <motion.h1 variants={revealUp}>About</motion.h1>
                </NoOverflow>
                <NoOverflow>
                  <motion.h1 variants={revealUp}>De Winter</motion.h1>
                </NoOverflow>
                <NoOverflow>
                  <motion.h1 variants={revealUp}>Metalworks</motion.h1>
                </NoOverflow>
              </motion.div>
            </motion.header>
            <motion.div className="intro">
              <section className="company-info">
                <div className="company-bio">
                  <h2>{data.subtitle[0].text}</h2>
                  <p>{data.description[0].text}</p>
                  <p>{data.description[1].text}</p>
                </div>
                <div className="bio-image">
                  <img src={data.subsection_image.url} alt="" />
                </div>
              </section>
              <motion.section className="gallery">
                {sortedBios &&
                  sortedBios.map((item) => (
                    <BioCard key={item.id} data={item} />
                  ))}
              </motion.section>
            </motion.div>
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

    & > * {
        /* margin: ${theme.spacing.sectionPaddingMobile} 0; */
        margin: ${theme.spacing.sectionPaddingDesktop} 0;
      }

      .no-overflow {
      overflow: hidden;
    }

    .intro {
      & > * {margin: ${theme.spacing.sectionPaddingDesktop} 0;}
    }

    header {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between
      width: 100%;
       
      img {
        margin-top: 2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .company-info {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      padding: 5rem 0;
   

      & > * {
        flex: 3 1 350px;
      
      }
      .bio-image {
        flex-grow: 1;
      }

      img {
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        object-fit: cover;
        
      }
      p {
        margin: 1rem 0;
      }

    
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-column-gap: 5rem;
      grid-row-gap: 10rem;
      width: 100%;

      
    }

    @media screen and (min-width: 740px){
      header{
        flex-direction: row;
        img {
          margin-top: 0;
        }
        .about-header {
          margin-left: 5rem;
        }
      }
      .gallery {
        grid-template-columns: repeat(2, minmax(350px, 1fr));
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
