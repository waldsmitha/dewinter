import React from "react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Theme from "../Theme";
//Components
import BioCard from "../components/BioCard";

//Media
import background from "../media/background.png";

const About = () => {
  return (
    <StyledAbout>
      <header>
        <div>
          <img src={background} alt="" />
        </div>
        <h1>
          About
          <br />
          De Winter Metalworks
        </h1>
      </header>
      <section className="company-info">
        <div className="company-bio">
          <h2>About the Company</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            atque quaerat pariatur recusandae ullam facere cupiditate
            dignissimos non nostrum tempora, magni quae autem porro voluptates
            soluta.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            quidem at magnam similique numquam nobis delectus modi vitae
            deserunt ab voluptas consectetur voluptates aliquid, ratione
            aspernatur molestias vero eos aperiam.
          </p>
        </div>
        <div>
          <img src={background} alt="" />
        </div>
      </section>
      <section className="gallery">
        <BioCard />
        <BioCard />
        <BioCard />
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
    section,
    header {
      margin: 10vh 0;
    }
    .company-info {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      padding: 5rem 0;
      /* margin-right: 5rem; */

      & > * {
        flex: 1 1 auto;
      }

      img {
        width: 100%;
        height: auto;
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
      grid-gap: 2rem;
      width: 100%;
    }
  `}
`;

export default About;
