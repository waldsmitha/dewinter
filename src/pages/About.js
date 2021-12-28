import React from "react";

//Prismic
import {
  useSinglePrismicDocument,
  usePrismicDocumentsByType,
} from "@prismicio/react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Theme from "../Theme";
//Components
import BioCard from "../components/BioCard";

//Media
import background from "../media/background.png";

const About = () => {
  const [documents] = usePrismicDocumentsByType("bio_card");
  const [aboutIntro] = useSinglePrismicDocument("about_intro");
  const data = aboutIntro && aboutIntro.data;
  const bios = documents && documents.results;

  return (
    <StyledAbout>
      {data && (
        <>
          <header>
            <div>
              <img src={data.title_image.url} alt="" />
            </div>
            <h1>
              About <br /> De Winter <br /> Metalworks
            </h1>
          </header>
          <section className="company-info">
            <div className="company-bio">
              <h2>{data.subtitle[0].text}</h2>
              <p>{data.description[0].text}</p>
              <p>{data.description[1].text}</p>
            </div>
            <div>
              <img src={data.subsection_image.url} alt="" />
            </div>
          </section>
        </>
      )}
      <section className="gallery">
        {bios && bios.map((item) => <BioCard key={item.id} data={item} />)}
      </section>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    margin: 0 auto;
    /* overflow-x: hidden; */
    padding: 0 2rem;

    & > * {
        /* margin: ${theme.spacing.sectionPaddingMobile} 0; */
        margin: ${theme.spacing.sectionPaddingDesktop} 0;
      }

    header {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between
      width: 100%;
       
      img {
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
        flex: 1 1 350px;
      }

      img {
        width: 100%;
        height: 100%;
       
        object-fit: cover;
        
      }
      p {
        margin: 1rem 0;
      }

      /* .company-bio {
        margin-right: 5rem;
      } */
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
          padding-right:10rem;
        }
      }
      .company-info 
    {
      img {
        padding-left: 10rem;
      }
    }
    }
  `}
`;

export default About;
