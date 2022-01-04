import React from "react";

//Media
import email from "../media/email.svg";
import phone from "../media/phone.svg";
import insta from "../media/insta.svg";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import {
  sliderContainer,
  slider,
  pageAnimation,
  opacity,
} from "../animations/animations";

//Components
import { Frame1, Frame2, Frame3, Frame4 } from "../components/StyledComponents";

const Contact = () => {
  return (
    <StyledContact
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
      <motion.div variants={opacity} className="content">
        <h1>Contact</h1>
        <div className="contact-info">
          <a href="mailto: info@dewintermetalworks.com" className="email">
            <div className="fixed-width">
              <img src={email} alt="" />
            </div>
            <p>info@dewintermetalworks.com</p>
          </a>
          <a href="tel:978-123-4567" className="phone">
            <div className="fixed-width">
              <img src={phone} alt="" />
            </div>
            <p>(978)123-4567</p>
          </a>
          <a
            href="https://www.instagram.com/dewintermetalworks/"
            target="_blank"
            rel="noreferrer"
            className="insta"
          >
            <div className="fixed-width">
              <img src={insta} alt="" />
            </div>
            <p>Instagram: @dewintermetalworks</p>
          </a>
        </div>
      </motion.div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto 0;
    min-height: 69vh;
    position: relative;
    margin-top: 100px;

    h1 {
      border-bottom: 2px solid #ababab;
      line-height: 60%;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }

    .content {
      transform: translateY(-100px);
    }

    .email,
    .phone,
    .insta {
      display: flex;
      margin: 1rem 0;
      align-items: center;
    }
    .fixed-width {
      width: 4rem;
      margin-right: 1rem;
    }
  `}
`;

export default Contact;
