import React from "react";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import wsb from "../media/white_small_badge.png";
import email from "../media/email.svg";
import phone from "../media/phone.svg";
import insta from "../media/insta.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="line-deco">
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
      </div>
      <img className="logo" src={wsb} alt="" />
      <p>(C) De Winter Metal Works 2021. All Rights Reserved.</p>
      <div className="social-media">
        <img src={email} alt="" />
        <img src={phone} alt="" />
        <img src={insta} alt="" />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  ${({ theme }) => css`
    max-width: ${theme.spacing.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-family: "bonvoyage", serif;
    font-weight: 300;
    padding: 2rem;
    text-align: center;

    & > * {
      margin-bottom: 2rem;
    }

    .logo {
      height: 100px;
    }
    .social-media {
      display: flex;
      img {
        margin: 0 1rem;
      }
    }
    .line-deco {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;

      .first,
      .second,
      .third {
        background: #ababab;
      }
      .first,
      .second {
        width: 100%;
        height: 0.1rem;
        padding: 0.1rem 1rem;
        margin: 0.3rem 0;
        flex: 1 1 auto;
      }
      .second {
        width: 60%;
        margin: 0 auto;
      }
      .third {
        padding: 1.5rem 0.1rem;
        margin: 0.3rem auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `}
`;

export default Footer;
