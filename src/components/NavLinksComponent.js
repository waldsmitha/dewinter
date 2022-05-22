import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import background from "../media/background-blurred.png";
import NavLink from "./NavLink";

const ProjectsDropdown = () => {
  return (
    <StyledDropdown>
      <Link to="/projects/architecturalelements">
        <li>architectural elements</li>
      </Link>
      <Link to="/projects/furniture">
        <li>furniture</li>
      </Link>
      <Link to="/projects/mirrors">
        <li>mirrors</li>
      </Link>
    </StyledDropdown>
  );
};

const OriginalsDropdown = () => {
  return (
    <StyledDropdown>
      <Link to="/originalpieces/originalfurniture">
        <li>furniture</li>
      </Link>
      <Link to="/originalpieces/originalhomeaccents">
        <li>home accents</li>
      </Link>
      <Link to="/originalpieces/originalmirrors">
        <li>mirrors</li>
      </Link>
      <Link to="/originalpieces/originalsculptures">
        <li>sculptures</li>
      </Link>
    </StyledDropdown>
  );
};

const StyledDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100%;
  position: absolute;
  white-space: nowrap;
  top: 100%;
  left: 0;
  background-color: #131313;
  z-index: 999;
  li {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

const NavLinksComponent = ({ navLinks }) => {
  return (
    <div>
      <StyledLinks>
        <ul>
          {navLinks.map((item) => (
            <NavLink item={item} />
          ))}
        </ul>
      </StyledLinks>
    </div>
  );
};

const StyledLinks = styled(motion.div)`
  ${({ theme }) => css`
    .nav-element-title {
      font-weight: 200;
      text-transform: uppercase;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      max-width: ${theme.spacing.maxWidth};
      a {
        cursor: pointer;
      }
      a:first-child {
        li {
          padding-left: 0;
        }
      }
      a:nth-child(4) {
        li {
          padding-right: 0;
          text-align: right;
        }
      }
    }

    .line {
      height: 0.5rem;
      background: ${theme.color.secondary};
      /* width: 0%; */
      /* transition: 0.2s; */
    }

    /* @media screen and (max-width: 768px) {
      .line {
        display: none;
      }
    } */

    /* a:hover {
      .line {
        width: 50%;
      }
    } */

    .not-home {
      a:nth-child(3) {
        order: 1;
      }
      a:nth-child(4) {
        order: 2;
      }
    }
  `}
`;

export default NavLinksComponent;
