import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import NavLinksComponent from "./NavLinksComponent";

//Media
import wmb from "../media/white_medium_badge.png";

//Styling
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { AnimatePresence } from "framer-motion";
import { revealDown } from "../animations";

const NavBar = ({ navLinks, setNavLinks, pathname }) => {
  // const location = useLocation();
  // const { pathname } = location;
  //   console.log(navLinks);

  // const updateNavLinks = () => {
  //   switch (pathname) {
  //     case "/":
  //       setNavLinks(["commissions", "originals", "about", "contact"]);
  //       break;
  //     case "/commissions":
  //       setNavLinks(["originals", "process", "about", "contact"]);
  //       break;
  //     case "/originals":
  //       setNavLinks(["commissions", "process", "about", "contact"]);
  //       break;
  //     case "/process":
  //       setNavLinks(["commissions", "originals", "about", "contact"]);
  //       break;
  //     case "/about":
  //       setNavLinks(["commissions", "originals", "process", "contact"]);
  //       break;
  //     case "/contact":
  //       setNavLinks(["commissions", "originals", "process", "about"]);
  //       break;
  //     default:
  //       setNavLinks(["commissions", "originals", "process", "about"]);
  //   }
  // };

  // useEffect(() => {
  //   updateNavLinks();
  // }, [pathname]);

  return (
    <AnimatePresence>
      {pathname !== "/" && (
        <StyledNavBar
          variants={revealDown}
          initial="hidden"
          animate={pathname === "/" ? "hidden" : "show"}
          exit="hidden"
        >
          {/* <Link to="/">
            <img src={wmb} className="logo" alt="" />
          </Link> */}
          <div className="container">
            <NavLinksComponent navLinks={navLinks} />
            <div className="line-deco">
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
            </div>
          </div>
        </StyledNavBar>
      )}
    </AnimatePresence>
  );
};

const StyledNavBar = styled(motion.nav)`
  ${({ theme }) => css`
    /* min-height: 20rem; */
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 100;

    ul {
      padding: 0 2rem;
      padding-left: 100px;
    }

    .logo {
      position: absolute;
      top: 1rem;
      left: 1rem;
      height: 100px;
    }

    .line-deco {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      padding: 0 2rem;

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
    @media screen and (max-width: 768px) {
      display: none;
    }

    @media screen and (min-width: 1350px) {
      ul {
        padding: 0 2rem;
      }
    }
  `}
`;

export default NavBar;
