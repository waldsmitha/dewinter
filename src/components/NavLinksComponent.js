import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import background from "../media/background-blurred.png";
import NavLink from "./NavLink";

const NavLinksComponent = ({ navLinks }) => {
  return (
    <div>
      <StyledLinks>
        <ul>
          {navLinks.map((item) => (
            <NavLink key={item.title} item={item} />
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
      display: flex;
      align-items: center;

      .drop-down-icon {
        margin-left: 5px;
        height: 10px;
        width: 10px;
        background: #ababab;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
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
      margin-bottom: 1rem;
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
