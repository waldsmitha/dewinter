import React from "react";

//Media
import email from "../media/email.svg";
import phone from "../media/phone.svg";
import insta from "../media/insta.svg";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { sliderContainer, slider, pageAnimation, opacity } from "../animations";

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
      <motion.div variants={opacity}>
        <h1>Contact</h1>
        <div className="contact-info">
          <div className="email">
            <div className="fixed-width">
              <img src={email} alt="" />
            </div>
            <p>info@dewintermetalworks.com</p>
          </div>
          <div className="phone">
            <div className="fixed-width">
              <img src={phone} alt="" />
            </div>
            <p>(978)123-4567</p>
          </div>
          <div className="insta">
            <div className="fixed-width">
              <img src={insta} alt="" />
            </div>
            <p>Instagram: @dewintermetalworks</p>
          </div>
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
    min-height: 80vh;

    h1 {
      border-bottom: 2px solid #ababab;
      line-height: 60%;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
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
