import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import wsb from "../media/white_small_badge.png";
import email from "../media/email.svg";
import phone from "../media/phone.svg";
import insta from "../media/insta.svg";

const Footer = () => {
  const location = useLocation().pathname;
  const [footerActive, setFooterActive] = useState(true);

  useEffect(() => {
    if (location === "/" || location === "/contact") {
      setFooterActive(false);
    } else {
      setFooterActive(true);
    }
  }, [location]);

  return (
    <>
      {footerActive && (
        <StyledFooter
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 5,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0 }}
        >
          <div className="line-deco">
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
          </div>
          <img className="logo-footer" src={wsb} alt="" />
          <p>(C) De Winter Metal Works 2021. All Rights Reserved.</p>
          <div className="social-media">
            <a href="mailto: info@dewintermetalworks.com" className="email">
              <img src={email} alt="" />
            </a>
            <a href="tel:978-123-4567" className="phone">
              {" "}
              <img src={phone} alt="" />
            </a>
            <a
              href="https://www.instagram.com/dewintermetalworks/"
              target="_blank"
              rel="noreferrer"
              className="insta"
            >
              {" "}
              <img src={insta} alt="" />
            </a>
          </div>
        </StyledFooter>
      )}
    </>
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
    opacity: 0;

    & > * {
      margin-bottom: 2rem;
    }

    .logo-footer {
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
