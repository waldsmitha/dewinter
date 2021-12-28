import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLinksComponent from "./NavLinksComponent";

//Styling
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const NavBar = ({ navLinks, setNavLinks }) => {
  const location = useLocation();
  const { pathname } = location;
  //   console.log(navLinks);

  const updateNavLinks = () => {
    switch (pathname) {
      case "/":
        setNavLinks([
          "commissions",
          "originals",
          "process",
          "about",
          "contact",
        ]);
        break;
      case "/commissions":
        setNavLinks(["originals", "process", "about", "contact"]);
        break;
      case "/originals":
        setNavLinks(["commissions", "process", "about", "contact"]);
        break;
      case "/process":
        setNavLinks(["commissions", "originals", "about", "contact"]);
        break;
      case "/about":
        setNavLinks(["commissions", "originals", "process", "contact"]);
        break;
      case "/contact":
        setNavLinks(["commissions", "originals", "process", "about"]);
        break;
      default:
        setNavLinks([
          "commissions",
          "originals",
          "process",
          "about",
          "contact",
        ]);
    }
  };

  useEffect(() => {
    updateNavLinks();
  }, [pathname]);

  return (
    <StyledNavBar>
      <div className="container">
        <NavLinksComponent navLinks={navLinks} />
        <div className="line-deco">
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
        </div>
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled(motion.nav)`
  ${({ theme }) => css`
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ul {
      padding: 0 2rem;
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
  `}
`;

export default NavBar;
