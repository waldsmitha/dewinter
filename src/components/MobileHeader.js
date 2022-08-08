import React from "react";
import { Link , useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import white_small_badge from "../media/white_small_badge.png";

//Animations
import { AnimatePresence } from "framer-motion";
import { revealDown } from "../animations/animations";

const MobileHeader = ({ pathname }) => {
  const location = useLocation().pathname;

  return (
    <AnimatePresence>
      {pathname !== "/" && (
        <StyledMobileHeader
          variants={revealDown}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={location === '/about' && 'inverted'}
        >
          <div className="container">
            <Link to="/">
              <img src={white_small_badge} alt="" />
            </Link>
          </div>
          <div className="line-deco">
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
          </div>
        </StyledMobileHeader>
      )}
    </AnimatePresence>
  );
};

const StyledMobileHeader = styled(motion.header)`
  ${({ theme }) => css`
    /* min-height: 15rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      height: 100px;
    }

    .container {
      margin-top: 1rem;
      a {
        display: flex;
        align-items: center;
      }
    }

    .line-deco {
      margin-top: 1rem;
      padding: 0 2rem;
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
    @media screen and (min-width: 768px) {
      display: none;
    }
  `}
`;

export default MobileHeader;
